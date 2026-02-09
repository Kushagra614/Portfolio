import { Mail, Phone, Download, ArrowRight, Briefcase } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's Build <span className="text-primary glow-text">Trading Systems</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Open to opportunities in HFT, quantitative trading, and low-latency systems engineering
          </p>
        </div>

        {/* Contact Card */}
        <div className="rounded-lg border border-border/50 card-gradient p-8 sm:p-12">
          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <a
              href="mailto:kushagravardhan619@gmail.com"
              className="group flex items-center gap-4 p-4 rounded border border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-box"
            >
              <div className="p-3 rounded bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                  kushagravardhan619@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+918858955610"
              className="group flex items-center gap-4 p-4 rounded border border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-box"
            >
              <div className="p-3 rounded bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                  +91-8858955610
                </p>
              </div>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="btn-primary flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <a
              href="#projects"
              className="btn-outline flex items-center justify-center gap-2"
            >
              <Briefcase className="w-4 h-4" />
              SRHFT Experience
            </a>
            <a
              href="mailto:kushagravardhan619@gmail.com"
              className="btn-outline flex items-center justify-center gap-2 group"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-xs text-muted-foreground">
            Built with <span className="text-primary">precision</span> • © 2025 Kushagra Vardhan
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
