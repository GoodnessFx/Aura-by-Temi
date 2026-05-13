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
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          '0 0 0 0 rgba(13, 92, 77, 0)',
          '0 0 0 10px rgba(13, 92, 77, 0.4)',
          '0 0 0 20px rgba(13, 92, 77, 0)',
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:shadow-emerald/50 flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--emerald)' }}
      aria-label="Chat on WhatsApp"
    >
      <motion.div
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
          repeatDelay: 2,
        }}
      />
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp" 
        className="w-8 h-8 relative z-10"
      />
    </motion.a>
  );
}
