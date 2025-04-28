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
          <div className="absolute left-[25px] md:left-[50%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-accent"></div>
          
          {/* Step 1 - Launch Hour */}
          <div className="relative flex flex-col md:grid md:grid-cols-[1fr,60px,1fr] gap-4 md:gap-8 mb-16 md:mb-12">
            <div className="ml-14 md:ml-0 order-2 md:order-1">
              {/* Left side - Always cards on mobile and desktop */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Headphones className="text-primary h-6 w-6" />
                  <span className="text-primary font-medium">Discovery & Vision</span>
                </div>
                <p className="text-sm text-foreground/80">
                  We listen deeply to understand not just your idea, but the impact you want to create in the world.
                </p>
              </div>
            </div>
            
            <div className="relative flex justify-start md:justify-center items-start order-1 md:order-2">
              <div className="absolute w-8 h-8 rounded-full bg-primary border-4 border-background flex items-center justify-center text-primary-foreground font-bold z-10 left-0 md:left-auto top-0">
                1
              </div>
            </div>
            
            <div className="ml-14 md:ml-0 order-3">
              {/* Right side - Always explanation text on mobile and desktop */}
              <h3 className="text-xl font-space font-bold mb-2">Launch Hour</h3>
              <p className="text-foreground/80 mb-2">
                A focused 60-minute session where we deeply understand your vision, map possibilities, and chart a clear path forward.
              </p>
              <ul className="text-sm text-foreground/70 space-y-1">
                <li className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Discuss project scope and requirements</span>
                </li>
                <li className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Explore technical feasibility and approach</span>
                </li>
                <li className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Initial timeline and budget discussion</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Step 2 - Custom Plans */}
          <div className="relative flex flex-col md:grid md:grid-cols-[1fr,60px,1fr] gap-4 md:gap-8 mb-16 md:mb-12">
            <div className="ml-14 md:ml-0 order-2 md:order-1">
              {/* Left side - Always cards */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="text-secondary h-6 w-6" />
                  <span className="text-secondary font-medium">Strategic Planning</span>
                </div>
                <p className="text-sm text-foreground/80">
                  AI-enhanced planning allows us to optimize your development roadmap for success.
                </p>
              </div>
            </div>
            
            <div className="relative flex justify-start md:justify-center items-start order-1 md:order-2">
              <div className="absolute w-8 h-8 rounded-full bg-secondary border-4 border-background flex items-center justify-center text-primary-foreground font-bold z-10 left-0 md:left-auto top-0">
                2
              </div>
            </div>
            
            <div className="ml-14 md:ml-0 order-3">
              {/* Right side - Always explanation text */}
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
          <div className="relative flex flex-col md:grid md:grid-cols-[1fr,60px,1fr] gap-4 md:gap-8 mb-16 md:mb-12">
            <div className="ml-14 md:ml-0 order-2 md:order-1">
              {/* Left side - Always cards */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="text-accent h-6 w-6" />
                  <span className="text-accent font-medium">Rapid Creation</span>
                </div>
                <p className="text-sm text-foreground/80">
                  Experience the magic of seeing your vision come to life with extraordinary speed and precision.
                </p>
              </div>
            </div>
            
            <div className="relative flex justify-start md:justify-center items-start order-1 md:order-2">
              <div className="absolute w-8 h-8 rounded-full bg-accent border-4 border-background flex items-center justify-center text-primary-foreground font-bold z-10 left-0 md:left-auto top-0">
                3
              </div>
            </div>
            
            <div className="ml-14 md:ml-0 order-3">
              {/* Right side - Always explanation text */}
              <h3 className="text-xl font-space font-bold mb-2">AI-Enhanced Build</h3>
              <p className="text-foreground/80 mb-2">
                Our expert engineers leverage cutting-edge AI to rapidly transform your plan into a beautiful, working product.
              </p>
              <ul className="text-sm text-foreground/70 space-y-1">
                <li className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>Accelerated development cycles</span>
                </li>
                <li className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>Beautiful, intuitive design</span>
                </li>
                <li className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>Regular progress updates</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Step 4 - Launch & Care */}
          <div className="relative flex flex-col md:grid md:grid-cols-[1fr,60px,1fr] gap-4 md:gap-8">
            <div className="ml-14 md:ml-0 order-2 md:order-1">
              {/* Left side - Always cards */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Rocket className="text-primary h-6 w-6" />
                  <span className="text-primary font-medium">Continuous Growth</span>
                </div>
                <p className="text-sm text-foreground/80">
                  Our relationship extends beyond launch as we help your product evolve and thrive.
                </p>
              </div>
            </div>
            
            <div className="relative flex justify-start md:justify-center items-start order-1 md:order-2">
              <div className="absolute w-8 h-8 rounded-full bg-primary border-4 border-background flex items-center justify-center text-primary-foreground font-bold z-10 left-0 md:left-auto top-0">
                4
              </div>
            </div>
            
            <div className="ml-14 md:ml-0 order-3">
              {/* Right side - Always explanation text */}
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
