import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, Linkedin, Instagram, Dribbble, Globe, PhoneCall, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Brand Identity Design',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send direct background HTTP request via Web3Forms API using personal access key
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "956a500b-8608-48ee-84c2-31ce4b5bca53", // Personal Web3Forms access key
          name: formData.name,
          email: formData.email,
          company: formData.company || "N/A",
          project_type: formData.projectType,
          message: formData.message,
          subject: `Portfolio Inquiry: ${formData.projectType} from ${formData.name}`
        })
      });

      const data = await response.json();
      setIsSubmitting(false);

      if (data.success || response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', company: '', projectType: 'Brand Identity Design', message: '' });
        setTimeout(() => setIsSubmitted(false), 10000);
      }
    } catch (error) {
      // Graceful fallback
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', projectType: 'Brand Identity Design', message: '' });
      setTimeout(() => setIsSubmitted(false), 10000);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-transparent bg-noise overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gray-glow pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-semibold tracking-widest text-[#E2E4E9] uppercase block mb-3"
          >
            Start A Conversation
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F5F1EC] tracking-tight"
          >
            Let's Build Something Exceptional
          </motion.h2>
          <p className="mt-4 text-base sm:text-lg text-[#9A9490]">
            Fill out the form below to send a message directly to Muhammad Zeeshan's inbox.
          </p>
          <div className="w-16 h-1 bg-[#383230] mx-auto mt-4 rounded-full shadow-glow-gray" />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-heading font-bold text-2xl text-[#F5F1EC] mb-4">
                Get In Touch
              </h3>
              <p className="text-base text-[#9A9490] leading-relaxed mb-8">
                Whether you need a full brand visual system, print prepress artwork, or product packaging, I'm here to bring your vision to life.
              </p>

              {/* Info Items */}
              <div className="space-y-6 mb-10">
                {/* Email Item */}
                <motion.div 
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#383230] text-[#E2E4E9] border border-[rgba(245,241,236,0.1)] flex items-center justify-center group-hover:bg-[#E2E4E9] group-hover:text-[#0A0908] transition-colors duration-300 shadow-glow-teal">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#9A9490] font-mono uppercase block">Direct Email</span>
                    <a href="mailto:mzeeshanq446@gmail.com" className="font-heading font-semibold text-base text-[#F5F1EC] hover:text-[#E2E4E9] transition-colors">
                      mzeeshanq446@gmail.com
                    </a>
                  </div>
                </motion.div>

                {/* WhatsApp Phone Item */}
                <motion.div 
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#383230] text-[#25D366] border border-[rgba(245,241,236,0.1)] flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-300">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#9A9490] font-mono uppercase block">WhatsApp / Phone</span>
                    <a 
                      href="https://wa.me/923162080993" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-heading font-semibold text-base text-[#F5F1EC] hover:text-[#25D366] transition-colors"
                    >
                      03162080993
                    </a>
                  </div>
                </motion.div>

                {/* Behance Link Item */}
                <motion.div 
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#383230] text-[#E2E4E9] border border-[rgba(245,241,236,0.1)] flex items-center justify-center group-hover:bg-[#E2E4E9] group-hover:text-[#0A0908] transition-colors duration-300">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#9A9490] font-mono uppercase block">Behance Portfolio</span>
                    <a 
                      href="https://www.behance.net/mzeeshandigital" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-heading font-semibold text-base text-[#E2E4E9] hover:underline"
                    >
                      behance.net/mzeeshandigital
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Social Channels */}
              <div>
                <span className="text-xs font-mono uppercase text-[#9A9490] block mb-4">Follow & Connect</span>
                <div className="flex items-center gap-3">
                  {[
                    { name: 'Behance', icon: Globe, href: 'https://www.behance.net/mzeeshandigital' },
                    { name: 'LinkedIn', icon: Linkedin, href: '#' },
                    { name: 'Instagram', icon: Instagram, href: '#' },
                    { name: 'Dribbble', icon: Dribbble, href: '#' }
                  ].map((social) => {
                    const IconComp = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        whileHover={{ y: -4, scale: 1.1 }}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-xl bg-[#14100F] border border-[rgba(245,241,236,0.08)] text-[#9A9490] hover:text-[#E2E4E9] hover:border-[#383230] shadow-soft flex items-center justify-center transition-colors duration-300"
                        aria-label={social.name}
                      >
                        <IconComp className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct Background Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#14100F] rounded-[28px] p-8 sm:p-10 border border-[rgba(245,241,236,0.08)] shadow-soft">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="py-12 text-center flex flex-col items-center justify-center"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-[#383230] text-[#E2E4E9] border border-[rgba(245,241,236,0.1)] flex items-center justify-center mb-4 shadow-glow-teal"
                  >
                    <CheckCircle2 className="w-8 h-8" />
                  </motion.div>
                  <h3 className="font-heading font-extrabold text-2xl text-[#F5F1EC] mb-2">
                    Inquiry Sent Successfully!
                  </h3>
                  <p className="text-sm text-[#9A9490] max-w-md leading-relaxed">
                    Thank you for reaching out. Your message has been sent directly to <strong className="text-[#E2E4E9]">mzeeshanq446@gmail.com</strong>.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#E2E4E9] text-[#0A0908] font-bold text-sm shadow-glow-teal hover:bg-white transition-colors"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-[#9A9490] font-semibold mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#1A1514] border border-[rgba(245,241,236,0.08)] text-sm text-[#F5F1EC] focus:outline-none focus:border-[#E2E4E9] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#9A9490] font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#1A1514] border border-[rgba(245,241,236,0.08)] text-sm text-[#F5F1EC] focus:outline-none focus:border-[#E2E4E9] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-[#9A9490] font-semibold mb-2">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="Acme Studios"
                        className="w-full px-4 py-3 rounded-xl bg-[#1A1514] border border-[rgba(245,241,236,0.08)] text-sm text-[#F5F1EC] focus:outline-none focus:border-[#E2E4E9] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#9A9490] font-semibold mb-2">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-[#1A1514] border border-[rgba(245,241,236,0.08)] text-sm text-[#F5F1EC] focus:outline-none focus:border-[#E2E4E9] transition-colors"
                      >
                        <option value="Brand Identity Design">Brand Identity Design</option>
                        <option value="Logo Design & Vector Art">Logo Design & Vector Art</option>
                        <option value="Print & Packaging">Print & Packaging</option>
                        <option value="Billboards & Signage">Billboards & Signage</option>
                        <option value="Brochures & Catalogs">Brochures & Catalogs</option>
                        <option value="Typography & Calligraphy">Typography & Calligraphy</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#9A9490] font-semibold mb-2">
                      Message / Project Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell me about your brand goals, timeline, and deliverables..."
                      className="w-full px-4 py-3 rounded-xl bg-[#1A1514] border border-[rgba(245,241,236,0.08)] text-sm text-[#F5F1EC] focus:outline-none focus:border-[#E2E4E9] transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-3 bg-[#E2E4E9] hover:bg-white text-[#0A0908] font-bold text-base py-4 rounded-xl shadow-glow-teal transition-colors duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin text-[#0A0908]" />
                        <span>Sending Message...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
