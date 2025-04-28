import { useEffect } from 'react';
import { useScrollAnimation } from '@/lib/animations';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import LaunchHour from '@/components/LaunchHour';
import CarePlans from '@/components/CarePlans';
import PortfolioGrid from '@/components/PortfolioGrid';
import AboutSection from '@/components/AboutSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Home = () => {
  useScrollAnimation();

  return (
    <>
      <Helmet>
        <title>NovaCode | The Future of Creation Has Arrived</title>
        <meta name="description" content="NovaCode empowers entrepreneurs and dreamers by unlocking a future where beautiful, powerful software is no longer restricted to the rich or highly technical." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      
      <Navbar />
      <HeroSection />
      <LaunchHour />
      <HowItWorks />
      <CarePlans />
      <PortfolioGrid />
      {/* <AboutSection /> */}
      <TestimonialsCarousel />
      <FinalCTA />
      <Footer />
    </>
  );
};

export default Home;
