import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Mentora-AI",
    subtitle: "AI Mentor and Tutor System",
    description:
      "An AI-powered academic mentor platform designed to support students, teachers, and parents in the learning process. Features automated attendance tracking, performance monitoring, and NLP-based personalized learning guidance to enhance educational effectiveness and accessibility.",
    image: "/mentora-ai.png",
    tags: ["Python", "NLP", "FastAPI", "React", "AI"],
    demoUrl: "/mentora demo.mp4",
    audioUrl: "/mentora audio.mp4",
    repoUrl: "https://github.com/proteam123/mentor",
    period: "Nov 2025 – May 2026",
  },
  {
    id: 2,
    title: "AI Pose Estimation and Curl Tracker",
    subtitle: "Fitness Monitoring Application",
    description:
      "An AI-based fitness monitoring application focused on real-time posture and exercise tracking. Uses pose estimation and computer vision techniques to analyze body movements, count exercise repetitions accurately, and provide visual feedback to support proper exercise form.",
    image: "/ai pose estimation.png",
    tags: ["Computer Vision", "Python", "Pose Estimation", "Real-time Processing"],
    demoUrl: "/ai pose.mp4",
    audioUrl: undefined,
    repoUrl: "https://github.com/proteam123/ai-pose-",
    period: "Jan 2025 - Mar 2025",
  },
  {
    id: 3,
    title: "Explainable Clickbait Detection System",
    subtitle: "AI-Powered Fake News Analysis Platform",
    description:
      "An explainable AI application that detects clickbait headlines using NLP and Transformer models while providing word-level explanations through LIME. Features a FastAPI backend, interactive web dashboard with Chart.js visualizations, and a Chrome extension for real-time clickbait detection across websites.",
    image: "/clickbait-detection.png",
    tags: ["Python", "DistilBERT", "FastAPI", "PyTorch", "LIME", "Chart.js", "Chrome Extension"],
    demoUrl: "/click bait detection.mp4",
    audioUrl: undefined,
    repoUrl: "#",
    period: "Jan 2026 – May 2026",
  },
  {
    id: 4,
    title: "RAG-Based Document Q&A Application",
    subtitle: "AI-Powered RAG System",
    description:
      "Built a full-stack Retrieval-Augmented Generation system that lets users upload PDF, DOCX, and TXT documents and ask natural-language questions against them. The system retrieves the most relevant content using vector similarity search and generates accurate, context-grounded answers with source citations via Google Gemini 2.5 Flash.",
    image: "/rag image.png",
    tags: ["Python", "FastAPI", "React", "TypeScript", "Gemini AI", "ChromaDB", "Sentence Transformers", "RAG", "PyMuPDF", "Tailwind CSS"],
    demoUrl: "/rag image.png",
    audioUrl: undefined,
    repoUrl: "https://github.com/proteam123/rag-app",
    period: "Jun 2026 - Jul 2026",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative pt-4 pb-20 border-t border-border overflow-hidden">
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

      <div className="container relative z-10 space-y-12">
        {/* Section Header */}
        <div className="space-y-4" style={{ animation: "slideUp 0.8s ease-out" }}>
          <h2 className="text-4xl font-bold text-foreground">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of AI-driven applications and systems I've built, showcasing expertise in machine learning,
            computer vision, and full-stack development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group rounded-lg overflow-hidden bg-card border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-2 active:scale-95"
              style={{
                animation: `slideUp 0.6s ease-out ${0.1 + index * 0.15}s both`,
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1 flex-1">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                      <p className="text-sm text-accent">{project.subtitle}</p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                      {project.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent font-medium hover:bg-accent/20 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <Button
                    size="sm"
                    className="flex-1 min-w-[120px] gap-2 bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 active:scale-95"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      {project.audioUrl ? "Demo Video" : "Live Demo"}
                    </a>
                  </Button>

                  {project.audioUrl && (
                    <Button
                      size="sm"
                      className="flex-1 min-w-[120px] gap-2 bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 active:scale-95"
                      asChild
                    >
                      <a href={project.audioUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Demo Audio
                      </a>
                    </Button>
                  )}

                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 min-w-[120px] gap-2 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/20 active:scale-95"
                    asChild
                  >
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Repository
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
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
      `}</style>
    </section>
  );
}
