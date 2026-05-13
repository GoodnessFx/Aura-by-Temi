/**
 * Utility to generate WhatsApp links based on device type
 * @param phone Phone number in international format without '+'
 * @param message URL encoded message
 * @returns WhatsApp URL
 */
export const getWhatsAppUrl = (phone: string, message: string) => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const baseUrl = isMobile ? 'https://api.whatsapp.com/send' : 'https://web.whatsapp.com/send';
  return `${baseUrl}?phone=${phone}&text=${message}`;
};

/**
 * Sanitizes user input to prevent basic injection/XSS
 * @param input Raw user input
 * @returns Sanitized string
 */
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .trim();
};
