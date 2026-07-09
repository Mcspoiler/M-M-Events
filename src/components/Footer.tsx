import { Calendar, Mail, MessageSquare, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { CONTACT_EMAIL, WHATSAPP_CONTACT_NUMBER } from '../data';

export default function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_CONTACT_NUMBER}?text=${encodeURIComponent(
    'Hi! I would like to inquire about hosting or planning an event using M&M Events.'
  )}`;

  const emailUrl = `mailto:${CONTACT_EMAIL}?subject=M&M Events Partnership Inquiry`;

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      
      {/* Upper Certifications Trust Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-slate-900">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-200">
              Google Workspace Partner
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="h-5 w-5 text-indigo-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-200">
              WhatsApp API Certified
            </span>
          </div>
          <div className="flex items-center space-x-3 text-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-300 font-mono">
              ALL SYSTEMS SECURE & ACTIVE
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Elements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center space-x-2.5 text-white">
              <div className="relative flex items-center justify-center h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-pink-500 p-[1.5px]">
                <div className="flex items-center justify-center h-full w-full rounded-[7px] bg-slate-950">
                  <Sparkles className="h-4 w-4 text-indigo-400" />
                </div>
              </div>
              <span className="font-display text-lg font-bold tracking-tight">
                M&M Events
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm font-light">
              Designing, planning, and organizing premium global events with instant co-piloted RSVP messaging, live maps, and calendar synchronizations.
            </p>
            
            {/* Quick Email and WhatsApp Links */}
            <div className="flex space-x-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 hover:bg-emerald-950 hover:text-emerald-400 p-3 rounded-xl border border-slate-800 hover:border-emerald-900 transition-all flex items-center justify-center text-slate-300"
                title="Chat via WhatsApp"
              >
                <MessageSquare className="h-4 w-4 fill-current" />
              </a>
              <a
                href={emailUrl}
                className="bg-slate-900 hover:bg-indigo-950 hover:text-indigo-400 p-3 rounded-xl border border-slate-800 hover:border-indigo-900 transition-all flex items-center justify-center text-slate-300"
                title="Send Corporate Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Platform Shortcuts */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest">
              Event Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#features" className="hover:text-white transition-colors">Gemini Concierge Chat</a></li>
              <li><a href="#event-categories" className="hover:text-white transition-colors">Universal Event Types</a></li>
              <li><a href="#google-advantage" className="hover:text-white transition-colors">Google Ecosystem Sync</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Column 3: Custom Support & Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest">
              Direct Channels
            </h4>
            <p className="text-xs text-slate-500 font-light leading-relaxed">
              Our support lines are ready to handle corporate coordination or early platform testing queries directly.
            </p>
            <div className="space-y-2 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageSquare className="h-4 w-4 fill-emerald-400/10" />
                <span>WhatsApp: Support Chat</span>
              </a>
              <a
                href={emailUrl}
                className="flex items-center space-x-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>Email: hosting@eventplatform.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-600 gap-4">
          <p>© 2026 M&M Events Universal Platform. Supported by Google Labs Partner ecosystem.</p>
          <div className="flex space-x-6">
            <span className="cursor-pointer hover:text-slate-400">Privacy Policy</span>
            <span className="cursor-pointer hover:text-slate-400">Terms of Service</span>
            <span className="cursor-pointer hover:text-slate-400">Ecosystem Guarantees</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
