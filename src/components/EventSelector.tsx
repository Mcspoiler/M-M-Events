import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, GraduationCap, Gift, Building, Baby, Sparkles, 
  Users, CheckCircle2, ArrowRight, Star, Utensils, Armchair, Cake
} from 'lucide-react';
import { EVENT_TYPES } from '../data';

const iconMap: Record<string, any> = {
  Heart,
  GraduationCap,
  Gift,
  Building,
  Baby,
  Sparkles,
  Users
};

// Beautiful imagery for catering, meals, best seating chairs, African graduations, weddings, and golden birthday cakes
const EVENT_IMAGES: Record<string, { main: string; caption: string; catering: string; seating: string; cake?: string }> = {
  wedding: {
    main: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600',
    caption: 'Elegant African Traditional Wedding Ceremony',
    catering: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=500',
    seating: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=500'
  },
  graduation: {
    main: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&q=80&w=600',
    caption: 'Academic Honor & Festive Family Reception',
    catering: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=500',
    seating: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=500'
  },
  birthday: {
    main: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=600',
    caption: 'Exquisite Birthday Cake Styled with Gold Flowers',
    catering: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=500',
    seating: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=500',
    cake: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=500'
  },
  corporate: {
    main: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600',
    caption: 'Elite Executive Retreat & Dinner Layout',
    catering: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=500',
    seating: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=500'
  },
  babyshower: {
    main: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=600',
    caption: 'Cozy Gold Rosette Celebration Display',
    catering: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=500',
    seating: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=500'
  },
  holiday: {
    main: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=600',
    caption: 'Festive Platter Buffet & Gathering Setup',
    catering: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=500',
    seating: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=500'
  },
  meetup: {
    main: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=600',
    caption: 'Luxury Lounges & Sitting Layout',
    catering: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=500',
    seating: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=500'
  }
};

