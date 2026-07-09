import { useState } from 'react';
import { MapPin, Mail, Phone, Star, Filter, X } from 'lucide-react';
import { mockVendors, Vendor } from '../../data/planningData';

export default function VendorDirectory() {
  const [vendors, setVendors] = useState<Vendor[]>(mockVendors);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedVendors, setSelectedVendors] = useState<string[]>([]);

  const categories = ['All', 'Catering', 'Photography', 'Decor', 'Music', 'Venue', 'Transportation'];
  
  const filteredVendors = selectedCategory === 'All'
    ? vendors
    : vendors.filter(v => v.category === selectedCategory);

  const toggleVendorSelection = (id: string) => {
    setSelectedVendors(prev =>
      prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-lg p-6 lg:p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Vendor Directory</h2>
        <p className="text-sm text-slate-600">Browse and select vendors for your event</p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Filter className="h-4 w-4 text-amber-600" />
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Filter by Category</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-white shadow-lg shadow-amber-200'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Vendor Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredVendors.map(vendor => (
          <div
            key={vendor.id}
            className={`rounded-xl border-2 transition-all overflow-hidden group cursor-pointer ${
              selectedVendors.includes(vendor.id)
                ? 'border-amber-500 bg-amber-50'
                : 'border-slate-100 hover:border-amber-200 hover:bg-amber-50/50'
            }`}
          >
            {/* Vendor Image */}
            <div className="relative h-48 overflow-hidden bg-slate-100">
              <img
                src={vendor.image}
                alt={vendor.name}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              {/* Selection checkbox */}
              <div
                onClick={() => toggleVendorSelection(vendor.id)}
                className={`absolute top-3 right-3 w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                  selectedVendors.includes(vendor.id)
                    ? 'bg-amber-500 border-amber-600'
                    : 'bg-white border-slate-300 hover:border-amber-500'
                }`}
              >
                {selectedVendors.includes(vendor.id) && (
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>

            {/* Vendor Info */}
            <div className="p-4">
              <div className="mb-3">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-bold text-slate-900 text-sm">{vendor.name}</h3>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < 4 ? 'fill-amber-400 text-amber-400' : 'text-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="inline-block px-2 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded">
                  {vendor.category}
                </span>
              </div>
              
              <p className="text-xs text-slate-600 mb-4 line-clamp-2">
                {vendor.description}
              </p>

              {/* Contact Info */}
              <div className="space-y-2 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Mail className="h-3 w-3 text-amber-600" />
                  <a href={`mailto:${vendor.contact}`} className="hover:text-amber-600 transition-colors truncate">
                    {vendor.contact}
                  </a>
                </div>
                <button
                  onClick={() => toggleVendorSelection(vendor.id)}
                  className={`w-full px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    selectedVendors.includes(vendor.id)
                      ? 'bg-amber-500 text-white hover:bg-amber-600'
                      : 'bg-slate-100 text-slate-700 hover:bg-amber-500 hover:text-white'
                  }`}
                >
                  {selectedVendors.includes(vendor.id) ? 'Selected' : 'Select'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Vendors Summary */}
      {selectedVendors.length > 0 && (
        <div className="border-t border-slate-100 pt-6">
          <h3 className="text-sm font-bold text-slate-900 mb-4">Selected Vendors ({selectedVendors.length})</h3>
          <div className="space-y-2 bg-amber-50 border border-amber-100 rounded-lg p-4">
            {vendors
              .filter(v => selectedVendors.includes(v.id))
              .map(vendor => (
                <div key={vendor.id} className="flex items-center justify-between p-3 bg-white rounded border border-amber-100">
                  <div>
                    <p className="text-sm font-medium text-slate-900">{vendor.name}</p>
                    <p className="text-xs text-slate-500">{vendor.category}</p>
                  </div>
                  <button
                    onClick={() => toggleVendorSelection(vendor.id)}
                    className="p-1 hover:bg-red-50 rounded transition-colors"
                  >
                    <X className="h-4 w-4 text-red-500" />
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
