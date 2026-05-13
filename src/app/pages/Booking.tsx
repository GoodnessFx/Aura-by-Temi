import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Upload, Calendar, Clock, User, MapPin } from 'lucide-react';
import { getWhatsAppUrl, sanitizeInput } from '../lib/whatsapp';
import { SITE_CONFIG } from '../config';

type BookingData = {
  service: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  whatsapp: string;
  instagram: string;
  requests: string;
  photo: File | null;
};

const services = [
  'Classic Manicure',
  'Gel Nails',
  'Acrylic Extensions',
  'Nail Art',
  'Bridal Henna',
  'Simple Henna',
  'Eid/Event Combo',
  'Pedicure',
  'Nail Repair',
];

const timeSlots = [
  '9:00 AM - 11:00 AM',
  '11:00 AM - 1:00 PM',
  '1:00 PM - 3:00 PM',
  '3:00 PM - 5:00 PM',
  '5:00 PM - 7:00 PM',
];

export function Booking() {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    service: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    whatsapp: '',
    instagram: '',
    requests: '',
    photo: null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 6;

  const handleSubmit = async () => {
    // Basic Rate Limiting Check (Local)
    const lastBooking = localStorage.getItem('last_booking_time');
    const now = Date.now();
    if (lastBooking && now - parseInt(lastBooking) < 60000) { // 1 minute limit
      alert('Please wait a moment before making another booking request.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const sanitizedData = {
        service: sanitizeInput(bookingData.service),
        date: sanitizeInput(bookingData.date),
        time: sanitizeInput(bookingData.time),
        name: sanitizeInput(bookingData.name),
        phone: sanitizeInput(bookingData.phone),
        whatsapp: sanitizeInput(bookingData.whatsapp),
        instagram: sanitizeInput(bookingData.instagram),
        requests: sanitizeInput(bookingData.requests),
      };

      const message = `
🌟 *New Booking Request* 🌟

*Service:* ${sanitizedData.service}
*Date:* ${sanitizedData.date}
*Time:* ${sanitizedData.time}

*Client Details:*
Name: ${sanitizedData.name}
Phone: ${sanitizedData.phone}
WhatsApp: ${sanitizedData.whatsapp}
Instagram: ${sanitizedData.instagram || 'N/A'}

*Special Requests:*
${sanitizedData.requests || 'None'}

Please confirm this booking. Thank you! ✨
      `.trim();

      const whatsappUrl = getWhatsAppUrl(SITE_CONFIG.phone, encodeURIComponent(message));
      
      // Artificial delay for professional feel
      await new Promise(resolve => setTimeout(resolve, 800));
      
      localStorage.setItem('last_booking_time', now.toString());
      window.open(whatsappUrl, '_blank');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Booking error:', error);
      alert('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return bookingData.service !== '';
      case 2:
        return bookingData.date !== '';
      case 3:
        return bookingData.time !== '';
      case 4:
        return bookingData.name && bookingData.phone && bookingData.whatsapp;
      case 5:
        return true;
      case 6:
        return true;
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center"
            style={{ backgroundColor: 'var(--emerald)' }}
          >
            <Check size={48} color="var(--ivory)" />
          </motion.div>
          <h2 className="text-5xl mb-4" style={{ color: 'var(--emerald)' }}>
            Booking Received!
          </h2>
          <p className="text-xl mb-8" style={{ color: 'var(--muted-foreground)' }}>
            Your session is booked. Temi will confirm within 2 hours via WhatsApp.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setStep(1);
              setBookingData({
                service: '',
                date: '',
                time: '',
                name: '',
                phone: '',
                whatsapp: '',
                instagram: '',
                requests: '',
                photo: null,
              });
            }}
            className="px-8 py-3 rounded-sm tracking-wider transition-all duration-300 hover:shadow-lg"
            style={{ backgroundColor: 'var(--gold)', color: 'var(--matte-black)' }}
          >
            Book Another Session
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl mb-4" style={{ color: 'var(--emerald)' }}>
            Book Your Session
          </h1>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: 'var(--gold)' }} />
        </motion.div>

        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6 px-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div key={index} className="flex flex-col items-center flex-1 relative">
                <motion.div
                  initial={false}
                  animate={{
                    backgroundColor: index + 1 <= step ? 'var(--gold)' : 'var(--border)',
                    scale: index + 1 === step ? 1.2 : 1,
                  }}
                  className="w-4 h-4 rounded-full z-10 shadow-lg transition-all duration-500"
                />
                {index < totalSteps - 1 && (
                  <div className="absolute left-1/2 top-2 w-full h-[2px] -z-0 bg-border">
                    <motion.div
                      initial={false}
                      animate={{ width: index + 1 < step ? '100%' : '0%' }}
                      className="h-full bg-gold transition-all duration-500"
                    />
                  </div>
                )}
                <span 
                  className={`mt-3 text-[10px] tracking-widest font-bold uppercase transition-colors duration-500 ${
                    index + 1 <= step ? 'text-gold' : 'text-muted-foreground/40'
                  }`}
                >
                  Step {index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-card p-8 rounded-sm shadow-xl"
          >
            {/* Step 1: Select Service */}
            {step === 1 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Calendar size={28} color="var(--emerald)" />
                  <h2 className="text-3xl" style={{ color: 'var(--emerald)' }}>
                    Select Your Service
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <button
                      key={service}
                      onClick={() => setBookingData({ ...bookingData, service })}
                      className={`p-4 rounded-sm text-left transition-all duration-300 ${
                        bookingData.service === service ? 'shadow-lg' : 'border-2 hover:border-gold'
                      }`}
                      style={
                        bookingData.service === service
                          ? { backgroundColor: 'var(--emerald)', color: 'var(--ivory)' }
                          : { borderColor: 'var(--border)', color: 'var(--matte-black)' }
                      }
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Select Date */}
            {step === 2 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Calendar size={28} color="var(--emerald)" />
                  <h2 className="text-3xl" style={{ color: 'var(--emerald)' }}>
                    Select Date
                  </h2>
                </div>
                <input
                  type="date"
                  value={bookingData.date}
                  onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full p-4 rounded-sm border-2 transition-all duration-300 focus:outline-none"
                  style={{
                    borderColor: 'var(--border)',
                    backgroundColor: 'var(--input-background)',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--emerald)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>
            )}

            {/* Step 3: Select Time */}
            {step === 3 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Clock size={28} color="var(--emerald)" />
                  <h2 className="text-3xl" style={{ color: 'var(--emerald)' }}>
                    Select Time Slot
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setBookingData({ ...bookingData, time: slot })}
                      className={`p-4 rounded-sm transition-all duration-300 ${
                        bookingData.time === slot ? 'shadow-lg' : 'border-2 hover:border-gold'
                      }`}
                      style={
                        bookingData.time === slot
                          ? { backgroundColor: 'var(--emerald)', color: 'var(--ivory)' }
                          : { borderColor: 'var(--border)', color: 'var(--matte-black)' }
                      }
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Personal Details */}
            {step === 4 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <User size={28} color="var(--emerald)" />
                  <h2 className="text-3xl" style={{ color: 'var(--emerald)' }}>
                    Your Details
                  </h2>
                </div>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={bookingData.name}
                    onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                    className="w-full p-4 rounded-sm border-2 transition-all duration-300 focus:outline-none"
                    style={{ borderColor: 'var(--border)', backgroundColor: 'var(--input-background)' }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--emerald)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                    className="w-full p-4 rounded-sm border-2 transition-all duration-300 focus:outline-none"
                    style={{ borderColor: 'var(--border)', backgroundColor: 'var(--input-background)' }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--emerald)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  />
                  <input
                    type="tel"
                    placeholder="WhatsApp Number *"
                    value={bookingData.whatsapp}
                    onChange={(e) => setBookingData({ ...bookingData, whatsapp: e.target.value })}
                    className="w-full p-4 rounded-sm border-2 transition-all duration-300 focus:outline-none"
                    style={{ borderColor: 'var(--border)', backgroundColor: 'var(--input-background)' }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--emerald)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  />
                  <input
                    type="text"
                    placeholder="Instagram Handle (optional)"
                    value={bookingData.instagram}
                    onChange={(e) => setBookingData({ ...bookingData, instagram: e.target.value })}
                    className="w-full p-4 rounded-sm border-2 transition-all duration-300 focus:outline-none"
                    style={{ borderColor: 'var(--border)', backgroundColor: 'var(--input-background)' }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--emerald)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>
              </div>
            )}

            {/* Step 5: Special Requests */}
            {step === 5 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Upload size={28} color="var(--emerald)" />
                  <h2 className="text-3xl" style={{ color: 'var(--emerald)' }}>
                    Special Requests
                  </h2>
                </div>
                <textarea
                  placeholder="Any special requests or reference designs you'd like to share..."
                  value={bookingData.requests}
                  onChange={(e) => setBookingData({ ...bookingData, requests: e.target.value })}
                  rows={5}
                  className="w-full p-4 rounded-sm border-2 transition-all duration-300 focus:outline-none resize-none"
                  style={{ borderColor: 'var(--border)', backgroundColor: 'var(--input-background)' }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--emerald)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                />
                <p className="mt-4 text-sm" style={{ color: 'var(--muted-foreground)' }}>
                  You can also share reference photos via WhatsApp after booking
                </p>
              </div>
            )}

            {/* Step 6: Summary */}
            {step === 6 && (
              <div>
                <h2 className="text-3xl mb-6" style={{ color: 'var(--emerald)' }}>
                  Booking Summary
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between p-4 rounded-sm" style={{ backgroundColor: 'var(--muted)' }}>
                    <span>Service:</span>
                    <span className="font-medium">{bookingData.service}</span>
                  </div>
                  <div className="flex justify-between p-4 rounded-sm" style={{ backgroundColor: 'var(--muted)' }}>
                    <span>Date:</span>
                    <span className="font-medium">{bookingData.date}</span>
                  </div>
                  <div className="flex justify-between p-4 rounded-sm" style={{ backgroundColor: 'var(--muted)' }}>
                    <span>Time:</span>
                    <span className="font-medium">{bookingData.time}</span>
                  </div>
                  <div className="flex justify-between p-4 rounded-sm" style={{ backgroundColor: 'var(--muted)' }}>
                    <span>Name:</span>
                    <span className="font-medium">{bookingData.name}</span>
                  </div>
                  <div className="flex justify-between p-4 rounded-sm" style={{ backgroundColor: 'var(--muted)' }}>
                    <span>WhatsApp:</span>
                    <span className="font-medium">{bookingData.whatsapp}</span>
                  </div>
                </div>
                <div className="p-4 rounded-sm mb-6" style={{ backgroundColor: 'var(--muted)', borderLeft: '4px solid var(--gold)' }}>
                  <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                    <strong>Note:</strong> A deposit may be required to secure your booking. Temi will contact you via WhatsApp with payment details and final confirmation.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              {step > 1 && (
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setStep(step - 1)}
                  className="px-8 py-3 rounded-sm border-2 tracking-wider transition-all duration-300 hover:bg-muted"
                  style={{ borderColor: 'var(--border)', color: 'var(--matte-black)' }}
                >
                  Back
                </motion.button>
              )}
              {step < totalSteps ? (
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setStep(step + 1)}
                  disabled={!canProceed()}
                  className={`flex-1 px-8 py-3 rounded-sm tracking-wider transition-all duration-300 ${
                    canProceed() ? 'hover:shadow-lg' : 'opacity-50 cursor-not-allowed'
                  }`}
                  style={{ backgroundColor: 'var(--emerald)', color: 'var(--ivory)' }}
                >
                  Continue
                </motion.button>
              ) : (
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`flex-1 px-8 py-3 rounded-sm tracking-wider transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-70 cursor-wait' : ''
                  }`}
                  style={{ backgroundColor: 'var(--gold)', color: 'var(--matte-black)' }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-matte-black border-t-transparent rounded-full"
                      />
                      Processing...
                    </>
                  ) : (
                    'Confirm Booking'
                  )}
                </motion.button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 rounded-sm"
          style={{ backgroundColor: 'var(--muted)' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <MapPin size={24} color="var(--emerald)" />
            <h3 className="text-2xl" style={{ color: 'var(--emerald)' }}>
              Studio Location
            </h3>
          </div>
          <p style={{ color: 'var(--matte-black)' }}>
            Onipetersi Estate, Mangoro, Ikeja, Lagos
          </p>
          <p className="text-sm mt-2" style={{ color: 'var(--muted-foreground)' }}>
            Exact address will be shared upon booking confirmation
          </p>
        </motion.div>
      </div>
    </div>
  );
}
