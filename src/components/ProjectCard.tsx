import { ExternalLink, Github, Calendar } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  subtitle?: string;
  tech: string[];
  features: string[];
  highlight?: string;
  github?: string;
  demo?: string;
  date?: string;
  isExperience?: boolean;
}

const ProjectCard = ({
  title,
  subtitle,
  tech,
  features,
  highlight,
  github,
  demo,
  date,
  isExperience = false,
}: ProjectCardProps) => {
  return (
    <div className="project-card group h-full flex flex-col relative overflow-hidden">
      {/* Animated background glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1">
              {title}
            </h3>
            {subtitle && (
              <p className="text-sm text-muted-foreground mt-1 group-hover:text-secondary-foreground transition-colors">{subtitle}</p>
            )}
          </div>
          {date && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors whitespace-nowrap">
              <Calendar className="w-3 h-3 animate-rotate-slow" />
              {date}
            </div>
          )}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, idx) => (
            <span
              key={t}
              className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 
                hover:border-primary/50 hover:bg-primary/15 transition-all duration-200 group-hover:animate-shimmer"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Features */}
        <ul className="space-y-2 mb-4 flex-grow">
          {features.map((feature, index) => (
            <li 
              key={index} 
              className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-all duration-300 transform group-hover:translate-x-1"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span className="text-primary mt-1 group-hover:animate-pulse">›</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Highlight */}
        {highlight && (
          <div className="mb-4 px-3 py-2 rounded bg-primary/5 border-l-2 border-primary group-hover:bg-primary/10 group-hover:border-primary/80 transition-all duration-300 group-hover:animate-glow-pulse-strong">
            <span className="text-sm font-medium text-primary">{highlight}</span>
          </div>
        )}

        {/* Links */}
        {!isExperience && (github || demo) && (
          <div className="flex gap-3 pt-4 border-t border-border/50 group-hover:border-primary/30 transition-colors">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
