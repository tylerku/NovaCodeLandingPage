import { Button } from '@/components/ui/button';
import { smoothScrollTo } from '@/lib/utils';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
      {/* Orbital decorations */}
      <div className="orbit w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 animate-spin-slow"></div>
      <div className="orbit w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 animate-spin-slow"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-space font-bold leading-tight">
              <span className="block mb-2">The Future of</span>
              <span className="text-gradient">Creation Has Arrived</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-xl">
              We empower entrepreneurs and dreamers by unlocking a future where beautiful, powerful software is no longer restricted to the rich or highly technical.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => smoothScrollTo('schedule')}
                className="bg-primary text-primary-foreground font-medium px-6 py-6 h-auto rounded-full glow-on-hover transition-all duration-300 text-center"
              >
                Schedule Your Launch Hour
              </Button>
              <Button 
                onClick={() => smoothScrollTo('how-it-works')}
                variant="outline" 
                className="border border-foreground/30 text-foreground px-6 py-6 h-auto rounded-full hover:border-secondary glow-purple transition-all duration-300 text-center"
              >
                See How It Works
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px] animate-float rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1635830625567-0f1616a4f4a8?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800&h=800" 
                alt="Futuristic purple and blue tech visualization" 
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-primary to-secondary p-5 rounded-xl">
              <div className="text-background font-medium">
                <span className="block font-bold">90%+</span>
                <span className="text-sm">Project Delivery<br/>Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
