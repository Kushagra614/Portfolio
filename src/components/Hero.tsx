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
                  background: 'radial-gradient(ellipse at left, hsl(200 100% 50% / 0.6) 0%, hsl(190 80% 40% / 0.3) 50%, transparent 80%)',
                }}
              />
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight whitespace-nowrap overflow-hidden">
                <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-lg font-black">KUSHAGRA VARDHAN</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent tracking-wide mb-6 font-semibold">
              HFT Infrastructure Architect
            </p>
            
            <p className="text-sm sm:text-base text-secondary-foreground mb-8 leading-relaxed max-w-md">
              Building ultra-low-latency trading systems with C++. Specializing in lock-free data structures, microsecond optimization, and high-performance market infrastructure.
            </p>

            {/* Tech specs */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm font-mono">
                <ArrowRight className="w-4 h-4 text-cyan-400" />
                <span><span className="text-cyan-400 font-bold">2M+</span> events/sec processing</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-mono">
                <ArrowRight className="w-4 h-4 text-cyan-300" />
                <span><span className="text-cyan-300 font-bold">&lt;50ns</span> sub-microsecond latency</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-mono">
                <ArrowRight className="w-4 h-4 text-blue-400" />
                <span><span className="text-blue-400 font-bold">C++17/20</span> with lock-free patterns</span>
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

          {/* RIGHT SIDE - Image with Tech Stack */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-2xl">
              {/* Glow background */}
              <div className="absolute inset-0 rounded-2xl blur-3xl opacity-40 -z-10"
                style={{
                  background: 'radial-gradient(ellipse at right, hsl(200 100% 50% / 0.5) 0%, transparent 70%)',
                }}
              />

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-background/50 backdrop-blur-xl p-8 shadow-2xl"
                style={{
                  boxShadow: '0 0 50px rgba(34, 211, 238, 0.2), inset 0 0 30px rgba(34, 211, 238, 0.1)'
                }}
              >
                <img 
                  src="https://github.com/user-attachments/assets/2d72e414-3a3e-4445-b2af-62c07bd4b90d"
                  alt="Developer workspace"
                  className="w-full h-auto rounded-lg"
                />

                {/* Tech Stack Badges */}
                <div className="mt-6 flex flex-wrap gap-3 justify-center">
                  <div className="px-4 py-2 rounded-lg bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 text-sm font-mono font-bold hover:bg-cyan-500/30 transition-all">
                    C++
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-500/50 text-blue-300 text-sm font-mono font-bold hover:bg-blue-500/30 transition-all">
                    Python
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-cyan-600/20 border border-cyan-600/50 text-cyan-200 text-sm font-mono font-bold hover:bg-cyan-600/30 transition-all">
                    SQL
                  </div>
                </div>

                {/* Info badge below */}
                <div className="mt-6 text-center">
                  <p className="text-xs text-cyan-400 font-mono uppercase tracking-wider">C++ Developer</p>
                  <p className="text-xs text-muted-foreground mt-1">Low-Latency | HFT | Computer Vision</p>
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
