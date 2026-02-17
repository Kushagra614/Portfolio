import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's <span className="text-primary glow-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Reach out for opportunities in HFT, quantitative trading, and low-latency systems
          </p>
        </div>

        {/* Contact Links */}
        <div className="rounded-lg border border-border/50 card-gradient p-8 sm:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a
              href="https://github.com/Kushagra614"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-6 rounded border border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-box"
            >
              <Github className="w-6 h-6 text-primary group-hover:text-cyan-400 transition-colors" />
              <span className="text-sm text-foreground group-hover:text-primary transition-colors text-center">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/kushagra-vardhan"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-6 rounded border border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-box"
            >
              <Linkedin className="w-6 h-6 text-primary group-hover:text-blue-400 transition-colors" />
              <span className="text-sm text-foreground group-hover:text-primary transition-colors text-center">LinkedIn</span>
            </a>

            <a
              href="mailto:kushagravardhan619@gmail.com"
              className="group flex flex-col items-center gap-3 p-6 rounded border border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-box"
            >
              <Mail className="w-6 h-6 text-primary group-hover:text-red-400 transition-colors" />
              <div className="text-center">
                <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">Email</span>
                <span className="text-sm text-foreground group-hover:text-primary transition-colors">kushagravardhan619@gmail.com</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
