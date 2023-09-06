import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Houses from './components/Houses/Houses';
import Featured from './components/Featured/Featured';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Houses />
      <Featured />
    </div>
  );
}

export default App;
