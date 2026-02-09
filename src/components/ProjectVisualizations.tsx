import { TrendingUp, MessageCircle } from 'lucide-react';

// Backtesting Performance Chart
export const BacktestingChart = () => (
  <div className="relative w-full h-full rounded-2xl border border-cyan-500/30 bg-background/80 backdrop-blur-xl p-6">
    <div className="absolute inset-0 rounded-2xl blur-2xl opacity-20 -z-10"
      style={{
        background: 'radial-gradient(ellipse at center, hsl(200 100% 50% / 0.5) 0%, transparent 70%)',
      }}
    />
    
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-sm font-bold text-foreground">Backtest Performance</h3>
      <TrendingUp className="w-4 h-4 text-cyan-400" />
    </div>

    {/* Chart area with SVG */}
    <svg viewBox="0 0 300 150" className="w-full h-32 mb-4">
      {/* Grid lines */}
      <line x1="0" y1="30" x2="300" y2="30" stroke="rgba(34, 211, 238, 0.1)" strokeWidth="1"/>
      <line x1="0" y1="60" x2="300" y2="60" stroke="rgba(34, 211, 238, 0.1)" strokeWidth="1"/>
      <line x1="0" y1="90" x2="300" y2="90" stroke="rgba(34, 211, 238, 0.1)" strokeWidth="1"/>
      <line x1="0" y1="120" x2="300" y2="120" stroke="rgba(34, 211, 238, 0.1)" strokeWidth="1"/>

      {/* Performance curve */}
      <polyline
        points="10,120 30,110 50,100 70,85 90,70 110,60 130,50 150,40 170,35 190,30 210,25 230,20 250,18 270,15 290,12"
        fill="none"
        stroke="url(#perfGradient)"
        strokeWidth="2"
      />
      
      {/* Fill under curve */}
      <polygon
        points="10,120 30,110 50,100 70,85 90,70 110,60 130,50 150,40 170,35 190,30 210,25 230,20 250,18 270,15 290,12 290,150 10,150"
        fill="url(#perfFill)"
        opacity="0.3"
      />

      {/* Gradient definitions */}
      <defs>
        <linearGradient id="perfGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#00ff00" />
        </linearGradient>
        <linearGradient id="perfFill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1"/>
        </linearGradient>
      </defs>
    </svg>

    {/* Metrics */}
    <div className="grid grid-cols-3 gap-2 text-xs">
      <div className="p-2 rounded bg-primary/10">
        <p className="text-muted-foreground">Sharpe</p>
        <p className="font-bold text-green-400">2.47</p>
      </div>
      <div className="p-2 rounded bg-primary/10">
        <p className="text-muted-foreground">Win Rate</p>
        <p className="font-bold text-green-400">62%</p>
      </div>
      <div className="p-2 rounded bg-primary/10">
        <p className="text-muted-foreground">Max DD</p>
        <p className="font-bold text-red-400">-8.3%</p>
      </div>
    </div>
  </div>
);

