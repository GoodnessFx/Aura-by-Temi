import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

const services = [
  {
    id: 1,
    category: 'nails',
    name: 'Classic Manicure',
    description: 'Professional nail shaping, cuticle care, and polish application',
    duration: '45 mins',
    price: '₦8,000',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    category: 'nails',
    name: 'Gel Nails',
    description: 'Long-lasting gel polish with glossy finish',
    duration: '60 mins',
    price: '₦12,000',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    category: 'nails',
    name: 'Acrylic Extensions',
    description: 'Custom length and shape with durable acrylic',
    duration: '90 mins',
    price: '₦18,000',
    image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    category: 'nails',
    name: 'Nail Art',
    description: 'Custom designs and intricate artwork per nail',
    duration: '30 mins',
    price: 'From ₦2,000/nail',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop',
  },
  {
    id: 5,
    category: 'henna',
    name: 'Bridal Henna',
    description: 'Full hands traditional and modern bridal designs',
    duration: '2-3 hours',
    price: '₦35,000',
    image: 'https://images.unsplash.com/photo-1610088441520-4352457e7095?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    category: 'henna',
    name: 'Simple Henna',
    description: 'Elegant patterns for everyday occasions',
    duration: '45 mins',
    price: '₦10,000',
    image: 'https://images.unsplash.com/photo-1583241800698-7a91930d4d0a?w=600&h=400&fit=crop',
  },
  {
    id: 7,
    category: 'combo',
    name: 'Eid/Event Combo',
    description: 'Henna + premium nail service package',
    duration: '3 hours',
    price: '₦45,000',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop',
  },
  {
    id: 8,
    category: 'nails',
    name: 'Pedicure',
    description: 'Complete foot care with massage and polish',
    duration: '60 mins',
    price: '₦10,000',
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&h=400&fit=crop',
  },
  {
    id: 9,
    category: 'nails',
    name: 'Nail Repair',
    description: 'Fix broken or damaged nails',
    duration: '20 mins',
    price: '₦3,000',
    image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=600&h=400&fit=crop',
  },
];

type FilterType = 'all' | 'nails' | 'henna' | 'combo';

export function Services() {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredServices = filter === 'all'
    ? services
    : services.filter(service => service.category === filter);

  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'All Services' },
    { value: 'nails', label: 'Nails' },
    { value: 'henna', label: 'Henna' },
    { value: 'combo', label: 'Combos' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl mb-4" style={{ color: 'var(--emerald)' }}>
            Our Services
          </h1>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--gold)' }} />
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
            Experience world-class nail art and henna services in the heart of Lagos
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`px-6 py-2 rounded-sm tracking-wider transition-all duration-300 ${
                filter === tab.value
                  ? 'shadow-lg'
                  : 'border-2 hover:border-gold'
              }`}
              style={
                filter === tab.value
                  ? { backgroundColor: 'var(--emerald)', color: 'var(--ivory)' }
                  : { borderColor: 'var(--border)', color: 'var(--matte-black)' }
              }
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group bg-card rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gold/30"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 flex items-center justify-center bg-matte-black"
                >
                  <span className="text-ivory tracking-[0.3em] font-bold border-b-2 border-gold pb-2">VIEW DETAILS</span>
                </div>
                <div className="absolute top-4 right-4 bg-gold text-matte-black px-3 py-1 text-xs font-bold tracking-widest rounded-full shadow-lg">
                  {service.category.toUpperCase()}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-heading text-emerald group-hover:text-gold transition-colors duration-300">
                    {service.name}
                  </h3>
                </div>
                <p className="mb-8 text-muted-foreground leading-relaxed h-12 overflow-hidden">
                  {service.description}
                </p>
                <div className="flex justify-between items-center mb-8 pb-8 border-b border-emerald/5">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Duration</span>
                    <span className="text-sm font-medium text-matte-black">{service.duration}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Investment</span>
                    <span className="text-2xl font-heading text-gold">{service.price}</span>
                  </div>
                </div>
                <motion.div whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/book"
                    className="block w-full text-center px-6 py-4 rounded-sm tracking-widest transition-all duration-300 shadow-lg hover:shadow-emerald/20 font-bold"
                    style={{ backgroundColor: 'var(--emerald)', color: 'var(--ivory)' }}
                  >
                    BOOK THIS SERVICE
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-sm text-center"
          style={{ backgroundColor: 'var(--muted)' }}
        >
          <h3 className="text-2xl mb-4" style={{ color: 'var(--emerald)' }}>
            Loyalty Reward
          </h3>
          <p className="text-lg" style={{ color: 'var(--muted-foreground)' }}>
            Book 5 sessions, get your 6th session free! ✨
          </p>
        </motion.div>
      </div>
    </div>
  );
}
