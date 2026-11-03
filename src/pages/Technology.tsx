import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Radio, Brain, Sparkles, Navigation, Satellite, Cpu, Cloud, 
  ArrowRight, CheckCircle2, Filter
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const Technology: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Current Concept' | 'Future Scope'>('All');

  const techStack = [
    {
      id: 'iot',
      title: 'IoT Sensors',
      stage: 'Current Concept',
      icon: Radio,
      purpose: 'Continuous ground telemetry collection from crop roots and topsoil.',
      potentialApplication: 'Deploying low-power sensor micro-nodes measuring soil humidity, pH, temperature, and NPK nutrients.',
      expectedBenefit: 'Eliminates guesswork in irrigation timing and fertilizer application, conserving water.',
    },
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      stage: 'Current Concept',
      icon: Brain,
      purpose: 'Processing complex agricultural datasets to synthesize actionable farm advisories.',
      potentialApplication: 'Rule-based expert systems evaluating weather forecasts alongside soil telemetry to recommend sowing windows.',
      expectedBenefit: 'Provides smallholder farmers with automated agronomic guidance.',
    },
    {
      id: 'ml',
      title: 'Machine Learning',
      stage: 'Current Concept',
      icon: Sparkles,
      purpose: 'Predictive computer vision models for crop disease classification and yield forecasting.',
      potentialApplication: 'Training convolutional neural networks (CNNs) on leaf imagery captured via smartphones.',
      expectedBenefit: 'Early detection of crop infections before widespread infestation occurs.',
    },
    {
      id: 'drones',
      title: 'Agricultural Drones',
      stage: 'Future Scope',
      icon: Navigation,
      purpose: 'High-resolution aerial surveillance and targeted micro-spraying.',
      potentialApplication: 'Autonomous multispectral drone patrols scanning fields for nitrogen deficiency spots.',
      expectedBenefit: 'Reduces chemical spray waste by applying treatments exclusively to affected micro-zones.',
    },
    {
      id: 'satellite',
      title: 'Satellite Remote Sensing',
      stage: 'Future Scope',
      icon: Satellite,
      purpose: 'Macro-scale regional crop vigor tracking and drought index monitoring.',
      potentialApplication: 'Processing Sentinel & Landsat open-access satellite imagery to compute NDVI vegetation indices.',
      expectedBenefit: 'Enables regional agricultural planning and early drought risk assessment.',
    },
    {
      id: 'edge',
      title: 'Edge AI & Lightweight Models',
      stage: 'Future Scope',
      icon: Cpu,
      purpose: 'Executing neural inference locally on edge microcontrollers without cloud dependency.',
      potentialApplication: 'Deploying quantized TensorFlow Lite models directly onto low-power field gateways.',
      expectedBenefit: 'Drastically reduces internet bandwidth costs, latency, and cloud dependency in rural areas.',
    },
    {
      id: 'cloud',
      title: 'Cloud & Offline Sync Engine',
      stage: 'Future Scope',
      icon: Cloud,
      purpose: 'Hybrid cloud data repository supporting seamless offline caching.',
      potentialApplication: 'Local SQLite data persistence on mobile devices with asynchronous cloud database sync upon internet availability.',
      expectedBenefit: 'Ensures 100% operational uptime for farmers in remote regions with intermittent cellular coverage.',
    }
  ];

  const filteredTech = filter === 'All' 
    ? techStack 
    : techStack.filter(t => t.stage === filter);

  return (
    <>
      <SEO
        title="Technology Ecosystem"
        description="Explore Agridyne's technology roadmap featuring IoT, AI, Machine Learning, Drones, Satellite Remote Sensing, Edge Computing, and Cloud solutions."
      />

      <div className="pt-20">
        
        {/* Banner */}
        <section className="bg-[#0f3822] text-white py-16 border-b border-emerald-800/40 animated-grid-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-emerald-900/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              Computer Science Architecture
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display">
              Technology Ecosystem
            </h1>
            <p className="text-emerald-100/90 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              A comprehensive technological roadmap integrating ground telemetry, edge artificial intelligence, aerial drones, and satellite remote sensing.
            </p>
          </div>
        </section>

        {/* ROADMAP PIPELINE VISUALIZATION */}
        <section className="py-16 bg-[#0a2014] text-white border-b border-emerald-800/50 dark-grid-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            <div className="text-center space-y-2">
              <span className="text-xs font-bold text-emerald-400 font-mono uppercase tracking-widest">Architectural Pipeline</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Agridyne Technological Sequence
              </h2>
            </div>

            {/* Horizontal Sequence Bar */}
            <div className="flex items-center justify-between overflow-x-auto pb-4 gap-2 no-scrollbar">
              {techStack.map((tech, idx) => {
                const IconComp = tech.icon;
                const isCurrent = tech.stage === 'Current Concept';
                return (
                  <div key={tech.id} className="flex items-center gap-2 shrink-0">
                    <div className={`p-4 rounded-2xl border flex flex-col items-center min-w-[140px] text-center transition-all ${
                      isCurrent 
                        ? 'bg-emerald-900/80 border-emerald-400 text-emerald-200' 
                        : 'bg-emerald-950/60 border-emerald-800/80 text-emerald-400/80'
                    }`}>
                      <IconComp className="w-6 h-6 mb-2 text-emerald-400" />
                      <span className="text-xs font-bold font-display text-white">{tech.title}</span>
                      <span className={`text-[9px] mt-1 uppercase font-mono font-semibold px-2 py-0.5 rounded ${
                        isCurrent ? 'bg-emerald-500 text-emerald-950' : 'bg-emerald-900 text-emerald-300'
                      }`}>
                        {tech.stage}
                      </span>
                    </div>

                    {idx < techStack.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-emerald-600 shrink-0" />
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* TECH CARDS & FILTERING SECTION */}
        <section className="py-20 bg-[#f8faf6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            
            {/* Filter Toggle Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-emerald-900/10 shadow-xs">
              <div className="flex items-center gap-2 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                <Filter className="w-4 h-4 text-emerald-600" />
                <span>Filter Architecture Stage</span>
              </div>

              <div className="flex items-center gap-2">
                {(['All', 'Current Concept', 'Future Scope'] as const).map((stage) => (
                  <button
                    key={stage}
                    onClick={() => setFilter(stage)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      filter === stage
                        ? 'bg-emerald-800 text-white shadow-sm'
                        : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                    }`}
                  >
                    {stage}
                  </button>
                ))}
              </div>
            </div>

            {/* Tech Detailed Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredTech.map((tech) => {
                const IconComp = tech.icon;
                const isCurrent = tech.stage === 'Current Concept';
                return (
                  <motion.div
                    key={tech.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-8 rounded-2xl border border-emerald-900/10 shadow-sm space-y-6 flex flex-col justify-between hover:border-emerald-500/30 transition-all"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider font-mono ${
                          isCurrent 
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                            : 'bg-teal-50 text-teal-800 border border-teal-200'
                        }`}>
                          {tech.stage}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-emerald-950 font-display">{tech.title}</h3>
                      
                      <div className="space-y-3 text-xs sm:text-sm text-emerald-900/80">
                        <div>
                          <strong className="text-emerald-950 font-semibold uppercase tracking-wider text-[11px] block text-emerald-800">Purpose:</strong>
                          <p>{tech.purpose}</p>
                        </div>

                        <div>
                          <strong className="text-emerald-950 font-semibold uppercase tracking-wider text-[11px] block text-emerald-800">Potential Application:</strong>
                          <p>{tech.potentialApplication}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-emerald-100 bg-emerald-50/50 p-4 rounded-xl space-y-1">
                      <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Expected Benefit:
                      </span>
                      <p className="text-xs text-emerald-900 leading-relaxed font-medium">{tech.expectedBenefit}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

      </div>
    </>
  );
};
