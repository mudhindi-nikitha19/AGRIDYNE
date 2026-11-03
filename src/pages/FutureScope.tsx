import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Radio, Brain, Navigation, Satellite, Truck, ShoppingBag, 
  Cpu, CloudOff, CheckCircle2
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const FutureScope: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<number>(6); // Default to Phase 7 Edge AI

  const phases = [
    {
      phase: 1,
      title: 'Phase 1 — Smart Monitoring',
      icon: Radio,
      category: 'Telemetry Infrastructure',
      desc: 'Deployment of localized IoT sensors and real-time field data acquisition systems across agricultural zones.',
      keyAspects: [
        'Soil moisture & ambient micro-climate telemetry',
        'Multi-sensor root depth monitoring nodes',
        'Solar-powered micro-gateways'
      ]
    },
    {
      phase: 2,
      title: 'Phase 2 — Intelligent Agriculture',
      icon: Brain,
      category: 'Cognitive Analytics',
      desc: 'Integration of Artificial Intelligence and Machine Learning data-driven models for automated farm advisories.',
      keyAspects: [
        'Automated crop disease recognition',
        'Predictive yield and harvest scheduling',
        'Smart irrigation threshold triggers'
      ]
    },
    {
      phase: 3,
      title: 'Phase 3 — Aerial Intelligence',
      icon: Navigation,
      category: 'Surveillance & Action',
      desc: 'Multispectral drone imaging and targeted aerial precision observation.',
      keyAspects: [
        'Autonomous drone crop canopy scans',
        'Precision localized micro-spraying',
        'Pest infestation hot-spot mapping'
      ]
    },
    {
      phase: 4,
      title: 'Phase 4 — Satellite Intelligence',
      icon: Satellite,
      category: 'Macro Remote Sensing',
      desc: 'Satellite-based geospatial monitoring for macro crop health and regional moisture analysis.',
      keyAspects: [
        'Regional NDVI & EVI canopy indexing',
        'Large-scale drought vulnerability tracking',
        'Geospatial soil moisture mapping'
      ]
    },
    {
      phase: 5,
      title: 'Phase 5 — Smart Supply Chain',
      icon: Truck,
      category: 'Logistics Optimization',
      desc: 'Decentralized smart cold storage and monitored transportation to eliminate post-harvest losses.',
      keyAspects: [
        'Solar micro-cold vault monitoring',
        'Thermal telemetry in transport vehicles',
        'Dynamic dispatch routing algorithms'
      ]
    },
    {
      phase: 6,
      title: 'Phase 6 — Digital Marketplace',
      icon: ShoppingBag,
      category: 'Direct Market Channels',
      desc: 'Direct farmer-to-buyer digital trade infrastructure providing transparent price discovery.',
      keyAspects: [
        'Direct FPO buyer matching engine',
        'Quality grade certification transparency',
        'Instant digital payment settlements'
      ]
    },
    {
      phase: 7,
      title: 'Phase 7 — Edge AI',
      icon: Cpu,
      category: 'Computation Optimization',
      desc: 'Deploying lightweight AI models and edge computing micro-controllers to reduce computational cost, latency, and cloud scaling problems.',
      keyAspects: [
        'Quantized neural network execution on field microcontrollers',
        'Zero-latency localized disease inference',
        'Drastically lower cloud API operational costs'
      ]
    },
    {
      phase: 8,
      title: 'Phase 8 — Offline Agriculture',
      icon: CloudOff,
      category: 'Resilient Connectivity',
      desc: 'Cloud and offline-enabled solutions designed for remote agricultural zones with limited cellular connectivity.',
      keyAspects: [
        'Local SQLite data persistence on mobile devices',
        'Asynchronous data sync upon connection restoration',
        '100% operational uptime in zero-bandwidth areas'
      ]
    }
  ];

  return (
    <>
      <SEO
        title="The Future of Agridyne"
        description="Explore the 8-phase futuristic roadmap of Agridyne, including Edge AI, lightweight neural models, and offline-enabled smart agriculture."
      />

      <div className="pt-20">
        
        {/* Banner */}
        <section className="bg-[#0f3822] text-white py-16 border-b border-emerald-800/40 animated-grid-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-emerald-900/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              Platform Roadmap
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display">
              The Future of Agridyne
            </h1>
            <p className="text-emerald-100/90 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              Specific technological directions identified in the platform blueprint to solve internet bandwidth, latency, computational cost, and market access challenges.
            </p>
          </div>
        </section>

        {/* 8-PHASE ROADMAP INTERACTIVE SECTION */}
        <section className="py-20 bg-[#0a2014] text-white border-b border-emerald-800/50 dark-grid-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="px-3.5 py-1 bg-emerald-800 text-emerald-200 text-xs font-bold uppercase tracking-wider border border-emerald-600/40">
                Strategic Development Horizons
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                8-Phase Technological Roadmap
              </h2>
            </div>

            {/* Grid of 8 Phase Selector Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {phases.map((p, idx) => {
                const IconComp = p.icon;
                const isSelected = selectedPhase === idx;
                return (
                  <button
                    key={p.title}
                    onClick={() => setSelectedPhase(idx)}
                    className={`p-4 rounded-2xl text-left transition-all border cursor-pointer flex flex-col justify-between h-36 ${
                      isSelected
                        ? 'bg-emerald-500 text-emerald-950 font-bold border-emerald-300 shadow-xl shadow-emerald-950/60 scale-102'
                        : 'bg-emerald-950/80 text-emerald-200 hover:bg-emerald-900 border-emerald-800'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className={`p-2 rounded-lg ${isSelected ? 'bg-emerald-950 text-emerald-300' : 'bg-emerald-900 text-emerald-400'}`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono uppercase font-extrabold">Phase 0{p.phase}</span>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold font-display line-clamp-1">{p.title}</h4>
                      <p className={`text-[11px] ${isSelected ? 'text-emerald-950/80' : 'text-emerald-400/80'} font-mono`}>
                        {p.category}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Phase Detailed View Card */}
            <motion.div
              key={selectedPhase}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card-dark p-8 rounded-2xl border border-emerald-400/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-emerald-500 text-emerald-950 font-mono font-bold text-xs rounded">
                    Phase {phases[selectedPhase].phase} of 8
                  </span>
                  <h3 className="text-2xl font-extrabold text-white font-display">
                    {phases[selectedPhase].title}
                  </h3>
                </div>

                <p className="text-sm text-emerald-100/90 leading-relaxed">
                  {phases[selectedPhase].desc}
                </p>

                <div className="space-y-2 pt-2">
                  <h5 className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Implementation Goals</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {phases[selectedPhase].keyAspects.map((aspect, aIdx) => (
                      <div key={aIdx} className="p-3 bg-emerald-950/80 rounded-xl border border-emerald-800 text-xs text-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mb-1" />
                        <span>{aspect}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-emerald-950/90 p-6 rounded-xl border border-emerald-800 flex flex-col items-center text-center space-y-3">
                {React.createElement(phases[selectedPhase].icon, { className: "w-16 h-16 text-emerald-400" })}
                <span className="text-base font-bold text-white font-display">{phases[selectedPhase].category}</span>
                <span className="text-xs text-emerald-300 font-mono">Proposed Future Direction</span>
              </div>
            </motion.div>

          </div>
        </section>

        {/* EDGE AI & OFFLINE COMPUTING FOCUS HIGHLIGHT */}
        <section className="py-20 bg-[#f8faf6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-emerald-900 text-white rounded-3xl p-8 sm:p-12 border border-emerald-700 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800 text-emerald-300 text-xs font-semibold font-mono uppercase">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  <span>Technology Breakthrough Focus</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold font-display">
                  Edge AI & Low-Bandwidth Resilience
                </h2>

                <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                  The platform blueprint specifically emphasizes lightweight AI models and edge computing to drastically reduce computational cost, latency, and cloud scaling problems. Combined with offline-enabled mobile caching, Agridyne ensures uninterrupted assistance even in remote farming areas with zero internet connectivity.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                  <div className="p-3 bg-emerald-950/80 rounded-xl border border-emerald-700/50">
                    <strong className="text-emerald-300 block mb-1">Lightweight Edge AI</strong>
                    Neural models compressed via pruning & quantization to execute locally on field hardware.
                  </div>
                  <div className="p-3 bg-emerald-950/80 rounded-xl border border-emerald-700/50">
                    <strong className="text-emerald-300 block mb-1">Offline Caching Sync</strong>
                    Field measurements stored locally and synchronized with the cloud asynchronously once online.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-emerald-950/70 rounded-2xl border border-emerald-800 text-center space-y-3">
                <CloudOff className="w-16 h-16 text-emerald-400" />
                <span className="text-sm font-bold font-display">Zero Latency Local Inference</span>
                <span className="text-xs text-emerald-300 font-mono">100% Offline Capability</span>
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
};
