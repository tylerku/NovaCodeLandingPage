import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { smoothScrollTo } from '@/lib/utils';
import { useNavbarScroll } from '@/lib/animations';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useNavbarScroll();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (elementId: string) => {
    smoothScrollTo(elementId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 transition-all duration-300" id="navbar">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <span className="text-2xl font-space font-bold text-gradient">NovaCode</span>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => handleNavClick('how-it-works')} 
                className="text-soft-silver hover:text-primary transition-colors duration-300 font-medium text-sm"
              >
                How It Works
              </button>
              <button 
                onClick={() => handleNavClick('launch-hour')} 
                className="text-soft-silver hover:text-primary transition-colors duration-300 font-medium text-sm"
              >
                Launch Hour
              </button>
              <button 
                onClick={() => handleNavClick('care-plans')} 
                className="text-soft-silver hover:text-primary transition-colors duration-300 font-medium text-sm"
              >
                Care Plans
              </button>
              <button 
                onClick={() => handleNavClick('portfolio')} 
                className="text-soft-silver hover:text-primary transition-colors duration-300 font-medium text-sm"
              >
                Portfolio
              </button>
              <button 
                onClick={() => handleNavClick('about')} 
                className="text-soft-silver hover:text-primary transition-colors duration-300 font-medium text-sm"
              >
                About
              </button>
              <Button 
                onClick={() => handleNavClick('schedule')}
                className="hollow-button text-white font-medium bg-transparent px-5 py-2 rounded-full transition-all duration-300 text-sm shadow-glow"
              >
                Schedule Launch Hour
              </Button>
            </div>
          </div>
          <div className="lg:hidden">
            <button 
              onClick={toggleMobileMenu} 
              className="text-soft-silver hover:text-primary transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`lg:hidden bg-background border-t border-border ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button 
            onClick={() => handleNavClick('how-it-works')} 
            className="block px-3 py-2 w-full text-left text-soft-silver hover:text-primary transition-colors duration-300"
          >
            How It Works
          </button>
          <button 
            onClick={() => handleNavClick('launch-hour')} 
            className="block px-3 py-2 w-full text-left text-soft-silver hover:text-primary transition-colors duration-300"
          >
            Launch Hour
          </button>
          <button 
            onClick={() => handleNavClick('care-plans')} 
            className="block px-3 py-2 w-full text-left text-soft-silver hover:text-primary transition-colors duration-300"
          >
            Care Plans
          </button>
          <button 
            onClick={() => handleNavClick('portfolio')} 
            className="block px-3 py-2 w-full text-left text-soft-silver hover:text-primary transition-colors duration-300"
          >
            Portfolio
          </button>
          <button 
            onClick={() => handleNavClick('about')} 
            className="block px-3 py-2 w-full text-left text-soft-silver hover:text-primary transition-colors duration-300"
          >
            About
          </button>
          <div className="px-3 py-3">
            <Button 
              onClick={() => handleNavClick('schedule')}
              className="hollow-button text-white font-medium px-5 py-2 rounded-full transition-all duration-300 text-sm hover:shadow-glow w-full"
            >
              Schedule Launch Hour
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
