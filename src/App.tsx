import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ToastProvider } from './components/Toast';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { SmartAgriculture } from './pages/SmartAgriculture';
import { RuralDevelopment } from './pages/RuralDevelopment';
import { Technology } from './pages/Technology';
import { Marketplace } from './pages/Marketplace';
import { SupplyChain } from './pages/SupplyChain';
import { FutureScope } from './pages/FutureScope';
import { Contact } from './pages/Contact';
import { LeafDiagnosis } from './pages/LeafDiagnosis';
import { WeatherStation } from './pages/WeatherStation';
import { NotFound } from './pages/NotFound';

// Auto Scroll to Top on Navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <ScrollToTop />
        
        <div className="min-h-screen flex flex-col bg-[#f8faf6] text-emerald-950 antialiased selection:bg-emerald-300 selection:text-emerald-950">
          <Navbar />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/smart-agriculture" element={<SmartAgriculture />} />
              <Route path="/leaf-diagnosis" element={<LeafDiagnosis />} />
              <Route path="/weather" element={<WeatherStation />} />
              <Route path="/rural-development" element={<RuralDevelopment />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/supply-chain" element={<SupplyChain />} />
              <Route path="/future-scope" element={<FutureScope />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;
