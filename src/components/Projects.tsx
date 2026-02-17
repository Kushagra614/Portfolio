import ProjectCard from './ProjectCard';
import { BacktestingChart, LiveOrderbook, CameraDetection, ChatVerseVisualization } from './ProjectVisualizations';

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
    visualization: 'backtest',
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
    visualization: 'orderbook',
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
    visualization: 'camera',
  },
  {
    title: 'CHATVERSE',
    subtitle: 'Real-Time Chat Application',
    tech: ['React.js', 'Firebase', 'Firestore', 'Google Auth', 'CSS3'],
    features: [
      'Google Authentication with secure session management',
      'Real-time messaging with Firebase Firestore',
      'Multiple chat rooms with dynamic room creation',
      'Modern space-themed UI with responsive design',
    ],
    highlight: 'Real-time WebSocket architecture with optimized performance',
    github: 'https://github.com/kushagra614/ChatVerse',
    visualization: 'chatverse',
  },
];

const Projects = () => {
  const renderVisualization = (type: string) => {
    switch(type) {
      case 'backtest':
        return <BacktestingChart />;
      case 'orderbook':
        return <LiveOrderbook />;
      case 'camera':
        return <CameraDetection />;
      case 'chatverse':
        return <ChatVerseVisualization />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="block">Featured</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            Production-grade systems built for speed, reliability, and scale. Each project paired with live visualizations.
          </p>
        </div>

        {/* Projects with Visualizations */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Alternate layout: card on left for even, right for odd */}
              {index % 2 === 0 ? (
                <>
                  {/* LEFT: Card */}
                  <div className="animate-scale-pop" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}>
                    <ProjectCard {...project} />
                  </div>
                  {/* RIGHT: Visualization */}
                  <div className="hidden lg:block h-80">
                    {renderVisualization(project.visualization)}
                  </div>
                </>
              ) : (
                <>
                  {/* LEFT: Visualization */}
                  <div className="hidden lg:block h-80 order-2">
                    {renderVisualization(project.visualization)}
                  </div>
                  {/* RIGHT: Card */}
                  <div className="animate-scale-pop order-1 lg:order-none" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}>
                    <ProjectCard {...project} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
