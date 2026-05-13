# AURA BY TEMI 🌟

Premium Nail & Henna Studio located in the heart of Ikeja, Lagos. Where skin becomes art.

## 🚀 Project Overview

Aura by Temi is a high-end web application designed to provide a seamless booking experience for clients seeking professional nail art and henna services. The platform focuses on a luxury aesthetic, mobile responsiveness, and a direct conversion funnel to WhatsApp.

## 🛠 Tech Stack

- **Frontend:** React 18 with Vite
- **Styling:** Tailwind CSS + Framer Motion (motion/react)
- **UI Components:** Shadcn UI (Radix UI)
- **Icons:** Lucide React
- **Routing:** React Router v7

## 📱 Key Features

- **Booking-to-WhatsApp Workflow:** A multi-step booking form that captures service details, timing, and client info, then seamlessly redirects to WhatsApp with a pre-filled message for final confirmation.
- **Smart WhatsApp Integration:** Automatically detects device type to trigger the native WhatsApp app on mobile or WhatsApp Web on desktop.
- **Floating WhatsApp CTA:** A high-visibility, animated floating button for instant support.
- **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop with a "mobile-first" approach.
- **Dynamic Gallery:** Masonry-style gallery with lightbox functionality to showcase premium work.
- **Security:** Sanitized user inputs and environment variable management for sensitive data.

## 🛠 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd "Aura by Temi"
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   VITE_PHONE_NUMBER=2348037135663
   VITE_EMAIL=hello@aurabytemi.com
   VITE_WHATSAPP_MESSAGE="Hi! I would like to book a session at AURA BY TEMI."
   ```

4. **Start development server:**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

## 📂 Project Structure

- `src/app/pages`: Main application views (Home, Services, Booking, etc.)
- `src/app/components`: Reusable UI components and layout elements.
- `src/app/lib`: Utility functions (WhatsApp logic, sanitization).
- `src/app/config.ts`: Centralized configuration using environment variables.
- `src/styles`: Global styles, themes, and Tailwind configuration.

## 🔐 Security & Optimization

- **Input Sanitization:** All user-provided data in the booking form is sanitized to prevent XSS.
- **Responsive Breakpoints:** Audited for consistency across all major device widths.
- **Performance:** Optimized image loading and smooth Framer Motion transitions.

---
Managed by AURA BY TEMI Development Team.
