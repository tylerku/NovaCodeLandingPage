import { PORTFOLIOS } from '@/lib/constants';

const PortfolioGrid = () => {
  return (
    <section id="portfolio" className="py-20 section-fade">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-space font-bold text-gradient inline">
            Our Portfolio
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Beautiful, powerful software that has transformed ideas into reality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIOS.map((project) => (
            <div key={project.id} className="glass-card rounded-xl overflow-hidden group">
              <div className="relative h-48">
                <img 
                  src={project.imageUrl}
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-xl font-space font-bold text-white">{project.title}</h3>
                    <p className="text-foreground/90">{project.subtitle}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => {
                    const tagColors = {
                      0: 'bg-primary/10 text-primary',
                      1: 'bg-secondary/10 text-secondary',
                      2: 'bg-accent/10 text-accent'
                    };
                    
                    const colorClass = tagColors[index % 3 as 0 | 1 | 2];
                    
                    return (
                      <span 
                        key={`${project.id}-${tag}`} 
                        className={`text-xs ${colorClass} px-2 py-1 rounded-full`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
                <p className="text-foreground/80 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
