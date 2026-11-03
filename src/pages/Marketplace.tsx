import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, Search, MapPin, Tag, User, PhoneCall, 
  ShieldAlert, X, Send
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { useToast } from '../components/Toast';

interface Product {
  id: string;
  title: string;
  category: string;
  seller: string;
  location: string;
  quantity: string;
  pricePerKg: number;
  unit: string;
  grade: string;
  image: string;
  description: string;
  isDemo: boolean;
}

export const Marketplace: React.FC = () => {
  const { showToast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  // Inquiry form state
  const [buyerName, setBuyerName] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [buyerMsg, setBuyerMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = ['All', 'Grains', 'Spices', 'Oilseeds', 'Fruits', 'Honey & Processed'];

  const mockProducts: Product[] = [
    {
      id: 'prod-1',
      title: 'Organic Basmati Rice (A-Grade)',
      category: 'Grains',
      seller: 'Ramesh Patel (FPO Collective)',
      location: 'Punjab, India',
      quantity: '500 kg',
      pricePerKg: 85,
      unit: 'kg',
      grade: 'Export Grade',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
      description: 'Sustainably farmed aromatic Basmati rice cultivated using IoT-guided micro-irrigation.',
      isDemo: true
    },
    {
      id: 'prod-2',
      title: 'Fresh Turmeric Roots (High Curcumin)',
      category: 'Spices',
      seller: 'Kavita Devi (Self-Help Group)',
      location: 'Telangana, India',
      quantity: '250 kg',
      pricePerKg: 120,
      unit: 'kg',
      grade: 'Organic Certified',
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80',
      description: 'High curcumin turmeric harvested with traditional methods and solar-dried.',
      isDemo: true
    },
    {
      id: 'prod-3',
      title: 'Desi Mustard Seeds (Cold-Pressed Grade)',
      category: 'Oilseeds',
      seller: 'Gurpreet Singh',
      location: 'Haryana, India',
      quantity: '1000 kg',
      pricePerKg: 65,
      unit: 'kg',
      grade: 'A-Grade',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80',
      description: 'Cleaned and graded yellow mustard seeds suitable for oil extraction.',
      isDemo: true
    },
    {
      id: 'prod-4',
      title: 'Organic Alphonso Mangoes',
      category: 'Fruits',
      seller: 'Ratnagiri Agri Cooperative',
      location: 'Maharashtra, India',
      quantity: '150 Crates',
      pricePerKg: 220,
      unit: 'crate',
      grade: 'Premium',
      image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80',
      description: 'Naturally ripened GI-tagged Ratnagiri Alphonso mangoes monitored for optimal harvest time.',
      isDemo: true
    },
    {
      id: 'prod-5',
      title: 'Red Chili Powder (Teja Variety)',
      category: 'Spices',
      seller: 'Guntur Farmer Network',
      location: 'Andhra Pradesh, India',
      quantity: '400 kg',
      pricePerKg: 180,
      unit: 'kg',
      grade: 'Grade-1 Spicy',
      image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80',
      description: 'Vibrant red pungency-certified chili powder without artificial coloring.',
      isDemo: true
    },
    {
      id: 'prod-6',
      title: 'Natural Honey (Multiflora)',
      category: 'Honey & Processed',
      seller: 'Himachal Beekeepers Guild',
      location: 'Himachal Pradesh, India',
      quantity: '120 Jars',
      pricePerKg: 350,
      unit: 'jar',
      grade: 'Raw Unfiltered',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80',
      description: 'Pure wild multiflora raw honey collected by village apiculture groups.',
      isDemo: true
    }
  ];

  const filteredProducts = mockProducts.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = 
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.seller.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerName || !buyerPhone) {
      showToast('Form Incomplete', 'Please provide your name and phone number.', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      showToast(
        'Demo Trade Inquiry Sent!',
        `Inquiry for ${activeModalProduct?.title} recorded in prototype state.`,
        'success'
      );
      setActiveModalProduct(null);
      setBuyerName('');
      setBuyerPhone('');
      setBuyerMsg('');
    }, 1000);
  };

  return (
    <>
      <SEO
        title="Digital Marketplace (Prototype)"
        description="Explore Agridyne's prototype digital marketplace connecting smallholder farmers directly with wholesale buyers."
      />

      <div className="pt-20">
        
        {/* Banner */}
        <section className="bg-[#0f3822] text-white py-14 border-b border-emerald-800/40 animated-grid-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            
            {/* PROTOTYPE DISCLAIMER BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/90 text-amber-200 border border-amber-600/50 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
              <span>PROTOTYPE / DEMO MARKETPLACE CONCEPT</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold font-display">
              Digital Marketplace Concept
            </h1>
            <p className="text-emerald-100/90 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              Helping farmers connect directly with buyers to eliminate redundant intermediary costs and secure transparent crop prices.
            </p>
          </div>
        </section>

        {/* PROTOTYPE NOTICE BANNER */}
        <div className="bg-amber-50 border-b border-amber-200 py-3 text-center px-4">
          <p className="text-xs sm:text-sm text-amber-900 font-medium max-w-5xl mx-auto">
            <strong>Note:</strong> This marketplace is a visual software prototype created to illustrate the paper's proposed direct farmer-to-buyer channel. All listings shown are sample demonstration products.
          </p>
        </div>

        {/* SEARCH & FILTERS SECTION */}
        <section className="py-12 bg-[#f8faf6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              
              {/* Search Bar */}
              <div className="md:col-span-6 relative">
                <Search className="w-5 h-5 text-emerald-700 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search produce, farmer name, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-emerald-900/15 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm text-emerald-950 placeholder-emerald-800/50 shadow-xs"
                />
              </div>

              {/* Category Pills */}
              <div className="md:col-span-6 flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-emerald-800 text-white shadow-sm'
                        : 'bg-white text-emerald-900 hover:bg-emerald-100 border border-emerald-900/10'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

            </div>

            {/* PRODUCT CARDS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-2xl border border-emerald-900/10 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-all group"
                >
                  <div>
                    {/* Image Box */}
                    <div className="relative h-48 overflow-hidden bg-emerald-100">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-emerald-950/80 text-emerald-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-xs font-mono">
                        {product.grade}
                      </span>
                      <span className="absolute top-3 right-3 bg-amber-500 text-emerald-950 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded shadow-xs">
                        DEMO ITEM
                      </span>
                    </div>

                    {/* Content Box */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between text-xs text-emerald-700 font-medium">
                        <span className="flex items-center gap-1">
                          <Tag className="w-3.5 h-3.5" />
                          {product.category}
                        </span>
                        <span className="flex items-center gap-1 font-mono">
                          <MapPin className="w-3.5 h-3.5" />
                          {product.location}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-emerald-950 font-display">{product.title}</h3>
                      <p className="text-xs text-emerald-800/80 leading-relaxed line-clamp-2">{product.description}</p>

                      <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-emerald-900">
                        <User className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span>Seller: {product.seller}</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing & Contact Footer */}
                  <div className="p-6 pt-0 border-t border-emerald-50 mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-emerald-700 font-bold uppercase block">Direct Price</span>
                      <span className="text-xl font-extrabold text-emerald-950 font-mono">
                        ₹{product.pricePerKg} <span className="text-xs font-normal text-emerald-800">/ {product.unit}</span>
                      </span>
                    </div>

                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Contact Seller</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* INQUIRY MODAL */}
        {activeModalProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-5 shadow-2xl border border-emerald-100">
              
              <div className="flex items-center justify-between border-b border-emerald-100 pb-3">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-emerald-700" />
                  <h3 className="font-bold text-emerald-950 text-base font-display">Contact Farmer / Seller</h3>
                </div>
                <button
                  onClick={() => setActiveModalProduct(null)}
                  className="text-gray-400 hover:text-gray-600 p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-emerald-50 p-3 rounded-xl text-xs text-emerald-900 space-y-1">
                <p className="font-bold text-emerald-950">{activeModalProduct.title}</p>
                <p>Seller: {activeModalProduct.seller} • {activeModalProduct.location}</p>
                <p className="font-mono text-emerald-800">Price: ₹{activeModalProduct.pricePerKg} / {activeModalProduct.unit}</p>
              </div>

              <form onSubmit={handleInquirySubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block font-semibold text-emerald-950 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-emerald-950 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter your contact phone"
                    value={buyerPhone}
                    onChange={(e) => setBuyerPhone(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-emerald-950 mb-1">Quantity & Message</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your purchase quantity or questions..."
                    value={buyerMsg}
                    onChange={(e) => setBuyerMsg(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveModalProduct(null)}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-lg flex items-center gap-1.5 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Sending...' : 'Submit Inquiry'}</span>
                  </button>
                </div>
              </form>

            </div>
          </div>
        )}

      </div>
    </>
  );
};
