import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, ShieldCheck, Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#092014] text-emerald-100/80 border-t border-emerald-900/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-900/60">
          
          {/* Brand Info (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center text-emerald-950 font-bold shadow-md">
                <Sprout className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-display">Agridyne</span>
            </Link>
            
            <p className="text-sm text-emerald-200/80 leading-relaxed max-w-md">
              Agridyne presents an innovative perspective for improving agriculture and rural development by appropriately utilizing local resources and combining innovation, technology, community collaboration, and supportive policies.
            </p>

            <div className="pt-2 flex flex-col gap-1 text-xs text-emerald-400/90 font-mono">
              <span>Department of Computer Science & Engineering</span>
              <span>Domain: Agriculture • FoodTech • Rural Development</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4 font-display">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Agridyne</Link></li>
              <li><Link to="/smart-agriculture" className="hover:text-emerald-400 transition-colors">Smart Agriculture</Link></li>
              <li><Link to="/rural-development" className="hover:text-emerald-400 transition-colors">Rural Development</Link></li>
              <li><Link to="/technology" className="hover:text-emerald-400 transition-colors">Technology Ecosystem</Link></li>
            </ul>
          </div>

          {/* Innovation & Future */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4 font-display">Solutions</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/leaf-diagnosis" className="hover:text-emerald-400 transition-colors">AI Leaf Scanner</Link></li>
              <li><Link to="/weather" className="hover:text-emerald-400 transition-colors">Live Weather Station</Link></li>
              <li><Link to="/marketplace" className="hover:text-emerald-400 transition-colors">Digital Marketplace</Link></li>
              <li><Link to="/supply-chain" className="hover:text-emerald-400 transition-colors">Smart Supply Chain</Link></li>
              <li><Link to="/future-scope" className="hover:text-emerald-400 transition-colors">Future Scope & Roadmap</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact & Collaboration</Link></li>
            </ul>
          </div>

          {/* Platform Quick Action */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase font-display">Agridyne Platform</h4>
            <p className="text-xs text-emerald-300/70 leading-relaxed">
              Explore smart agriculture solutions, AI crop diagnostic tools, and real-time weather analytics.
            </p>
            <Link
              to="/smart-agriculture"
              className="w-full py-2.5 px-3 bg-emerald-800/60 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 border border-emerald-600/50 transition-colors"
            >
              <Cpu className="w-4 h-4 text-emerald-300" />
              <span>Explore Platform</span>
            </Link>
          </div>
        </div>

        {/* Disclaimer & Bottom Credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-emerald-400/60">
          <div className="flex items-center gap-2 max-w-2xl">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <p>
              <strong>Academic Project & Conceptual Platform:</strong> All visual telemetry, AI analytics, and marketplace items presented are interactive prototypes designed strictly according to the platform framework.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p>© {new Date().getFullYear()} Agridyne. Department of Computer Science & Engineering.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
