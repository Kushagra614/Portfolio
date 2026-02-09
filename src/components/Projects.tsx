import ProjectCard from './ProjectCard';
import { Code2 } from 'lucide-react';

const projects = [
  {
    title: 'HYPERTRADEX',
    subtitle: 'Ultra-Low Latency Backtesting Engine',
    tech: ['C++17', 'libcurl', 'CMake', 'Binance APIs'],
    features: [
      'Microsecond execution with deterministic replay',
      'Cache-efficient data structures (40% latency reduction)',
      'Production-grade data pipeline: 10K+ klines/sec',
      'Comprehensive metrics: P99 latency, Sharpe ratio, PnL attribution',
    ],
    highlight: '40% latency reduction via cache-line optimization',
    github: 'https://github.com/kushagra614',
  },
  {
    title: 'MULTI-TYPE ORDERBOOK',
    subtitle: 'Financial Exchange Matching Engine',
    tech: ['C++20', 'STL', 'Multithreading', 'std::map', 'std::list'],
    features: [
      'Supports GTC, FAK, FOK, GFD, and Market Orders',
      'Deterministic price-time priority matching',
      'Thread-safe order operations (insertion, cancellation, modification)',
      'Auto-expiring Good For Day orders with dedicated pruning thread',
    ],
    highlight: 'Sub-microsecond deterministic matching',
    github: 'https://github.com/kushagra614',
  },
  {
    title: 'AUTO-PLATE RECOGNITION',
    subtitle: 'Real-Time Vehicle & License Plate Detection',
    tech: ['Python', 'YOLOv8', 'EasyOCR', 'ByteTrack', 'OpenCV'],
    features: [
      '97.8% detection accuracy in multi-vehicle scenarios',
      'Real-time processing: 24ms per frame',
      'Multi-object tracking with ByteTrack',
      'Modular system with JSON config and comprehensive logging',
    ],
    highlight: '97.8% accuracy with 24ms/frame latency',
    github: 'https://github.com/kushagra614',
  },
  {
    title: 'SRHFT',
    subtitle: 'High-Frequency Trading Infrastructure Intern',
    tech: ['Boost.Interprocess', 'Shared Memory', 'Lock-free DS', 'C++'],
    features: [
      'High-performance simulation framework supporting 10+ strategies',
      'Processing 2M+ market data events per simulation',
      'Shared memory IPC pipelines: 100K+ events/sec throughput',
      '35% latency variance reduction through lock-free structures',
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
