import { Terminal } from 'lucide-react';

interface SkillCategory {
  label: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    label: 'Languages',
    skills: ['C', 'C++', 'Python', 'SQL'],
  },
  {
    label: 'Libraries',
    skills: ['Boost', 'libcurl', 'nlohmann/json', 'chrono', 'STL'],
  },
  {
    label: 'Tools',
    skills: ['CMake', 'Make', 'Git', 'AWS', 'MySQL', 'Linux'],
  },
  {
    label: 'HFT Core',
    skills: ['Low-Latency Systems', 'Multithreading', 'Lock-free Structures', 'Memory Optimization'],
  },
  {
    label: 'Domains',
    skills: ['Algorithmic Trading', 'Market Microstructure', 'Computer Vision', 'Systems Engineering'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-xs text-primary uppercase tracking-wider">Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Core <span className="text-primary glow-text">Skills</span>
          </h2>
        </div>

        {/* Terminal-style Skills Display */}
        <div className="rounded-lg border border-border/50 card-gradient overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-background/50">
            <div className="w-3 h-3 rounded-full bg-destructive/80" />
            <div className="w-3 h-3 rounded-full bg-warning/80" />
            <div className="w-3 h-3 rounded-full bg-primary/80" />
            <span className="ml-2 text-xs text-muted-foreground">skills.sh</span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm space-y-4">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.label}
                className="animate-fade-in-left"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-primary shrink-0">$</span>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="text-muted-foreground">{category.label}:</span>
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skill}>
                        <span className="text-foreground hover:text-primary transition-colors cursor-default">
                          {skill}
                        </span>
                        {skillIndex < category.skills.length - 1 && (
                          <span className="text-muted-foreground"> / </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Blinking cursor */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-primary">$</span>
              <span className="cursor-blink text-primary">▋</span>
            </div>
          </div>
        </div>

        {/* Alternative Tags View */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {skillCategories.flatMap(cat => cat.skills).map((skill, index) => (
            <div
              key={skill}
              className="skill-tag text-center animate-fade-in"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
