import { useState, useEffect } from "react";
import { Code, Globe, Brain, Wrench, Database, Layers, Lightbulb, MessageSquare, X } from "lucide-react";

const skillCategories = [
  {
    category: "Programming Languages",
    icon: Code,
    skills: ["Python", "Java", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    category: "Web Development",
    icon: Globe,
    skills: ["Frontend Development", "Backend Development", "REST APIs", "FastAPI", "Responsive Web Design"],
  },
  {
    category: "AI & Machine Learning",
    icon: Brain,
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing", "Explainable AI (XAI)"],
  },
  {
    category: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "Chrome Extensions", "Chart.js", "VS Code", "Linux"],
  },
  {
    category: "Database & Data",
    icon: Database,
    skills: ["MySQL", "Database Design", "Data Processing", "Data Analysis"],
  },
  {
    category: "Software Development",
    icon: Layers,
    skills: ["Object-Oriented Programming", "API Integration", "System Design", "Testing & Debugging"],
  },
  {
    category: "Professional Skills",
    icon: Lightbulb,
    skills: ["Problem Solving", "Analytical Thinking", "Team Collaboration", "Leadership", "Time Management", "Adaptability"],
  },
  {
    category: "Communication",
    icon: MessageSquare,
    skills: ["Technical Documentation", "Presentation Skills", "Public Speaking", "Active Listening"],
  },
];

