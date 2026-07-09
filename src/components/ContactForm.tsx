import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Mail, Calendar, Users, HelpCircle, ExternalLink, Check, AlertCircle } from 'lucide-react';
import { CONTACT_EMAIL, WHATSAPP_CONTACT_NUMBER } from '../data';

export default function ContactForm({ prefilledData }: { prefilledData?: any }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Weddings',
    guests: '150 Guests',
    date: '',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  React.useEffect(() => {
    if (prefilledData) {
      setFormData((prev) => ({
        ...prev,
        eventType: prefilledData.type,
        guests: `${prefilledData.guests} Guests`,
        date: prefilledData.date,
        details: prefilledData.vibes ? `We are aiming for a vibe that is ${prefilledData.vibes}.` : ''
      }));
    }
  }, [prefilledData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationError) setValidationError('');
  };

  // Generate a premium pre-formatted message
  const generateMessageText = () => {
    const { name, email, phone, eventType, guests, date, details } = formData;
    
    let message = `Hi M&M Events Team,\n\n`;
    message += `I would like to inquire about planning an event using M&M Events. Here are my details:\n\n`;
    message += `• Name: ${name || '[Not specified]'}\n`;
    message += `• Email: ${email || '[Not specified]'}\n`;
    if (phone) message += `• Phone: ${phone}\n`;
    message += `• Event Type: ${eventType}\n`;
    message += `• Expected Guests: ${guests}\n`;
    if (date) message += `• Target Date: ${date}\n`;
    if (details) message += `• Special Notes: ${details}\n`;
    message += `\nI would love to set up an early preview of the platform capabilities. Thank you!`;
    
    return message;
  };

  // WhatsApp click handler
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setValidationError('Please fill out your Name and Email address before transmitting.');
      return;
    }
    const message = generateMessageText();
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_CONTACT_NUMBER}?text=${encoded}`;
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    
    // Fallback safe redirect/open
    window.location.href = whatsappUrl;
  };

  // Email click handler
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setValidationError('Please fill out your Name and Email address before transmitting.');
      return;
    }
    const message = generateMessageText();
    const subject = `Event Inquiry: ${formData.eventType} - ${formData.name}`;
    const emailUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    
    window.location.href = emailUrl;
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-950/20 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-5 space-y-8">
            <span className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              <span>Let&apos;s Collab</span>
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready to Design Your Experience?
            </h2>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Submit your planning scope parameters. Our interactive dispatcher automatically compiles your custom parameters into a draft that routes directly to our team channels.
            </p>

            {/* Quick Contact Specs */}
            <div className="space-y-6 pt-4 border-t border-slate-800">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-500/10 text-emerald-400 p-3 rounded-2xl border border-emerald-500/20 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 fill-emerald-400/10" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Direct WhatsApp Hotline</h4>
                  <p className="text-xs text-slate-400 mt-1 font-mono">Instant Support: Active</p>
                  <p className="text-[11px] text-emerald-400 mt-0.5 font-medium">● Response speed &lt; 5 minutes</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-500/10 text-amber-400 p-3 rounded-2xl border border-amber-500/20 flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Enterprise Helpdesk</h4>
                  <p className="text-xs text-slate-400 mt-1 font-mono">hosting@eventplatform.com</p>
                  <p className="text-[11px] text-amber-400 mt-0.5 font-medium">● Custom proposal response in 2 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Live Interactive Contact Form Box */}
          <div className="lg:col-span-7 bg-slate-950/80 backdrop-blur-md rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl relative">
            <h3 className="font-display text-base font-bold text-white mb-1">
              Instant Scope Planner
            </h3>
            <p className="text-xs text-slate-400 mb-6 font-light">
              Build your customized inquiry draft. Select your preferred communication link below to send.
            </p>

            {validationError && (
              <div className="mb-6 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-xl p-3.5 flex items-center space-x-2 text-xs">
                <AlertCircle className="h-4 w-4 text-rose-400 flex-shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            <form className="space-y-4">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              {/* Phone & Event Type Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254 700 123456"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="eventType" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Event Type</label>
                  <select
                    name="eventType"
                    id="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-500 transition-colors cursor-pointer"
                  >
                    <option value="Weddings">Wedding Celebration</option>
                    <option value="Graduations">Graduation Ceremony</option>
                    <option value="Birthdays">Birthday Party</option>
                    <option value="Corporate">Corporate Retreat / Summit</option>
                    <option value="Baby Shower">Baby Shower</option>
                    <option value="Holiday">Holiday Gathering</option>
                    <option value="Meetup">Casual Meetup / Game Night</option>
                  </select>
                </div>
              </div>

              {/* Attendees & Target Date Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="guests" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Expected Guests</label>
                  <input
                    type="text"
                    name="guests"
                    id="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    placeholder="e.g. 150 Guests"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="date" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Target Event Date</label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-500 transition-colors cursor-pointer"
                  />
                </div>
              </div>

              {/* Details Text Area */}
              <div className="space-y-1.5">
                <label htmlFor="details" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Event Description & Special Notes</label>
                <textarea
                  name="details"
                  id="details"
                  rows={3}
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Tell us about your theme, guest dietary notes, or unique requirements..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                />
              </div>

              {/* Instant Link Dispatchers */}
              <div className="pt-4 border-t border-slate-800/80 space-y-4">
                <div className="flex justify-between items-center text-[10px] text-slate-500">
                  <span>SELECT TRANSMISSION DISPATCH LINK:</span>
                  {submitted && (
                    <span className="text-emerald-400 font-semibold flex items-center space-x-1 animate-pulse">
                      <Check className="h-3.5 w-3.5" />
                      <span>Dispatch Link Active!</span>
                    </span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  {/* WhatsApp Action */}
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="flex-1 flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-lg transition-all cursor-pointer text-xs"
                  >
                    <MessageSquare className="h-4 w-4 fill-white" />
                    <span>Send via WhatsApp Link</span>
                  </button>

                  {/* Email Action */}
                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    className="flex-1 flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3.5 rounded-xl border border-slate-700 transition-all cursor-pointer text-xs"
                  >
                    <Mail className="h-4 w-4 text-slate-300" />
                    <span>Send via Email Link</span>
                  </button>
                </div>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
