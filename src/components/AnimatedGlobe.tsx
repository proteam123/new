import { useEffect, useRef, useState } from "react";

type Point3D = {
  x: number;
  y: number;
  z: number;
};

type GeoJsonPolygon = number[][][];
type GeoJsonMultiPolygon = number[][][][];

type CountryFeature = {
  geometry: {
    type: "Polygon" | "MultiPolygon";
    coordinates: GeoJsonPolygon | GeoJsonMultiPolygon;
  };
};

type CountryCollection = {
  features: CountryFeature[];
};

const STAR_COUNT = 180;

function rotatePoint(point: Point3D, rotationX: number, rotationY: number): Point3D {
  const cosY = Math.cos(rotationY);
  const sinY = Math.sin(rotationY);
  const x1 = point.x * cosY - point.z * sinY;
  const z1 = point.x * sinY + point.z * cosY;

  const cosX = Math.cos(rotationX);
  const sinX = Math.sin(rotationX);
  const y1 = point.y * cosX - z1 * sinX;
  const z2 = point.y * sinX + z1 * cosX;

  return { x: x1, y: y1, z: z2 };
}

export default function AnimatedGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handlePreference = () => setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handlePreference);
    return () => mediaQuery.removeEventListener("change", handlePreference);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let rotationX = -0.18;
    let rotationY = 0.4;
    let velocityX = 0;
    let velocityY = 0;
    let zoom = 1;
    let dragging = false;
    let previousX = 0;
    let previousY = 0;
    let countryData: CountryCollection | null = null;
    let cancelled = false;

    fetch("/world-countries.geojson")
      .then((response) => {
        if (!response.ok) throw new Error("Could not load country boundaries");
        return response.json() as Promise<CountryCollection>;
      })
      .then((data) => {
        if (!cancelled) countryData = data;
      })
      .catch(() => {
        countryData = null;
      });

    const stars = Array.from({ length: STAR_COUNT }, (_, index) => ({
      x: ((index * 47) % 101) / 101,
      y: ((index * 73) % 97) / 97,
      size: 0.35 + ((index * 19) % 10) / 12,
      opacity: 0.16 + ((index * 29) % 50) / 100,
      phase: index * 0.63,
    }));

    const globePoints: Point3D[] = [];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < 820; i += 1) {
      const y = 1 - (i / (820 - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      globePoints.push({
        x: Math.cos(theta) * radius,
        y,
        z: Math.sin(theta) * radius,
      });
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const handlePointerDown = (event: PointerEvent) => {
      dragging = true;
      previousX = event.clientX;
      previousY = event.clientY;
      velocityX = 0;
      velocityY = 0;
      canvas.setPointerCapture(event.pointerId);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      const deltaX = event.clientX - previousX;
      const deltaY = event.clientY - previousY;
      velocityY = deltaX * 0.004;
      velocityX = deltaY * 0.004;
      rotationY += velocityY;
      rotationX = Math.max(-1.2, Math.min(1.2, rotationX + velocityX));
      previousX = event.clientX;
      previousY = event.clientY;
    };

    const handlePointerUp = (event: PointerEvent) => {
      dragging = false;
      if (canvas.hasPointerCapture(event.pointerId)) {
        canvas.releasePointerCapture(event.pointerId);
      }
    };

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      zoom = Math.max(0.82, Math.min(1.18, zoom - event.deltaY * 0.0007));
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointercancel", handlePointerUp);
    canvas.addEventListener("wheel", handleWheel, { passive: false });
    resize();

    const projectCoordinate = (longitude: number, latitude: number) => {
      const lat = latitude * Math.PI / 180;
      const lon = longitude * Math.PI / 180;
      const point = rotatePoint(
        {
          x: Math.cos(lat) * Math.cos(lon),
          y: Math.sin(lat),
          z: Math.cos(lat) * Math.sin(lon),
        },
        rotationX,
        rotationY,
      );

      return {
        x: width / 2 + point.x * (Math.min(width, height) * 0.34 * zoom),
        y: height / 2 - point.y * (Math.min(width, height) * 0.34 * zoom),
        z: point.z,
      };
    };

    const drawRing = (ring: number[][], fill: boolean) => {
      context.beginPath();
      let started = false;
      let previousLongitude = 0;

      ring.forEach((coordinate, index) => {
        const [longitude, latitude] = coordinate;
        const projected = projectCoordinate(longitude, latitude);

        if (
          projected.z < -0.03 ||
          (index > 0 && Math.abs(longitude - previousLongitude) > 180)
        ) {
          started = false;
          previousLongitude = longitude;
          return;
        }

        if (!started) {
          context.moveTo(projected.x, projected.y);
          started = true;
        } else {
          context.lineTo(projected.x, projected.y);
        }
        previousLongitude = longitude;
      });

      if (fill) {
        context.closePath();
        context.fillStyle = "rgba(253, 253, 255, 0.72)";
        context.fill();
      } else {
        context.strokeStyle = "rgba(0, 0, 0, 0.92)";
        context.lineWidth = 0.72;
        context.stroke();
      }
    };

    const drawCountries = () => {
      if (!countryData) return;

      for (const feature of countryData.features) {
        const polygons =
          feature.geometry.type === "Polygon"
            ? [feature.geometry.coordinates as GeoJsonPolygon]
            : (feature.geometry.coordinates as GeoJsonMultiPolygon);

        for (const polygon of polygons) {
          if (polygon[0]) drawRing(polygon[0], true);
          for (let index = 1; index < polygon.length; index += 1) {
            drawRing(polygon[index], false);
          }
        }
      }

      for (const feature of countryData.features) {
        const polygons =
          feature.geometry.type === "Polygon"
            ? [feature.geometry.coordinates as GeoJsonPolygon]
            : (feature.geometry.coordinates as GeoJsonMultiPolygon);

        for (const polygon of polygons) {
          if (polygon[0]) drawRing(polygon[0], false);
        }
      }
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.34 * zoom;

      const backgroundGradient = context.createRadialGradient(
        centerX,
        centerY,
        radius * 0.15,
        centerX,
        centerY,
        radius * 1.55,
      );
      backgroundGradient.addColorStop(0, "rgba(34, 211, 238, 0.12)");
      backgroundGradient.addColorStop(0.48, "rgba(34, 211, 238, 0.035)");
      backgroundGradient.addColorStop(1, "rgba(34, 211, 238, 0)");
      context.fillStyle = backgroundGradient;
      context.beginPath();
      context.arc(centerX, centerY, radius * 1.55, 0, Math.PI * 2);
      context.fill();

      for (const star of stars) {
        const twinkle = reducedMotion ? 1 : 0.72 + Math.sin(time * 0.0015 + star.phase) * 0.28;
        context.fillStyle = `rgba(148, 226, 255, ${star.opacity * twinkle})`;
        context.beginPath();
        context.arc(star.x * width, star.y * height, star.size, 0, Math.PI * 2);
        context.fill();
      }

      if (!reducedMotion) {
        if (!dragging) {
          velocityY *= 0.94;
          velocityX *= 0.94;
        }
        if (!dragging && Math.abs(velocityY) < 0.001) {
          rotationY += 0.0018;
        }
        rotationY += velocityY;
        rotationX = Math.max(-1.2, Math.min(1.2, rotationX + velocityX));
      }

      context.save();
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, Math.PI * 2);
      context.clip();

      const globeGlow = context.createRadialGradient(
        centerX - radius * 0.32,
        centerY - radius * 0.38,
        radius * 0.05,
        centerX,
        centerY,
        radius,
      );
      globeGlow.addColorStop(0, "#07111f");
      globeGlow.addColorStop(0.52, "#030712");
      globeGlow.addColorStop(0.82, "#02040b");
      globeGlow.addColorStop(1, "#07152b");
      context.fillStyle = globeGlow;
      context.fillRect(centerX - radius, centerY - radius, radius * 2, radius * 2);

      const innerBlueGlow = context.createRadialGradient(
        centerX - radius * 0.38,
        centerY - radius * 0.4,
        radius * 0.02,
        centerX - radius * 0.18,
        centerY - radius * 0.2,
        radius * 0.9,
      );
      innerBlueGlow.addColorStop(0, "rgba(236, 240, 243, 0.96)");
      innerBlueGlow.addColorStop(0.5, "rgba(249, 253, 255, 0.93)");
      innerBlueGlow.addColorStop(1, "rgb(168, 209, 224)");
      context.fillStyle = innerBlueGlow;
      context.fillRect(centerX - radius, centerY - radius, radius * 2, radius * 2);

      for (let latitude = -60; latitude <= 60; latitude += 30) {
        context.beginPath();
        let started = false;
        for (let longitude = -180; longitude <= 180; longitude += 4) {
          const lat = latitude * Math.PI / 180;
          const lon = longitude * Math.PI / 180;
          const point = rotatePoint(
            { x: Math.cos(lat) * Math.cos(lon), y: Math.sin(lat), z: Math.cos(lat) * Math.sin(lon) },
            rotationX,
            rotationY,
          );
          if (point.z < -0.02) continue;
          const x = centerX + point.x * radius;
          const y = centerY - point.y * radius;
          if (!started) {
            context.moveTo(x, y);
            started = true;
          } else {
            context.lineTo(x, y);
          }
        }
        context.strokeStyle = "rgba(56, 189, 248, 0.12)";
        context.lineWidth = 0.7;
        context.stroke();
      }

      for (let longitude = -150; longitude <= 180; longitude += 30) {
        context.beginPath();
        let started = false;
        for (let latitude = -90; latitude <= 90; latitude += 4) {
          const lat = latitude * Math.PI / 180;
          const lon = longitude * Math.PI / 180;
          const point = rotatePoint(
            { x: Math.cos(lat) * Math.cos(lon), y: Math.sin(lat), z: Math.cos(lat) * Math.sin(lon) },
            rotationX,
            rotationY,
          );
          if (point.z < -0.02) continue;
          const x = centerX + point.x * radius;
          const y = centerY - point.y * radius;
          if (!started) {
            context.moveTo(x, y);
            started = true;
          } else {
            context.lineTo(x, y);
          }
        }
        context.strokeStyle = "rgba(56, 189, 248, 0.12)";
        context.lineWidth = 0.7;
        context.stroke();
      }

      drawCountries();

      for (const point of globePoints) {
        const rotated = rotatePoint(point, rotationX, rotationY);
        if (rotated.z < -0.08) continue;

        const depth = (rotated.z + 1) / 2;
        const x = centerX + rotated.x * radius;
        const y = centerY - rotated.y * radius;
        context.fillStyle = `rgba(56, 189, 248, ${0.12 + depth * 0.38})`;
        context.beginPath();
        context.arc(x, y, 0.45 + depth * 0.7, 0, Math.PI * 2);
        context.fill();
      }

      context.restore();

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, Math.PI * 2);
      context.save();
      context.shadowColor = "rgba(37, 99, 235, 0.95)";
      context.shadowBlur = 26;
      context.strokeStyle = "rgba(103, 232, 249, 0.72)";
      context.lineWidth = 1.2;
      context.stroke();
      context.restore();

      context.beginPath();
      context.arc(centerX, centerY, radius + 11, 0.2, Math.PI * 1.72);
      context.strokeStyle = "rgba(34, 211, 238, 0.22)";
      context.lineWidth = 1;
      context.stroke();

      context.beginPath();
      context.ellipse(centerX, centerY, radius * 1.32, radius * 0.34, -0.32, 0, Math.PI * 2);
      context.strokeStyle = "rgba(103, 232, 249, 0.18)";
      context.setLineDash([4, 7]);
      context.lineWidth = 1;
      context.stroke();
      context.setLineDash([]);
      animationFrame = window.requestAnimationFrame(draw);
    };

    animationFrame = window.requestAnimationFrame(draw);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(animationFrame);
      observer.disconnect();
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointercancel", handlePointerUp);
      canvas.removeEventListener("wheel", handleWheel);
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full cursor-grab active:cursor-grabbing"
      aria-label="Interactive animated globe"
    />
  );
}
