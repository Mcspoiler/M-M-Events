import { useState } from 'react';
import { Users, Check, X, Clock, Trash2, Plus, Mail, Phone } from 'lucide-react';
import { mockGuests, Guest } from '../../data/planningData';

export default function GuestManager() {
  const [guests, setGuests] = useState<Guest[]>(mockGuests);
  const [filter, setFilter] = useState<'all' | 'confirmed' | 'pending' | 'declined'>('all');
  const [newGuest, setNewGuest] = useState({ name: '', email: '', phone: '' });

  const filteredGuests = filter === 'all' 
    ? guests 
    : guests.filter(g => g.rsvp === filter);

  const stats = {
    total: guests.length,
    confirmed: guests.filter(g => g.rsvp === 'confirmed').length,
    pending: guests.filter(g => g.rsvp === 'pending').length,
    declined: guests.filter(g => g.rsvp === 'declined').length,
  };

  const updateRSVP = (id: string, rsvp: 'confirmed' | 'pending' | 'declined') => {
    setGuests(guests.map(g => g.id === id ? { ...g, rsvp } : g));
  };

  const removeGuest = (id: string) => {
    setGuests(guests.filter(g => g.id !== id));
  };

  const addGuest = () => {
    if (newGuest.name.trim() && newGuest.email.trim()) {
      setGuests([...guests, {
        id: Date.now().toString(),
        name: newGuest.name,
        email: newGuest.email,
        phone: newGuest.phone,
        rsvp: 'pending',
        dietary: 'None'
      }]);
      setNewGuest({ name: '', email: '', phone: '' });
    }
  };

  const getRSVPColor = (rsvp: string) => {
    switch (rsvp) {
      case 'confirmed': return 'bg-green-50 border-green-200 text-green-700';
      case 'declined': return 'bg-red-50 border-red-200 text-red-700';
      case 'pending': return 'bg-yellow-50 border-yellow-200 text-yellow-700';
      default: return 'bg-slate-50 border-slate-200 text-slate-700';
    }
  };

  const getRSVPIcon = (rsvp: string) => {
    switch (rsvp) {
      case 'confirmed': return <Check className="h-4 w-4" />;
      case 'declined': return <X className="h-4 w-4" />;
      case 'pending': return <Clock className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-lg p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Guest Manager</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-3">
          <p className="text-xs text-blue-600 font-semibold mb-1">Total Guests</p>
          <p className="text-2xl font-bold text-blue-900">{stats.total}</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-3">
          <p className="text-xs text-green-600 font-semibold mb-1">Confirmed</p>
          <p className="text-2xl font-bold text-green-900">{stats.confirmed}</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg p-3">
          <p className="text-xs text-yellow-600 font-semibold mb-1">Pending</p>
          <p className="text-2xl font-bold text-yellow-900">{stats.pending}</p>
        </div>
        <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-lg p-3">
          <p className="text-xs text-red-600 font-semibold mb-1">Declined</p>
          <p className="text-2xl font-bold text-red-900">{stats.declined}</p>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-6 pb-4 border-b border-slate-100 flex-wrap">
        {(['all', 'confirmed', 'pending', 'declined'] as const).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all capitalize ${
              filter === f
                ? 'bg-amber-500 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Guest List */}
      <div className="space-y-2 max-h-96 overflow-y-auto mb-6">
        {filteredGuests.map(guest => (
          <div key={guest.id} className="p-4 rounded-lg border border-slate-100 hover:border-amber-200 hover:bg-amber-50/20 transition-all group">
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex-1">
                <h3 className="text-sm font-bold text-slate-900">{guest.name}</h3>
                <div className="flex gap-3 text-xs text-slate-500 mt-1">
                  <div className="flex items-center gap-1">
                    <Mail className="h-3 w-3" />
                    {guest.email}
                  </div>
                  {guest.phone && (
                    <div className="flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      {guest.phone}
                    </div>
                  )}
                </div>
              </div>
              
              <button
                onClick={() => removeGuest(guest.id)}
                className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-50 rounded"
              >
                <Trash2 className="h-4 w-4 text-red-500" />
              </button>
            </div>

            {/* Dietary and RSVP Status */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex gap-2 items-center">
                {guest.dietary !== 'None' && (
                  <span className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-600">
                    {guest.dietary}
                  </span>
                )}
              </div>

              {/* RSVP Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => updateRSVP(guest.id, 'confirmed')}
                  className={`px-2 py-1 rounded text-xs font-medium transition-all flex items-center gap-1 border ${
                    guest.rsvp === 'confirmed'
                      ? 'bg-green-500 text-white border-green-600'
                      : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-green-50 hover:text-green-700'
                  }`}
                >
                  <Check className="h-3 w-3" />
                  Yes
                </button>
                <button
                  onClick={() => updateRSVP(guest.id, 'pending')}
                  className={`px-2 py-1 rounded text-xs font-medium transition-all flex items-center gap-1 border ${
                    guest.rsvp === 'pending'
                      ? 'bg-yellow-500 text-white border-yellow-600'
                      : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-yellow-50 hover:text-yellow-700'
                  }`}
                >
                  <Clock className="h-3 w-3" />
                  Maybe
                </button>
                <button
                  onClick={() => updateRSVP(guest.id, 'declined')}
                  className={`px-2 py-1 rounded text-xs font-medium transition-all flex items-center gap-1 border ${
                    guest.rsvp === 'declined'
                      ? 'bg-red-500 text-white border-red-600'
                      : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-red-50 hover:text-red-700'
                  }`}
                >
                  <X className="h-3 w-3" />
                  No
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add new guest */}
      <div className="border-t border-slate-100 pt-4 space-y-3">
        <p className="text-xs font-semibold text-slate-400 uppercase">Add New Guest</p>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={newGuest.name}
            onChange={(e) => setNewGuest({ ...newGuest, name: e.target.value })}
            placeholder="Guest name..."
            className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-amber-500"
          />
          <input
            type="email"
            value={newGuest.email}
            onChange={(e) => setNewGuest({ ...newGuest, email: e.target.value })}
            placeholder="Email..."
            className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-amber-500"
          />
          <input
            type="tel"
            value={newGuest.phone}
            onChange={(e) => setNewGuest({ ...newGuest, phone: e.target.value })}
            placeholder="Phone..."
            className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-amber-500"
          />
          <button
            onClick={addGuest}
            className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <Plus className="h-4 w-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
