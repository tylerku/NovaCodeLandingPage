import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import { smoothScrollTo } from '@/lib/utils';

const Footer = () => {
  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
    { icon: <Github className="h-5 w-5" />, href: '#', label: 'GitHub' }
  ];

  const quickLinks = [
    { name: 'Home', target: 'hero' },
    { name: 'How It Works', target: 'how-it-works' },
    { name: 'Launch Hour', target: 'launch-hour' },
    { name: 'Care Plans', target: 'care-plans' },
    { name: 'Portfolio', target: 'portfolio' },
    { name: 'About Us', target: 'about' }
  ];

  const services = [
    { name: 'NovaCode Launch', target: 'launch-hour' },
    { name: 'NovaCode Care', target: 'care-plans' },
    { name: 'Web Applications', href: '#' },
    { name: 'Mobile Applications', href: '#' },
    { name: 'Custom Software', href: '#' },
    { name: 'UI/UX Design', href: '#' }
  ];

  const contactInfo = [
    { icon: <Mail className="text-primary h-5 w-5" />, text: 'hello@novacode.dev' },
    { icon: <Phone className="text-primary h-5 w-5" />, text: '(555) 123-4567' },
    { icon: <MapPin className="text-primary h-5 w-5" />, text: 'San Francisco, CA' }
  ];

  return (
    <footer className="py-12 border-t border-foreground/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <span className="text-2xl font-space font-bold text-gradient">NovaCode</span>
            </div>
            <p className="text-foreground/70 mb-6">
              Empowering entrepreneurs and dreamers by unlocking a future where beautiful, powerful software is accessible to all.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="text-foreground/70 hover:text-primary transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-space font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => smoothScrollTo(link.target)} 
                    className="text-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-space font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  {service.target ? (
                    <button 
                      onClick={() => smoothScrollTo(service.target)} 
                      className="text-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      {service.name}
                    </button>
                  ) : (
                    <a 
                      href={service.href} 
                      className="text-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      {service.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-space font-bold mb-6">Contact</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  {item.icon}
                  <span className="text-foreground/70">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">&copy; {new Date().getFullYear()} NovaCode. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors duration-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