export default function Skills() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIdx(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="skills" className="relative py-20 border-t border-border bg-muted/30 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(0, 217, 255, 0.1) 25%, rgba(0, 217, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, 0.1) 75%, rgba(0, 217, 255, 0.1) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(0, 217, 255, 0.1) 25%, rgba(0, 217, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, 0.1) 75%, rgba(0, 217, 255, 0.1) 76%, transparent 77%, transparent)
            `,
            backgroundSize: "60px 60px",
          }}
          className="absolute inset-0"
        />
      </div>

      <div className="container relative z-10 space-y-6">
        {/* Orbit Animation Section */}
        <div className="relative w-full min-h-[560px] flex flex-col items-center justify-center py-4" style={{ animation: "slideUp 0.8s ease-out" }}>
          {/* Headings */}
          <div className={`absolute top-2 left-1/2 -translate-x-1/2 transition-opacity duration-500 z-10 pointer-events-none text-center ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
            <h2 className="text-4xl font-bold text-foreground tracking-tight whitespace-nowrap">Skills & Expertise</h2>
            <p className="text-base text-muted-foreground mt-1 max-w-[420px]">
              Tap the core to bring the constellation into orbit.
            </p>
          </div>

          {/* Cosmos */}
          <div className={`cosmos relative w-[min(86vmin,760px)] h-[min(86vmin,760px)] mt-12 ${isOpen ? 'open' : ''} ${activeIdx !== null ? 'paused' : ''}`}>
            <div className="orbit-path absolute inset-0 rounded-full border border-dashed border-border/60 opacity-0 scale-70 transition-all duration-[600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] pointer-events-none"></div>

            <div className="orbit absolute inset-0">
              {skillCategories.map((cat, i) => {
                const angle = (360 / skillCategories.length) * i;
                return (
                  <div key={i} className="node absolute top-1/2 left-1/2 w-0 h-0">
                    <div className="node-arm absolute top-0 left-0" style={{ '--ang': `${angle}deg`, '--radius': 'min(37vmin,310px)' } as React.CSSProperties}>
                      <div className="node-inner">
                        <button
                          className={`planet w-[clamp(110px,17vmin,150px)] h-[clamp(110px,17vmin,150px)] rounded-full flex flex-col items-center justify-center cursor-pointer transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] opacity-0 scale-40 bg-card/40 border border-border/50 backdrop-blur-md hover:bg-card/80 hover:border-accent/80 hover:scale-[1.08] p-3 ${activeIdx === i ? 'active' : ''}`}
                          onClick={() => setActiveIdx(i)}
                          style={{ transitionDelay: `${0.02 + i * 0.06}s` }}
                        >
                          <cat.icon className="w-9 h-9 text-foreground mb-2 stroke-[1.8px]" />
                          <span className="text-[13px] font-semibold leading-[1.2] tracking-[-0.01em] text-center text-foreground px-1">{cat.category}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Core Button */}
            <button
              className="core-btn absolute top-1/2 left-1/2 w-[min(34vmin,210px)] h-[min(34vmin,210px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/60 backdrop-blur-md flex flex-col items-center justify-center text-center p-3 z-10 text-foreground text-[clamp(14px,2.2vmin,19px)] font-bold tracking-tight transition-transform duration-[400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:scale-105"
              onClick={() => {
                setIsOpen(!isOpen);
                if (isOpen) setActiveIdx(null);
              }}
            >
              Skills & Expertise
              <span className="text-[12px] font-medium text-muted-foreground mt-1.5">{isOpen ? 'Tap to close' : 'Tap to reveal'}</span>
            </button>
          </div>
        </div>

        {/* Panel Modal */}
        <div className={`fixed inset-0 bg-background/60 backdrop-blur-sm transition-opacity duration-300 z-50 ${activeIdx !== null ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setActiveIdx(null)}></div>

        <div className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(560px,88vw)] max-h-[74vh] overflow-y-auto bg-card/95 backdrop-blur-xl border border-border/80 rounded-2xl p-7 z-50 transition-all duration-[320ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] shadow-2xl ${activeIdx !== null ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
          {activeIdx !== null && (
            <>
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <div className="text-[11px] text-accent font-bold uppercase tracking-widest mb-1">Category</div>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground">{skillCategories[activeIdx].category}</h2>
                </div>
                <button className="w-8 h-8 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center text-foreground hover:bg-accent/20 hover:text-accent transition-colors shrink-0" onClick={() => setActiveIdx(null)}>
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {skillCategories[activeIdx].skills.map(skill => (
                  <span key={skill} className="px-3.5 py-1.5 rounded-full text-[13px] font-medium bg-background border border-border text-foreground hover:border-accent/50 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Education & Certifications */}
        <div className="mt-12 pt-12 border-t border-border space-y-6">
          <h3 className="text-2xl font-bold text-foreground" style={{ animation: "slideUp 0.8s ease-out 0.2s both" }}>Education & Certifications</h3>

          {/* Education */}
          <div className="space-y-4" style={{ animation: "slideUp 0.8s ease-out 0.3s both" }}>
            <h4 className="text-lg font-semibold text-foreground">Education</h4>
            <div className="p-4 rounded-lg bg-card border border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
              <p className="font-semibold text-foreground">B.Tech in Artificial Intelligence and Data Science</p>
              <p className="text-sm text-muted-foreground">MES College of Engineering, Malappuram, Kerala</p>
              <p className="text-sm text-accent">October 2022 – May 2026</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4" style={{ animation: "slideUp 0.8s ease-out 0.4s both" }}>
            <h4 className="text-lg font-semibold text-foreground">Certifications & Courses</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "1 Million Prompters – Dubai Future Foundation (2026)",
                "Deloitte Data Analytics Job Simulation – Forage",
                "DATACOM Partnering with AI in the Workplace Job Simulation – Forage",
                "Accessing Hadoop Data Using Hive – IBM Cognitive Class",
                "R Programming for Beginners – Simplilearn SkillUp (2024)",
                "Cyber Security and Ethical Hacking Internship - TECHMAGHI",
                "AI/ML Internship – OutriX",
              ].map((cert, idx) => (
                <div
                  key={cert}
                  className="p-4 rounded-lg bg-card border border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-1 active:scale-95"
                  style={{ animation: `slideUp 0.6s ease-out ${0.4 + idx * 0.1}s both` }}
                >
                  <p className="text-sm text-foreground">{cert}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-4" style={{ animation: "slideUp 0.8s ease-out 0.5s both" }}>
            <h4 className="text-lg font-semibold text-foreground">Languages</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { lang: "English", level: "Advanced" },
                { lang: "Malayalam", level: "Advanced" },
                { lang: "Hindi", level: "Beginner" },
              ].map((item, idx) => (
                <div
                  key={item.lang}
                  className="px-4 py-2 rounded-full bg-card border border-border hover:border-accent hover:bg-accent/5 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 active:scale-95"
                  style={{ animation: `slideUp 0.6s ease-out ${0.5 + idx * 0.1}s both` }}
                >
                  <p className="text-sm text-foreground font-medium">{item.lang}</p>
                  <p className="text-xs text-muted-foreground">{item.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
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
        
        @keyframes pulseCore {
          0%, 100% { box-shadow: 0 0 0 0 hsl(var(--accent) / 0.15), 0 20px 60px -20px hsl(var(--accent) / 0.5); }
          50% { box-shadow: 0 0 0 14px transparent, 0 20px 60px -20px hsl(var(--accent) / 0.5); }
        }
        
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes counter-spin { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }

        .scale-70 { transform: scale(0.7); }
        .scale-40 { transform: scale(0.4); }
        
        .cosmos.open .orbit-path { opacity: 1; transform: scale(1); }
        
        .cosmos.open .core-btn { animation: none; }
        .core-btn {
          background: radial-gradient(circle at 32% 28%, rgba(255,255,255,0.05), transparent 60%),
                      linear-gradient(160deg, hsl(var(--accent) / 0.1), transparent);
          animation: pulseCore 3.2s ease-in-out infinite;
        }
        
        .orbit { animation: spin 70s linear infinite; animation-play-state: paused; }
        .cosmos.open .orbit { animation-play-state: running; }
        .cosmos.open.paused .orbit { animation-play-state: paused; }
        
        .node-arm { transform: translate(-50%, -50%) rotate(var(--ang)) translate(var(--radius)) rotate(calc(-1 * var(--ang))); }
        
        .node-inner { animation: counter-spin 70s linear infinite; animation-play-state: paused; }
        .cosmos.open .node-inner { animation-play-state: running; }
        .cosmos.open.paused .node-inner { animation-play-state: paused; }
        
        .cosmos.open .planet { opacity: 1; transform: scale(1); }
        .planet.active {
          background: linear-gradient(160deg, hsl(var(--accent) / 0.2), transparent);
          border-color: hsl(var(--accent));
        }
        
        @media (prefers-reduced-motion: reduce) {
          .orbit, .node-inner, .core-btn { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
