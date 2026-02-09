import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      <main className="relative flex-1">
        {/* Hero Section */}
        <section className="relative z-10 w-full">
          <Hero />
        </section>
      </main>
    </div>
  );
};

export default Index;
