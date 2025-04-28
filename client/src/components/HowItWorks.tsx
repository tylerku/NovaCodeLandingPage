import { Check, Code, Headphones, Rocket } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 gradient-bg section-fade">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-space font-bold text-gradient inline">
            How NovaCode Works
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Our three-step process is designed to transform your vision into reality with clarity, speed, and beauty.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="glass-card rounded-xl p-8 relative group">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mb-6">
              1
            </div>
            <h3 className="text-xl font-space font-bold mb-4">Discovery Call</h3>
            <p className="text-foreground/80">
              Schedule your Launch Hour where we listen deeply to your vision and begin mapping out how to bring it to life.
            </p>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Headphones className="text-primary h-6 w-6" />
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="glass-card rounded-xl p-8 relative group">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary-foreground font-bold mb-6">
              2
            </div>
            <h3 className="text-xl font-space font-bold mb-4">Custom Plan & Build</h3>
            <p className="text-foreground/80">
              Receive a tailored development plan and watch as we transform your concept into a beautiful, functional product.
            </p>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Code className="text-secondary h-6 w-6" />
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="glass-card rounded-xl p-8 relative group">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary-foreground font-bold mb-6">
              3
            </div>
            <h3 className="text-xl font-space font-bold mb-4">Launch & Grow</h3>
            <p className="text-foreground/80">
              We don't just deliver your product – we partner with you for ongoing support, improvements, and growth.
            </p>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Rocket className="text-accent h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
