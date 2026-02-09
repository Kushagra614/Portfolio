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
    label: 'Backtest Throughput',
    value: 2.4,
    suffix: 'M events/sec',
    decimals: 1,
    icon: <Activity className="w-5 h-5" />,
    description: 'Ultra-high throughput backtesting engine',
  },
  {
    label: 'IPC Throughput',
    value: 100,
    suffix: 'K+ events/sec',
    icon: <Zap className="w-5 h-5" />,
    description: 'Shared-memory inter-process communication',
  },
  {
    label: 'Replay Jitter',
    value: 847,
    suffix: 'ns p99',
    icon: <Clock className="w-5 h-5" />,
    description: 'Nanosecond-level deterministic replay',
  },
  {
    label: 'Latency Reduction',
    value: 35,
    suffix: '%',
    icon: <TrendingDown className="w-5 h-5" />,
    description: 'Variance reduction through optimization',
  },
  {
    label: 'Klines Processed',
    value: 10,
    suffix: 'K+ / sec',
    icon: <BarChart3 className="w-5 h-5" />,
    description: 'Real-time market data processing',
  },
];

const MetricsDashboard = () => {
  return (
    <section id="metrics" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-primary uppercase tracking-wider">Live Metrics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            System <span className="text-primary glow-text">Performance</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real-world metrics from production-grade trading infrastructure
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <div 
              key={metric.label}
              className="metric-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  {metric.icon}
                </div>
                <div className="w-12 h-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full" />
              </div>

              {/* Value */}
              <div className="mb-2">
                <span className="text-3xl sm:text-4xl font-bold text-foreground">
                  <AnimatedCounter
                    end={metric.value}
                    duration={2000 + index * 200}
                    suffix=""
                    decimals={metric.decimals || 0}
                  />
                </span>
                <span className="text-lg text-primary ml-1">{metric.suffix}</span>
              </div>

              {/* Label */}
              <h3 className="text-sm font-medium text-foreground mb-1">
                {metric.label}
              </h3>
              <p className="text-xs text-muted-foreground">
                {metric.description}
              </p>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsDashboard;
