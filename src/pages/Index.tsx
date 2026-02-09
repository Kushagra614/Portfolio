import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import MetricsDashboard from '@/components/MetricsDashboard';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <MetricsDashboard />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
