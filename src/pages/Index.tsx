import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import HFTShowcase from '@/components/HFTShowcase';
import MetricsDashboard from '@/components/MetricsDashboard';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="relative">
        {/* Hero Section */}
        <section className="relative z-10">
          <Hero />
        </section>

        {/* HFT Showcase Section */}
        <section className="relative z-10 -mt-8">
          <HFTShowcase />
        </section>

        {/* Metrics Section */}
        <section className="relative z-10 -mt-8">
          <MetricsDashboard />
        </section>

        {/* Projects Section */}
        <section className="relative z-10 -mt-8">
          <Projects />
        </section>

        {/* Skills Section */}
        <section className="relative z-10 -mt-8">
          <Skills />
        </section>

        {/* Achievements Section */}
        <section className="relative z-10 -mt-8">
          <Achievements />
        </section>

        {/* Contact Section */}
        <section className="relative z-10 -mt-8">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
