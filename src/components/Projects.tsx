import ProjectCard from './ProjectCard';
import { Code2 } from 'lucide-react';

const projects = [
  {
    title: 'HYPERTRADEX',
    tech: ['C++17', 'libcurl', 'CMake', 'Binance APIs'],
    features: [
      'Ultra-low latency backtesting engine',
      'Cache-line optimized, deterministic replay',
      '40% latency reduction through optimization',
      'Real-time market data integration',
    ],
    highlight: '2.4M events/sec throughput',
    github: 'https://github.com/kushagra614',
    demo: '#',
  },
  {
    title: 'MULTI-TYPE ORDERBOOK',
    tech: ['C++20', 'STL', 'Multithreading'],
    features: [
      'GTC / FAK / FOK / GFD / Market orders',
      'Deterministic price-time priority matching',
      'Lock-free concurrent order processing',
      'Production-ready matching engine',
    ],
    highlight: 'Sub-microsecond order matching',
    github: 'https://github.com/kushagra614',
    demo: '#',
  },
  {
    title: 'SRHFT — Software Developer Intern',
    subtitle: 'High-Frequency Trading Infrastructure',
    tech: ['Boost.Interprocess', 'Shared Memory', 'Lock-free DS'],
    features: [
      'Boost.Interprocess shared-memory IPC',
      'Lock-free data structures for concurrency',
      'Sub-millisecond trading simulations',
      '2M+ events per simulation run',
    ],
    date: 'Dec 2024 – Mar 2025',
    isExperience: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6 hover:border-primary/60 transition-all animate-float-slow">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-xs text-primary uppercase tracking-wider font-semibold">Engineering</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 animate-scale-pop">
            Featured <span className="text-primary glow-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg animate-fade-in" style={{ animationDelay: '200ms' }}>
            Production-grade systems built for speed, reliability, and scale
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-scale-pop"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
