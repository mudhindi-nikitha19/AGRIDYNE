import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Briefcase, Recycle, HeartHandshake, Coins, ArrowRight, 
  CheckCircle2, Sparkles
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const RuralDevelopment: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<number>(0);

  const diagramNodes = [
    {
      id: 0,
      name: 'Farmers',
      subtitle: 'Primary Production Base',
      icon: Users,
      color: 'bg-emerald-500',
      desc: 'Smallholders and growers applying localized agronomic knowledge and adopting smart field telemetry tools.',
      contributions: [
        'Soil stewardship & sustainable crop cultivation',
        'Participating in localized FPO cooperatives',
        'Adopting telemetry & edge monitoring apps'
      ]
    },
    {
      id: 1,
      name: 'Communities',
      subtitle: 'Resource Sharing & Support',
      icon: HeartHandshake,
      color: 'bg-teal-500',
      desc: 'Rural self-help groups and village collectives managing shared storage facilities and local water resources.',
      contributions: [
        'Shared cold-storage & equipment management',
        'Peer-to-peer knowledge transmission',
        'Social safety nets & micro-credit groups'
      ]
    },
    {
      id: 2,
      name: 'Technology',
      subtitle: 'Enabling Data Infrastructure',
      icon: Sparkles,
      color: 'bg-emerald-600',
      desc: 'Lightweight IoT sensors, Edge AI analytics, and offline-enabled apps bridging information gaps.',
      contributions: [
        'Real-time crop disease & soil alerts',
        'Bandwidth-efficient offline data sync',
        'Transparent pricing & market discovery'
      ]
    },
    {
      id: 3,
      name: 'Markets',
      subtitle: 'Direct Buyer Connectivity',
      icon: Coins,
      color: 'bg-green-600',
      desc: 'Digital market channels connecting agricultural produce directly with institutional buyers and consumers.',
      contributions: [
        'Bypassing redundant intermediary fees',
        'Guaranteed price discovery & instant settlement',
        'Traceable quality grading & certifications'
      ]
    },
    {
      id: 4,
      name: 'Rural Prosperity',
      subtitle: 'Holistic Sustainable Growth',
      icon: Briefcase,
      color: 'bg-emerald-700',
      desc: 'The ultimate outcome: Elevated rural income, vibrant local entrepreneurship, and resilient community well-being.',
      contributions: [
        'Higher household disposable income',
        'Mitigation of youth rural-urban migration',
        'Long-term ecological & social stability'
      ]
    }
  ];

  const sections = [
    {
      title: 'Rural Entrepreneurship',
      desc: 'Agriculture extends far beyond raw crop production—it acts as an incubator for youth-led AgriTech startups, bio-fertilizer enterprises, and localized processing units.',
      icon: Briefcase,
      points: [
        'Value-addition micro-enterprises in villages',
        'Custom hiring centers for agricultural drones & equipment',
        'Agri-logistics & cold storage management services'
      ]
    },
    {
      title: 'Community Collaboration',
      desc: 'Collaborative frameworks unite individual farmers into Farmer Producer Organizations (FPOs), empowering them to negotiate bulk input prices and aggregate harvest volumes.',
      icon: HeartHandshake,
      points: [
        'Collective bargaining power for smallholders',
        'Shared processing infrastructure and solar dryers',
        'Community-managed irrigation networks'
      ]
    },
    {
      title: 'Local Resource Utilization',
      desc: 'Maximizing the appropriate use of indigenous biomass, rainwater catchment, and natural soil amendments reduces external financial dependencies.',
      icon: Recycle,
      points: [
        'Composting farm waste into bio-enriched fertilizers',
        'Check-dam & rainwater harvesting management',
        'Promoting climate-resilient local seed varieties'
      ]
    },
    {
      title: 'Social Development',
      desc: 'Modernized agriculture elevates overall rural quality of life, improving nutrition, education, and social cohesion across farming households.',
      icon: Users,
      points: [
        'Reduced economic distress and debt burden',
        'Empowerment of women through self-help agri-groups',
        'Enhanced community resilience against climate shocks'
      ]
    },
    {
      title: 'Economic Development',
      desc: 'Integrating direct digital markets with efficient post-harvest handling boosts net agricultural income and stimulates localized economic velocity.',
      icon: Coins,
      points: [
        'Higher profit margins for primary producers',
        'Circulation of wealth within rural economies',
        'Attracting sustainable rural infrastructure investments'
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Rural Development"
        description="Discover how Agridyne empowers rural entrepreneurship, community collaboration, local resource utilization, and social-economic prosperity."
      />

      <div className="pt-20">
        
        {/* Banner */}
        <section className="bg-[#0f3822] text-white py-16 border-b border-emerald-800/40 animated-grid-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-emerald-900/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              Socio-Economic Ecosystem
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display">
              Rural Development & Prosperity
            </h1>
            <p className="text-emerald-100/90 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              Empowering farming communities by combining technological innovation with local resource utilization, social cohesion, and entrepreneurial opportunities.
            </p>
          </div>
        </section>

        {/* INTERACTIVE DIAGRAM SECTION */}
        <section className="py-20 bg-[#0a2014] text-white relative border-b border-emerald-800/50 dark-grid-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="px-3.5 py-1 bg-emerald-800 text-emerald-200 text-xs font-bold rounded-full uppercase tracking-wider border border-emerald-600/40">
                Interactive Concept Pathway
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                The Rural Value Chain Pipeline
              </h2>
              <p className="text-emerald-200/90 text-sm">
                Click any node in the interactive pipeline below to examine its strategic role.
              </p>
            </div>

            {/* Horizontal Diagram Buttons */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-3 overflow-x-auto pb-4">
              {diagramNodes.map((node, index) => {
                const IconComp = node.icon;
                const isSelected = selectedNode === index;
                return (
                  <React.Fragment key={node.name}>
                    <button
                      onClick={() => setSelectedNode(index)}
                      className={`flex-1 min-w-[170px] p-4 rounded-2xl text-left transition-all border cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-500 text-emerald-950 font-bold border-emerald-300 shadow-lg shadow-emerald-950/50 scale-105'
                          : 'bg-emerald-950/80 text-emerald-200 hover:bg-emerald-900 border-emerald-800'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`p-2 rounded-lg ${isSelected ? 'bg-emerald-950 text-emerald-300' : 'bg-emerald-900 text-emerald-400'}`}>
                          <IconComp className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-mono font-bold">Step 0{index + 1}</span>
                      </div>
                      <h4 className="text-sm font-bold font-display">{node.name}</h4>
                      <p className={`text-[11px] mt-0.5 line-clamp-1 ${isSelected ? 'text-emerald-950/80' : 'text-emerald-300/70'}`}>
                        {node.subtitle}
                      </p>
                    </button>

                    {index < diagramNodes.length - 1 && (
                      <div className="hidden lg:block text-emerald-500 font-bold">
                        <ArrowRight className="w-5 h-5 animate-pulse" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Selected Node Detail View */}
            <motion.div
              key={selectedNode}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-card-dark p-8 rounded-2xl border border-emerald-400/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-md bg-emerald-500 text-emerald-950 text-xs font-mono font-bold">
                    Node 0{selectedNode + 1}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white font-display">
                    {diagramNodes[selectedNode].name} — {diagramNodes[selectedNode].subtitle}
                  </h3>
                </div>

                <p className="text-sm text-emerald-100/90 leading-relaxed">
                  {diagramNodes[selectedNode].desc}
                </p>

                <div className="space-y-2 pt-2">
                  <h5 className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Key Functional Roles</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {diagramNodes[selectedNode].contributions.map((c, cIdx) => (
                      <div key={cIdx} className="p-3 bg-emerald-950/80 rounded-xl border border-emerald-800 text-xs text-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mb-1" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-emerald-950/90 p-6 rounded-xl border border-emerald-800 flex flex-col items-center text-center space-y-3">
                {React.createElement(diagramNodes[selectedNode].icon, { className: "w-14 h-14 text-emerald-400" })}
                <span className="text-sm font-bold text-white font-display">{diagramNodes[selectedNode].name}</span>
                <span className="text-xs text-emerald-300 font-mono">Ecosystem Link {selectedNode + 1} of 5</span>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 5 CORE RURAL DEVELOPMENT SECTIONS */}
        <section className="py-20 bg-[#f8faf6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="px-3.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wider">
                Strategic Pillars
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 font-display">
                5 Pillars of Rural Prosperity
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((sec) => {
                const IconComp = sec.icon;
                return (
                  <div
                    key={sec.title}
                    className="bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-sm space-y-4 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-emerald-950 font-display">{sec.title}</h3>
                      <p className="text-xs sm:text-sm text-emerald-900/80 leading-relaxed">{sec.desc}</p>
                    </div>

                    <div className="pt-4 border-t border-emerald-100 space-y-1.5">
                      <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">Action Highlights</span>
                      {sec.points.map((p, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs text-emerald-900/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
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
