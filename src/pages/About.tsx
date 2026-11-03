import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Compass, Sprout, CheckCircle2, Search, 
  Lightbulb, Cpu, Users, TrendingUp, Building2
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const About: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const approachSteps = [
    {
      step: '01',
      title: 'Identify',
      subtitle: 'Field Problem Mapping',
      icon: Search,
      desc: 'Systematically pinpointing localized agricultural bottlenecks, such as data scarcity, post-harvest losses, soil degradation, and market isolation in rural communities.',
      details: [
        'Surveying rural agricultural zones and micro-climates',
        'Mapping soil nutrients and irrigation accessibility',
        'Evaluating local infrastructure limits and internet bandwidth'
      ]
    },
    {
      step: '02',
      title: 'Innovate',
      subtitle: 'Technological & Social Design',
      icon: Lightbulb,
      desc: 'Designing lightweight IoT node architectures, tailored AI analytics, and decentralized community-driven models that suit resource-constrained rural settings.',
      details: [
        'Developing edge computing AI models to eliminate latency',
        'Designing solar-powered multi-sensor IoT telemetry nodes',
        'Formulating peer-to-peer knowledge sharing networks'
      ]
    },
    {
      step: '03',
      title: 'Implement',
      subtitle: 'Pilot Framework Testing',
      icon: Cpu,
      desc: 'Deploying prototype telemetry dashboards, smart storage tracking, and direct marketplace concepts in pilot rural zones.',
      details: [
        'Testing field node accuracy under varying weather conditions',
        'Demonstrating offline data caching for remote locations',
        'Validating local resource utilization (bio-fertilizer & rainwater)'
      ]
    },
    {
      step: '04',
      title: 'Connect',
      subtitle: 'Ecosystem Alignment',
      icon: Users,
      desc: 'Linking smallholder farmers with buyers, agricultural experts, local cooperatives (FPOs), and supportive government policies.',
      details: [
        'Establishing transparent direct digital market channels',
        'Connecting farmer collectives to cold-chain logistics',
        'Aligning technology adoption with rural development policies'
      ]
    },
    {
      step: '05',
      title: 'Improve',
      subtitle: 'Iterative Feedback & Scale',
      icon: TrendingUp,
      desc: 'Continuously refining computational models, expanding coverage, and optimizing sustainable economic benefits for rural households.',
      details: [
        'Analyzing longitudinal crop yield optimization metrics',
        'Scaling lightweight algorithms for edge deployment',
        'Enhancing rural community self-reliance'
      ]
    }
  ];

  return (
    <>
      <SEO
        title="About Agridyne"
        description="Learn about Agridyne's vision, mission, and strategic approach to transforming agriculture, rural entrepreneurship, and local resource utilization."
      />

      <div className="pt-20">
        
        {/* Page Banner */}
        <section className="bg-[#0f3822] text-white py-16 border-b border-emerald-800/40 animated-grid-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-emerald-900/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              Department of Computer Science & Engineering
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display">
              About Agridyne
            </h1>
            <p className="text-emerald-100/90 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              Agriculture in rural areas is both a source of sustenance and an important economic activity supporting livelihoods and entrepreneurship.
            </p>
          </div>
        </section>

        {/* Conceptual Context Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                  <Sprout className="w-4 h-4" />
                  <span>The Conceptual Foundation</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-950 font-display leading-tight">
                  Integrating Technology, Local Resources & Policy Support
                </h2>

                <p className="text-emerald-900/80 text-sm sm:text-base leading-relaxed text-justify">
                  Agridyne presents an innovative perspective for improving agriculture and rural development by appropriately utilizing local resources and combining innovation, technology, community collaboration, and supportive government policies.
                </p>

                <p className="text-emerald-900/80 text-sm sm:text-base leading-relaxed text-justify">
                  Rather than imposing generic industrial templates, Agridyne emphasizes localized adaptability. By merging computer science innovation with agricultural realities, the project establishes a blueprint for sustainable economic growth and farmer empowerment.
                </p>
              </div>

              <div className="lg:col-span-5 bg-emerald-50/70 p-8 rounded-2xl border border-emerald-100 space-y-6">
                <div className="flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-emerald-700" />
                  <div>
                    <h4 className="font-bold text-emerald-950 text-sm">Academic Institutional Origin</h4>
                    <p className="text-xs text-emerald-700">Computer Science & Engineering Domain</p>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-emerald-900">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Focus on Smart Agriculture & Rural Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Edge AI & Bandwidth-Optimized Data Architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Community Empowerment & FPO Integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Direct Digital Marketplace & Supply Chain Prototype</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* VISION & MISSION CARDS */}
        <section className="py-16 bg-[#f8faf6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl border border-emerald-900/10 shadow-sm space-y-4 hover:border-emerald-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-950 font-display">Our Vision</h3>
              <p className="text-sm sm:text-base text-emerald-900/80 leading-relaxed">
                A more connected, technology-enabled, and prosperous rural agricultural ecosystem.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl border border-emerald-900/10 shadow-sm space-y-4 hover:border-emerald-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-950 font-display">Our Mission</h3>
              <p className="text-sm sm:text-base text-emerald-900/80 leading-relaxed">
                Explore practical and innovative approaches that can improve agriculture, strengthen rural communities, and create opportunities for social and economic development.
              </p>
            </div>

          </div>
        </section>

        {/* OUR APPROACH — VISUAL PROCESS */}
        <section className="py-20 bg-[#0f3822] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="px-3 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-bold uppercase tracking-wider border border-emerald-600/40">
                Methodology
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                Our Approach
              </h2>
              <p className="text-emerald-200/90 text-sm sm:text-base">
                A systematic five-phase methodology bridging problem identification with continuous refinement.
              </p>
            </div>

            {/* Step Navigation Bar */}
            <div className="flex items-center justify-between overflow-x-auto pb-4 gap-2 no-scrollbar">
              {approachSteps.map((step, idx) => {
                const IconComp = step.icon;
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.title}
                    onClick={() => setActiveStep(idx)}
                    className={`flex items-center gap-2.5 px-4 py-3 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-emerald-500 text-emerald-950 font-bold shadow-lg shadow-emerald-950/40'
                        : 'bg-emerald-900/60 text-emerald-200 hover:bg-emerald-800/80 border border-emerald-700/40'
                    }`}
                  >
                    <span className="text-xs font-mono font-bold opacity-80">{step.step}</span>
                    <IconComp className="w-4 h-4" />
                    <span className="text-xs sm:text-sm">{step.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Step Detailed Card */}
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-card-dark p-8 rounded-2xl border border-emerald-400/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-extrabold text-emerald-400 font-mono">
                    {approachSteps[activeStep].step}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-display">
                      {approachSteps[activeStep].title}
                    </h3>
                    <p className="text-xs text-emerald-300 font-medium">
                      {approachSteps[activeStep].subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-emerald-100/90 leading-relaxed">
                  {approachSteps[activeStep].desc}
                </p>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">Key Deliverables</h4>
                  <ul className="space-y-1.5 text-xs text-emerald-200/90">
                    {approachSteps[activeStep].details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 bg-emerald-950/80 p-6 rounded-xl border border-emerald-800/60 flex flex-col items-center justify-center text-center space-y-4">
                {React.createElement(approachSteps[activeStep].icon, { className: "w-16 h-16 text-emerald-400" })}
                <div className="text-xs text-emerald-300 font-mono">
                  Phase {activeStep + 1} of 5 Active
                </div>
                <div className="flex items-center gap-2 w-full max-w-xs">
                  {approachSteps.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 flex-1 rounded-full transition-all ${
                        i === activeStep ? 'bg-emerald-400' : 'bg-emerald-900'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </section>

      </div>
    </>
  );
};
