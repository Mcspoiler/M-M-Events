import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, ArrowRight, Calendar, Users, 
  MapPin, Heart, GraduationCap, Gift, Building, 
  CheckCircle, Star, Sparkle, Layers
} from 'lucide-react';
import { EVENT_TYPES } from '../data';

const CAROUSEL_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800',
    title: 'Flawless African Weddings',
    tagline: 'Joyful smiles, exquisite traditional or contemporary attire, custom curated menus, and perfect visual settings.',
    label: 'CULTURAL LUXURY'
  },
  {
    image: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&q=80&w=800',
    title: 'Elite Graduation Galas',
    tagline: 'Honor monumental achievements with proud, radiant smiles, and dynamic family reception banquets.',
    label: 'ACADEMIC PRESTIGE'
  },
  {
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
    title: 'High-Scale Corporate Retreats',
    tagline: 'Streamlined breakouts, executive speaker timelines, and professional registration setups.',
    label: 'CORPORATE'
  },
  {
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800',
    title: 'Vibrant Birthdays & Cakes',
    tagline: 'Magnificent multi-tiered custom cakes styled with gold dust, organic fresh-cut roses, and premium setups.',
    label: 'FESTIVE BLISS'
  }
];

interface HeroProps {
  onSelectEventConfig: (config: { type: string; guests: number; date: string; vibes: string }) => void;
}

