import ContactForm from './ContactForm';
import { STEPS } from '@/lib/constants';
import { Rocket, MessagesSquare, FileCheck, Code } from 'lucide-react';

const FinalCTA = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'rocket':
        return <Rocket className="text-primary h-5 w-5" />;
      case 'messages-square':
        return <MessagesSquare className="text-secondary h-5 w-5" />;
      case 'file-check':
        return <FileCheck className="text-accent h-5 w-5" />;
      case 'code':
        return <Code className="text-primary h-5 w-5" />;
      default:
        return <Rocket className="text-primary h-5 w-5" />;
    }
  };
  
  const getColorClass = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/10';
      case 'secondary':
        return 'bg-secondary/10';
      case 'accent':
        return 'bg-accent/10';
      default:
        return 'bg-primary/10';
    }
  };
  
  return (
    <section id="schedule" className="py-20 relative section-fade">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&q=80" 
          alt="Abstract cosmic background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto glass-card rounded-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-space font-bold">
              Ready to <span className="text-gradient">Transform Your Vision</span> Into Reality?
            </h2>
            <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
              Schedule your Launch Hour and begin your journey with NovaCode today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ContactForm />
            </div>
            
            <div className="space-y-6">
              {STEPS.map((step) => (
                <div key={step.id} className="flex items-start space-x-4">
                  <div className={`w-10 h-10 rounded-full ${getColorClass(step.color)} flex items-center justify-center flex-shrink-0`}>
                    {getIcon(step.icon)}
                  </div>
                  <div>
                    <h3 className="font-space font-bold">{step.title}</h3>
                    <p className="text-foreground/80 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
