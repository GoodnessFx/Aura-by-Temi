import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        <h1
          className="text-9xl mb-4"
          style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)' }}
        >
          404
        </h1>
        <h2 className="text-4xl mb-6" style={{ color: 'var(--emerald)' }}>
          Page Not Found
        </h2>
        <p className="text-lg mb-8" style={{ color: 'var(--muted-foreground)' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-sm tracking-wider transition-all duration-300 hover:shadow-lg"
          style={{ backgroundColor: 'var(--emerald)', color: 'var(--ivory)' }}
        >
          <Home size={20} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
