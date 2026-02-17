import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import HFTShowcase from '@/components/HFTShowcase';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';

// Section Divider Component
const SectionDivider = ({ label }: { label: string }) => (
  <div className="relative py-12 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-500/30 bg-background/50 backdrop-blur-sm">
          <span className="text-cyan-400 font-mono text-sm">&lt;</span>
          <span className="text-foreground font-mono font-bold text-sm uppercase tracking-wider">{label}</span>
          <span className="text-blue-400 font-mono text-sm">/&gt;</span>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Gradient Border Frame - Top */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 z-50" style={{
        boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)'
      }} />
      
      {/* Gradient Border Frame - Bottom */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 z-50" style={{
        boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)'
      }} />
      
      {/* Gradient Border Frame - Left */}
      <div className="fixed left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-cyan-500 z-50" style={{
        boxShadow: '20px 0 20px rgba(34, 211, 238, 0.3)'
      }} />
      
      {/* Gradient Border Frame - Right */}
      <div className="fixed right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-cyan-500 z-50" style={{
        boxShadow: '-20px 0 20px rgba(34, 211, 238, 0.3)'
      }} />

      {/* Corner decorations */}
      <div className="fixed top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500 z-50" />
      <div className="fixed top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500 z-50" />
      <div className="fixed bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500 z-50" />
      <div className="fixed bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500 z-50" />

      {/* Main content with padding for borders */}
      <div className="min-h-screen bg-background text-foreground flex flex-col px-1">
        <Navigation />
        <main className="relative flex-1">
          {/* Hero Section */}
          <section className="relative z-10 w-full">
            <Hero />
          </section>

          {/* Divider */}
          <SectionDivider label="Experience" />

          {/* Experience Section */}
          <section className="relative z-10">
            <Experience />
          </section>

          {/* Divider */}
          <SectionDivider label="Technical_Stack" />

          {/* Skills Section */}
          <section className="relative z-10">
            <Skills />
          </section>

          {/* Divider */}
          <SectionDivider label="HFT_Showcase" />

          {/* HFT Showcase + Performance Metrics Section */}
          <section className="relative z-10">
            <HFTShowcase />
          </section>

          {/* Divider */}
          <SectionDivider label="Projects" />

          {/* Projects Section */}
          <section className="relative z-10">
            <Projects />
          </section>

          {/* Divider */}
          <SectionDivider label="Achievements" />

          {/* Achievements Section */}
          <section className="relative z-10">
            <Achievements />
          </section>

          {/* Divider */}
          <SectionDivider label="Contact" />

          {/* Contact Section */}
          <section className="relative z-10">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
