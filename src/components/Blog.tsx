import { ArrowRight, Briefcase } from "lucide-react";

export default function Blog() {
  return (
    <section id="experience" className="py-20 border-t border-border">
      <div className="container space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-foreground">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            My professional journey in AI development, backend engineering, and system design.
          </p>
        </div>

        {/* Experience */}
        <div className="space-y-6">
          {/* Current Experience */}
          <div className="group p-8 rounded-lg bg-card border border-border hover:border-accent hover:bg-accent/5 transition-all duration-200">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Briefcase className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">Research and Development</h3>
                  <p className="text-sm text-accent font-semibold">Guido Freelance Project Centre, Kerala</p>
                  <p className="text-sm text-muted-foreground">December 2025 – Present</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Worked on identifying, documenting, and resolving software bugs to improve system stability and user experience. 
                  Researched and proposed development tools, frameworks, and automation solutions to streamline workflows.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="text-accent mt-1">•</span>
                    <span>Designed and developed backend services using modern programming practices and database management techniques</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="text-accent mt-1">•</span>
                    <span>Built and integrated RESTful APIs to enable seamless communication between frontend and backend systems</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="text-accent mt-1">•</span>
                    <span>Performed system testing, debugging, and performance optimization to ensure reliable application functionality</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="text-accent mt-1">•</span>
                    <span>Collaborated with cross-functional teams to deliver scalable, efficient, and maintainable software solutions</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {["Python", "FastAPI", "Backend", "REST APIs", "Database", "Testing"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Ediglobe Experience */}
          <div className="group p-8 rounded-lg bg-card border border-border hover:border-accent hover:bg-accent/5 transition-all duration-200">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Briefcase className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">AI &amp; ML Internship</h3>
                  <p className="text-sm text-accent font-semibold">Ediglobe, Bangalore</p>
                  <p className="text-sm text-muted-foreground">July 2026 – Present</p>
                </div>
              </div>

              <div className="space-y-2">
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="text-accent mt-1">•</span>
                    <span>Engineered data preprocessing and feature engineering pipelines using Python, NumPy, and Pandas</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="text-accent mt-1">•</span>
                    <span>Performed EDA, statistical analysis, and data visualization to extract meaningful insights</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="text-accent mt-1">•</span>
                    <span>Built and evaluated Machine Learning models using regression, decision trees, and random forests</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="text-accent mt-1">•</span>
                    <span>Implemented NLP preprocessing and evaluated models using standard classification metrics</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {["Python", "NumPy", "Pandas", "Machine Learning", "NLP", "EDA", "Data Visualization"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mt-12 pt-12 border-t border-border space-y-6">
          <h3 className="text-2xl font-bold text-foreground">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="text-3xl font-bold text-accent mb-2">4+</div>
              <p className="text-sm text-foreground font-semibold">AI Projects Shipped</p>
              <p className="text-xs text-muted-foreground mt-2">Production-ready applications in AI and ML</p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="text-3xl font-bold text-accent mb-2">4</div>
              <p className="text-sm text-foreground font-semibold">Certifications</p>
              <p className="text-xs text-muted-foreground mt-2">Specialized training in AI, ML, and Security</p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="text-3xl font-bold text-accent mb-2">8+</div>
              <p className="text-sm text-foreground font-semibold">Tech Stack</p>
              <p className="text-xs text-muted-foreground mt-2">Programming languages and frameworks</p>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mt-12 pt-12 border-t border-border space-y-6">
          <h3 className="text-2xl font-bold text-foreground">Professional Summary</h3>
          <div className="p-6 rounded-lg bg-accent/5 border border-accent/20">
            <p className="text-foreground leading-relaxed">
              Artificial Intelligence and Data Science undergraduate with practical exposure to AI-driven academic and fitness applications. 
              Experienced in applying computer vision, machine learning concepts, and web technologies to solve real-world problems. 
              Interested in developing structured, user-focused AI systems with strong academic foundations. 
              Available for full-time roles, freelance projects, and collaborations. Open to relocation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
