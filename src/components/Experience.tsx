import { Briefcase } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  tech: string[];
  visualization?: boolean;
}

const experiences: Experience[] = [
  {
    title: 'SRHFT',
    company: '',
    role: 'High-Frequency Trading Infrastructure Intern',
    period: 'Dec 2024 – Mar 2025',
    description: 'Designed and implemented ultra-low latency trading infrastructure focusing on concurrent systems, real-time data processing, and deterministic execution patterns. Specialized in optimizing C++ systems for microsecond-level performance.',
    achievements: [
      'Built high-performance trading simulation platform processing 2M+ market events with sub-millisecond latency',
      'Engineered shared-memory pipelines achieving 100K+ events per second throughput',
      'Optimized strategy execution using lock-free data structures, reducing latency variance by 20% through cache-aware memory layouts',
      'Implemented deterministic order matching with real-time trade generation and comprehensive metrics tracking',
    ],
    tech: ['C++', 'Boost.Interprocess', 'Lock-Free Structures', 'Multithreading', 'Atomics', 'Cache-Awareness', 'Linux Kernel'],
    visualization: true,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="block">Internship &</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            Professional experience building production-grade systems at leading fintech organizations.
          </p>
        </div>

        {/* Experience Items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="w-full"
            >
              {/* Large Experience Card - Full Width */}
              <div className="relative">
                <div className="absolute -inset-6 rounded-2xl blur-3xl opacity-25 -z-10"
                  style={{
                    background: 'radial-gradient(ellipse at center, hsl(200 100% 50% / 0.5) 0%, transparent 70%)',
                  }}
                />

                <div className="rounded-2xl border border-cyan-500/30 bg-background/80 backdrop-blur-xl p-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{exp.title}</h3>
                      <p className="text-base text-cyan-400 font-semibold mt-2">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mt-2">{exp.period}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                      <Briefcase className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>

                  <p className="text-base text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>

                  {/* Achievements */}
                  <div className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-cyan-400 font-bold mt-0.5 text-lg">→</span>
                        <p className="text-sm text-muted-foreground leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-6 border-t border-cyan-500/20">
                    <p className="text-sm uppercase text-muted-foreground font-semibold mb-4">Technologies</p>
                    <div className="flex flex-wrap gap-3">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-2 rounded-lg text-sm bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono hover:bg-cyan-500/20 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
