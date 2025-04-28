import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { smoothScrollTo } from '@/lib/utils';

const LaunchHour = () => {
  return (
    <section id="launch-hour" className="py-20 relative section-fade">
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
          alt="Abstract tech background" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800&h=600" 
              alt="Team collaborating on software design" 
              className="rounded-xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-space font-bold">
              Begin with a <span className="text-gradient">Launch Hour</span>
            </h2>
            <p className="text-lg text-foreground/80">
              The Launch Hour is where your journey begins. In this focused session, we'll deeply understand your vision, explore possibilities, and map out a clear path forward.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Check className="text-primary mt-1 h-5 w-5" />
                <span className="text-foreground/80">Get a clear understanding of your project complexity and scope</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="text-primary mt-1 h-5 w-5" />
                <span className="text-foreground/80">Discuss feature requirements and design preferences</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="text-primary mt-1 h-5 w-5" />
                <span className="text-foreground/80">Receive a custom proposal tailored exactly to your vision</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="text-primary mt-1 h-5 w-5" />
                <span className="text-foreground/80">Understand pricing based on your project's unique needs</span>
              </li>
            </ul>
            <div className="pt-4">
              <Button 
                onClick={() => smoothScrollTo('schedule')}
                className="bg-primary text-primary-foreground font-medium px-6 py-3 rounded-full glow-on-hover transition-all duration-300"
              >
                Schedule Your Launch Hour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchHour;
