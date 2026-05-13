import { motion } from 'motion/react';
import { SITE_CONFIG } from '../config';
import { getWhatsAppUrl } from '../lib/whatsapp';

export function WhatsAppButton() {
  const phoneNumber = SITE_CONFIG.phone;
  const message = encodeURIComponent(SITE_CONFIG.whatsappMessage);
  const whatsappUrl = getWhatsAppUrl(phoneNumber, message);

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        boxShadow: [
          '0 0 0 0 rgba(37, 211, 102, 0)',
          '0 0 0 12px rgba(37, 211, 102, 0.2)',
          '0 0 0 24px rgba(37, 211, 102, 0)',
        ],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#25D366' }} // Standard WhatsApp Green
      aria-label="Chat on WhatsApp"
    >
      {/* Refined Shine Effect */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
        animate={{
          left: ['-100%', '200%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
          repeatDelay: 3,
        }}
      />
      
      {/* Standard WhatsApp Logo (Clean & Scaled) */}
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp" 
        className="w-9 h-9 relative z-10"
      />
    </motion.a>
  );
}
