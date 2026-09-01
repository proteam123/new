import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Link } from "wouter";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-md bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <span className="text-accent-foreground font-bold text-lg">&gt;</span>
          </div>
          <span className="font-bold text-foreground hidden sm:inline">Mishal Muhammed TM</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Skills
          </a>
          <a href="#blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Blog
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
          <Button
            asChild
            size="sm"
            variant="outline"
            className="gap-2"
          >
            <a href="https://github.com/proteam123" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
