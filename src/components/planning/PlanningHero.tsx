import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function PlanningHero() {
  return (
    <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 bg-gradient-to-b from-amber-100/50 via-[#faf5e4]/90 to-[#faf5e4] overflow-hidden">
      {/* Decorative golden gradients */}
      <div className="absolute top-0 left-1/4 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-amber-300/25 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-yellow-400/20 rounded-full blur-3xl translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-100/80 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              <span>Complete Event Planning</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Plan Your Perfect
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-700 to-yellow-600">
                Celebration
              </span>
            </h1>

            <p className="text-slate-600 font-light text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              From budgeting to vendor selection, timelines to guest management—all the tools you need to orchestrate a flawless event in one elegant platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="text-slate-700 font-medium">Interactive Tools</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="text-slate-700 font-medium">Real-time Tracking</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="text-slate-700 font-medium">Vendor Directory</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl border border-slate-100 shadow-2xl overflow-hidden bg-white p-2">
              <img
                src="/images/hero-african.png"
                alt="Event Planning"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
