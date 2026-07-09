import { useState, FormEvent } from 'react';
import { 
  ListTodo, Users, Laptop, Plus, MapPin, 
  ArrowRight, Sparkles, UtensilsCrossed, Armchair, CakeSlice
} from 'lucide-react';
import { ChecklistItem } from '../types';

// Beautiful African events, premium catering meals, luxury seats, and golden birthday cakes
const IMAGES = {
  cateringPlatter: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800',
  gourmetDish: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
  bestSeats: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800',
  luxuryChairs: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=800',
  goldenCake: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800',
  africanCouple: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800',
  africanGraduate: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&q=80&w=800'
};

export default function Features() {
  const [activeTab, setActiveTab] = useState<'checklist' | 'guests' | 'microsite'>('checklist');

  // --- TAB 1: Checklist Scale State ---
  const [checklistScale, setChecklistScale] = useState<'micro' | 'macro'>('macro');
  const [customTodoText, setCustomTodoText] = useState('');

  const [macroChecklist, setMacroChecklist] = useState<ChecklistItem[]>([
    { id: '1', text: 'Secure premium venue banquet pavilion with golden decor themes', category: 'Venue', checked: false },
    { id: '2', text: 'Select luxury seating layout & custom gold-trimmed velvet chairs', category: 'Seating', checked: true },
    { id: '3', text: 'Select gourmet catering menus featuring signature African & fusion delicacies', category: 'Catering', checked: false },
    { id: '4', text: 'Design custom double-tier celebration cake styled with elegant gold dust', category: 'Cake & Sweets', checked: false },
    { id: '5', text: 'Prepare beautiful personalized digital invitations for friends & family', category: 'Invitations', checked: false },
  ]);

  const [microChecklist, setMicroChecklist] = useState<ChecklistItem[]>([
    { id: '1', text: 'Arrange exquisite lounge seating & set up warm ambient lighting', category: 'Seating', checked: true },
    { id: '2', text: 'Order gourmet food platters & curated signature beverage cups', category: 'Catering', checked: false },
    { id: '3', text: 'Prepare elegant customized birthday cake decorated with gold roses', category: 'Cake', checked: false },
    { id: '4', text: 'Distribute personalized invitation links directly via WhatsApp', category: 'Invites', checked: false },
  ]);

  const activeChecklist = checklistScale === 'macro' ? macroChecklist : microChecklist;

  const toggleChecklistVal = (id: string) => {
    if (checklistScale === 'macro') {
      setMacroChecklist(prev => prev.map(t => t.id === id ? { ...t, checked: !t.checked } : t));
    } else {
      setMicroChecklist(prev => prev.map(t => t.id === id ? { ...t, checked: !t.checked } : t));
    }
  };

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
    if (!customTodoText.trim()) return;
    const newItem: ChecklistItem = {
      id: Math.random().toString(),
      text: customTodoText,
      category: 'My Request',
      checked: false
    };
    if (checklistScale === 'macro') {
      setMacroChecklist(prev => [...prev, newItem]);
    } else {
      setMicroChecklist(prev => [...prev, newItem]);
    }
    setCustomTodoText('');
  };

  // --- TAB 2: Guest Management State ---
  const [guests, setGuests] = useState([
    { name: 'Sarah Jenkins', rsvp: 'Attending', diet: 'Gluten-Free', table: 'Table 1 (VIP Golden Circle)', seat: 'Luxury Velvet Chair A1' },
    { name: 'Marcus Sterling', rsvp: 'Attending', diet: 'Vegan', table: 'Table 1 (VIP Golden Circle)', seat: 'Luxury Velvet Chair A2' },
    { name: 'Emily Thorne', rsvp: 'Maybe', diet: 'None', table: 'Table 2 (Main Hall)', seat: 'Elegant Gold Banquet Seat B1' },
    { name: 'Daniel Park', rsvp: 'Attending', diet: 'Halal', table: 'Table 2 (Main Hall)', seat: 'Elegant Gold Banquet Seat B2' },
    { name: 'Chloe Vance', rsvp: 'Declined', diet: 'None', table: 'Unassigned', seat: 'None' }
  ]);
  const [newGuestName, setNewGuestName] = useState('');
  const [newGuestDiet, setNewGuestDiet] = useState('None');

  const handleAddGuest = (e: FormEvent) => {
    e.preventDefault();
    if (!newGuestName.trim()) return;
    const randomSeatNum = Math.floor(Math.random() * 20) + 1;
    setGuests(prev => [
      ...prev,
      {
        name: newGuestName,
        rsvp: 'Attending',
        diet: newGuestDiet,
        table: `Table ${Math.floor(Math.random() * 3) + 1}`,
        seat: `Elegant Gold Banquet Seat C${randomSeatNum}`
      }
    ]);
    setNewGuestName('');
    setNewGuestDiet('None');
  };

  // --- TAB 3: Custom Invitation State ---
  const [siteTheme, setSiteTheme] = useState<'minimalist' | 'warm_gold' | 'emerald'>('warm_gold');
  const [siteTitle, setSiteTitle] = useState('Celebrate Our Special Milestone');
  const [showMaps, setShowMaps] = useState(true);

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-[#faf5e4] via-amber-50/15 to-[#faf5e4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title & Headline - client focused & jargon-free */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-amber-50 border border-amber-200 text-amber-800 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            <span>Your Personal Planning Suite</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Design your celebration, down to the perfect detail.
          </h2>
          <p className="text-sm text-slate-600 font-light max-w-2xl mx-auto">
            Review your custom wedding, graduation, or birthday templates below. Coordinate your catering dishes, choose the best sitting luxury seats, and preview beautiful golden cakes.
          </p>
        </div>

        {/* Tab Headers - client-friendly wording */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 border-b border-amber-200/30 pb-6">
          {[
            { id: 'checklist', label: 'Your Custom Checklist', icon: ListTodo, desc: 'Instantly updates with your event size' },
            { id: 'guests', label: 'Your Seating & Gourmet Coordinator', icon: Users, desc: 'Pick the best seats & meal options' },
            { id: 'microsite', label: 'Your Custom Invitation Page', icon: Laptop, desc: 'Beautiful templates for your guests' }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-btn-${tab.id}`}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                  isActive 
                    ? 'bg-amber-950 text-amber-100 border-amber-950 shadow-md scale-102 font-semibold' 
                    : 'bg-white text-slate-600 border-amber-200/50 hover:bg-amber-50 hover:border-amber-300'
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-amber-400' : 'text-amber-600'}`} />
                <div className="flex flex-col">
                  <span className="text-xs font-bold leading-none">{tab.label}</span>
                  <span className="text-[10px] text-slate-400 mt-1 leading-none">
                    {tab.desc}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Tab Body Showcase Container */}
        <div className="bg-white/90 rounded-3xl border border-amber-200/40 p-6 md:p-8 lg:p-10 shadow-xl">
          
          {/* TAB 1: Your Custom Checklist */}
          {activeTab === 'checklist' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 bg-amber-50 text-amber-800 border border-amber-100 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    <ListTodo className="h-3.5 w-3.5 text-amber-600" />
                    <span>Inquiry Blueprint</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900">
                    Your Tailored Checklist
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Every step is designed around your unique vision. Select your expected guest scale below to see how your wedding details, catering menus, and seating requirements automatically customize to match your scope.
                  </p>

                  {/* Scale Switch buttons */}
                  <div className="bg-amber-50/50 border border-amber-200/40 rounded-2xl p-1.5 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setChecklistScale('micro')}
                      className={`flex-1 text-center py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        checklistScale === 'micro'
                          ? 'bg-amber-500 text-stone-950 shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      🏡 Intimate Vibe (Up to 30 Guests)
                    </button>
                    <button
                      type="button"
                      onClick={() => setChecklistScale('macro')}
                      className={`flex-1 text-center py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        checklistScale === 'macro'
                          ? 'bg-amber-500 text-stone-950 shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      👑 Grand Vibe (150+ Guests)
                    </button>
                  </div>
                </div>

                {/* Added visual layout showcasing catering/meals and cake */}
                <div className="bg-amber-50/40 border border-amber-100/60 rounded-2xl p-4 space-y-3">
                  <div className="flex items-center space-x-2 text-amber-800 font-semibold text-xs">
                    <UtensilsCrossed className="h-4 w-4" />
                    <span>Your Catering Showcase</span>
                  </div>
                  <p className="text-[11px] text-slate-600 font-light">
                    We arrange authentic, elegantly prepared African delicacies and continental cuisines. Here is a preview of the gourmet plated buffet:
                  </p>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="h-20 rounded-xl overflow-hidden relative border border-amber-200">
                      <img 
                        src={IMAGES.cateringPlatter} 
                        alt="Gourmet catering food plate" 
                        className="w-full h-full object-cover" 
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-1 left-1 bg-stone-950/70 text-white text-[8px] font-bold px-1.5 py-0.5 rounded">
                        Platter Buffet
                      </div>
                    </div>
                    <div className="h-20 rounded-xl overflow-hidden relative border border-amber-200">
                      <img 
                        src={IMAGES.gourmetDish} 
                        alt="Elegant plated dish meal" 
                        className="w-full h-full object-cover" 
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-1 left-1 bg-stone-950/70 text-white text-[8px] font-bold px-1.5 py-0.5 rounded">
                        Fine Dining Meal
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Checklist display */}
              <div className="lg:col-span-8 bg-amber-50/10 rounded-2xl border border-amber-200/30 p-6 flex flex-col justify-between min-h-[420px]">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-amber-200/20">
                    <span className="text-xs font-bold text-amber-900/60 font-mono tracking-wider">
                      {checklistScale === 'macro' ? 'GRAND CELEBRATION PATHWAY' : 'INTIMATE GATHERING PATHWAY'}
                    </span>
                    <span className="text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-200 px-2 py-0.5 rounded uppercase">
                      Client Portal Customizer
                    </span>
                  </div>

                  {/* Checklist tasks mapping */}
                  <div className="space-y-2">
                    {activeChecklist.map((task) => (
                      <div
                        key={task.id}
                        onClick={() => toggleChecklistVal(task.id)}
                        className={`flex items-start justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${
                          task.checked
                            ? 'border-amber-200 bg-amber-100/10 text-slate-400 line-through'
                            : 'border-amber-200/40 bg-white hover:bg-amber-50/30 text-slate-700 shadow-sm'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`h-5 w-5 rounded border flex items-center justify-center transition-colors ${
                            task.checked ? 'bg-amber-600 border-amber-600 text-white' : 'border-amber-300 bg-white'
                          }`}>
                            {task.checked && <span className="text-stone-950 text-xs font-bold">✓</span>}
                          </div>
                          <span className="text-xs font-medium">{task.text}</span>
                        </div>
                        <span className="text-[9px] font-mono font-bold bg-amber-100/60 text-amber-800 px-2.5 py-0.5 rounded uppercase">
                          {task.category}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Add Custom request */}
                <form onSubmit={handleAddTodo} className="mt-6 flex gap-2 pt-4 border-t border-amber-200/20">
                  <input
                    type="text"
                    value={customTodoText}
                    onChange={(e) => setCustomTodoText(e.target.value)}
                    placeholder="Type any specific arrangement or cake preference you'd like us to include..."
                    className="flex-1 bg-white border border-amber-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 focus:outline-none focus:border-amber-500"
                  />
                  <button
                    type="submit"
                    className="bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-colors cursor-pointer flex items-center space-x-1"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add to Checklist</span>
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* TAB 2: Seating & Gourmet Coordinator */}
          {activeTab === 'guests' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 bg-amber-50 text-amber-800 border border-amber-100 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    <Armchair className="h-3.5 w-3.5 text-amber-600" />
                    <span>Your Seating Comfort</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900">
                    Seating & Meal Arrangements
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Every attendee gets the best experience. Review your guest list, assign luxury seats with beautiful gold-trimmed detail, and record dietary preferences effortlessly so everyone feels honored.
                  </p>

                  {/* Summary of guest numbers */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-amber-50/50 border border-amber-100 rounded-xl p-2.5 text-center">
                      <span className="text-[10px] text-slate-500 block font-medium">Attending</span>
                      <span className="text-sm font-bold text-slate-900">182 Guests</span>
                    </div>
                    <div className="bg-amber-50/50 border border-amber-100 rounded-xl p-2.5 text-center">
                      <span className="text-[10px] text-slate-500 block font-medium">Lounge Seats</span>
                      <span className="text-sm font-bold text-slate-900">182 Premium</span>
                    </div>
                    <div className="bg-amber-50/50 border border-amber-100 rounded-xl p-2.5 text-center">
                      <span className="text-[10px] text-slate-500 block font-medium">Meal Requests</span>
                      <span className="text-sm font-bold text-amber-700 font-mono">Completed</span>
                    </div>
                  </div>
                </div>

                {/* Showcase the BEST sitting seats / Luxury chairs image */}
                <div className="bg-amber-50/40 border border-amber-100/60 rounded-2xl p-4 space-y-3">
                  <div className="flex items-center space-x-2 text-amber-800 font-semibold text-xs">
                    <Armchair className="h-4 w-4" />
                    <span>Our Premium Luxury Seating</span>
                  </div>
                  <p className="text-[11px] text-slate-600 font-light">
                    We prepare beautiful, luxury gold-framed seats and round velvet dining table set-ups. Here is our signature layout:
                  </p>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="h-20 rounded-xl overflow-hidden relative border border-amber-200">
                      <img 
                        src={IMAGES.bestSeats} 
                        alt="Elegantly decorated wedding reception luxury chairs" 
                        className="w-full h-full object-cover" 
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-1 left-1 bg-stone-950/70 text-white text-[8px] font-bold px-1.5 py-0.5 rounded">
                        Banquet Layout
                      </div>
                    </div>
                    <div className="h-20 rounded-xl overflow-hidden relative border border-amber-200">
                      <img 
                        src={IMAGES.luxuryChairs} 
                        alt="Luxury gold border chairs setup" 
                        className="w-full h-full object-cover" 
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-1 left-1 bg-stone-950/70 text-white text-[8px] font-bold px-1.5 py-0.5 rounded">
                        Velvet Seats
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guest spreadsheet table */}
              <div className="lg:col-span-8 bg-amber-50/10 rounded-2xl border border-amber-200/30 p-5 flex flex-col justify-between min-h-[420px]">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-amber-200/20">
                    <span className="text-xs font-bold text-amber-900/60 font-mono tracking-wider">YOUR CELEBRATION ATTENDEE LIST</span>
                    <span className="text-[9px] font-mono font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                      SEATING & DINNER LIVE ASSIGNMENT
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-amber-200/20 text-[10px] font-bold text-amber-800 uppercase">
                          <th className="pb-2">Guest Name</th>
                          <th className="pb-2">Attendance Choice</th>
                          <th className="pb-2">Dietary Request</th>
                          <th className="pb-2">Table Assigned</th>
                          <th className="pb-2">Luxury Seat Reserved</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-amber-200/10 text-xs">
                        {guests.map((g) => (
                          <tr key={g.name} className="hover:bg-amber-50/40">
                            <td className="py-2.5 font-bold text-slate-800">{g.name}</td>
                            <td className="py-2.5">
                              <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase ${
                                g.rsvp === 'Attending' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' :
                                g.rsvp === 'Maybe' ? 'bg-amber-50 text-amber-700 border border-amber-100' : 'bg-slate-100 text-slate-400'
                              }`}>
                                {g.rsvp}
                              </span>
                            </td>
                            <td className="py-2.5">
                              <span className={`font-mono text-[10px] ${g.diet !== 'None' ? 'text-amber-700 font-bold' : 'text-slate-400'}`}>
                                {g.diet}
                              </span>
                            </td>
                            <td className="py-2.5 text-slate-600 font-semibold">{g.table}</td>
                            <td className="py-2.5 text-amber-900 font-bold text-[10px]">{g.seat}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Add new guest */}
                <form onSubmit={handleAddGuest} className="mt-4 flex flex-col sm:flex-row gap-2 pt-4 border-t border-amber-200/20">
                  <input
                    type="text"
                    value={newGuestName}
                    onChange={(e) => setNewGuestName(e.target.value)}
                    placeholder="Enter guest name (e.g. Alice Cooper)..."
                    className="flex-1 bg-white border border-amber-200 rounded-xl px-3.5 py-2 text-xs text-slate-700 focus:outline-none focus:border-amber-500"
                  />
                  <select
                    value={newGuestDiet}
                    onChange={(e) => setNewGuestDiet(e.target.value)}
                    className="bg-white border border-amber-200 rounded-xl px-3.5 py-2 text-xs text-slate-700 focus:outline-none focus:border-amber-500 cursor-pointer"
                  >
                    <option value="None">Standard Menu (No restriction)</option>
                    <option value="Gluten-Free">Gluten-Free Delicacies</option>
                    <option value="Vegan">Vegan Platter</option>
                    <option value="Nut Allergy">Nut Allergy Alert</option>
                    <option value="Halal">Halal Delicacies</option>
                  </select>
                  <button
                    type="submit"
                    className="bg-amber-500 hover:bg-amber-600 text-stone-950 text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer"
                  >
                    Add Guest & Assign Seat
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* TAB 3: Custom Digital Invitation Webpage */}
          {activeTab === 'microsite' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 bg-amber-50 text-amber-800 border border-amber-100 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    <Laptop className="h-3.5 w-3.5 text-amber-600" />
                    <span>Elegantly Designed For Guests</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900">
                    Your Personalized Web Invitation
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Every guest receives a gorgeous customized invitation page. They can RSVP instantly, see direct Google Maps directions to the venue, and view photos of the cake and celebratory dishes!
                  </p>

                  {/* Customizable live values */}
                  <div className="bg-amber-50/30 border border-amber-100 rounded-2xl p-4 space-y-4">
                    <span className="text-[10px] font-bold text-amber-900 uppercase tracking-wider block">Customize Invitation details:</span>
                    
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-500">Edit Invitation Header:</label>
                      <input
                        type="text"
                        value={siteTitle}
                        onChange={(e) => setSiteTitle(e.target.value)}
                        className="w-full bg-white border border-amber-200 rounded-xl px-3 py-2 text-xs text-slate-700 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-500">Select Invitation Colorway:</label>
                      <div className="grid grid-cols-3 gap-1.5">
                        {['minimalist', 'warm_gold', 'emerald'].map((thm) => (
                          <button
                            key={thm}
                            type="button"
                            onClick={() => setSiteTheme(thm as any)}
                            className={`text-[10px] py-1.5 rounded font-bold uppercase cursor-pointer border ${
                              siteTheme === thm
                                ? 'bg-amber-950 text-amber-100 border-amber-950 font-bold'
                                : 'bg-white text-slate-600 border-amber-200/50 hover:bg-amber-50'
                            }`}
                          >
                            {thm === 'warm_gold' ? 'Royal Gold' : thm}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-amber-200/20">
                      <span className="text-[10px] font-bold text-slate-500">Enable Google Maps Directions:</span>
                      <input
                        type="checkbox"
                        checked={showMaps}
                        onChange={(e) => setShowMaps(e.target.checked)}
                        className="h-4 w-4 rounded text-amber-600 accent-amber-600 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Gorgeous golden cake representation & details */}
                <div className="bg-amber-50/40 border border-amber-100/60 rounded-2xl p-4 space-y-3">
                  <div className="flex items-center space-x-2 text-amber-800 font-semibold text-xs">
                    <CakeSlice className="h-4 w-4" />
                    <span>Your Beautiful Custom Cake</span>
                  </div>
                  <p className="text-[11px] text-slate-600 font-light">
                    Every birthday or milestone deserves an exquisite custom-tiered cake, hand-decorated with gold dust, rose petals, and delicious flavors:
                  </p>
                  <div className="h-32 rounded-xl overflow-hidden relative border border-amber-200 shadow-sm">
                    <img 
                      src={IMAGES.goldenCake} 
                      alt="Exquisite birthday cake with gold flowers and stars" 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                    <span className="absolute bottom-2 left-2 text-xs font-bold text-amber-400">
                      🎂 Signature Gold Rosette Cake
                    </span>
                  </div>
                </div>
              </div>

              {/* Invitation mockup layout */}
              <div className="lg:col-span-8 flex justify-center">
                <div className="w-full max-w-sm bg-stone-950 rounded-[40px] border-[8px] border-amber-900/40 shadow-2xl p-4 flex flex-col justify-between min-h-[460px] relative overflow-hidden">
                  
                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-4 bg-amber-950/50 rounded-b-2xl z-20" />

                  {/* Inner Content matching selected theme */}
                  <div className={`flex-1 rounded-[28px] p-5 flex flex-col justify-between relative overflow-hidden ${
                    siteTheme === 'minimalist' ? 'bg-white text-slate-900' :
                    siteTheme === 'warm_gold' ? 'bg-gradient-to-br from-stone-950 via-amber-950/80 to-stone-900 text-amber-100' :
                    'bg-emerald-950 text-emerald-50'
                  }`}>
                    {/* Header bar */}
                    <div className="flex justify-between items-center text-[8px] font-mono tracking-widest uppercase opacity-75 border-b border-current/10 pb-2">
                      <span>CELEBRATION DIGITAL PASS</span>
                      <span>RSVP STATUS: CONFIRMED</span>
                    </div>

                    {/* Site title display */}
                    <div className="text-center py-6 space-y-2">
                      <h4 className="font-bold text-sm tracking-tight leading-tight">
                        {siteTitle}
                      </h4>
                      <p className="text-[9px] font-mono opacity-80 uppercase tracking-widest">
                        September 12 • Nairobi, Kenya
                      </p>
                    </div>

                    {/* Integrated food & seating preview inside the invitation! */}
                    <div className="border border-current/10 bg-black/25 rounded-2xl p-3 space-y-2">
                      <span className="text-[8px] font-bold block text-center uppercase tracking-widest text-amber-400">Included on your guest card:</span>
                      <div className="grid grid-cols-2 gap-2 text-[8px] opacity-90">
                        <div className="space-y-1">
                          <span className="block font-bold">🍽️ Gourmet Dish Selection:</span>
                          <span className="block opacity-75">Spiced Roast Platter & Warm Spiced Delicacies</span>
                        </div>
                        <div className="space-y-1">
                          <span className="block font-bold">🪑 Premium Reserved Seat:</span>
                          <span className="block opacity-75">Luxury Velvet Gold-Border Chair A1</span>
                        </div>
                      </div>
                    </div>

                    {/* Google Maps directions block */}
                    {showMaps && (
                      <div className="bg-white text-slate-800 rounded-xl p-2.5 mt-3 text-center space-y-1 border border-amber-200 shadow-sm">
                        <div className="flex items-center justify-center space-x-1.5 text-amber-600">
                          <MapPin className="h-3 w-3 text-rose-500 animate-bounce" />
                          <span className="text-[9px] font-bold">Google Maps Navigation</span>
                        </div>
                        <p className="text-[8px] text-slate-500 leading-tight">
                          Exquisite Pavilion Banquets, Nairobi.<br />
                          <span className="font-semibold text-slate-700">Guests enjoy free secured parking</span>
                        </p>
                      </div>
                    )}

                    {/* RSVP Action button */}
                    <div className="pt-4 mt-auto">
                      <button type="button" className={`w-full py-2.5 rounded-xl text-center text-[10px] font-bold tracking-wider uppercase transition-transform hover:scale-102 ${
                        siteTheme === 'minimalist' ? 'bg-amber-600 text-white' :
                        siteTheme === 'warm_gold' ? 'bg-amber-500 text-stone-950' :
                        'bg-emerald-600 text-white'
                      }`}>
                        Accept Invitation & Save Seat
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
