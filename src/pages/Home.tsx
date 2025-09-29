import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AppShowcase from '../components/AppShowcase';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <AppShowcase />
      <Testimonials />
    </>
  );
};

export default Home;
