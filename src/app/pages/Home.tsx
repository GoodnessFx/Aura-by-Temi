import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router';
import { ChevronDown, Star, Shield, Zap, Heart } from 'lucide-react';
import { useRef } from 'react';

const featuredServices = [
  {
    title: 'Nail Art & Extensions',
    image: '/images/temi1.jpeg',
    desc: 'Specializing in custom designs, from elegant French tips to intricate 3D art.',
    category: 'Signature'
  },
  {
    title: 'Pedicure & Foot Care',
    image: '/images/temi2.jpeg',
    desc: 'A complete therapeutic experience for your feet, finished with perfection.',
    category: 'Luxury'
  },
  {
    title: 'Bridal & Event Henna',
    image: '/images/temi3.jpeg',
    desc: 'Exquisite traditional and modern henna patterns that tell your unique story.',
    category: 'Heritage'
  },
];

const myWorkItems = [
  {
    image: '/images/NEW AURA 1.jpeg',
    title: 'Signature Aura Set',
    tag: 'Featured Work',
    type: 'image'
  },
  {
    image: '/images/temi1.jpeg',
    title: 'Luxury Nail Finish',
    tag: 'Nail Art',
    type: 'image'
  },
  {
    image: '/images/temi2.jpeg',
    title: 'Polished Client Look',
    tag: 'Salon Finish',
    type: 'image'
  },
  {
    image: '/images/temi3.jpeg',
    title: 'Detailed Henna Design',
    tag: 'Henna',
    type: 'image'
  },
  {
    image: '/images/temi4.jpeg',
    title: 'Event Ready Glam',
    tag: 'Bridal / Events',
    type: 'image'
  },
  {
    image: '/images/temi5.jpg',
    title: 'Soft Luxury Details',
    tag: 'Custom Design',
    type: 'image'
  },
  {
    image: '/images/gallery/NEW AURA 2.mp4',
    title: 'Aura Behind The Scenes',
    tag: 'Video Showcase',
    type: 'video'
  },
];

