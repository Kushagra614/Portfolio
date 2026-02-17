import AnimatedCounter from './AnimatedCounter';
import { Activity, Zap, Clock, TrendingDown, BarChart3 } from 'lucide-react';

interface Metric {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
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
    value: 50,
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

const MetricsDashboard = () => {
  return (
    <section id="metrics" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: Description */}
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="block">HFT & Ultra</span>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
                Low-Latency Performance
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Production-grade trading infrastructure optimized for microsecond-level precision. Real-world metrics from deployed systems achieving sub-microsecond latency with lock-free data structures and deterministic execution.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold text-xl">→</span>
                <div>
                  <p className="font-semibold text-foreground">Ultra-Low Latency</p>
                  <p className="text-sm text-muted-foreground">Microsecond precision with NUMA-aware CPU scheduling</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 font-bold text-xl">→</span>
                <div>
                  <p className="font-semibold text-foreground">Deterministic Replay</p>
                  <p className="text-sm text-muted-foreground">Nanosecond-level timing with lock-free execution</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold text-xl">→</span>
                <div>
                  <p className="font-semibold text-foreground">Throughput Optimization</p>
                  <p className="text-sm text-muted-foreground">100K+ events/sec IPC with zero-copy semantics</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Metrics Grid */}
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
      </div>
    </section>
  );
};

export default MetricsDashboard;
