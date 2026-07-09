import { useState } from 'react';
import { Sparkle, MessageSquare, Mail, Menu, X } from 'lucide-react';
import { CONTACT_EMAIL, WHATSAPP_CONTACT_NUMBER } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Generate WhatsApp link
  const whatsappUrl = `https://wa.me/${WHATSAPP_CONTACT_NUMBER}?text=${encodeURIComponent(
    'Hello M&M Events! I am looking for your team to help me host an upcoming event.'
  )}`;

  // Generate Email link
  const emailUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    'Inquiry: Let M&M Events Host My Celebration'
  )}&body=${encodeURIComponent(
    'Hi M&M Events Team,\n\nI am planning an upcoming celebration and would love to have your team host and coordinate it.\n\nPlease get in touch regarding custom setups and proposals.\n\nBest regards,'
  )}`;

  const navLinks = [
    { name: 'Planning Sandbox', href: '#features' },
    { name: 'Milestone Styles', href: '#event-categories' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Inquire Now', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf5e4]/90 backdrop-blur-md border-b border-amber-200/40 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo with luxurious gold theme */}
          <div className="flex items-center space-x-2.5">
            <div className="relative flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-tr from-amber-400 via-yellow-500 to-amber-600 p-[2px] shadow-sm">
              <div className="flex items-center justify-center h-full w-full rounded-[10px] bg-[#faf5e4]">
                <Sparkle className="h-5 w-5 text-amber-600 fill-amber-100/30" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold text-neutral-900 tracking-tight leading-none">
                M&M Events
              </span>
              <span className="text-[9px] font-mono font-bold text-amber-700 tracking-wider uppercase mt-1">
                Premium Hospitality & Hosting
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-amber-600 hover:scale-102 transition-all cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={emailUrl}
              className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 px-4 py-2.5 rounded-xl transition-all border border-slate-200"
              title="Email Inquiry"
            >
              <Mail className="h-4 w-4 text-slate-500" />
              <span>Email Booking</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-bold text-stone-950 bg-amber-500 hover:bg-amber-600 px-5 py-2.5 rounded-xl shadow-lg shadow-amber-100 hover:shadow-amber-200 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              title="WhatsApp Booking"
            >
              <MessageSquare className="h-4 w-4 fill-stone-950" />
              <span>WhatsApp Booking</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-amber-600 p-2 focus:outline-none transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-4 pb-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-slate-700 hover:text-amber-600 py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
            <a
              href={emailUrl}
              className="flex items-center justify-center space-x-2 w-full text-center py-3 bg-slate-50 text-slate-700 rounded-xl font-medium border border-slate-200 text-xs"
            >
              <Mail className="h-5 w-5 text-slate-500" />
              <span>Email Booking</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full text-center py-3 bg-amber-500 hover:bg-amber-600 text-stone-950 rounded-xl font-bold shadow-md shadow-amber-100 text-xs"
            >
              <MessageSquare className="h-5 w-5 fill-stone-950" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
