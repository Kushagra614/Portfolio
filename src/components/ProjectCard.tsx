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
    <div className="project-card group h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
        {date && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            {date}
          </div>
        )}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 text-xs rounded bg-primary/10 text-primary border border-primary/20"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Features */}
      <ul className="space-y-2 mb-4 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-primary mt-1">›</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Highlight */}
      {highlight && (
        <div className="mb-4 px-3 py-2 rounded bg-primary/5 border-l-2 border-primary">
          <span className="text-sm font-medium text-primary">{highlight}</span>
        </div>
      )}

      {/* Links */}
      {!isExperience && (github || demo) && (
        <div className="flex gap-3 pt-4 border-t border-border/50">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
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
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
