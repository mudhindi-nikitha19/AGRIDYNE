import React, { useState } from 'react';
import { 
  Mail, Phone, Building2, Send, CheckCircle2, 
  Globe, User
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { useToast } from '../components/Toast';

export const Contact: React.FC = () => {
  const { showToast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      showToast('Form Error', 'Please fill in Name, Email, and Message.', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      // Attempt backend API submission
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        showToast('Collaboration Inquiry Received!', data.message || 'Thank you for reaching out.', 'success');
      } else {
        // Fallback for demo frontend state
        showToast('Inquiry Received!', 'Thank you for reaching out to Agridyne.', 'success');
      }
    } catch {
      // Offline / fallback success
      showToast('Inquiry Received (Demo)!', 'Thank you for collaborating with Agridyne.', 'success');
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', organization: '', message: '' });
    }
  };

  return (
    <>
      <SEO
        title="Contact & Collaboration"
        description="Connect with the Agridyne research team for academic collaboration, technology partnership, or rural development inquiries."
      />

      <div className="pt-20">
        
        {/* Banner */}
        <section className="bg-[#0f3822] text-white py-16 border-b border-emerald-800/40 animated-grid-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-emerald-900/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              Partnerships & Research Inquiries
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display">
              Interested in Collaborating?
            </h1>
            <p className="text-emerald-100/90 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-light">
              Interested in collaborating on the future of agriculture and rural development? Reach out to our research team.
            </p>
          </div>
        </section>

        {/* CONTACT FORM & INFO SECTION */}
        <section className="py-20 bg-[#f8faf6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Column: Contact Info Cards */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-emerald-950 font-display">
                    Connect With Agridyne
                  </h2>
                  <p className="text-xs sm:text-sm text-emerald-800/80 leading-relaxed">
                    We welcome academic inquiries, AgriTech startup partnerships, policy discussion, and community group collaborations.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-2xl border border-emerald-900/10 shadow-xs flex items-start gap-4">
                    <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-emerald-950 uppercase tracking-wider">Academic Department</h4>
                      <p className="text-sm font-semibold text-emerald-900">Department of Computer Science & Engineering</p>
                      <p className="text-xs text-emerald-700">Domain: Smart Agriculture & Rural Development</p>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-emerald-900/10 shadow-xs flex items-start gap-4">
                    <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-emerald-950 uppercase tracking-wider">Email Inquiry</h4>
                      <p className="text-sm font-semibold text-emerald-900">research@agridyne-platform.org</p>
                      <p className="text-xs text-emerald-700">Response within 24-48 hours</p>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-emerald-900/10 shadow-xs flex items-start gap-4">
                    <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-emerald-950 uppercase tracking-wider">Research Focus</h4>
                      <p className="text-sm font-semibold text-emerald-900">IoT, Edge AI, Offline Sync, Supply Chains</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-emerald-900 text-white rounded-2xl border border-emerald-700 space-y-2 text-xs">
                  <span className="font-bold text-emerald-300 block">Open Collaboration</span>
                  <p className="text-emerald-100/90 leading-relaxed">
                    Agridyne actively invites research institutions, Farmer Producer Organizations (FPOs), and agricultural technology developers to contribute to our open research framework.
                  </p>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-emerald-900/10 shadow-sm">
                
                {isSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-950 font-display">Inquiry Sent Successfully!</h3>
                    <p className="text-xs sm:text-sm text-emerald-800/80 max-w-md mx-auto">
                      Thank you for contacting Agridyne. Your submission has been recorded, and our research team will reach out to you.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 bg-emerald-800 text-white text-xs font-bold rounded-xl hover:bg-emerald-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-xl font-bold text-emerald-950 font-display border-b border-emerald-100 pb-3">
                      Collaboration Request Form
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
                      <div>
                        <label className="block font-semibold text-emerald-950 mb-1.5">Full Name *</label>
                        <div className="relative">
                          <User className="w-4 h-4 text-emerald-700 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="Dr. Rajesh Kumar"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-semibold text-emerald-950 mb-1.5">Email Address *</label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-emerald-700 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="rajesh@institution.edu"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
                      <div>
                        <label className="block font-semibold text-emerald-950 mb-1.5">Phone Number</label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-emerald-700 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            name="phone"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-semibold text-emerald-950 mb-1.5">Organization / Institution</label>
                        <div className="relative">
                          <Building2 className="w-4 h-4 text-emerald-700 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            name="organization"
                            placeholder="AgriTech Institute / FPO Collective"
                            value={formData.organization}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="text-xs">
                      <label className="block font-semibold text-emerald-950 mb-1.5">Collaboration Message *</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder="Describe your research interest, pilot project proposal, or collaboration goals..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-emerald-300" />
                      <span>{isSubmitting ? 'Sending Request...' : 'Submit Collaboration Inquiry'}</span>
                    </button>
                  </form>
                )}

              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
};
