import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Instagram, Send, MessageCircle, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config';
import { getWhatsAppUrl } from '../lib/whatsapp';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `
🌟 *New Inquiry from Website* 🌟

*Name:* ${formData.name}
*Phone:* ${formData.phone}

*Message:*
${formData.message}
    `.trim();

    const whatsappUrl = getWhatsAppUrl(SITE_CONFIG.phone, encodeURIComponent(message));
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    setFormData({ name: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Studio Location',
      details: ['Onipetersi Estate, Mangoro', 'Ikeja, Lagos, Nigeria'],
    },
    {
      icon: Phone,
      title: 'Connect Directly',
      details: [SITE_CONFIG.phoneFormatted],
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: By Appointment'],
    },
    {
      icon: Instagram,
      title: 'Instagram',
      details: [`@${SITE_CONFIG.instagram}`],
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-ivory">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="text-gold tracking-[0.4em] text-xs font-bold mb-4 block uppercase">Contact Us</span>
          <h1 className="text-6xl md:text-8xl mb-6 font-heading" style={{ color: 'var(--emerald)' }}>
            Let's Start a <br /><span className="italic text-gold">Conversation</span>
          </h1>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: 'var(--gold)' }} />
          <p className="text-xl max-w-2xl mx-auto font-light leading-relaxed text-muted-foreground">
            Whether you're ready to book or just have a question, Temi is here to help you find your perfect aura.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-10">
              <div className="bg-emerald p-12 rounded-sm text-ivory shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <h2 className="text-4xl mb-8 font-heading">Direct Support</h2>
                <p className="mb-10 text-ivory/70 font-light leading-relaxed">
                  For the fastest response, reach out to us directly on WhatsApp. We typically respond within 1-2 hours.
                </p>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={getWhatsAppUrl(SITE_CONFIG.phone, encodeURIComponent("Hi Temi, I have a question about your services."))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-matte-black rounded-sm tracking-widest font-bold shadow-xl"
                >
                  <MessageCircle size={20} />
                  CHAT ON WHATSAPP
                </motion.a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="p-8 border border-emerald/10 rounded-sm hover:border-gold/50 transition-colors duration-500">
                    <info.icon size={24} className="text-gold mb-6" />
                    <h3 className="text-lg mb-3 font-bold tracking-widest text-emerald uppercase">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground font-light">{detail}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form / Poster */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-matte-black p-12 rounded-sm shadow-2xl relative">
              <div className="absolute top-8 right-8">
                <Sparkles className="text-gold animate-pulse" />
              </div>
              <h2 className="text-4xl mb-4 font-heading text-gold italic">Special Inquiry?</h2>
              <p className="text-ivory/60 mb-10 font-light leading-relaxed">
                Fill out the form below and we'll get back to you to discuss your unique beauty needs.
              </p>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 p-4 rounded-sm border border-gold/30 bg-gold/5 text-gold text-center text-sm tracking-widest font-bold"
                >
                  MESSAGE SENT SUCCESSFULLY
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label className="block mb-2 text-[10px] uppercase tracking-[0.3em] text-ivory/40 font-bold group-focus-within:text-gold transition-colors">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="E.g. Chioma Adebayo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-4 bg-transparent border-b border-ivory/10 text-ivory focus:outline-none focus:border-gold transition-all duration-500"
                  />
                </div>

                <div className="group">
                  <label className="block mb-2 text-[10px] uppercase tracking-[0.3em] text-ivory/40 font-bold group-focus-within:text-gold transition-colors">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-4 bg-transparent border-b border-ivory/10 text-ivory focus:outline-none focus:border-gold transition-all duration-500"
                  />
                </div>

                <div className="group">
                  <label className="block mb-2 text-[10px] uppercase tracking-[0.3em] text-ivory/40 font-bold group-focus-within:text-gold transition-colors">
                    Your Message
                  </label>
                  <textarea
                    required
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full p-4 bg-transparent border-b border-ivory/10 text-ivory focus:outline-none focus:border-gold transition-all duration-500 resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-5 bg-gold text-matte-black rounded-sm tracking-[0.2em] font-bold shadow-xl hover:shadow-gold/20 transition-all duration-300"
                >
                  SEND MESSAGE
                </motion.button>
              </form>
            </div>
            
            {/* Map Placeholder with Style */}
            <div className="mt-12 h-64 rounded-sm overflow-hidden border border-emerald/5 shadow-lg grayscale hover:grayscale-0 transition-all duration-1000">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.396!2d3.3162!3d6.5917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzUnMzAuMSJOIDPCsDE4JzU4LjMiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AURA BY TEMI Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
