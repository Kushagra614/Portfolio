import { useState, useEffect } from 'react';
import { Github, Linkedin, ChevronDown } from 'lucide-react';
import TypingText from './TypingText';

const Hero = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showWhoami, setShowWhoami] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowSubtitle(true), 1500),
      setTimeout(() => setShowWhoami(true), 2500),
      setTimeout(() => setShowLinks(true), 3500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const scrollToSection = () => {
    const section = document.getElementById('metrics');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(120 100% 55% / 0.1) 0%, transparent 70%)'
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
          <span className="text-foreground">KUSHAGRA</span>{' '}
          <span className="text-primary glow-text">VARDHAN</span>
        </h1>

        {/* Subtitle */}
        <div className="h-8 mb-8">
          {showSubtitle && (
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground tracking-widest uppercase animate-fade-in">
              Low-Latency C++ | HFT Infrastructure | Systems Engineering
            </p>
          )}
        </div>

        {/* Education */}
        <div className="h-6 mb-10">
          {showSubtitle && (
            <p className="text-sm text-secondary-foreground animate-fade-in delay-200">
              VIT Bhopal University '26 | CGPA: <span className="text-primary">8.48</span>
            </p>
          )}
        </div>

        {/* Terminal whoami */}
        <div className="max-w-2xl mx-auto mb-12 text-left">
          {showWhoami && (
            <div className="p-4 sm:p-6 rounded-lg border border-border/50 card-gradient animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-warning/80" />
                <div className="w-3 h-3 rounded-full bg-primary/80" />
                <span className="ml-2 text-xs text-muted-foreground">terminal</span>
              </div>
              <div className="font-mono text-sm sm:text-base">
                <span className="text-primary">$</span>{' '}
                <span className="text-muted-foreground">whoami</span>
                <div className="mt-3 text-foreground">
                  <TypingText 
                    text='→ "Software Developer Intern @ SRHFT | 2M+ events/sec systems"'
                    delay={500}
                    speed={30}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Social Links */}
        {showLinks && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in">
            <a
              href="https://github.com/kushagra614"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded border border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-box"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                github.com/kushagra614
              </span>
            </a>
            <a
              href="https://linkedin.com/in/kushagra-vardhan"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded border border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-box"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                linkedin.com/in/kushagra-vardhan
              </span>
            </a>
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToSection}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float cursor-pointer group"
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
      </button>
    </section>
  );
};

export default Hero;