// Live Orderbook Visualization
export const LiveOrderbook = () => {
  const bids = [
    { price: 44998, size: 2.5 },
    { price: 44999, size: 3.2 },
    { price: 45000, size: 1.8 },
  ];

  const asks = [
    { price: 45001, size: 2.3 },
    { price: 45002, size: 3.8 },
    { price: 45003, size: 2.1 },
  ];

  return (
    <div className="relative w-full h-full rounded-2xl border border-cyan-500/30 bg-background/80 backdrop-blur-xl p-6">
      <div className="absolute inset-0 rounded-2xl blur-2xl opacity-20 -z-10"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(200 100% 50% / 0.5) 0%, transparent 70%)',
        }}
      />

      <div className="text-center mb-4">
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Live Price</div>
        <div className="text-3xl font-mono font-bold text-foreground">$45,000</div>
      </div>

      {/* Bids */}
      <div className="mb-4">
        <div className="text-xs font-semibold text-green-400 text-center mb-2">BIDS</div>
        <div className="space-y-1">
          {bids.map((bid, idx) => (
            <div key={idx} className="flex justify-between items-center px-2 py-1 text-xs">
              <div className="w-8 h-3 rounded bg-green-500/20 border border-green-500/40" />
              <span className="text-green-400 font-semibold flex-1 text-center">${bid.price}</span>
              <span className="text-muted-foreground text-right w-12">{bid.size}K</span>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent my-2" />

      {/* Asks */}
      <div>
        <div className="text-xs font-semibold text-red-400 text-center mb-2">ASKS</div>
        <div className="space-y-1">
          {asks.map((ask, idx) => (
            <div key={idx} className="flex justify-between items-center px-2 py-1 text-xs">
              <span className="text-muted-foreground w-12">{ask.size}K</span>
              <span className="text-red-400 font-semibold flex-1 text-center">${ask.price}</span>
              <div className="w-8 h-3 rounded bg-red-500/20 border border-red-500/40" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-cyan-500/20 text-center">
        <p className="text-xs text-cyan-400">Sub-μs Matching</p>
      </div>
    </div>
  );
};

// Camera Detection Visualization
export const CameraDetection = () => (
  <div className="relative w-full h-full rounded-2xl border border-cyan-500/30 bg-background/80 backdrop-blur-xl p-6 flex items-center justify-center">
    <div className="absolute inset-0 rounded-2xl blur-2xl opacity-20 -z-10"
      style={{
        background: 'radial-gradient(ellipse at center, hsl(200 100% 50% / 0.5) 0%, transparent 70%)',
      }}
    />

    {/* Simple camera detection visualization */}
    <div className="w-full space-y-3">
      <svg viewBox="0 0 300 200" className="w-full h-32 border border-cyan-500/30 rounded-lg bg-black/30">
        {/* Frame background */}
        <rect width="300" height="200" fill="#0a0a0a" />
        
        {/* Vehicle boxes */}
        <rect x="20" y="40" width="70" height="60" fill="none" stroke="#00ff00" strokeWidth="2" />
        <text x="25" y="105" fontSize="10" fill="#00ff00" fontFamily="monospace">Car: 98%</text>

        <rect x="110" y="50" width="80" height="70" fill="none" stroke="#00ff00" strokeWidth="2" />
        <text x="115" y="125" fontSize="10" fill="#00ff00" fontFamily="monospace">SUV: 95%</text>

        <rect x="210" y="35" width="65" height="55" fill="none" stroke="#00ff00" strokeWidth="2" />
        <text x="215" y="100" fontSize="10" fill="#00ff00" fontFamily="monospace">Truck: 92%</text>

        {/* Plate detection */}
        <rect x="35" y="75" width="40" height="15" fill="none" stroke="#ffff00" strokeWidth="1" strokeDasharray="2,2" />
        <text x="37" y="87" fontSize="8" fill="#ffff00" fontFamily="monospace">MH-01-AB-1234</text>
      </svg>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 text-xs">
        <div className="p-2 rounded bg-primary/10">
          <p className="text-muted-foreground">FPS</p>
          <p className="font-bold text-cyan-400">41.7</p>
        </div>
        <div className="p-2 rounded bg-primary/10">
          <p className="text-muted-foreground">Latency</p>
          <p className="font-bold text-cyan-400">24ms</p>
        </div>
        <div className="p-2 rounded bg-primary/10">
          <p className="text-muted-foreground">Accuracy</p>
          <p className="font-bold text-green-400">97.8%</p>
        </div>
      </div>
    </div>
  </div>
);

// SRHFT Infrastructure Visualization
export const SrhftInfra = () => (
  <div className="relative w-full h-full rounded-2xl border border-cyan-500/30 bg-background/80 backdrop-blur-xl p-6">
    <div className="absolute inset-0 rounded-2xl blur-2xl opacity-20 -z-10"
      style={{
        background: 'radial-gradient(ellipse at center, hsl(200 100% 50% / 0.5) 0%, transparent 70%)',
      }}
    />

    <h3 className="text-sm font-bold text-foreground mb-4">System Architecture</h3>

    {/* Architecture diagram */}
    <div className="space-y-2 text-xs">
      <div className="flex items-center gap-2">
        <div className="px-2 py-1 rounded bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-mono whitespace-nowrap">
          Market Data
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent" />
      </div>

      <div className="flex items-center gap-2">
        <div className="px-2 py-1 rounded bg-blue-500/20 border border-blue-500/40 text-blue-300 font-mono whitespace-nowrap">
          IPC Pipeline
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-blue-500/40 to-transparent" />
      </div>

      <div className="flex items-center gap-2">
        <div className="px-2 py-1 rounded bg-green-500/20 border border-green-500/40 text-green-300 font-mono whitespace-nowrap">
          Strategies
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-green-500/40 to-transparent" />
      </div>

      <div className="flex items-center gap-2">
        <div className="px-2 py-1 rounded bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-mono whitespace-nowrap">
          Execution
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent" />
      </div>
    </div>

    {/* Metrics */}
    <div className="mt-4 pt-4 border-t border-cyan-500/20 grid grid-cols-2 gap-2 text-xs">
      <div className="p-2 rounded bg-primary/10">
        <p className="text-muted-foreground">Throughput</p>
        <p className="font-bold text-cyan-400">2M+/sec</p>
      </div>
      <div className="p-2 rounded bg-primary/10">
        <p className="text-muted-foreground">Latency</p>
        <p className="font-bold text-green-400">p99 &lt;50ns</p>
      </div>
    </div>
  </div>
);

// ChatVerse Real-Time Chat Visualization
export const ChatVerseVisualization = () => (
  <div className="relative w-full h-full rounded-2xl border border-cyan-500/30 bg-background/80 backdrop-blur-xl p-6 flex flex-col">
    <div className="absolute inset-0 rounded-2xl blur-2xl opacity-20 -z-10"
      style={{
        background: 'radial-gradient(ellipse at center, hsl(200 100% 50% / 0.5) 0%, transparent 70%)',
      }}
    />

    {/* Header */}
    <div className="flex items-center justify-between mb-4 pb-3 border-b border-cyan-500/20">
      <div className="flex items-center gap-2">
        <MessageCircle className="w-4 h-4 text-cyan-400" />
        <h3 className="text-sm font-bold text-foreground">Live Chat Room</h3>
      </div>
      <div className="flex gap-1">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs text-green-400">Online</span>
      </div>
    </div>

    {/* Chat Messages */}
    <div className="flex-1 space-y-3 mb-4 overflow-y-auto">
      {/* Message 1 - Incoming */}
      <div className="flex gap-2">
        <div className="w-6 h-6 rounded-full bg-blue-500/30 border border-blue-500/50 flex-shrink-0" />
        <div>
          <p className="text-xs text-blue-300 font-semibold">Alex</p>
          <p className="text-xs text-muted-foreground bg-blue-500/10 rounded px-2 py-1 max-w-xs">
            Hey, the new features look amazing! 🚀
          </p>
        </div>
      </div>

      {/* Message 2 - Outgoing */}
      <div className="flex gap-2 justify-end">
        <div>
          <p className="text-xs text-cyan-300 font-semibold text-right">You</p>
          <p className="text-xs text-muted-foreground bg-cyan-500/10 rounded px-2 py-1 max-w-xs">
            Thanks! Real-time with Firebase ⚡
          </p>
        </div>
        <div className="w-6 h-6 rounded-full bg-cyan-500/30 border border-cyan-500/50 flex-shrink-0" />
      </div>

      {/* Message 3 - Incoming */}
      <div className="flex gap-2">
        <div className="w-6 h-6 rounded-full bg-purple-500/30 border border-purple-500/50 flex-shrink-0" />
        <div>
          <p className="text-xs text-purple-300 font-semibold">Jordan</p>
          <p className="text-xs text-muted-foreground bg-purple-500/10 rounded px-2 py-1 max-w-xs">
            Love the space theme UI! Very clean 🎨
          </p>
        </div>
      </div>

      {/* Message 4 - Outgoing */}
      <div className="flex gap-2 justify-end">
        <div>
          <p className="text-xs text-cyan-300 font-semibold text-right">You</p>
          <p className="text-xs text-muted-foreground bg-cyan-500/10 rounded px-2 py-1 max-w-xs">
            Thanks for the feedback! 💬
          </p>
        </div>
        <div className="w-6 h-6 rounded-full bg-cyan-500/30 border border-cyan-500/50 flex-shrink-0" />
      </div>
    </div>

    {/* Input Area */}
    <div className="flex gap-2 pt-3 border-t border-cyan-500/20">
      <input
        type="text"
        placeholder="Message..."
        disabled
        className="flex-1 text-xs px-3 py-2 rounded bg-primary/5 border border-cyan-500/20 text-muted-foreground"
      />
      <button className="px-3 py-2 rounded bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-semibold hover:bg-cyan-500/30 transition-colors">
        Send
      </button>
    </div>

    {/* Stats */}
    <div className="mt-4 pt-3 border-t border-cyan-500/20 grid grid-cols-3 gap-2 text-xs">
      <div className="text-center">
        <p className="text-muted-foreground">Users</p>
        <p className="font-bold text-cyan-400">1.2K+</p>
      </div>
      <div className="text-center">
        <p className="text-muted-foreground">Rooms</p>
        <p className="font-bold text-cyan-400">50+</p>
      </div>
      <div className="text-center">
        <p className="text-muted-foreground">Uptime</p>
        <p className="font-bold text-green-400">99.9%</p>
      </div>
    </div>
  </div>
);
