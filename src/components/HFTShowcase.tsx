import { useState, useEffect } from 'react';
import { Activity, Zap, TrendingUp, Code, Cpu, Lock, BarChart3, Clock, TrendingDown } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

interface Metric {
  label: string;
  value: number;
  suffix: string;
  decimals?: number;
  icon: React.ReactNode;
  description: string;
}

const metrics: Metric[] = [
  {
    label: 'Peak Throughput',
    value: 2.4,
    suffix: 'M events/sec',
    decimals: 1,
    icon: <Activity className="w-5 h-5" />,
    description: 'Real-time market data processing at scale',
  },
  {
    label: 'P99 Latency',
    value: 500,
    suffix: 'ns',
    icon: <Clock className="w-5 h-5" />,
    description: 'Sub-microsecond latency guarantee',
  },
  {
    label: 'IPC Throughput',
    value: 100,
    suffix: 'K+ events/sec',
    icon: <Zap className="w-5 h-5" />,
    description: 'Inter-process communication via shared memory',
  },
  {
    label: 'Latency Variance',
    value: 35,
    suffix: '% reduction',
    icon: <TrendingDown className="w-5 h-5" />,
    description: 'Deterministic performance through optimization',
  },
];

const HFTShowcase = () => {
  const [eventCount, setEventCount] = useState(0);
  const [latency, setLatency] = useState(0);

  useEffect(() => {
    // Peak Throughput - continuous random walk (2.2M to 2.6M events/sec)
    const eventInterval = setInterval(() => {
      setEventCount(prev => {
        const randomChange = (Math.random() - 0.5) * 100000; // Random ±50K change
        const newCount = prev + randomChange;
        // Keep it between 2.2M and 2.6M
        return Math.max(2200000, Math.min(2600000, newCount));
      });
    }, 150);

    // P99 Latency - continuous random walk (400ns to 600ns)
    const latencyInterval = setInterval(() => {
      setLatency(prev => {
        const randomChange = (Math.random() - 0.5) * 100; // Random ±50ns change
        const newLatency = prev + randomChange;
        // Keep it between 400ns and 600ns
        return Math.max(400, Math.min(600, newLatency));
      });
    }, 200);

    return () => {
      clearInterval(eventInterval);
      clearInterval(latencyInterval);
    };
  }, []);

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="block">HFT & Ultra</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
              Low-Latency Performance
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
            Production-grade trading infrastructure optimized for microsecond-level precision. Real-world metrics from deployed systems achieving sub-microsecond latency with lock-free data structures and deterministic execution.
          </p>
        </div>

        {/* Two Column Layout - Left Text, Right Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* LEFT: Systems Overview */}
          <div className="text-left space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Systems Architecture</h3>
            
            <div className="space-y-4">
            </div>

            {/* Key Achievements */}
            <div className="relative p-6 rounded-lg border border-primary/30 bg-primary/5">
              <h4 className="text-lg font-bold text-primary mb-4">Key Achievements</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Built high-performance trading simulation platform processing <strong className="text-primary">2M+ market events</strong> with <strong className="text-primary">sub-millisecond latency</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Engineered shared-memory pipelines achieving <strong className="text-primary">100K+ events per second</strong> throughput</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Optimized strategy execution using lock-free data structures, reducing <strong className="text-primary">latency variance by 20%</strong> through cache-aware memory layouts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Implemented deterministic order matching with <strong className="text-primary">real-time trade generation</strong> and comprehensive metrics tracking</span>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Live Metrics Grid (2x2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {metrics.map((metric, index) => (
              <div 
                key={metric.label}
                className="metric-card group relative overflow-hidden"
                style={{ 
                  animationDelay: `${index * 80}ms`,
                  animationFillMode: 'both'
                }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
                </div>

                {/* Icon */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    {metric.icon}
                  </div>
                  <span className="text-xs font-mono text-muted-foreground bg-primary/5 px-2 py-1 rounded">
                    {metric.label.toUpperCase().slice(0, 4)}
                  </span>
                </div>

                {/* Value */}
                <div className="mb-3 relative z-10">
                  <p className="text-muted-foreground text-xs uppercase tracking-wider font-semibold mb-1">
                    {metric.label}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl md:text-3xl font-bold text-primary">
                      <AnimatedCounter end={metric.value} decimals={metric.decimals} />
                    </span>
                    <span className="text-sm text-muted-foreground">{metric.suffix}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-muted-foreground relative z-10">{metric.description}</p>

                {/* Border animation */}
                <div className="absolute inset-0 rounded-lg border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'C++17/20', icon: '⚡' },
            { name: 'Linux Kernel', icon: '🐧' },
            { name: 'Atomics', icon: '⚛️' },
            { name: 'Ring Buffers', icon: '🔄' },
            { name: 'Cache-Aware', icon: '💾' },
            { name: 'Memory Pooling', icon: '�️' },
            { name: 'RAII Patterns', icon: '�️' },
            { name: 'Multi-Threading', icon: '�' },
            { name: 'Boost Library', icon: '�' },
            { name: 'Zero-Copy', icon: '⚡' },
            { name: 'FIX Protocol', icon: '📨' },
            { name: 'WebSockets', icon: '🌐' }
          ].map((tech) => (
            <div 
              key={tech.name}
              className="p-4 rounded-lg border border-primary/20 bg-primary/5 text-center hover:border-primary/50 transition-all duration-300 cursor-default group/tech"
            >
              <div className="text-2xl mb-2 group-hover/tech:scale-110 transition-transform">{tech.icon}</div>
              <p className="text-sm font-semibold text-primary">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HFTShowcase;
