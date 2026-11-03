import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sprout, PackageCheck, Warehouse, Truck, ShoppingBag, UserCheck, 
  ArrowRight, Thermometer, Clock
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const SupplyChain: React.FC = () => {
  const [activeStep, setActiveStep] = useState(2); // Default to Smart Storage

  const supplyChainSteps = [
    {
      id: 0,
      name: 'Farm',
      subtitle: 'Harvest & Sorting',
      icon: Sprout,
      desc: 'Fresh agricultural produce harvested with sensor-guided maturity indexing to ensure optimal shelf life.',
      tech: 'IoT Maturity Tracking',
      impact: 'Prevents premature harvesting & maximizes nutritional quality.'
    },
    {
      id: 1,
      name: 'Collection',
      subtitle: 'Village Aggregation Hub',
      icon: PackageCheck,
      desc: 'Smallholder crops gathered at local Farmer Producer Organization (FPO) collection points for digital grading.',
      tech: 'QR Code Produce Tagging',
      impact: 'Enables batch traceability & rapid inventory logging.'
    },
    {
      id: 2,
      name: 'Smart Storage',
      subtitle: 'IoT Cold Chain Vaults',
      icon: Warehouse,
      desc: 'Solar-powered decentralized micro-cold storage units equipped with automated temperature & ethylene monitoring.',
      tech: 'Automated Micro-Climate Vaults',
      impact: 'Drastically reduces post-harvest spoilage and rot.'
    },
    {
      id: 3,
      name: 'Transportation',
      subtitle: 'Monitored Logistics',
      icon: Truck,
      desc: 'Refrigerated and ventilated transport vehicles tracked in real-time via GPS and temperature sensors.',
      tech: 'GPS & Thermal Telemetry',
      impact: 'Guarantees fresh arrival without thermal degradation.'
    },
    {
      id: 4,
      name: 'Marketplace',
      subtitle: 'Direct Trade Platform',
      icon: ShoppingBag,
      desc: 'Produce listed directly on Agridyne digital marketplace with transparent grade certifications and price discovery.',
      tech: 'Direct Digital Settlement',
      impact: 'Eliminates 3-4 layers of intermediary fee markups.'
    },
    {
      id: 5,
      name: 'Buyer',
      subtitle: 'Institutional & Consumer',
      icon: UserCheck,
      desc: 'Wholesale buyers, food processing industries, and retailers receiving farm-fresh produce with full origin history.',
      tech: 'Traceable Farm-to-Fork Record',
      impact: 'High consumer trust and premium price realization for farmers.'
    }
  ];

  return (
    <>
      <SEO
        title="Smart Storage & Supply Chain"
        description="Learn how Agridyne's smart storage and cold-chain transportation concepts reduce post-harvest losses and optimize rural supply chain efficiency."
      />

      <div className="pt-20">
        
        {/* Banner */}
        <section className="bg-[#0f3822] text-white py-16 border-b border-emerald-800/40 animated-grid-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-emerald-900/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              Post-Harvest Loss Prevention
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display">
              Smart Storage & Supply Chain
            </h1>
            <p className="text-emerald-100/90 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              Smart storage and transportation systems help reduce post-harvest losses, maintain crop quality, and ensure seamless supply-chain efficiency.
            </p>
          </div>
        </section>

        {/* ANIMATED HORIZONTAL SUPPLY CHAIN VISUALIZATION */}
        <section className="py-20 bg-[#0a2014] text-white border-b border-emerald-800/50 dark-grid-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="px-3.5 py-1 bg-emerald-800 text-emerald-200 text-xs font-bold uppercase tracking-wider border border-emerald-600/40">
                Supply Chain Flow
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                Farm-to-Buyer Cold Logistics Pipeline
              </h2>
            </div>

            {/* Horizontal Animated Pipeline Steps */}
            <div className="flex items-center justify-between overflow-x-auto pb-6 gap-2 no-scrollbar">
              {supplyChainSteps.map((step, idx) => {
                const IconComp = step.icon;
                const isActive = activeStep === idx;
                return (
                  <React.Fragment key={step.name}>
                    <button
                      onClick={() => setActiveStep(idx)}
                      className={`flex flex-col items-center min-w-[130px] sm:min-w-[150px] p-4 rounded-2xl border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-emerald-500 text-emerald-950 font-bold border-emerald-300 shadow-xl shadow-emerald-950/60 scale-105'
                          : 'bg-emerald-950/80 text-emerald-200 hover:bg-emerald-900 border-emerald-800'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${
                        isActive ? 'bg-emerald-950 text-emerald-300' : 'bg-emerald-900 text-emerald-400'
                      }`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold opacity-80">Phase 0{idx + 1}</span>
                      <span className="text-sm font-bold font-display">{step.name}</span>
                    </button>

                    {idx < supplyChainSteps.length - 1 && (
                      <div className="hidden sm:block text-emerald-500">
                        <ArrowRight className="w-5 h-5 animate-pulse" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Selected Step Detailed View Card */}
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card-dark p-8 rounded-2xl border border-emerald-400/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-emerald-500 text-emerald-950 font-mono font-bold text-xs rounded">
                    Stage {activeStep + 1} of 6
                  </span>
                  <h3 className="text-2xl font-extrabold text-white font-display">
                    {supplyChainSteps[activeStep].name} — {supplyChainSteps[activeStep].subtitle}
                  </h3>
                </div>

                <p className="text-sm text-emerald-100/90 leading-relaxed">
                  {supplyChainSteps[activeStep].desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-emerald-950/80 rounded-xl border border-emerald-800 text-xs">
                    <span className="font-bold text-emerald-400 uppercase tracking-wider block mb-1">Enabling Tech</span>
                    <span className="text-emerald-100 font-mono">{supplyChainSteps[activeStep].tech}</span>
                  </div>
                  <div className="p-4 bg-emerald-950/80 rounded-xl border border-emerald-800 text-xs">
                    <span className="font-bold text-emerald-400 uppercase tracking-wider block mb-1">Post-Harvest Impact</span>
                    <span className="text-emerald-100">{supplyChainSteps[activeStep].impact}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-emerald-950/90 p-6 rounded-xl border border-emerald-800 flex flex-col items-center text-center space-y-3">
                {React.createElement(supplyChainSteps[activeStep].icon, { className: "w-16 h-16 text-emerald-400" })}
                <span className="text-base font-bold text-white font-display">{supplyChainSteps[activeStep].name} Stage</span>
                <span className="text-xs text-emerald-300 font-mono">Loss Reduction Architecture</span>
              </div>
            </motion.div>

          </div>
        </section>

        {/* KEY ADVANTAGES SECTION */}
        <section className="py-20 bg-[#f8faf6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <h2 className="text-3xl font-extrabold text-emerald-950 font-display">
                Mitigating Post-Harvest Vulnerabilities
              </h2>
              <p className="text-emerald-800 text-sm sm:text-base">
                Why smart cold storage and monitored transport are critical for rural food security.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <Warehouse className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-emerald-950 font-display">Solar Cold Storage</h3>
                <p className="text-xs text-emerald-800/80 leading-relaxed">
                  Off-grid solar micro-cold rooms allow farmers to store perishable vegetables for 2-3 weeks, avoiding distress sales during market gluts.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <Thermometer className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-emerald-950 font-display">Thermal Telemetry</h3>
                <p className="text-xs text-emerald-800/80 leading-relaxed">
                  Real-time temperature and humidity sensors in transit vehicles trigger automated warnings if cold-chain thresholds are breached.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-emerald-950 font-display">Rapid Dispatch Route</h3>
                <p className="text-xs text-emerald-800/80 leading-relaxed">
                  Algorithmically optimized dispatch routes link collection hubs directly with nearest wholesale buyers, cutting transit time by up to 40%.
                </p>
              </div>
            </div>

          </div>
        </section>

      </div>
    </>
  );
};
