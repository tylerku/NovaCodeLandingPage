import { useEffect } from 'react';
import { fadeInOnScroll } from './utils';

export const useScrollAnimation = () => {
  useEffect(() => {
    // Run once on mount
    fadeInOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', fadeInOnScroll);
    
    return () => {
      window.removeEventListener('scroll', fadeInOnScroll);
    };
  }, []);
};

export const useNavbarScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('bg-background/90', 'backdrop-blur-md', 'shadow-md');
        } else {
          navbar.classList.remove('bg-background/90', 'backdrop-blur-md', 'shadow-md');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};
