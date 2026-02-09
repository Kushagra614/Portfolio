import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface OrderLevel {
  price: number;
  size: number;
  total: number;
}

const LiveOrderbook = () => {
  const [bids, setBids] = useState<OrderLevel[]>([]);
  const [asks, setAsks] = useState<OrderLevel[]>([]);
  const [midPrice, setMidPrice] = useState(45000);
  const [spread, setSpread] = useState(2);

  useEffect(() => {
    // Initialize orderbook with realistic data
    const initBids: OrderLevel[] = [
      { price: midPrice - 5, size: 2.5, total: 0 },
      { price: midPrice - 4, size: 3.2, total: 0 },
      { price: midPrice - 3, size: 1.8, total: 0 },
      { price: midPrice - 2, size: 4.1, total: 0 },
      { price: midPrice - 1, size: 2.7, total: 0 },
    ].map((level, i) => ({
      ...level,
      total: level.size + (i > 0 ? initBids[i - 1].total : 0),
    }));

    const initAsks: OrderLevel[] = [
      { price: midPrice + 1, size: 2.3, total: 0 },
      { price: midPrice + 2, size: 3.8, total: 0 },
      { price: midPrice + 3, size: 2.1, total: 0 },
      { price: midPrice + 4, size: 3.5, total: 0 },
      { price: midPrice + 5, size: 2.9, total: 0 },
    ].map((level, i) => ({
      ...level,
      total: level.size + (i > 0 ? initAsks[i - 1].total : 0),
    }));

    setBids(initBids.reverse());
    setAsks(initAsks);
  }, [midPrice]);

  // Simulate market updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly update mid price with small movements
      setMidPrice((prev) => {
        const change = (Math.random() - 0.5) * 2;
        return Math.max(44900, Math.min(45100, prev + change));
      });

      // Randomly adjust spread
      setSpread((prev) => {
        const change = (Math.random() - 0.5) * 1;
        return Math.max(1, Math.min(5, prev + change));
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const maxSize = Math.max(...bids.map((b) => b.total), ...asks.map((a) => a.total)) || 1;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-6 text-center">
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Multi-Type Orderbook Simulation</div>
        <div className="text-2xl sm:text-3xl font-mono font-bold text-foreground">
          ${midPrice.toFixed(2)}
          <span className="text-xs text-primary ml-2">Spread: ${spread.toFixed(2)}</span>
        </div>
      </div>

      {/* Orderbook Table */}
      <div className="grid grid-cols-2 gap-4">
        {/* Bids Side */}
        <div className="space-y-1">
          <div className="text-xs uppercase font-semibold text-green-400 text-center mb-2">Bids (Buy)</div>
          <div className="space-y-0.5">
            {bids.map((bid, idx) => (
              <div
                key={`bid-${idx}`}
                className="relative group transition-all duration-300 hover:opacity-100 opacity-80"
              >
                {/* Background bar */}
                <div
                  className="absolute inset-0 bg-green-500/20 rounded transition-all duration-500 origin-right"
                  style={{ width: `${(bid.total / maxSize) * 100}%` }}
                />
                {/* Content */}
                <div className="relative flex justify-between items-center px-3 py-1.5 text-xs font-mono">
                  <span className="text-green-400 font-semibold">${bid.price.toFixed(2)}</span>
                  <span className="text-muted-foreground">{bid.size.toFixed(1)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Asks Side */}
        <div className="space-y-1">
          <div className="text-xs uppercase font-semibold text-red-400 text-center mb-2">Asks (Sell)</div>
          <div className="space-y-0.5">
            {asks.map((ask, idx) => (
              <div
                key={`ask-${idx}`}
                className="relative group transition-all duration-300 hover:opacity-100 opacity-80"
              >
                {/* Background bar */}
                <div
                  className="absolute inset-0 bg-red-500/20 rounded transition-all duration-500 origin-left"
                  style={{ width: `${(ask.total / maxSize) * 100}%` }}
                />
                {/* Content */}
                <div className="relative flex justify-between items-center px-3 py-1.5 text-xs font-mono">
                  <span className="text-muted-foreground">{ask.size.toFixed(1)}</span>
                  <span className="text-red-400 font-semibold">${ask.price.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Footer */}
      <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs">
        <div className="p-2 rounded border border-border/50 bg-background/50">
          <div className="text-muted-foreground text-xs mb-1">Best Bid</div>
          <div className="text-green-400 font-mono font-semibold">
            ${bids[bids.length - 1]?.price.toFixed(2)}
          </div>
        </div>
        <div className="p-2 rounded border border-border/50 bg-background/50">
          <div className="text-muted-foreground text-xs mb-1">Mid Price</div>
          <div className="text-primary font-mono font-semibold">${midPrice.toFixed(2)}</div>
        </div>
        <div className="p-2 rounded border border-border/50 bg-background/50">
          <div className="text-muted-foreground text-xs mb-1">Best Ask</div>
          <div className="text-red-400 font-mono font-semibold">
            ${asks[0]?.price.toFixed(2)}
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="mt-4 flex items-center justify-center gap-6 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-green-400" />
          <span>Lock-free matching</span>
        </div>
        <div className="flex items-center gap-2">
          <TrendingDown className="w-4 h-4 text-primary" />
          <span>&lt;50ns latency</span>
        </div>
      </div>
    </div>
  );
};

export default LiveOrderbook;
