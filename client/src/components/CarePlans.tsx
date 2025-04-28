import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { smoothScrollTo } from '@/lib/utils';

const CarePlans = () => {
  return (
    <section id="care-plans" className="py-20 gradient-bg section-fade">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-space font-bold text-gradient inline">
            NovaCode Care Plans
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            We don't just build and leave. Our Care Plans ensure your software continues to evolve and grow with your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="glass-card rounded-xl overflow-hidden group hover:border-primary transition-all duration-300">
            <div className="p-8">
              <h3 className="text-xl font-space font-bold mb-2">Starter Care</h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-3xl font-bold text-primary">$500</span>
                <span className="text-foreground/60">/month</span>
              </div>
              <p className="text-foreground/80 mb-6">
                Perfect for maintaining your new application and making minor improvements.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="text-primary mt-1 h-4 w-4" />
                  <span className="text-foreground/80">2 feature changes/improvements monthly</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-primary mt-1 h-4 w-4" />
                  <span className="text-foreground/80">Bug fixes and maintenance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-primary mt-1 h-4 w-4" />
                  <span className="text-foreground/80">Standard response time</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-primary mt-1 h-4 w-4" />
                  <span className="text-foreground/80">Monthly performance report</span>
                </li>
              </ul>
              <Button 
                onClick={() => smoothScrollTo('schedule')}
                variant="outline"
                className="w-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-6 py-3 rounded-full transition-all duration-300"
              >
                Get Started
              </Button>
            </div>
          </div>
          
          {/* Growth Plan */}
          <div className="glass-card rounded-xl overflow-hidden border border-secondary group transition-all duration-300 relative">
            <div className="absolute top-0 right-0 bg-secondary text-primary-foreground text-xs font-bold px-3 py-1">
              MOST POPULAR
            </div>
            <div className="p-8">
              <h3 className="text-xl font-space font-bold mb-2">Growth Care</h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-3xl font-bold text-secondary">$1,000</span>
                <span className="text-foreground/60">/month</span>
              </div>
              <p className="text-foreground/80 mb-6">
                Ideal for businesses actively expanding their application with new features.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="text-secondary mt-1 h-4 w-4" />
                  <span className="text-foreground/80">5 feature changes/improvements monthly</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-secondary mt-1 h-4 w-4" />
                  <span className="text-foreground/80">Priority bug fixes and maintenance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-secondary mt-1 h-4 w-4" />
                  <span className="text-foreground/80">Faster response time</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-secondary mt-1 h-4 w-4" />
                  <span className="text-foreground/80">Bi-weekly performance reports</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-secondary mt-1 h-4 w-4" />
                  <span className="text-foreground/80">Monthly strategy call</span>
                </li>
              </ul>
              <Button 
                onClick={() => smoothScrollTo('schedule')}
                className="w-full bg-secondary text-primary-foreground font-medium px-6 py-3 rounded-full glow-purple transition-all duration-300"
              >
                Get Started
              </Button>
            </div>
          </div>
          
          {/* Enterprise Plan */}
          <div className="glass-card rounded-xl overflow-hidden group hover:border-accent transition-all duration-300">
            <div className="p-8">
              <h3 className="text-xl font-space font-bold mb-2">Enterprise Care</h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-3xl font-bold text-accent">Custom</span>
              </div>
              <p className="text-foreground/80 mb-6">
                For larger organizations with complex and evolving software needs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="text-accent mt-1 h-4 w-4" />
                  <span className="text-foreground/80">Unlimited feature changes/improvements</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-accent mt-1 h-4 w-4" />
                  <span className="text-foreground/80">24/7 emergency support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-accent mt-1 h-4 w-4" />
                  <span className="text-foreground/80">Dedicated development team</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-accent mt-1 h-4 w-4" />
                  <span className="text-foreground/80">Weekly performance reports</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-accent mt-1 h-4 w-4" />
                  <span className="text-foreground/80">Strategic partnership & roadmapping</span>
                </li>
              </ul>
              <Button 
                onClick={() => smoothScrollTo('schedule')}
                variant="outline"
                className="w-full border border-accent text-accent hover:bg-accent hover:text-primary-foreground font-medium px-6 py-3 rounded-full transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarePlans;
