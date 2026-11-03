import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Home, Compass } from 'lucide-react';
import { SEO } from '../components/SEO';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEO title="Page Not Found (404)" description="The requested page could not be found on Agridyne." />

      <div className="pt-28 pb-20 min-h-[75vh] bg-[#f8faf6] flex items-center justify-center">
        <div className="max-w-md w-full mx-auto px-4 text-center space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-md">
            <Sprout className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full">
              404 Error
            </span>
            <h1 className="text-3xl font-extrabold text-emerald-950 font-display">Page Not Found</h1>
            <p className="text-xs sm:text-sm text-emerald-800/80 leading-relaxed">
              The page you are looking for does not exist or has been relocated within the Agridyne framework.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto px-5 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Link>
            <Link
              to="/smart-agriculture"
              className="w-full sm:w-auto px-5 py-2.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-950 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Smart Agri</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
