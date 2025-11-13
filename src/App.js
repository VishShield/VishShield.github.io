import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Ecosystem from './components/Ecosystem';
import Demo from './components/Demo';
import WhoWeSupport from './components/WhoWeSupport';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <Stats />
        <HowItWorks />
        <Features />
        <Ecosystem />
        <Demo />
        <WhoWeSupport />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

