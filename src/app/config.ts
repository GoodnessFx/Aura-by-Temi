export const SITE_CONFIG = {
  name: 'AURA BY TEMI',
  phone: import.meta.env.VITE_PHONE_NUMBER || '2348037135663',
  phoneFormatted: '+234 803 713 5663',
  email: import.meta.env.VITE_EMAIL || 'hello@aurabytemi.com',
  instagram: 'aurabytemi',
  address: 'Onipetersi Estate, Mangoro, Ikeja, Lagos',
  workingHours: {
    monSat: '9:00 AM - 7:00 PM',
    sunday: 'By Appointment',
  },
  whatsappMessage: import.meta.env.VITE_WHATSAPP_MESSAGE || 'Hi! I would like to book a session at AURA BY TEMI.',
};
