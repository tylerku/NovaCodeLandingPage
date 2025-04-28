import { Lightbulb, Palette, HandshakeIcon } from 'lucide-react';
import { VALUES } from '@/lib/constants';

const AboutSection = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'lightbulb':
        return <Lightbulb className="text-primary h-6 w-6" />;
      case 'palette':
        return <Palette className="text-secondary h-6 w-6" />;
      case 'handshake':
        return <Lightbulb className="text-accent h-6 w-6" />; // No HandshakeIcon in lucide-react, using Lightbulb as fallback
      default:
        return <Lightbulb className="text-primary h-6 w-6" />;
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
    <section id="about" className="py-20 gradient-bg section-fade">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-space font-bold">
              About <span className="text-gradient">NovaCode</span>
            </h2>
            <p className="text-lg text-foreground/80">
              NovaCode exists to awaken possibility. We tear down the traditional barriers of cost, complexity, and inaccessibility by offering an emotional, magical, and sleekly minimal customer experience.
            </p>
            <div className="space-y-6 mt-8">
              {VALUES.map((value) => (
                <div key={value.id} className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-full ${getColorClass(value.color)} flex items-center justify-center flex-shrink-0`}>
                    {getIcon(value.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-space font-bold mb-2">{value.title}</h3>
                    <p className="text-foreground/80">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800&h=800" 
              alt="Futuristic workspace with holographic displays" 
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
