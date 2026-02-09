import { Terminal, Code2, Zap, Cpu, Gauge, Lock } from 'lucide-react';

interface SkillCategory {
  label: string;
  icon: React.ReactNode;
  skills: string[];
  description?: string;
}

const skillCategories: SkillCategory[] = [
  {
    label: 'Core Languages',
    icon: <Code2 className="w-5 h-5" />,
    skills: ['C++17/20', 'C', 'Python', 'SQL'],
    description: 'Primary focus on modern C++ for HFT systems',
  },
  {
    label: 'HFT Specialization',
    icon: <Zap className="w-5 h-5" />,
    skills: ['Ultra Low-Latency', 'Lock-free Structures', 'Zero-Copy', 'SIMD Optimization'],
    description: 'Sub-microsecond latency optimization techniques',
  },
  {
    label: 'Performance & Systems',
    icon: <Gauge className="w-5 h-5" />,
    skills: ['Memory Optimization', 'CPU Affinity', 'NUMA', 'Multithreading', 'Concurrency'],
    description: 'Advanced system-level performance tuning',
  },
  {
    label: 'Infrastructure',
    icon: <Cpu className="w-5 h-5" />,
    skills: ['Linux Kernel', 'TCP/UDP Networking', 'CMake', 'Git', 'AWS'],
    description: 'Backend infrastructure and DevOps',
  },
  {
    label: 'Trading & Markets',
    icon: <Lock className="w-5 h-5" />,
    skills: ['Algorithmic Trading', 'Market Microstructure', 'Order Matching', 'Risk Management'],
    description: 'Domain expertise in financial systems',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6 hover:border-primary/60 transition-all">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-xs text-primary uppercase tracking-wider font-semibold">Tech Stack</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Core <span className="text-primary glow-text">Skills & Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Specialized in building ultra-low-latency trading systems with a focus on modern C++ and HFT infrastructure
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.label}
              className="group relative overflow-hidden"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="metric-card">
                {/* Category Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-all">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{category.label}</h3>
                    {category.description && (
                      <p className="text-xs text-muted-foreground mt-1">{category.description}</p>
                    )}
                  </div>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full border border-primary/25 bg-primary/5 text-primary text-sm font-medium 
                        hover:border-primary/60 hover:bg-primary/15 transition-all duration-200 cursor-default group-hover:animate-latency-blink"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Terminal-style Overview */}
        <div className="relative group">
          <div className="rounded-lg border border-border/50 card-gradient overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-background/50">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-warning/80" />
              <div className="w-3 h-3 rounded-full bg-primary/80" />
              <span className="ml-2 text-xs text-muted-foreground">expertise.sh</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm space-y-3">
              <div className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: '0ms' }}>
                <span className="text-primary">$</span>
                <div className="flex-1">
                  <span className="text-muted-foreground">cat</span>
                  <span className="text-foreground"> core_competencies.txt</span>
                </div>
              </div>

              <div className="space-y-2 pl-6 border-l border-primary/20">
                <div className="flex items-start gap-2 animate-fade-in" style={{ animationDelay: '100ms' }}>
                  <span className="text-primary">▸</span>
                  <span className="text-foreground">
                    <span className="text-primary font-semibold">HFT Infrastructure</span>
                    <span className="text-muted-foreground">: 2M+ events/sec, sub-microsecond latency</span>
                  </span>
                </div>
                <div className="flex items-start gap-2 animate-fade-in" style={{ animationDelay: '150ms' }}>
                  <span className="text-primary">▸</span>
                  <span className="text-foreground">
                    <span className="text-primary font-semibold">Modern C++</span>
                    <span className="text-muted-foreground">: C++17/20 with focus on zero-overhead abstractions</span>
                  </span>
                </div>
                <div className="flex items-start gap-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <span className="text-primary">▸</span>
                  <span className="text-foreground">
                    <span className="text-primary font-semibold">Performance Tuning</span>
                    <span className="text-muted-foreground">: Memory optimization, CPU affinity, lock-free data structures</span>
                  </span>
                </div>
                <div className="flex items-start gap-2 animate-fade-in" style={{ animationDelay: '250ms' }}>
                  <span className="text-primary">▸</span>
                  <span className="text-foreground">
                    <span className="text-primary font-semibold">Systems Engineering</span>
                    <span className="text-muted-foreground">: Linux kernel, networking, distributed systems</span>
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                <span className="text-primary">$</span>
                <span className="cursor-blink text-primary animate-pulse">▋</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
