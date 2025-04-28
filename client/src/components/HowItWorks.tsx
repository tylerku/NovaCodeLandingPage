import { Check, Code, Headphones, Rocket, FileText, Sparkles } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 gradient-bg section-fade">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-space font-bold text-gradient inline">
            How NovaCode Works
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Our simple four-step process transforms your vision into reality with clarity, speed, and beautiful execution.
          </p>
        </div>
        
        {/* Timeline process */}
        <div className="max-w-4xl mx-auto relative">
          {/* Connecting line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-[1px]"></div>
          
          {/* Step 1 - Launch Hour */}
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 mb-12">
            <div className="md:col-span-2 md:text-right order-2 md:order-1">
              <h3 className="text-xl font-space font-bold mb-2">Launch Hour</h3>
              <p className="text-foreground/80 mb-2">
                A focused 60-minute session where we deeply understand your vision, map possibilities, and chart a clear path forward.
              </p>
              <ul className="text-sm text-foreground/70 space-y-1">
                <li className="flex items-center justify-end gap-1">
                  <span>Discuss project scope and requirements</span>
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                </li>
                <li className="flex items-center justify-end gap-1">
                  <span>Explore technical feasibility and approach</span>
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                </li>
                <li className="flex items-center justify-end gap-1">
                  <span>Initial timeline and budget discussion</span>
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                </li>
              </ul>
            </div>
            
            <div className="relative md:col-span-1 flex justify-center items-start order-1 md:order-2">
              <div className="w-8 h-8 rounded-full bg-primary border-4 border-background flex items-center justify-center text-primary-foreground font-bold z-10">
                1
              </div>
            </div>
            
            <div className="glass-card md:col-span-2 p-6 order-3">
              <div className="flex items-center gap-3 mb-3">
                <Headphones className="text-primary h-6 w-6" />
                <span className="text-primary font-medium">Discovery & Vision</span>
              </div>
              <p className="text-sm text-foreground/80">
                We listen deeply to understand not just your idea, but the impact you want to create in the world.
              </p>
            </div>
          </div>
          
          {/* Step 2 - Custom Plans */}
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 mb-12">
            <div className="glass-card md:col-span-2 p-6 order-3 md:order-1">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="text-secondary h-6 w-6" />
                <span className="text-secondary font-medium">Strategic Planning</span>
              </div>
              <p className="text-sm text-foreground/80">
                AI-enhanced planning allows us to optimize your development roadmap for success.
              </p>
            </div>
            
            <div className="relative md:col-span-1 flex justify-center items-start order-1 md:order-2">
              <div className="w-8 h-8 rounded-full bg-secondary border-4 border-background flex items-center justify-center text-primary-foreground font-bold z-10">
                2
              </div>
            </div>
            
            <div className="md:col-span-2 order-2 md:order-3">
              <h3 className="text-xl font-space font-bold mb-2">Custom Plans</h3>
              <p className="text-foreground/80 mb-2">
                Receive both a Business Plan and Development Plan tailored exactly to your vision, enhanced by AI insights.
              </p>
              <ul className="text-sm text-foreground/70 space-y-1">
                <li className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span>Detailed technical specifications</span>
                </li>
                <li className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span>Clear project scope and deliverables</span>
                </li>
                <li className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span>Transparent pricing based on complexity</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Step 3 - AI-Enhanced Build */}
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 mb-12">
            <div className="md:col-span-2 md:text-right order-2 md:order-1">
              <h3 className="text-xl font-space font-bold mb-2">AI-Enhanced Build</h3>
              <p className="text-foreground/80 mb-2">
                Our expert engineers leverage cutting-edge AI to rapidly transform your plan into a beautiful, working product.
              </p>
              <ul className="text-sm text-foreground/70 space-y-1">
                <li className="flex items-center justify-end gap-1">
                  <span>Accelerated development cycles</span>
                  <Check className="h-4 w-4 text-accent flex-shrink-0" />
                </li>
                <li className="flex items-center justify-end gap-1">
                  <span>Beautiful, intuitive design</span>
                  <Check className="h-4 w-4 text-accent flex-shrink-0" />
                </li>
                <li className="flex items-center justify-end gap-1">
                  <span>Regular progress updates</span>
                  <Check className="h-4 w-4 text-accent flex-shrink-0" />
                </li>
              </ul>
            </div>
            
            <div className="relative md:col-span-1 flex justify-center items-start order-1 md:order-2">
              <div className="w-8 h-8 rounded-full bg-accent border-4 border-background flex items-center justify-center text-primary-foreground font-bold z-10">
                3
              </div>
            </div>
            
            <div className="glass-card md:col-span-2 p-6 order-3">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="text-accent h-6 w-6" />
                <span className="text-accent font-medium">Rapid Creation</span>
              </div>
              <p className="text-sm text-foreground/80">
                Experience the magic of seeing your vision come to life with extraordinary speed and precision.
              </p>
            </div>
          </div>
          
          {/* Step 4 - Launch & Care */}
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8">
            <div className="glass-card md:col-span-2 p-6 order-3 md:order-1">
              <div className="flex items-center gap-3 mb-3">
                <Rocket className="text-primary h-6 w-6" />
                <span className="text-primary font-medium">Continuous Growth</span>
              </div>
              <p className="text-sm text-foreground/80">
                Our relationship extends beyond launch as we help your product evolve and thrive.
              </p>
            </div>
            
            <div className="relative md:col-span-1 flex justify-center items-start order-1 md:order-2">
              <div className="w-8 h-8 rounded-full bg-primary border-4 border-background flex items-center justify-center text-primary-foreground font-bold z-10">
                4
              </div>
            </div>
            
            <div className="md:col-span-2 order-2 md:order-3">
              <h3 className="text-xl font-space font-bold mb-2">Launch & Care</h3>
              <p className="text-foreground/80 mb-2">
                We don't just deliver your product – we partner with you for ongoing support, improvements, and growth through our Care Plans.
              </p>
              <ul className="text-sm text-foreground/70 space-y-1">
                <li className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Seamless deployment and launch</span>
                </li>
                <li className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Ongoing maintenance and improvements</span>
                </li>
                <li className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Strategic growth partnership</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
