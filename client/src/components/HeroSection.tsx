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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-space font-bold leading-tight tracking-tight mb-6 mt-6">
            <span className="block mb-2">Bring Your Vision to Life —</span>
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">Faster, Smarter, Powered by AI</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10">
            NovaCode combines world-class engineering and cutting-edge AI to build your dream software product — faster, smarter, and more affordably than ever before.
          </p>
          
          {/* Central CTA */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button 
              onClick={() => smoothScrollTo('schedule')}
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium px-8 py-5 h-auto text-lg rounded-lg shadow-glow hover:shadow-glow-intense transition-all duration-300 flex items-center gap-2 group"
            >
              Schedule Your Launch Hour
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              onClick={() => smoothScrollTo('how-it-works')}
              variant="outline" 
              className="bg-background/30 backdrop-blur-sm border border-primary/20 text-foreground px-8 py-5 h-auto text-lg rounded-lg hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
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
              <div className="text-3xl font-bold text-gradient mb-1">100%+</div>
              <p className="text-foreground/70 mb-1">Project Delivery Success Rate</p>
              <p className="text-xs text-foreground/50 italic">Based on our track record of completed projects delivered on time</p>
            </div>
          </div>
          <div className="relative bg-background/20 backdrop-blur-md border border-foreground/10 rounded-xl p-6 hover:border-secondary/30 transition-all duration-300 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-3xl font-bold text-gradient mb-1">30-50%</div>
              <p className="text-foreground/70 mb-1">Cost Savings vs Traditional Development</p>
              <p className="text-xs text-foreground/50 italic">Compared to industry standard development costs for similar projects</p>
            </div>
          </div>
          <div className="relative bg-background/20 backdrop-blur-md border border-foreground/10 rounded-xl p-6 hover:border-accent/30 transition-all duration-300 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-3xl font-bold text-gradient mb-1">2x</div>
              <p className="text-foreground/70 mb-1">Faster Development & Deployment</p>
              <p className="text-xs text-foreground/50 italic">Our AI-enhanced workflow slashes traditional development timelines in half</p>
            </div>
          </div>
        </div>

        {/* Why NovaCode - AI Advantage Section */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-space font-bold mb-3">
              <span className="text-gradient">Why NovaCode?</span> The AI Advantage
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Real engineers. Supercharged by AI. Delivered at a fraction of traditional cost and time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
