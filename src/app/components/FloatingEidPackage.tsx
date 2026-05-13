import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, Gift } from 'lucide-react';
import { Link } from 'react-router';

export function FloatingEidPackage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Trigger */}
      <motion.button
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.05, x: 5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed left-6 bottom-24 z-50 bg-gold text-matte-black p-4 rounded-full shadow-2xl flex items-center gap-3 group overflow-hidden"
      >
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Gift size={24} />
        </motion.div>
        <span className="font-bold tracking-widest text-xs hidden md:block">EID OFFERS</span>
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
        />
      </motion.button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-matte-black/90 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="bg-ivory w-full max-w-4xl rounded-sm overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 text-matte-black/40 hover:text-matte-black transition-colors z-10"
              >
                <X size={32} />
              </button>

              <div className="flex flex-col md:flex-row h-full">
                {/* Left Side: Image */}
                <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                  <img
                    src="https://images.unsplash.com/photo-1610088441520-4352457e7095?w=1000&h=1500&fit=crop"
                    alt="Eid Special"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-matte-black/60 to-transparent flex items-end p-8 md:hidden">
                    <h2 className="text-4xl text-ivory font-heading">Eid Collection</h2>
                  </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-gold mb-4">
                    <span className="tracking-[0.3em] text-xs font-bold uppercase">Exclusive Eid Offer</span>
                  </div>
                  
                  <h2 className="text-5xl md:text-6xl mb-6 font-heading text-emerald leading-none">
                    EID COMBO <br />
                    <span className="italic">PACKAGE</span>
                  </h2>
                  
                  <p className="text-muted-foreground mb-8 text-lg font-light leading-relaxed">
                    Nails that shine, Henna that tells a story. The perfect beauty combo for your best Eid yet.
                  </p>

                  <div className="space-y-4 mb-10">
                    {[
                      { name: 'Basic Eid', desc: 'Simple Gel Nails + Mini Henna' },
                      { name: 'Soft Glam', desc: 'Medium Length + Detailed Henna', featured: true },
                      { name: 'Luxury Eid', desc: 'XL Freestyle + Both Hands Henna' }
                    ].map((pkg) => (
                      <div 
                        key={pkg.name} 
                        className={`p-4 rounded-sm border flex justify-between items-center transition-all duration-300 ${
                          pkg.featured ? 'border-gold bg-gold/5' : 'border-border'
                        }`}
                      >
                        <div>
                          <h4 className="font-bold text-emerald">{pkg.name}</h4>
                          <p className="text-xs text-muted-foreground">{pkg.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/book"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-5 bg-emerald text-ivory text-center rounded-sm tracking-[0.2em] font-bold hover:bg-emerald/90 transition-all duration-300 shadow-xl"
                  >
                    BOOK EID SLOT
                  </Link>
                  
                  <p className="mt-6 text-center text-[10px] text-muted-foreground uppercase tracking-widest">
                    * Limited slots available per day
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
