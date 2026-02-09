import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="relative">
        {/* Hero Section */}
        <section className="relative z-10">
          <Hero />
        </section>
      </main>
    </div>
  );
};

export default Index;
