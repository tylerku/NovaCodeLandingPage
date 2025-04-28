import { Button } from '@/components/ui/button';
import { smoothScrollTo } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-background/70"></div>
      <div className="orbit w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 animate-spin-slow"></div>
      <div className="orbit w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 animate-spin-slow"></div>
      
      {/* Central glowing orb */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block mb-3 px-4 py-1 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
            <span className="text-sm font-medium text-primary animate-pulse">The Future of Software Creation</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-space font-bold leading-tight tracking-tight mb-6">
            <span className="block mb-2">Turn Your Vision Into</span>
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">Reality Without Code</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10">
            NovaCode empowers entrepreneurs to create stunning, powerful software without technical expertise. We build your dream application at a fraction of traditional costs.
          </p>
          
          {/* Central CTA */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button 
              onClick={() => smoothScrollTo('schedule')}
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium px-8 py-7 h-auto text-lg rounded-lg shadow-glow hover:shadow-glow-intense transition-all duration-300 flex items-center gap-2 group"
            >
              Schedule Your Launch Hour
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              onClick={() => smoothScrollTo('how-it-works')}
              variant="outline" 
              className="bg-background/30 backdrop-blur-sm border border-primary/20 text-foreground px-8 py-7 h-auto text-lg rounded-lg hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
            >
              See How It Works
            </Button>
          </div>
        </div>
        
        {/* Success metrics cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="relative bg-background/20 backdrop-blur-md border border-foreground/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-3xl font-bold text-gradient mb-2">100%+</div>
              <p className="text-foreground/70">Project Delivery Success Rate</p>
            </div>
          </div>
          <div className="relative bg-background/20 backdrop-blur-md border border-foreground/10 rounded-xl p-6 hover:border-secondary/30 transition-all duration-300 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-3xl font-bold text-gradient mb-2">30%+</div>
              <p className="text-foreground/70">Cost Savings vs Traditional Development</p>
            </div>
          </div>
          <div className="relative bg-background/20 backdrop-blur-md border border-foreground/10 rounded-xl p-6 hover:border-accent/30 transition-all duration-300 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-3xl font-bold text-gradient mb-2">2x</div>
              <p className="text-foreground/70">Faster Development & Deployment</p>
            </div>
          </div>
        </div>
        
        {/* Stylish image placement */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="relative rounded-xl overflow-hidden group shadow-glow">
            <img 
              src="/hero-image.png" 
              alt="Futuristic digital workspace with purple and blue tech accents" 
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            
            {/* Floating badges */}
            <div className="absolute top-4 left-4 bg-background/20 backdrop-blur-sm rounded-lg border border-primary/30 px-3 py-1 text-sm font-medium">
              Beautiful Design
            </div>
            <div className="absolute top-4 right-4 bg-background/20 backdrop-blur-sm rounded-lg border border-secondary/30 px-3 py-1 text-sm font-medium">
              Powerful Features
            </div>
            <div className="absolute bottom-4 left-4 bg-background/20 backdrop-blur-sm rounded-lg border border-accent/30 px-3 py-1 text-sm font-medium">
              Expert Development
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
