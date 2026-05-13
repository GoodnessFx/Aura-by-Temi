import { motion } from 'motion/react';
import { Heart, Award, Users, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Chioma A.',
    text: 'Temi transformed my nails into pure art. The attention to detail is unmatched!',
    rating: 5,
  },
  {
    name: 'Aisha M.',
    text: 'Best bridal henna in Lagos. My hands looked absolutely stunning on my wedding day.',
    rating: 5,
  },
  {
    name: 'Sarah O.',
    text: 'Professional, clean, and such a relaxing atmosphere. I am now a regular client!',
    rating: 5,
  },
];

export function About() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl mb-4" style={{ color: 'var(--emerald)' }}>
              About AURA BY TEMI
            </h1>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: 'var(--gold)' }} />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-sm overflow-hidden shadow-2xl"
            >
              <img
                src="/images/temi5.jpg"
                alt="Temi at work"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-4xl" style={{ color: 'var(--emerald)' }}>
                Meet Temi
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--matte-black)' }}>
                With over 5 years of experience in the beauty industry, Temi has built AURA into
                Lagos's premier destination for luxury nail art and henna services.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--matte-black)' }}>
                Trained in both traditional and contemporary techniques, Temi combines artistic
                vision with technical precision to create truly unique designs that reflect each
                client's personal style.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--matte-black)' }}>
                At AURA, we believe beauty is more than skin deep—it's about confidence, self-expression,
                and celebrating your unique aura.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--muted)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl text-center mb-16"
            style={{ color: 'var(--emerald)' }}
          >
            Our Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Heart,
                title: 'Precision',
                description: 'Every detail matters. We take pride in delivering flawless results every time.',
              },
              {
                icon: Award,
                title: 'Elegance',
                description: 'Timeless beauty that reflects your unique style and personality.',
              },
              {
                icon: Users,
                title: 'Care',
                description: 'Your comfort and satisfaction are at the heart of everything we do.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--emerald)' }}
                >
                  <value.icon size={36} color="var(--ivory)" />
                </div>
                <h3 className="text-2xl mb-4" style={{ color: 'var(--gold)' }}>
                  {value.title}
                </h3>
                <p style={{ color: 'var(--muted-foreground)' }}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl text-center mb-16"
            style={{ color: 'var(--emerald)' }}
          >
            What Our Clients Say
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-card p-8 rounded-sm shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={20} fill="var(--gold)" color="var(--gold)" />
                  ))}
                </div>
                <p className="mb-4 text-lg leading-relaxed" style={{ color: 'var(--matte-black)' }}>
                  "{testimonial.text}"
                </p>
                <p style={{ color: 'var(--gold)' }}>— {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Aura Experience */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl mb-8 leading-none"
                style={{ color: 'var(--emerald)' }}
              >
                The Aura <br />
                <span className="text-gold italic font-heading">Experience</span>
              </motion.h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-light">
                We believe that every appointment should be a sanctuary of relaxation and a celebration of your personal style. From the moment you step in, to the final reveal of your art, we ensure a premium experience.
              </p>
              <ul className="space-y-4 mb-12">
                {['Hygienic & Sterilized Tools', 'Premium Quality Products', 'Personalized Consultation', 'Complimentary Refreshments'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-matte-black">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    <span className="tracking-widest text-sm font-medium uppercase">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-sm overflow-hidden h-64 shadow-xl"
              >
                <img src="/images/temi1.jpeg" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-sm overflow-hidden h-64 shadow-xl mt-8"
              >
                <img src="/images/temi2.jpeg" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--emerald)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '5+', label: 'Years' },
              { number: '1000+', label: 'Clients' },
              { number: '500+', label: 'Bridal Designs' },
              { number: '100%', label: 'Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-5xl mb-2" style={{ color: 'var(--gold)' }}>
                  {stat.number}
                </h3>
                <p className="text-lg" style={{ color: 'var(--ivory)' }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
