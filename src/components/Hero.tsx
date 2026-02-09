import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main radial gradient */}
        <div 
          className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, hsl(200 100% 50% / 0.4) 0%, hsl(200 70% 30% / 0.2) 40%, transparent 70%)'
          }}
        />
        {/* Secondary glow on right */}
        <div 
          className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-25"
          style={{
            background: 'radial-gradient(circle, hsl(200 100% 40% / 0.3) 0%, transparent 70%)'
          }}
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, hsl(200 100% 50% / 0.1) 25%, hsl(200 100% 50% / 0.1) 26%, transparent 27%, transparent 74%, hsl(200 100% 50% / 0.1) 75%, hsl(200 100% 50% / 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, hsl(200 100% 50% / 0.1) 25%, hsl(200 100% 50% / 0.1) 26%, transparent 27%, transparent 74%, hsl(200 100% 50% / 0.1) 75%, hsl(200 100% 50% / 0.1) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - Text Content */}
          <div className="text-left">
            {/* Name with glowing background */}
            <div className="mb-8 relative">
              {/* Animated glow background */}
              <div className="absolute -inset-4 rounded-xl blur-3xl opacity-30 -z-10"
                style={{
                  background: 'radial-gradient(ellipse at left, hsl(200 100% 50% / 0.6) 0%, transparent 70%)',
                }}
              />
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg font-black">KUSHAGRA VARDHAN</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground tracking-wide mb-6 font-light">
              HFT Infrastructure Architect
            </p>
            
            <p className="text-sm sm:text-base text-secondary-foreground mb-8 leading-relaxed max-w-md">
              Building ultra-low-latency trading systems with C++. Specializing in lock-free data structures, microsecond optimization, and high-performance market infrastructure.
            </p>

            {/* Tech specs */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm font-mono">
                <ArrowRight className="w-4 h-4 text-cyan-400" />
                <span><span className="text-cyan-400">2M+</span> events/sec processing</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-mono">
                <ArrowRight className="w-4 h-4 text-blue-400" />
                <span><span className="text-blue-400">&lt;50ns</span> sub-microsecond latency</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-mono">
                <ArrowRight className="w-4 h-4 text-cyan-400" />
                <span><span className="text-cyan-400">C++17/20</span> with lock-free patterns</span>
              </div>
            </div>

            {/* Education */}
            <p className="text-sm text-secondary-foreground mb-8">
              VIT Bhopal University '26
            </p>

            {/* Call to action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-background font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 inline-block w-fit"
              >
                Explore My Work
              </a>
              <a 
                href="https://github.com/kushagra614"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border-2 border-cyan-500/60 text-cyan-400 font-bold hover:bg-cyan-500/10 transition-all duration-300 inline-block w-fit"
              >
                View GitHub
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - Retro Computer Image */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Glow background */}
              <div className="absolute inset-0 rounded-2xl blur-3xl opacity-40 -z-10"
                style={{
                  background: 'radial-gradient(ellipse at right, hsl(200 100% 50% / 0.5) 0%, transparent 70%)',
                }}
              />

              {/* Retro Computer Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-background/50 backdrop-blur-xl p-6 shadow-2xl"
                style={{
                  boxShadow: '0 0 50px rgba(34, 211, 238, 0.2), inset 0 0 30px rgba(34, 211, 238, 0.1)'
                }}
              >
                <svg viewBox="0 0 800 600" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                  {/* Computer base */}
                  <rect x="120" y="150" width="450" height="320" rx="20" fill="#a0a0a0" stroke="#808080" strokeWidth="3"/>
                  <rect x="130" y="160" width="430" height="300" rx="15" fill="#c8c8c8" />
                  
                  {/* Monitor screen */}
                  <rect x="150" y="180" width="390" height="240" rx="8" fill="#000" />
                  
                  {/* Screen glow */}
                  <rect x="150" y="180" width="390" height="240" rx="8" fill="url(#screenGradient)" opacity="0.8"/>
                  
                  {/* Green terminal text */}
                  <text x="170" y="210" fontFamily="monospace" fontSize="12" fill="#00ff00" opacity="0.9">
                    $ sudo ./hypertradex --mode=backtest
                  </text>
                  <text x="170" y="230" fontFamily="monospace" fontSize="11" fill="#00ff00" opacity="0.7">
                    Initializing market environment...
                  </text>
                  <text x="170" y="250" fontFamily="monospace" fontSize="11" fill="#00ff00" opacity="0.7">
                    Loading tick data: 10M+ events/sec
                  </text>
                  <text x="170" y="270" fontFamily="monospace" fontSize="11" fill="#00ff00" opacity="0.7">
                    Cache optimization: NUMA-aware
                  </text>
                  <text x="170" y="290" fontFamily="monospace" fontSize="11" fill="#00ff00" opacity="0.7">
                    Lock-free IPC ready: 100K+/sec throughput
                  </text>
                  <text x="170" y="310" fontFamily="monospace" fontSize="11" fill="#ffff00" opacity="0.8">
                    Strategy loaded: VWAP + ML ensemble
                  </text>
                  <text x="170" y="330" fontFamily="monospace" fontSize="11" fill="#00ff00" opacity="0.7">
                    Backtest complete: Sharpe 2.47
                  </text>
                  <text x="170" y="350" fontFamily="monospace" fontSize="11" fill="#00ff00" opacity="0.7">
                    Latency: p99 &lt;50ns, mean 12ns
                  </text>
                  <text x="170" y="370" fontFamily="monospace" fontSize="11" fill="#00ff00" opacity="0.9">
                    $ █
                  </text>

                  {/* Keyboard */}
                  <rect x="180" y="440" width="370" height="80" rx="8" fill="#d0d0d0" stroke="#808080" strokeWidth="2"/>
                  <rect x="185" y="445" width="360" height="70" rx="6" fill="#e8e8e8" />
                  
                  {/* Screen reflection */}
                  <circle cx="500" cy="250" r="40" fill="#fff" opacity="0.1" />
                  
                  {/* Define screen glow gradient */}
                  <defs>
                    <radialGradient id="screenGradient" cx="50%" cy="30%">
                      <stop offset="0%" stopColor="#00ff00" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#0088ff" stopOpacity="0.1"/>
                    </radialGradient>
                  </defs>
                </svg>

                {/* Info badge below */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-cyan-400 font-mono uppercase tracking-wider">Ultra-Low Latency System</p>
                  <p className="text-xs text-muted-foreground mt-1">C++ | Lock-Free | SIMD Optimized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
