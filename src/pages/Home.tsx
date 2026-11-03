import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sprout, Cpu, ArrowRight, ShieldAlert, 
  Lightbulb, Users, Recycle, ChevronDown, ChevronUp, Zap, Radio, 
  TrendingUp, Layers, Satellite, Activity, Compass
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const challenges = [
    {
      title: 'Limited Access to Modern Tech',
      desc: 'High financial barriers and lack of tailored AgriTech tools leave smallholders without precision farming techniques.',
      icon: Cpu,
    },
    {
      title: 'Manual Farming Dependency',
      desc: 'Heavy reliance on traditional manual labor limits scalable yield optimization and operational efficiency.',
      icon: Activity,
    },
    {
      title: 'Post-Harvest Losses',
      desc: 'Inadequate cold chain logistics and delayed transportation cause substantial crop spoilage post-harvest.',
      icon: ShieldAlert,
    },
    {
      title: 'Supply-Chain Inefficiency',
      desc: 'Opaque supply chains with multiple intermediary layers erode profit margins for primary producers.',
      icon: Layers,
    },
    {
      title: 'Limited Market Access',
      desc: 'Geographic isolation prevents smallholder farmers from connecting directly with wholesale buyers and fair markets.',
      icon: TrendingUp,
    },
    {
      title: 'Data & Geographic Limitations',
      desc: 'Scarcity of real-time soil, micro-climate, and localized geospatial data hinders proactive crop management.',
      icon: Satellite,
    },
    {
      title: 'Limited Digital Infrastructure',
      desc: 'Inconsistent cellular coverage and high cloud computing costs limit continuous smart farming adoption.',
      icon: Radio,
    },
  ];

  const solutions = [
    {
      title: 'Innovation',
      desc: 'Encouraging innovative approaches to agriculture and rural entrepreneurship through computational tools.',
      icon: Lightbulb,
      badge: 'Platform Concept',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Technology',
      desc: 'Using modern technologies like IoT sensors, AI models, and drones to improve agricultural efficiency.',
      icon: Cpu,
      badge: 'Tech Framework',
      color: 'from-teal-500 to-emerald-600',
    },
    {
      title: 'Community',
      desc: 'Supporting collaboration among farmers, local communities, agricultural buyers, and policy stakeholders.',
      icon: Users,
      badge: 'Social Collective',
      color: 'from-emerald-600 to-green-700',
    },
    {
      title: 'Local Resources',
      desc: 'Promoting effective utilization of locally available organic inputs, water resources, and bio-energy.',
      icon: Recycle,
      badge: 'Sustainable Model',
      color: 'from-green-600 to-emerald-500',
    },
  ];

  const impacts = [
    {
      title: 'Sustainable Agriculture',
      desc: 'Eco-friendly crop management models designed to enhance soil vitality and conserve irrigation water.',
      icon: Sprout,
    },
    {
      title: 'Rural Entrepreneurship',
      desc: 'Empowering local youth and farmer groups to lead AgriTech micro-enterprises and food processing hubs.',
      icon: Zap,
    },
    {
      title: 'Farmer Connectivity',
      desc: 'Bridging the digital divide by connecting smallholder growers directly with buyer networks.',
      icon: Users,
    },
    {
      title: 'Technology Adoption',
      desc: 'Lowering technical barriers through edge computing and offline-first agricultural assistance tools.',
      icon: Compass,
    },
  ];

  const faqs = [
    {
      q: 'What is Agridyne?',
      a: 'Agridyne is an agricultural and rural-development concept platform focused on using innovation, technology, and community collaboration to support agricultural efficiency and rural prosperity.',
    },
    {
      q: 'What technologies are considered in the Agridyne framework?',
      a: 'The framework considers IoT sensors, AI, machine learning, drones, satellite imagery, edge computing, cloud platforms, and offline-enabled smart tools tailored for rural areas.',
    },
    {
      q: 'Does Agridyne provide a live commercial marketplace?',
      a: 'The digital marketplace shown on this website is an interactive prototype designed to demonstrate direct farmer-to-buyer connectivity in our platform model.',
    },
    {
      q: 'How can technology practically help rural farmers?',
      a: 'Technology provides real-time monitoring of crop and soil conditions, early pest warnings, transparent direct market access, and optimized logistics to reduce post-harvest losses.',
    },
  ];

  return (
    <>
      <SEO 
        title="Home | Smart Agriculture & Rural Development"
        description="Agridyne explores innovative technology-driven approaches to strengthen agriculture, rural entrepreneurship, local resources, and sustainable rural development."
      />

      <div className="pt-20">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[85vh] bg-[#0f3822] text-white flex items-center overflow-hidden animated-grid-bg border-b border-emerald-800/40">
          
          {/* Subtle Ambient Background Glows */}
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Text Content */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Next-Gen AgriTech Platform</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1]">
                  Transforming Agriculture.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400">
                    Empowering Rural Communities.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl font-light">
                  Agridyne explores innovative technology-driven approaches to strengthen agriculture, rural entrepreneurship, local resources, and sustainable rural development.
                </p>

                {/* Hero CTA Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    to="/smart-agriculture"
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-emerald-950 font-bold text-sm shadow-lg shadow-emerald-950/40 flex items-center gap-2 transition-all hover:scale-[1.02]"
                  >
                    <span>Explore Agridyne</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/future-scope"
                    className="px-6 py-3.5 rounded-xl bg-emerald-900/70 hover:bg-emerald-800/80 border border-emerald-600/40 text-emerald-100 font-semibold text-sm flex items-center gap-2 transition-all hover:scale-[1.02]"
                  >
                    <Compass className="w-4 h-4 text-emerald-300" />
                    <span>View Platform Roadmap</span>
                  </Link>
                </div>

                {/* Hero Highlights */}
                <div className="pt-6 border-t border-emerald-800/60 grid grid-cols-3 gap-4 text-left">
                  <div>
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">Domain</span>
                    <span className="text-xs sm:text-sm font-medium text-emerald-100">AgriTech & Rural Dev</span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">Institution</span>
                    <span className="text-xs sm:text-sm font-medium text-emerald-100">Dept. of CSE</span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">Focus</span>
                    <span className="text-xs sm:text-sm font-medium text-emerald-100">Sustainable Growth</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Hero Visual Graphic */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-emerald-500/30 group">
                  
                  {/* Generated Hero Image */}
                  <img
                    src="/images/hero.png"
                    alt="Agridyne Smart Agriculture Concept Landscape"
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Glassmorphic Live Badges */}
                  <div className="absolute top-4 left-4 glass-card-dark p-3 rounded-xl max-w-[200px] border border-emerald-400/30 shadow-lg">
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
                      <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                      <span>IoT Field Node #01</span>
                    </div>
                    <div className="text-[11px] text-emerald-200/80 mt-1">
                      Soil Moisture: <span className="text-white font-mono font-bold">42%</span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 glass-card-dark p-3 rounded-xl max-w-[220px] border border-emerald-400/30 shadow-lg">
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
                      <Satellite className="w-4 h-4 text-teal-300" />
                      <span>Satellite Canopy Index</span>
                    </div>
                    <div className="text-[11px] text-emerald-200/80 mt-1">
                      NDVI Health: <span className="text-white font-mono font-bold">0.78 (Optimal)</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* AI CAMERA & REAL-TIME WEATHER SPOTLIGHT SECTION */}
        <section className="py-12 bg-gradient-to-b from-[#0f3822] to-[#071810] border-b border-emerald-800/40 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Feature 1: AI Camera Leaf Scanner */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-[#0b2b1d] to-teal-950 border border-emerald-700/50 p-6 sm:p-8 shadow-2xl flex flex-col justify-between space-y-6 group hover:border-emerald-400/80 transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-emerald-950 flex items-center gap-1.5 shadow-md">
                      <Zap className="w-3.5 h-3.5 fill-emerald-950" />
                      NEW: CAMERA SCANNER
                    </span>
                    <span className="text-[11px] text-emerald-300 font-mono">Neural Vision v3.4</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                    AI Leaf Disease <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                      Camera Detection
                    </span>
                  </h3>

                  <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
                    Scan crop leaves using your device camera or upload a photo to identify plant diseases, calculate severity scores, locate infected spot hotspots, and get actionable organic & chemical treatment plans.
                  </p>
                </div>

                <div className="pt-4 border-t border-emerald-800/40 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-emerald-300 font-semibold">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    <span>Real-time Visual Hotspot Mapping</span>
                  </div>
                  <Link
                    to="/leaf-diagnosis"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-emerald-950 font-extrabold text-xs flex items-center gap-2 shadow-lg transition-all hover:scale-105"
                  >
                    <span>Launch Camera Scanner</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Feature 2: Real-time Geo Weather Station */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-950 via-[#092721] to-emerald-950 border border-teal-700/50 p-6 sm:p-8 shadow-2xl flex flex-col justify-between space-y-6 group hover:border-teal-400/80 transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-400 text-emerald-950 flex items-center gap-1.5 shadow-md">
                      <Compass className="w-3.5 h-3.5" />
                      LIVE GEO TELEMETRY
                    </span>
                    <span className="text-[11px] text-teal-300 font-mono">Open-Meteo GPS</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                    Real-Time Weather & <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-emerald-300">
                      Smart Crop Advisories
                    </span>
                  </h3>

                  <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed">
                    Access live localized temperature, humidity, rain risk, wind speed, soil temperature & moisture, fungal disease alerts, and 7-day agricultural forecasts tailored for smart farming.
                  </p>
                </div>

                <div className="pt-4 border-t border-emerald-800/40 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-teal-300 font-semibold">
                    <Satellite className="w-4 h-4 text-cyan-400" />
                    <span>GPS Microclimate Monitoring</span>
                  </div>
                  <Link
                    to="/weather"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 text-emerald-950 font-extrabold text-xs flex items-center gap-2 shadow-lg transition-all hover:scale-105"
                  >
                    <span>View Weather Station</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="py-20 bg-[#f8faf6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="px-3.5 py-1 bg-rose-100 text-rose-800 text-xs font-bold rounded-full uppercase tracking-wider">
                Systemic Obstacles
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 font-display">
                Challenges in Rural Agriculture
              </h2>
              <p className="text-emerald-800 text-sm sm:text-base leading-relaxed">
                Smallholder farmers face interconnected technical, infrastructural, and economic hurdles that limit productivity and livelihood stability.
              </p>
            </div>

            {/* Challenge Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((c, index) => {
                const IconComponent = c.icon;
                return (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-emerald-950 mb-2 font-display">{c.title}</h3>
                    <p className="text-xs sm:text-sm text-emerald-800/80 leading-relaxed">{c.desc}</p>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* SOLUTION SECTION */}
        <section className="py-20 bg-[#0f3822] text-white relative overflow-hidden dark-grid-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="px-3.5 py-1 bg-emerald-800 text-emerald-200 text-xs font-bold uppercase tracking-wider border border-emerald-600/40">
                The Agridyne Vision
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                A Technology-Driven Approach to Rural Prosperity
              </h2>
              <p className="text-emerald-200/90 text-sm sm:text-base leading-relaxed">
                Agridyne explores how innovation, technology, community collaboration, and appropriate use of local resources can contribute to agricultural and rural development.
              </p>
            </div>

            {/* 4 Feature Solution Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((s, index) => {
                const IconComponent = s.icon;
                return (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card-dark p-6 rounded-2xl flex flex-col justify-between hover:border-emerald-400/60 transition-all group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center shadow-md`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-900/80 text-emerald-300 border border-emerald-700/50">
                          {s.badge}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 font-display">{s.title}</h3>
                      <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed">{s.desc}</p>
                    </div>

                    <div className="pt-6 mt-4 border-t border-emerald-800/50 flex items-center text-xs text-emerald-300 font-semibold group-hover:translate-x-1 transition-transform">
                      <Link to="/about" className="flex items-center gap-1">
                        <span>Learn Concept</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* IMPACT SECTION */}
        <section className="py-20 bg-[#f8faf6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="px-3.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wider">
                Ecosystem Objectives
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 font-display">
                Building a Stronger Rural Future
              </h2>
              <p className="text-emerald-800 text-sm sm:text-base leading-relaxed">
                Core conceptual pillars supporting holistic rural transformation and sustainable agricultural resilience.
              </p>
            </div>

            {/* 4 Impact Cards (No fake numbers) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {impacts.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-sm text-center flex flex-col items-center space-y-3 hover:border-emerald-500/30 transition-all"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold text-emerald-950 font-display">{item.title}</h3>
                    <p className="text-xs text-emerald-800/80 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 bg-white border-t border-emerald-900/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            
            <div className="text-center space-y-3">
              <span className="px-3.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wider">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl font-extrabold text-emerald-950 font-display">
                Understanding Agridyne
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={faq.q}
                    className="border border-emerald-900/15 rounded-xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-5 bg-emerald-50/40 hover:bg-emerald-50 flex items-center justify-between gap-4 font-semibold text-emerald-950 text-sm sm:text-base font-display cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? <ChevronUp className="w-5 h-5 text-emerald-700 shrink-0" /> : <ChevronDown className="w-5 h-5 text-emerald-700 shrink-0" />}
                    </button>
                    {isOpen && (
                      <div className="p-5 bg-white text-xs sm:text-sm text-emerald-900/80 leading-relaxed border-t border-emerald-900/10">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

      </div>
    </>
  );
};