export default function EventSelector() {
  const [activeTab, setActiveTab] = useState(EVENT_TYPES[0].id);

  const activeEvent = EVENT_TYPES.find((e) => e.id === activeTab) || EVENT_TYPES[0];
  const ActiveIcon = iconMap[activeEvent.iconName] || Users;
  const currentImages = EVENT_IMAGES[activeEvent.id] || EVENT_IMAGES.wedding;

  const handleEnquireScroll = () => {
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <section id="event-categories" className="py-24 bg-[#faf5e4]/95 border-y border-amber-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title - client friendly & no jargon */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-amber-100/50 text-amber-900 border border-amber-200 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-600" />
            <span>Celebration Style Catalog</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Discover your dream celebration style.
          </h2>
          <p className="text-xs text-slate-600 font-light">
            Select an option below to preview exactly how we organize luxury seating setups, customized birthday cakes, and mouth-watering catering menus.
          </p>
        </div>

        {/* Categories selector block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-14 items-start">
          
          {/* Left selectors menu */}
          <div className="lg:col-span-4 flex flex-col space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-2 mb-1 block">
              Choose Your Celebration:
            </span>
            {EVENT_TYPES.map((e) => {
              const Icon = iconMap[e.iconName] || Users;
              const isSelected = activeTab === e.id;
              return (
                <button
                  key={e.id}
                  onClick={() => setActiveTab(e.id)}
                  className={`flex items-center space-x-4 p-4 rounded-2xl border text-left transition-all duration-200 group cursor-pointer ${
                    isSelected
                      ? 'bg-white border-amber-200 shadow-md text-amber-950 ring-1 ring-amber-500/15'
                      : 'bg-transparent border-transparent text-slate-600 hover:bg-white/60 hover:text-amber-900'
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-amber-500 text-stone-950 border-amber-500 font-semibold shadow-sm'
                        : 'bg-white text-slate-500 border-slate-200/50 group-hover:border-amber-200 group-hover:text-amber-600'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xs tracking-tight">{e.name}</h4>
                    <p className={`text-[10px] font-light mt-0.5 truncate max-w-[200px] ${
                      isSelected ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      {e.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Display Detail card */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-3xl border border-amber-200/40 p-6 sm:p-8 shadow-xl relative overflow-hidden"
              >
                {/* Decorative Visual Ambiance Corner */}
                <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-tr from-amber-500/5 to-yellow-500/5 rounded-bl-full pointer-events-none" />

                <div className="flex items-center space-x-4 mb-6 relative z-10">
                  <div className="bg-amber-50 text-amber-700 p-3 rounded-2xl border border-amber-100">
                    <ActiveIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-widest">
                      CHOSEN CELEBRATION DESIGN
                    </span>
                    <h3 className="font-display text-xl font-bold text-slate-900 leading-none mt-1">
                      {activeEvent.name}
                    </h3>
                  </div>
                </div>

                {/* Grid layout containing descriptions and requested images side-by-side */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Info Column */}
                  <div className="md:col-span-7 space-y-5">
                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      {activeEvent.description}
                    </p>

                    {/* Services highlight row - jargon-free client-focused */}
                    <div className="bg-amber-50/20 border border-amber-100 rounded-2xl p-4.5 space-y-3.5">
                      <span className="text-[10px] font-bold text-amber-900 uppercase tracking-wider block">
                        Our Beautiful Arrangements For You:
                      </span>
                      
                      <div className="space-y-3.5 text-xs">
                        <div className="flex items-start space-x-2.5">
                          <CheckCircle2 className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-slate-800 block">Personalized Table Settings</span>
                            <span className="text-[10px] text-slate-500">Every seat is assigned beautifully, matching your guests dietary choices.</span>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2.5">
                          <CheckCircle2 className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-slate-800 block">Custom Web Invitation Cards</span>
                            <span className="text-[10px] text-slate-500">A personal website link sent directly to your family members via WhatsApp.</span>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2.5">
                          <CheckCircle2 className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-slate-800 block">Gourmet Chef Catering</span>
                            <span className="text-[10px] text-slate-500">Delicious African dishes, custom menus, and fresh cakes baked to perfection.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Image Showcases - Direct answer to "For everything you provide add an image like catering, seating" */}
                  <div className="md:col-span-5 space-y-4">
                    
                    {/* Main Theme Image */}
                    <div className="rounded-2xl overflow-hidden border border-amber-200 relative group shadow-sm">
                      <img 
                        src={currentImages.main} 
                        alt={currentImages.caption} 
                        className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105" 
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                      <span className="absolute bottom-2 left-2 text-[10px] font-bold text-amber-400">
                        {currentImages.caption}
                      </span>
                    </div>

                    {/* Inline small images for Catering Dishes & Seating Chairs */}
                    <div className="grid grid-cols-2 gap-2">
                      {/* Catering dish image */}
                      <div className="rounded-xl overflow-hidden border border-amber-100 relative h-20 shadow-sm">
                        <img 
                          src={currentImages.catering} 
                          alt="Exquisite catering dish meal" 
                          className="w-full h-full object-cover" 
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 to-transparent" />
                        <span className="absolute bottom-1 left-1.5 text-[8px] font-bold text-white flex items-center space-x-1">
                          <Utensils className="h-2 w-2 text-amber-400" />
                          <span>Gourmet Meal</span>
                        </span>
                      </div>

                      {/* Best sitting seats image */}
                      <div className="rounded-xl overflow-hidden border border-amber-100 relative h-20 shadow-sm">
                        <img 
                          src={currentImages.seating} 
                          alt="Best luxury sitting seat" 
                          className="w-full h-full object-cover" 
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 to-transparent" />
                        <span className="absolute bottom-1 left-1.5 text-[8px] font-bold text-white flex items-center space-x-1">
                          <Armchair className="h-2 w-2 text-amber-400" />
                          <span>Luxury Chair</span>
                        </span>
                      </div>
                    </div>

                    {/* Cake display specifically if birthday category */}
                    {activeEvent.id === 'birthday' && (
                      <div className="rounded-xl overflow-hidden border border-amber-200/50 bg-amber-50 p-2.5 flex items-center space-x-2.5">
                        <div className="h-10 w-10 rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src={currentImages.cake || 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=200'} 
                            alt="Birthday Golden Cake" 
                            className="h-full w-full object-cover" 
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-1 text-[9px] font-bold text-amber-800 uppercase">
                            <Cake className="h-3 w-3 text-amber-600" />
                            <span>Included Birthdays Special</span>
                          </div>
                          <span className="text-[10px] text-slate-600 block mt-0.5 leading-tight font-light">Custom tiered cake with sparkling gold roses & starry decor.</span>
                        </div>
                      </div>
                    )}

                  </div>

                </div>

                <div className="mt-6 pt-6 border-t border-amber-200/20 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <span className="text-[10px] text-slate-500">
                    We organize 100% of the arrangements so your milestone is completely spectacular and stress-free.
                  </span>
                  
                  <button
                    onClick={handleEnquireScroll}
                    className="inline-flex items-center space-x-1 text-xs font-bold text-amber-800 hover:text-amber-950 transition-colors cursor-pointer"
                  >
                    <span>Request Your Personal Blueprint</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
