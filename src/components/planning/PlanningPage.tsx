import PlanningHero from './PlanningHero';
import Checklist from './Checklist';
import BudgetPlanner from './BudgetPlanner';
import Timeline from './Timeline';
import VendorDirectory from './VendorDirectory';

export default function PlanningPage() {
  return (
    <div className="min-h-screen bg-[#faf5e4] text-slate-800 antialiased selection:bg-amber-500/15 selection:text-amber-800">
      {/* Hero Section */}
      <PlanningHero />

      {/* Main Planning Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 lg:space-y-20">
            
            {/* Section: Planning Overview */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Your Planning Hub</h2>
                <p className="text-slate-600">Manage every aspect of your event with comprehensive planning tools</p>
              </div>

              {/* Two Column Layout for Checklist and Budget */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <Checklist />
                </div>
                <div>
                  <BudgetPlanner />
                </div>
              </div>
            </div>

            {/* Timeline Section - Full Width */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Timeline & Milestones</h3>
              <Timeline />
            </div>

            {/* Vendor Section */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Vendors & Services</h3>
              <VendorDirectory />
            </div>

          </div>
        </div>
      </section>

      {/* Footer Call to Action */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Bring Your Vision to Life?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Use these planning tools to organize every detail of your event. Update items as needed and refine your celebration plan.
          </p>
          <button className="inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold px-8 py-4 rounded-2xl shadow-lg shadow-amber-100 hover:shadow-amber-200 transition-all hover:-translate-y-0.5 cursor-pointer">
            Contact M&M Events for Full Service
          </button>
        </div>
      </section>
    </div>
  );
}
