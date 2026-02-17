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
    label: 'HFT & Domain Expertise',
    icon: <Cpu className="w-5 h-5" />,
    skills: ['Low-Latency Systems', 'Multi-threading', 'Lock-free Structures', 'Cache Optimization', 'Memory Layout Tuning', 'Algorithmic Trading', 'Market Microstructure', 'Computer Vision', 'Financial Systems', 'Real-time Processing'],
    description: 'Advanced performance optimization and specialized domain knowledge',
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
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <span className="text-cyan-400 font-bold text-2xl">→</span>
                <div>
                  <p className="font-semibold text-foreground text-lg">Modern C++ Systems</p>
                  <p className="text-base text-muted-foreground">C++17/20, real-time systems, performance optimization</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-blue-400 font-bold text-2xl">→</span>
                <div>
                  <p className="font-semibold text-foreground text-lg">HFT Infrastructure</p>
                  <p className="text-base text-muted-foreground">Low-latency systems, lock-free structures, multi-threading</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-cyan-400 font-bold text-2xl">→</span>
                <div>
                  <p className="font-semibold text-foreground text-lg">ML & Computer Vision</p>
                  <p className="text-base text-muted-foreground">Real-time processing, image analysis, AI/ML systems</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Skills Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:col-span-1 auto-rows-max">
            {skillCategories.map((category, categoryIndex) => {
              // Skip the last card in the main grid
              if (categoryIndex === 3) return null;
              
              return (
                <div
                  key={category.label}
                  className="group relative overflow-hidden transition-all duration-300"
                  style={{ animationDelay: `${categoryIndex * 100}ms` }}
                >
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative flex flex-col p-5 rounded-xl border border-cyan-500/20 group-hover:border-cyan-500/50 bg-background/40 backdrop-blur-sm transition-all duration-300 h-full">
                    {/* Category Header */}
                    <div className="flex items-start gap-2.5 mb-4">
                      <div className="p-2.5 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 group-hover:text-cyan-300 transition-all flex-shrink-0">
                        {category.icon}
                      </div>
                      <h3 className="text-sm font-bold text-foreground leading-snug flex-1">{category.label}</h3>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-2 flex-1">
                      {category.skills.map((skill, idx) => (
                        <div key={skill} className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-cyan-300 transition-colors" style={{ transitionDelay: `${idx * 30}ms` }}>
                          <span className="w-1 h-1 rounded-full bg-cyan-400/60 group-hover:bg-cyan-300 flex-shrink-0 transition-all" />
                          <span className="font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom accent line */}
                    <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Last Card - Landscape Mode Below (Centered on right side) */}
          <div className="-mt-44 flex justify-center col-span-full lg:col-span-1 lg:col-start-2">
            <div
              key={skillCategories[3].label}
              className="group relative overflow-hidden transition-all duration-300 w-full"
              style={{ animationDelay: '300ms' }}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative flex flex-col p-6 rounded-xl border border-cyan-500/20 group-hover:border-cyan-500/50 bg-background/40 backdrop-blur-sm transition-all duration-300 h-full gap-6">
                {/* Header - Top */}
                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 group-hover:text-cyan-300 transition-all w-fit flex-shrink-0">
                    {skillCategories[3].icon}
                  </div>
                  <h3 className="text-base font-bold text-foreground leading-snug">{skillCategories[3].label}</h3>
                </div>

                {/* Skills Grid - Below */}
                <div className="grid grid-cols-4 gap-4 gap-y-3">
                  {skillCategories[3].skills.map((skill, idx) => (
                    <div key={skill} className="flex items-center gap-2.5 text-sm text-muted-foreground group-hover:text-cyan-300 transition-colors" style={{ transitionDelay: `${idx * 30}ms` }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 group-hover:bg-cyan-300 flex-shrink-0 transition-all" />
                      <span className="font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
