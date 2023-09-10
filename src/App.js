import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Houses from './components/Houses/Houses';
import Featured from './components/Featured/Featured';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Houses />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
