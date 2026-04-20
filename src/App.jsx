import React, { useEffect } from 'react';
import './App.css';
import Navigation from './components/navbar/navbar';
import About from './components/about/about';
import Hero from './components/hero/hero';
import DancesSection from './components/dance/danceSelection';
import MultimediaSection from './components/multimedia/multimedia';
import TeamSection from './components/team/team';
import Footer from './components/footer/footer';

const App = () => {
  useEffect(() => {
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
      document.head.appendChild(link);
    }
    if (!document.querySelector('link[href*="fonts.googleapis.com/css2?family=Inter"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;400;500;600;700;800&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="app">
      <Navigation />
      <Hero />
      <div className="container">
        <About />
        <TeamSection />
        <DancesSection />
        <MultimediaSection />
      </div>
      <Footer />
    </div>
  );
};

export default App;