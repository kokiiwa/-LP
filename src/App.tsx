import React from 'react';
import { Header } from './components/Header';
import { Concerns } from './components/Concerns';
import { Overview } from './components/Overview';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { CaseStudies } from './components/CaseStudies';
import { Bonuses } from './components/Bonuses';
import { FinalCTA } from './components/FinalCTA';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Concerns />
      <Overview />
      <Benefits />
      <Testimonials />
      <CaseStudies />
      <Bonuses />
      <FinalCTA />
    </div>
  );
}

export default App;