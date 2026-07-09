import { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQ_ITEMS } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#faf5e4]/95 border-t border-amber-200/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-50 text-amber-700 border border-amber-100 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="h-3 w-3" />
            <span>Frequent Questions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Frequently Asked Queries
          </h2>
          <p className="text-slate-600 font-light max-w-2xl mx-auto text-xs">
            Everything you need to know about setting up your universal event workspace, sync calendars, and using the Gemini Event Concierge.
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.question}
                className="bg-white rounded-2xl border border-slate-200/50 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-slate-50/50 transition-colors focus:outline-none"
                >
                  <span className="font-display font-bold text-slate-900 pr-4 text-sm sm:text-base">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-slate-50 border border-slate-100 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-600 bg-indigo-50 border-indigo-100' : 'text-slate-400'}`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] border-t border-slate-100 opacity-100 p-6 bg-slate-50/20' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
