import { useState } from 'react';
import Navbar from './components/Navbar';
import PlanningPage from './components/planning/PlanningPage';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf5e4] text-slate-800 antialiased selection:bg-amber-500/15 selection:text-amber-800">
      {/* Navigation bar */}
      <Navbar />

      {/* Comprehensive Event Planning Page */}
      <PlanningPage />

      {/* Trust certifications and comprehensive footer */}
      <Footer />
    </div>
  );
}
