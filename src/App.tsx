import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AplicationRouter } from './AplicationRouter';

function App() {
  return (
    <div>
      <Navbar />
      <AplicationRouter />
      <Footer />
    </div>
  );
}

export default App;
