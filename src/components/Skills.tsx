import { Terminal, Code2, Zap, Cpu, Gauge, Lock } from 'lucide-react';

interface SkillCategory {
  label: string;
  icon: React.ReactNode;
  skills: string[];
  description?: string;
}

const skillCategories: SkillCategory[] = [
  {
    label: 'Programming Languages',
    icon: <Code2 className="w-5 h-5" />,
    skills: ['C++17/20', 'C', 'Python', 'SQL'],
    description: 'Core languages with expertise in modern C++',
  },
  {
    label: 'Frameworks & Libraries',
    icon: <Zap className="w-5 h-5" />,
    skills: ['Boost', 'libcurl', 'nlohmann/json', 'chrono', 'STL', 'React.js', 'OpenCV', 'YOLOv8'],
    description: 'High-performance and modern development tools',
  },
  {
    label: 'Developer Tools & Platforms',
    icon: <Gauge className="w-5 h-5" />,
    skills: ['CMake', 'Make', 'Git', 'AWS', 'MySQL', 'Linux', 'Docker'],
    description: 'DevOps, version control, and infrastructure',
  },
  {
    label: 'HFT & Systems Specialization',
    icon: <Cpu className="w-5 h-5" />,
    skills: ['Low-Latency Systems', 'Multi-threading', 'Lock-free Structures', 'Cache Optimization', 'Memory Layout Tuning'],
    description: 'Advanced performance optimization techniques',
  },
  {
    label: 'Domain Expertise',
    icon: <Lock className="w-5 h-5" />,
    skills: ['Algorithmic Trading', 'Market Microstructure', 'Computer Vision', 'Financial Systems', 'Real-time Processing'],
    description: 'Specialized knowledge across multiple domains',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: Description */}
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="block">Technical</span>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
                Stack & Expertise
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Specialized in building ultra-low-latency trading systems with expertise in modern C++, systems programming, and performance optimization. Proficient across full stack development from embedded systems to web applications.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold text-xl">→</span>
                <div>
                  <p className="font-semibold text-foreground">Modern C++ Systems</p>
                  <p className="text-sm text-muted-foreground">C++17/20, performance-critical applications</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 font-bold text-xl">→</span>
                <div>
                  <p className="font-semibold text-foreground">HFT Infrastructure</p>
                  <p className="text-sm text-muted-foreground">Low-latency systems, lock-free structures</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold text-xl">→</span>
                <div>
                  <p className="font-semibold text-foreground">Full-Stack Development</p>
                  <p className="text-sm text-muted-foreground">Backend, DevOps, ML/CV, Web technologies</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Skills Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.label}
                className="group relative overflow-hidden"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <div className="metric-card">
                  {/* Category Header */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-all">
                      {category.icon}
                    </div>
                    <h3 className="text-sm font-bold text-foreground leading-tight">{category.label}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div key={skill} className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
