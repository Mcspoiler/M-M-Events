import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import EventSelector from './components/EventSelector';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const [prefilledConfig, setPrefilledConfig] = useState<{ type: string; guests: number; date: string; vibes: string } | null>(null);

  const handleSelectEventConfig = (config: { type: string; guests: number; date: string; vibes: string }) => {
    setPrefilledConfig(config);
  };

  return (
    <div className="min-h-screen bg-[#faf5e4] text-slate-800 antialiased selection:bg-amber-500/15 selection:text-amber-800">
      {/* Navigation bar */}
      <Navbar />

      {/* Hero section containing dynamic carousel & planning configurator */}
      <Hero onSelectEventConfig={handleSelectEventConfig} />

      {/* Core interactive capabilities (adaptive checklists, guests manager, microsites) */}
      <Features />

      {/* Interactive event selector categories (Milestone catalog) */}
      <EventSelector />

      {/* Interactive, dynamic WhatsApp / Email dispatcher contact form */}
      <ContactForm prefilledData={prefilledConfig} />

      {/* Frequently Asked Questions accordion */}
      <FAQ />

      {/* Trust certifications and comprehensive footer */}
      <Footer />
    </div>
  );
}
