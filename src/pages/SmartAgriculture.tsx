import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, Radio, Brain, Sparkles, Navigation, Satellite, Activity, 
  Droplets, Thermometer, Sun, ShieldAlert, RefreshCw
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const SmartAgriculture: React.FC = () => {
  const [selectedBlock, setSelectedBlock] = useState<'North' | 'South' | 'East'>('North');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Simulated telemetry state
  const [telemetry, setTelemetry] = useState({
    soilMoisture: 42,
    temperature: 28,
    humidity: 68,
    nitrogen: 45,
    phosphorus: 18,
    potassium: 30,
    droneBattery: 84,
    status: 'Optimal Condition',
    lastUpdated: 'Just Now'
  });

  const handleBlockChange = (block: 'North' | 'South' | 'East') => {
    setSelectedBlock(block);
    setIsRefreshing(true);

    setTimeout(() => {
      if (block === 'North') {
        setTelemetry({ soilMoisture: 42, temperature: 28, humidity: 68, nitrogen: 45, phosphorus: 18, potassium: 30, droneBattery: 84, status: 'Optimal Condition', lastUpdated: 'Just Now' });
      } else if (block === 'South') {
        setTelemetry({ soilMoisture: 34, temperature: 31, humidity: 61, nitrogen: 38, phosphorus: 14, potassium: 26, droneBattery: 72, status: 'Requires Irrigation', lastUpdated: 'Just Now' });
      } else {
        setTelemetry({ soilMoisture: 52, temperature: 26, humidity: 75, nitrogen: 50, phosphorus: 22, potassium: 35, droneBattery: 91, status: 'Optimal Condition', lastUpdated: 'Just Now' });
      }
      setIsRefreshing(false);
    }, 400);
  };

  const techCards = [
    {
      title: 'IoT Sensors',
      desc: 'Monitoring ground agricultural conditions continuously using connected micro-sensor nodes.',
      icon: Radio,
      metrics: 'Moisture, Temp, NPK',
    },
    {
      title: 'Artificial Intelligence',
      desc: 'Analyzing aggregated telemetry data to support automated intelligent decision-making.',
      icon: Brain,
      metrics: 'Pattern Recognition',
    },
    {
      title: 'Machine Learning',
      desc: 'Using data-driven Predictive models for yield estimation and crop disease detection.',
      icon: Sparkles,
      metrics: 'Predictive Models',
    },
    {
      title: 'Drones',
      desc: 'Supporting aerial multispectral monitoring and micro-location agricultural observation.',
      icon: Navigation,
      metrics: 'Aerial Imaging',
    },
    {
      title: 'Satellite Data',
      desc: 'Using wide-area satellite imagery for macro-scale crop health and regional moisture analysis.',
      icon: Satellite,
      metrics: 'NDVI Indexing',
    },
    {
      title: 'Real-Time Monitoring',
      desc: 'Unified monitoring of Crops, Soil, Weather, and Automated Micro-Irrigation pipelines.',
      icon: Activity,
      metrics: 'Integrated Telemetry',
    },
  ];

  return (
    <>
      <SEO
        title="Smart Agriculture"
        description="Explore how IoT sensors, AI, machine learning, drones, and satellite data enable real-time crop monitoring and reduce manual farming dependency."
      />

      <div className="pt-20">
        
        {/* Banner */}
        <section className="bg-[#0f3822] text-white py-16 border-b border-emerald-800/40 animated-grid-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-emerald-900/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              Autonomous Sensing & Analytics
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display">
              Smart Agriculture
            </h1>
            <p className="text-emerald-100/90 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              Future agricultural systems can reduce dependency on manual farming and enable continuous real-time monitoring of crops, soil, and environmental metrics.
            </p>
          </div>
        </section>

        {/* FUTURISTIC DASHBOARD PROTOTYPE */}
        <section className="py-16 bg-[#0a2014] text-white relative border-b border-emerald-800/50 dark-grid-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            {/* Dashboard Header Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-emerald-950/80 p-4 sm:p-6 rounded-2xl border border-emerald-800/60 backdrop-blur-md">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-emerald-400" />
                  <h2 className="text-xl font-bold font-display text-white">
                    Agridyne Visual Telemetry Dashboard
                  </h2>
                </div>
                <div className="flex items-center gap-2 text-xs text-amber-300 font-mono">
                  <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                  <span>VISUAL PROTOTYPE: Simulated sensor telemetry for conceptual demonstration.</span>
                </div>
              </div>

              {/* Block Selection Controls */}
              <div className="flex items-center gap-2">
                {(['North', 'South', 'East'] as const).map((block) => (
                  <button
                    key={block}
                    onClick={() => handleBlockChange(block)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      selectedBlock === block
                        ? 'bg-emerald-500 text-emerald-950 font-bold shadow-md'
                        : 'bg-emerald-900/60 text-emerald-200 hover:bg-emerald-800/80 border border-emerald-700/50'
                    }`}
                  >
                    {block} Block
                  </button>
                ))}
              </div>
            </div>

            {/* Dashboard Main Visual Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Telemetry Metrics Column (7 Cols) */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Soil Moisture */}
                <div className="glass-card-dark p-5 rounded-2xl border border-emerald-500/20 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-emerald-300 font-semibold uppercase tracking-wider">Soil Moisture</span>
                    <Droplets className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold font-mono text-white">{telemetry.soilMoisture}%</span>
                    <span className="text-xs text-emerald-400 font-medium">Volumetric</span>
                  </div>
                  <div className="w-full bg-emerald-950 rounded-full h-2 overflow-hidden border border-emerald-800">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-500" style={{ width: `${telemetry.soilMoisture}%` }} />
                  </div>
                </div>

                {/* Ambient Temp & Humidity */}
                <div className="glass-card-dark p-5 rounded-2xl border border-emerald-500/20 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-emerald-300 font-semibold uppercase tracking-wider">Temperature / Humidity</span>
                    <Thermometer className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-extrabold font-mono text-white">{telemetry.temperature}°C</span>
                    <span className="text-sm font-mono text-emerald-300">/ {telemetry.humidity}% RH</span>
                  </div>
                  <div className="text-[11px] text-emerald-200/80 flex items-center gap-1">
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Micro-climate stability: High</span>
                  </div>
                </div>

                {/* NPK Nutrient Levels */}
                <div className="glass-card-dark p-5 rounded-2xl border border-emerald-500/20 space-y-2 sm:col-span-2">
                  <span className="text-xs text-emerald-300 font-semibold uppercase tracking-wider block">NPK Soil Nutrients (PPM)</span>
                  <div className="grid grid-cols-3 gap-3 pt-1">
                    <div className="p-2.5 bg-emerald-950/80 rounded-xl border border-emerald-800 text-center">
                      <span className="text-[10px] text-emerald-400 font-bold block">NITROGEN (N)</span>
                      <span className="text-xl font-bold font-mono text-white">{telemetry.nitrogen}</span>
                    </div>
                    <div className="p-2.5 bg-emerald-950/80 rounded-xl border border-emerald-800 text-center">
                      <span className="text-[10px] text-emerald-400 font-bold block">PHOSPHORUS (P)</span>
                      <span className="text-xl font-bold font-mono text-white">{telemetry.phosphorus}</span>
                    </div>
                    <div className="p-2.5 bg-emerald-950/80 rounded-xl border border-emerald-800 text-center">
                      <span className="text-[10px] text-emerald-400 font-bold block">POTASSIUM (K)</span>
                      <span className="text-xl font-bold font-mono text-white">{telemetry.potassium}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Aerial Drone Preview Column (5 Cols) */}
              <div className="lg:col-span-5 glass-card-dark p-5 rounded-2xl border border-emerald-500/20 flex flex-col justify-between space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Drone Patrol View</span>
                  </div>
                  <span className="text-[10px] bg-emerald-800 text-emerald-200 px-2 py-0.5 rounded font-mono">
                    Battery: {telemetry.droneBattery}%
                  </span>
                </div>

                <div className="relative rounded-xl overflow-hidden border border-emerald-700/50">
                  <img
                    src="/images/dashboard.png"
                    alt="Autonomous Drone Crop Scan View"
                    className="w-full h-44 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent flex items-end p-3">
                    <span className="text-xs font-mono text-emerald-300">
                      Sector Patrol: {selectedBlock} Field • Flight Altitude: 25m
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-emerald-200/80 pt-1">
                  <span>Field Status: <strong className="text-emerald-300">{telemetry.status}</strong></span>
                  <button
                    onClick={() => handleBlockChange(selectedBlock)}
                    className="text-emerald-400 hover:text-white flex items-center gap-1 cursor-pointer font-semibold"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                    <span>Refresh Telemetry</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* TECHNOLOGY CARDS GRID */}
        <section className="py-20 bg-[#f8faf6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="px-3.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wider">
                Smart Agriculture Technologies
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 font-display">
                Modern Technological Pillars
              </h2>
              <p className="text-emerald-800 text-sm sm:text-base leading-relaxed">
                Key tech building blocks designed to transform rural agricultural management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techCards.map((card, idx) => {
                const IconComp = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.08 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-sm hover:shadow-md transition-all space-y-4 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-md uppercase font-mono">
                        {card.metrics}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-emerald-950 font-display">{card.title}</h3>
                    <p className="text-xs sm:text-sm text-emerald-900/80 leading-relaxed">{card.desc}</p>
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