export function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen overflow-x-hidden" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image with Parallax */}
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-gradient-to-b from-matte-black/60 via-matte-black/40 to-matte-black/80 z-10"
          />
          <img
            src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1920&h=1080&fit=crop"
            alt="Luxury nail art"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-20 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gold text-sm md:text-base mb-6 block font-medium"
          >
            ESTABLISHED IN LAGOS
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-6xl sm:text-8xl md:text-9xl mb-8 tracking-tighter leading-none"
            style={{ color: 'var(--ivory)', fontFamily: 'var(--font-heading)' }}
          >
            Where Skin <br />
            <span className="italic text-gold">Becomes Art</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-xl md:text-2xl mb-12 tracking-wide max-w-2xl mx-auto font-light"
            style={{ color: 'var(--ivory)' }}
          >
            Aura by Temi — Premium Nail & Henna Artistry for the modern woman who values elegance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/book"
                className="px-10 py-5 rounded-sm tracking-widest transition-all duration-500 block shadow-2xl hover:shadow-gold/20"
                style={{ backgroundColor: 'var(--gold)', color: 'var(--matte-black)' }}
              >
                BOOK YOUR EXPERIENCE
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/gallery"
                className="px-10 py-5 rounded-sm tracking-widest border-2 transition-all duration-500 block hover:bg-ivory/5"
                style={{ borderColor: 'var(--gold)', color: 'var(--ivory)' }}
              >
                EXPLORE PORTFOLIO
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        >
          <ChevronDown size={32} color="var(--gold)" />
        </motion.div>
      </section>

      {/* Brand Ethos */}
      <section className="py-24 px-4 bg-matte-black text-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: Star, title: "Artistic Precision", desc: "Every design is a masterpiece tailored to your unique style." },
              { icon: Shield, title: "Premium Quality", desc: "We use only the finest products to ensure lasting beauty." },
              { icon: Zap, title: "Fast & Snappy", desc: "Efficient service without compromising on excellence." },
              { icon: Heart, title: "Personal Care", desc: "A luxury experience that makes you feel truly special." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <item.icon className="w-8 h-8 mx-auto mb-6 text-gold group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl mb-3 tracking-wider text-gold font-medium">{item.title}</h3>
                <p className="text-sm text-ivory/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services with User Image Descriptions */}
      <section className="py-32 px-4 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-7xl mb-6 tracking-tight" style={{ color: 'var(--emerald)' }}>
              Curated Artistry
            </h2>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: 'var(--gold)' }} />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-sm mb-8 aspect-[4/5]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-matte-black/20 group-hover:bg-matte-black/40 transition-colors duration-500" />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1 bg-gold text-matte-black text-xs tracking-widest font-bold">
                      {service.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-3xl mb-4 tracking-tight" style={{ color: 'var(--matte-black)' }}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.desc}</p>
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 text-gold tracking-widest text-sm font-bold hover:gap-4 transition-all duration-300"
                >
                  BOOK SESSION
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Work Section */}
      <section className="py-32 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between mb-16"
          >
            <div className="max-w-2xl">
              <span className="text-gold tracking-[0.35em] text-sm font-bold block mb-4">MY WORK</span>
              <h2 className="text-5xl md:text-7xl mb-6 tracking-tight" style={{ color: 'var(--emerald)' }}>
                See What I Create
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                Customers can explore some of my recent nail and henna work, then head straight to the gallery or book an appointment.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/gallery"
                className="px-8 py-4 rounded-sm tracking-widest text-sm text-center transition-all duration-300 border-2 hover:bg-gold hover:text-matte-black"
                style={{ borderColor: 'var(--gold)', color: 'var(--emerald)' }}
              >
                CHECK OUT MY WORK
              </Link>
              <Link
                to="/book"
                className="px-8 py-4 rounded-sm tracking-widest text-sm text-center transition-all duration-300"
                style={{ backgroundColor: 'var(--emerald)', color: 'var(--ivory)' }}
              >
                BOOK NOW
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {myWorkItems.map((item, index) => (
              <motion.div
                key={item.image}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group rounded-sm overflow-hidden bg-ivory shadow-lg"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  {item.type === 'video' ? (
                    <video
                      src={item.image}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-matte-black/70 via-matte-black/10 to-transparent" />
                  <span className="absolute top-5 left-5 px-3 py-1 bg-gold text-matte-black text-xs tracking-widest font-bold">
                    {item.tag}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl tracking-tight text-ivory">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eid Combo Package Section - High Visibility */}
      <section className="py-32 px-4 relative bg-matte-black overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald/5 rounded-full blur-3xl -ml-48 -mb-48" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="relative p-2 border border-gold/30 rounded-sm">
                <img
                  src="/images/temi4.jpeg"
                  alt="Eid Combo Package"
                  className="w-full rounded-sm shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold flex items-center justify-center rounded-full shadow-2xl animate-pulse">
                  <div className="text-center text-matte-black">
                    <span className="block text-xs tracking-widest font-bold">OFFER ENDS</span>
                    <span className="block text-3xl font-heading">EID DAY</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-gold tracking-[0.4em] text-sm mb-6 block font-bold">LIMITED TIME EXCLUSIVE</span>
                <h2 className="text-6xl md:text-8xl mb-8 leading-none" style={{ color: 'var(--ivory)' }}>
                  EID COMBO <br />
                  <span className="text-gold italic">PACKAGE</span>
                </h2>
                <p className="text-xl md:text-2xl mb-12 tracking-wide leading-relaxed font-light text-ivory/80">
                  Celebrate your best Eid yet with our curated beauty packages. Nails that shine, Henna that tells a story, and an Aura that leaves an impression.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                  {[
                    { name: 'Basic Eid', desc: 'Simple Gel Nails + Mini Henna', price: '₦15,000' },
                    { name: 'Soft Glam', desc: 'Medium Length + Detailed Henna', price: '₦25,000', featured: true },
                    { name: 'Luxury Eid', desc: 'XL Freestyle + Both Hands Henna', price: '₦35,000' },
                    { name: 'Home Service', desc: 'Available for groups & individuals', price: 'Contact' }
                  ].map((pkg) => (
                    <div 
                      key={pkg.name} 
                      className={`p-6 rounded-sm border transition-all duration-500 ${
                        pkg.featured ? 'border-gold bg-gold/10 scale-105' : 'border-gold/20 hover:border-gold/50'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-2xl tracking-tight text-gold">{pkg.name}</h4>
                        <span className="text-xs text-gold/60">{pkg.price}</span>
                      </div>
                      <p className="text-sm text-ivory/60 leading-relaxed">{pkg.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                    <Link
                      to="/book"
                      className="w-full py-5 rounded-sm tracking-widest text-lg transition-all duration-500 shadow-2xl shadow-gold/10 text-center block"
                      style={{ backgroundColor: 'var(--gold)', color: 'var(--matte-black)' }}
                    >
                      SECURE YOUR SLOT
                    </Link>
                  </motion.div>
                </div>
                <p className="mt-8 text-sm italic text-ivory/40">
                  *Deposits are required to secure your slot. Group discounts available.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 px-4 bg-muted">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-ivory p-16 md:p-32 rounded-sm shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-gold" />
            <h2 className="text-5xl md:text-7xl mb-12 tracking-tight" style={{ color: 'var(--emerald)' }}>
              Ready to Glow?
            </h2>
            <p className="text-xl md:text-2xl mb-16 text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Whether it's for a wedding, a special event, or your monthly self-care ritual, Temi is here to transform your vision into reality.
            </p>
            <Link
              to="/book"
              className="inline-block px-12 py-5 border-2 rounded-sm tracking-widest text-lg transition-all duration-500 hover:bg-emerald hover:text-ivory"
              style={{ borderColor: 'var(--emerald)', color: 'var(--emerald)' }}
            >
              BOOK AN APPOINTMENT
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
