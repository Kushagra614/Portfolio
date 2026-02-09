import { useState, useEffect } from 'react';
import { Activity, Zap, TrendingUp } from 'lucide-react';

const HFTShowcase = () => {
  const [eventCount, setEventCount] = useState(0);
  const [latency, setLatency] = useState(0);

  useEffect(() => {
    let eventInterval: NodeJS.Timeout;
    let latencyInterval: NodeJS.Timeout;

    // Simulate event counter
    eventInterval = setInterval(() => {
      setEventCount(prev => {
        const newCount = prev + Math.floor(Math.random() * 50000) + 10000;
        return newCount > 2000000 ? prev : newCount;
      });
    }, 100);

    // Simulate latency fluctuation
    latencyInterval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 50) + 10);
    }, 500);

    return () => {
      clearInterval(eventInterval);
      clearInterval(latencyInterval);
    };
  }, []);

  return (
    <section className="relative py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
            HFT & Ultra Low-Latency Systems
          </h2>
          <p className="text-muted-foreground text-lg">
            Building infrastructure that processes millions of market events with microsecond precision
          </p>
        </div>

        {/* Live Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Events Per Second */}
          <div className="relative group">
            <div className="metric-card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider">Events/Sec</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mt-2">
                    {(eventCount / 1000000).toFixed(2)}M+
                  </h3>
                </div>
                <Activity className="w-6 h-6 text-primary animate-latency-blink" />
              </div>
              <div className="w-full bg-border/30 rounded-full h-1 overflow-hidden">
                <div 
                  className="bg-primary h-full rounded-full transition-all duration-200 animate-circuit-glow"
                  style={{ width: `${Math.min((eventCount / 2000000) * 100, 100)}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-3">Real-time market events</p>
            </div>
          </div>

          {/* Latency */}
          <div className="relative group">
            <div className="metric-card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider">Latency</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mt-2">
                    {latency}
                    <span className="text-lg">μs</span>
                  </h3>
                </div>
                <Zap className="w-6 h-6 text-primary animate-trading-pulse" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Microsecond precision</span>
                  <span className="text-primary font-semibold">{latency}μs</span>
                </div>
                <div className="bg-border/30 rounded-full h-1">
                  <div 
                    className="bg-gradient-to-r from-primary to-primary/60 h-full rounded-full transition-all duration-100"
                    style={{ width: `${(latency / 100) * 100}%` }}
                  />
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-3">Sub-microsecond targeting</p>
            </div>
          </div>

          {/* C++ Performance */}
          <div className="relative group">
            <div className="metric-card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider">C++ Level</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mt-2">C++17/20</h3>
                </div>
                <TrendingUp className="w-6 h-6 text-primary animate-circuit-glow" />
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Zero-copy semantics
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Lock-free data structures
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Memory optimization
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="relative mb-12 p-6 rounded-lg border border-primary/30 bg-primary/5">
          <h3 className="text-xl font-bold text-primary mb-4">Key Achievements @ SRHFT</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">→</span>
              <span>Reduced latency variance by <strong className="text-primary">35%</strong> through cache optimization and NUMA-aware scheduling</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">→</span>
              <span>Designed lock-free IPC pipelines processing <strong className="text-primary">100K+ events/second</strong> with sub-microsecond precision</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">→</span>
              <span>Implemented SIMD-optimized order matching engine achieving <strong className="text-primary">&lt;50ns</strong> per match</span>
            </li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'C++17/20', icon: '⚡' },
            { name: 'Linux Kernel', icon: '🐧' },
            { name: 'Lock-Free', icon: '🔓' },
            { name: 'SIMD', icon: '⚙️' },
            { name: 'TCP/UDP', icon: '🌐' },
            { name: 'NUMA', icon: '💾' },
            { name: 'CPU Affinity', icon: '🎯' },
            { name: 'Zero-Copy', icon: '⚡' }
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
