import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Download,
  Eye,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  User,
  Tag,
  MessageSquare,
  FileText
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const resumePath = "/Mishal_Muhammed_Resume_ATS2.docx";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mishalmuhammed77104.8@gmail.com");
    setCopiedEmail(true);
    toast.success("Email address copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      toast.error("Please fill in all required fields (Name, Email, Message)");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    const mailSubject = subject
      ? `[Portfolio Contact] ${subject}`
      : `Portfolio Inquiry from ${name}`;

    const mailBody = `Hi Mishal,\n\n${message}\n\nBest regards,\n${name}\nEmail: ${email}`;

    const mailtoUrl = `mailto:mishalmuhammed77104.8@gmail.com?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(mailBody)}`;

    // Trigger user's email client
    window.location.href = mailtoUrl;

    toast.success("Opening email client to send your message!");
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 border-t border-border/60 bg-muted/20">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/20 blur-3xl"
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
        />
      </div>

      <div className="container relative z-10 space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" /> Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Have a project in mind, an opportunity, or want to collaborate? Reach out via the form below or send me a direct email.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Form Card */}
          <div className="lg:col-span-7 bg-card/90 backdrop-blur-md border border-border/80 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Send className="w-5 h-5 text-accent" /> Send Me a Message
              </h3>
              <p className="text-xs text-muted-foreground">
                Submitting will pre-fill your default email application for instant sending.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-accent" /> Your Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent" /> Your Email Address <span className="text-destructive">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Tag className="w-4 h-4 text-accent" /> Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="e.g. AI Project Collaboration / Job Opportunity"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-accent" /> Message <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, timeline, or inquiry..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                variant="accent"
                disabled={isSubmitting}
                className="w-full gap-2 text-base font-semibold shadow-lg hover:shadow-accent/30 transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? "Opening Mail App..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info & Resume Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Methods */}
            <div className="bg-card/90 backdrop-blur-md border border-border/80 rounded-2xl p-6 shadow-xl space-y-5">
              <h3 className="text-xl font-bold text-foreground">Contact Information</h3>
              
              <div className="space-y-3">
                {/* Email Item */}
                <div className="p-4 rounded-xl bg-background border border-border/80 hover:border-accent/50 transition-all duration-200 group">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</p>
                        <a
                          href="mailto:mishalmuhammed77104.8@gmail.com"
                          className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors break-all"
                        >
                          mishalmuhammed77104.8@gmail.com
                        </a>
                      </div>
                    </div>

                    <button
                      onClick={handleCopyEmail}
                      title="Copy email to clipboard"
                      className="p-2 rounded-lg bg-card border border-border hover:border-accent hover:text-accent transition-colors shrink-0 text-muted-foreground"
                    >
                      {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Phone Item */}
                <a
                  href="tel:+919072275932"
                  className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border/80 hover:border-accent/50 hover:bg-accent/5 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Phone</p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                      +91 90722 75932
                    </p>
                  </div>
                </a>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border/80">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Location</p>
                    <p className="text-sm font-semibold text-foreground">Kerala, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Section with BOTH View & Download buttons */}
            <div className="bg-card/90 backdrop-blur-md border border-border/80 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent" />
                  <h3 className="text-xl font-bold text-foreground">Resume</h3>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent">
                  Mishal_Muhammed_Resume_ATS2.docx
                </span>
              </div>
              
              <p className="text-xs text-muted-foreground leading-relaxed">
                View my updated resume online or download a copy for offline reference.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* View Resume Button */}
                <Button
                  asChild
                  variant="outline"
                  size="default"
                  className="w-full gap-2 border-accent/40 hover:border-accent text-foreground hover:bg-accent/10"
                >
                  <a href={resumePath} target="_blank" rel="noopener noreferrer">
                    <Eye className="w-4 h-4 text-accent" />
                    View Resume
                  </a>
                </Button>

                {/* Download Resume Button */}
                <Button
                  asChild
                  variant="accent"
                  size="default"
                  className="w-full gap-2"
                >
                  <a href={resumePath} download="Mishal_Muhammed_Resume_ATS2.docx">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>

            {/* Social Media & Availability */}
            <div className="bg-card/90 backdrop-blur-md border border-border/80 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Social Links</h3>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/proteam123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-background border border-border/80 hover:border-accent hover:bg-accent/10 transition-all duration-200 group"
                    title="GitHub Profile"
                  >
                    <Github className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://linkedin.com/in/mishal-muhammed-a50797353"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-background border border-border/80 hover:border-accent hover:bg-accent/10 transition-all duration-200 group"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-accent/10 border border-accent/20 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse mt-1 shrink-0" />
                <p className="text-xs text-foreground leading-relaxed">
                  <span className="font-semibold text-accent">Open to opportunities</span> – Available for full-time roles, freelance projects, and collaborations. Relocation: Yes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-10 border-t border-border/60">
        <div className="container py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2026 Mishal Muhammed TM. All rights reserved.</p>
            <div className="flex gap-6 text-xs">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
