import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Sprout, Menu, X, Cpu, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'AI Leaf Scanner', path: '/leaf-diagnosis', badge: 'CAM' },
    { name: 'Live Weather', path: '/weather' },
    { name: 'About', path: '/about' },
    { name: 'Smart Agriculture', path: '/smart-agriculture' },
    { name: 'Rural Development', path: '/rural-development' },
    { name: 'Technology', path: '/technology' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Supply Chain', path: '/supply-chain' },
    { name: 'Future Scope', path: '/future-scope' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f3822]/95 backdrop-blur-md shadow-lg border-b border-emerald-800/40 py-3'
          : 'bg-[#0f3822] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-700 flex items-center justify-center text-white shadow-md shadow-emerald-950/40 group-hover:scale-105 transition-transform">
            <Sprout className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold tracking-tight text-white font-display">Agridyne</span>
              <span className="px-1.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold bg-emerald-800/80 text-emerald-200 border border-emerald-600/40 rounded">
                AgriTech
              </span>
            </div>
            <span className="text-[11px] text-emerald-300/80 font-medium -mt-0.5 hidden sm:inline">
              Smart Agriculture & Rural Dev
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-emerald-950/40 p-1.5 rounded-full border border-emerald-800/30">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1 ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-sm font-semibold'
                    : 'text-emerald-100/90 hover:text-white hover:bg-emerald-800/40'
                }`
              }
            >
              <span>{link.name}</span>
              {link.badge && (
                <span className="px-1.5 py-0.2 text-[9px] font-bold bg-amber-400 text-emerald-950 rounded-full animate-pulse">
                  {link.badge}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <Link
            to="/smart-agriculture"
            className="px-4 py-2 text-xs font-semibold text-emerald-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 hover:from-emerald-300 hover:to-teal-200 rounded-lg shadow-md shadow-emerald-950/30 flex items-center gap-1.5 transition-all hover:scale-[1.02]"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Explore Agridyne</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-emerald-900/60 border border-emerald-700/50 text-emerald-200 hover:text-white transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {isOpen && (
        <div className="xl:hidden bg-[#092014] border-b border-emerald-800/60 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-4">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-emerald-700 text-white'
                      : 'text-emerald-100 hover:bg-emerald-900/60'
                  }`
                }
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </NavLink>
            ))}
          </div>

          <div className="pt-3 border-t border-emerald-800/40 flex flex-col gap-2">
            <Link
              to="/smart-agriculture"
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg flex items-center justify-center gap-2"
            >
              <Cpu className="w-4 h-4" />
              Explore Agridyne Platform
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
