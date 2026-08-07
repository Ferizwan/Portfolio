import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      // Create mailto fallback link
      const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      window.location.href = mailtoUrl;
    }, 800);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* High-Contrast Electric Cyan CTA Container Block per DESIGN.md */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative bg-[#00C8FF] rounded-[2.5rem] p-8 sm:p-12 lg:p-16 text-black shadow-2xl overflow-hidden"
      >
        {/* Background Decorative Circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/10 text-black text-xs font-mono font-bold border border-black/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>START A CONVERSATION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight leading-none text-black">
              HAVE A PROJECT IN MIND? LET'S BUILD SOMETHING TOGETHER.
            </h2>
            {/* Direct Contact Info List */}
            <div className="pt-4 space-y-3 font-mono text-xs sm:text-sm text-black">
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-3 p-3 rounded-2xl bg-black/5 hover:bg-black/10 transition-colors font-bold group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#00C8FF]" />
                </div>
                <span>{profileData.email}</span>
              </a>

              <a
                href={profileData.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-2xl bg-black/5 hover:bg-black/10 transition-colors font-bold group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[#00C8FF]" />
                </div>
                <span>{profileData.phone}</span>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/5 font-bold">
                <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#00C8FF]" />
                </div>
                <span>{profileData.location}</span>
              </div>
            </div>
          </div>

          {/* Right Minimalist Contact Form */}
          <div className="lg:col-span-6 bg-black rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-black/20">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#00C8FF]" />
              <span>Send Me a Message</span>
            </h3>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#00C8FF]/20 text-[#00C8FF] mx-auto flex items-center justify-center border border-[#00C8FF]/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold">Message Ready!</h4>
                  <p className="text-xs text-zinc-400 font-mono max-w-sm mx-auto">
                    Your message client has been opened with the inquiry details. You can also reach me directly at {profileData.email}.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-zinc-800 text-xs font-mono text-zinc-300 hover:text-white"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#00C8FF] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#00C8FF] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                      Subject (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Project Opportunity / Collaboration"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#00C8FF] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                      Project Details
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your project, timeline, or inquiries..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#00C8FF] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 rounded-xl bg-[#00C8FF] text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#00B0E0] transition-colors cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <span className="animate-pulse">Preparing Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
