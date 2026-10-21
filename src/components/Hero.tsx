import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Eye, Download } from "lucide-react";

const techStack = [
  { name: "Python", icon: "🐍" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "FastAPI", icon: "🚀" },
  { name: "AI/ML", icon: "🤖" },
  { name: "Computer Vision", icon: "👁️" },
];

export default function Hero() {
  return (
    <section className="relative pt-20 pb-4 md:pt-28 md:pb-4 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-40 pointer-events-none" />

      {/* Content */}
      <div className="container relative z-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Name and intro */}
          <div className="space-y-8" style={{ animation: "slideInLeft 0.8s ease-out" }}>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight" style={{ animation: "slideUp 0.8s ease-out 0.1s both" }}>
                Mishal Muhammed TM
              </h1>
              <p className="text-xl text-muted-foreground" style={{ animation: "slideUp 0.8s ease-out 0.2s both" }}>
                AI & Data Science Graduate
              </p>
            </div>

            <p className="text-base text-muted-foreground max-w-lg leading-relaxed" style={{ animation: "slideUp 0.8s ease-out 0.3s both" }}>
              Artificial Intelligence and Data Science graduate with practical exposure to AI-driven academic and fitness applications. Experienced in applying computer vision, machine learning, and web technologies to solve real-world problems. Interested in developing structured, user-focused AI systems with strong academic foundations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4" style={{ animation: "slideUp 0.8s ease-out 0.4s both" }}>
              <Button
                size="lg"
                variant="accent"
                className="gap-2"
                asChild
              >
                <a href="#contact">
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                asChild
              >
                <a href="/Mishal_Muhammed_Resume.docx" target="_blank" rel="noopener noreferrer">
                  <Eye className="w-5 h-5" />
                  View Resume
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                asChild
              >
                <a href="/Mishal_UAE_CV.docx" download="Mishal_UAE_CV.docx">
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                asChild
              >
                <a href="https://github.com/proteam123" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4" style={{ animation: "slideUp 0.8s ease-out 0.5s both" }}>
              <a
                href="https://linkedin.com/in/mishal-muhammed-a50797353"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-accent/20 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 active:scale-95"
              >
                <Linkedin className="w-5 h-5 text-accent" />
              </a>
              <a
                href="https://github.com/proteam123"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-accent/20 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 active:scale-95"
              >
                <Github className="w-5 h-5 text-accent" />
              </a>
            </div>
          </div>

          {/* Right: Photo and Tech stack queue */}
          <div className="space-y-6">
            {/* Standard Photo */}
            <div className="relative mx-auto w-full" style={{ animation: "slideInRight 0.8s ease-out 0.2s both" }}>
              <img
                src="/mishal photo.png"
                alt="Mishal Muhammed TM"
                className="w-full h-[420px] md:h-[500px] object-cover object-top rounded-2xl shadow-xl ring-1 ring-border/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              />
            </div>

            {/* Tech stack queue */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wider text-center" style={{ animation: "slideInRight 0.8s ease-out 0.2s both" }}>
                Tech Stack
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {techStack.map((tech, idx) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border hover:border-accent hover:bg-accent/5 transition-all duration-300 cursor-default hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 active:scale-95"
                    style={{
                      animation: `slideUp 0.6s ease-out ${0.3 + idx * 0.1}s both`,
                    }}
                  >
                    <span className="text-xl transition-transform duration-300 group-hover:scale-110">
                      {tech.icon}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured stat */}
            <div
              className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-1 active:scale-95 text-center max-w-sm mx-auto"
              style={{ animation: "bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s both" }}
            >
              <div className="text-2xl font-bold text-accent mb-1" style={{ animation: "pulseGlow 2s infinite" }}>
                3+
              </div>
              <p className="text-xs text-muted-foreground">
                AI-powered projects shipped in production
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(20px);
          }
          50% {
            opacity: 1;
          }
          70% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1) translateY(0);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            text-shadow: 0 0 0 0 rgba(0, 217, 255, 0.7);
          }
          50% {
            text-shadow: 0 0 10px rgba(0, 217, 255, 0.4);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