export default function Hero({ onSelectEventConfig }: HeroProps) {
  const [slideIdx, setSlideIdx] = useState(0);
  const [plannerOpen, setPlannerOpen] = useState(false);
  
  // Input state
  const [selectedType, setSelectedType] = useState('Weddings');
  const [guestCount, setGuestCount] = useState(150);
  const [eventDate, setEventDate] = useState('2026-09-12');
  const [eventVibes, setEventVibes] = useState('elegant, floral and eco-friendly');

  // Auto scroll carousel slides
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleLaunchPlanner = () => {
    setPlannerOpen(true);
    setTimeout(() => {
      document.getElementById('planner-stage')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const handleConfirmPlannerSelection = (e: FormEvent) => {
    e.preventDefault();
    onSelectEventConfig({
      type: selectedType,
      guests: guestCount,
      date: eventDate,
      vibes: eventVibes
    });
    
    // Smooth scroll down to contact form
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  };

  // Dynamically estimate requirements based on guest count selection
  const getHostingEstimates = () => {
    let venueType = 'Boutique Private Lounge & Velvet Seating';
    let cateringStyle = 'Plated Fine Dining with Gourmet Platters';
    let staffing = '1 Dedicated Celebration Concierge + 2 Servers';

    if (guestCount > 300) {
      venueType = 'Grand Garden Grounds with Premium Luxury Seating';
      cateringStyle = 'Premium Buffet Dishes, Platters & Live Hot Meals';
      staffing = 'Host Director + 15 Professional Buffet Servers';
    } else if (guestCount > 100) {
      venueType = 'Elegant Banquet Pavilion & Custom Gold Chairs';
      cateringStyle = 'Gourmet Shared Family Dishes & Side Meals';
      staffing = 'Celebration Coordinator + 6 Guest Servers';
    } else if (guestCount > 30) {
      venueType = 'Intimate Secret Garden & Comfortable Lounge Seats';
      cateringStyle = 'High-end Plated Meals & Warm Savory Platter';
      staffing = 'Lead Celebration Host + 4 Guest Servers';
    }

    return { venueType, cateringStyle, staffing };
  };

  const { venueType, cateringStyle, staffing } = getHostingEstimates();

  return (
    <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 bg-gradient-to-b from-amber-100/50 via-[#faf5e4]/90 to-[#faf5e4] overflow-hidden">
      {/* Dynamic golden gradients representing elegance and luxury */}
      <div className="absolute top-0 left-1/4 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-amber-300/25 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-yellow-400/20 rounded-full blur-3xl translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Main Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-100/80 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase shadow-sm">
              <Sparkle className="h-3.5 w-3.5 text-amber-500" />
              <span>Your Premium Celebration Planner</span>
            </div>

            {/* Display Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Every life milestone.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-700 to-yellow-600">
                Beautifully Hosted.
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-600 font-light text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Find the perfect style for your wedding, graduation, retreat, or milestone celebration. Tell us your vision, and M&M Events will orchestrate every single detail—from gorgeous custom setups and catering to seamless calendar scheduling.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={handleLaunchPlanner}
                className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold px-8 py-4 rounded-2xl shadow-lg shadow-amber-100 hover:shadow-amber-200 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Browse & Configure</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <a
                href="#event-categories"
                className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto bg-white hover:bg-stone-50 text-slate-700 font-semibold px-8 py-4 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all cursor-pointer"
              >
                <span>Find Event Styles</span>
              </a>
            </div>

            {/* Trust Indicator Checkmarks */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3">
              {[
                'Full-Service Catering & Florals',
                'Custom Invitation Microsites Included',
                'Professional On-Site Coordinators'
              ].map((bullet) => (
                <div key={bullet} className="flex items-center space-x-2 text-xs text-slate-600">
                  <CheckCircle className="h-4 w-4 text-amber-600 flex-shrink-0" />
                  <span className="font-semibold">{bullet}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Hero Visual Block - Carousel & Configurator */}
          <div className="lg:col-span-5 relative" id="planner-stage">
            
            <AnimatePresence mode="wait">
              {!plannerOpen ? (
                // Carousel Display Card
                <motion.div
                  key="carousel-mode"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl border border-slate-100 shadow-2xl p-5 overflow-hidden md:max-w-md mx-auto relative group"
                >
                  {/* Decorative Slide Indicator */}
                  <span className="absolute top-4 right-4 bg-stone-950/75 text-amber-400 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] font-mono font-bold tracking-widest z-20">
                    {CAROUSEL_SLIDES[slideIdx].label}
                  </span>

                  {/* Slide Image */}
                  <div className="h-56 sm:h-64 rounded-2xl overflow-hidden relative">
                    <img
                      src={CAROUSEL_SLIDES[slideIdx].image}
                      alt={CAROUSEL_SLIDES[slideIdx].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent z-10" />
                  </div>

                  {/* Slide details */}
                  <div className="pt-4 space-y-2">
                    <div className="flex items-center space-x-1">
                      <div className="flex space-x-1">
                        {CAROUSEL_SLIDES.map((_, i) => (
                          <div
                            key={i}
                            onClick={() => setSlideIdx(i)}
                            className={`h-1.5 rounded-full cursor-pointer transition-all ${
                              i === slideIdx ? 'bg-amber-600 w-4' : 'bg-slate-200 w-1.5'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <h3 className="font-display text-xl font-bold text-slate-900 mt-2">
                      {CAROUSEL_SLIDES[slideIdx].title}
                    </h3>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">
                      {CAROUSEL_SLIDES[slideIdx].tagline}
                    </p>
                  </div>
                </motion.div>
              ) : (
                // Interactive Configuration Preview Tool
                <motion.div
                  key="planner-mode"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl border border-slate-100 shadow-2xl p-6 md:p-8 overflow-hidden md:max-w-md mx-auto relative"
                >
                  {/* Top Progress bar */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600" />
                  
                  <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                    <div className="flex items-center space-x-2">
                      <Layers className="h-4 w-4 text-amber-500" />
                      <span className="font-display font-bold text-slate-900 text-sm">Your Celebration Blueprint</span>
                    </div>
                    <button
                      onClick={() => setPlannerOpen(false)}
                      className="text-xs text-slate-400 hover:text-slate-600 font-medium font-mono cursor-pointer"
                    >
                      CLOSE
                    </button>
                  </div>

                  <form onSubmit={handleConfirmPlannerSelection} className="space-y-4 pt-4">
                    {/* Event category selector icons */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Event Category</label>
                      <div className="grid grid-cols-4 gap-2">
                        {[
                          { name: 'Weddings', icon: Heart },
                          { name: 'Graduations', icon: GraduationCap },
                          { name: 'Birthdays', icon: Gift },
                          { name: 'Corporate', icon: Building }
                        ].map((item) => {
                          const Icon = item.icon;
                          const isSel = selectedType === item.name;
                          return (
                            <button
                              type="button"
                              key={item.name}
                              onClick={() => setSelectedType(item.name)}
                              className={`flex flex-col items-center justify-center p-2 rounded-xl border text-center transition-all cursor-pointer ${
                                isSel 
                                  ? 'border-amber-500 bg-amber-50/50 text-amber-900 ring-2 ring-amber-500/10' 
                                  : 'border-slate-100 text-slate-500 hover:bg-slate-50'
                              }`}
                            >
                              <Icon className="h-4 w-4" />
                              <span className="text-[9px] font-medium mt-1">{item.name}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Guest Slider */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Estimated Guests</label>
                        <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">
                          {guestCount} Guests
                        </span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="1000"
                        step="5"
                        value={guestCount}
                        onChange={(e) => setGuestCount(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-amber-600"
                        id="guest-slider"
                      />
                    </div>

                    {/* Quick Preview Specs based on parameters */}
                    <div className="bg-amber-50/30 border border-amber-100 rounded-2xl p-3 space-y-2 text-xs">
                      <span className="text-[9px] font-bold text-amber-800 uppercase tracking-wider block">Estimated Requirements:</span>
                      <div className="space-y-1 text-slate-700">
                        <p className="flex justify-between">
                          <span className="text-slate-400">Recommended Venue:</span>
                          <span className="font-semibold text-right max-w-[180px] truncate">{venueType}</span>
                        </p>
                        <p className="flex justify-between">
                          <span className="text-slate-400">Catering Style:</span>
                          <span className="font-semibold text-right max-w-[180px] truncate">{cateringStyle}</span>
                        </p>
                        <p className="flex justify-between">
                          <span className="text-slate-400">Hosting Staff:</span>
                          <span className="font-semibold text-right max-w-[180px] truncate">{staffing}</span>
                        </p>
                      </div>
                    </div>

                    {/* Date picker */}
                    <div className="space-y-1.5">
                      <label htmlFor="wizard-date" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Target Event Date</label>
                      <input
                        type="date"
                        id="wizard-date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-3 py-2 text-xs text-slate-700 focus:outline-none focus:border-amber-500 cursor-pointer"
                      />
                    </div>

                    {/* Submit selection */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold py-3.5 rounded-xl shadow-lg shadow-amber-100 hover:shadow-amber-200 transition-all cursor-pointer"
                    >
                      <Sparkles className="h-4 w-4 text-stone-950" />
                      <span className="text-xs">Request Hosting Assistance</span>
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
}
