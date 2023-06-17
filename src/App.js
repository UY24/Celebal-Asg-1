import './App.css';
import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import CTA from './pages/CTA/CTA';
import Colaborations from './pages/Collaborations/Colaborations';
import Contact from './pages/Contact/Contact';
import Features from './pages/Features/Features';

function App() {
  return (
    <div className="App">
      <div className='landing-page'>
        <Header />
        <Home />
      </div>
      <Features />
      <CTA />
      <About />
      <Colaborations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
