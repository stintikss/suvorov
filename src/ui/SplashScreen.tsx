import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const randomTimeout = Math.floor(Math.random() * 1500) + 500;
    
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, randomTimeout);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 bg-[#0a0a0a] z-[9999] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { 
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }
          }}
        >
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear"
            }}
            style={{
              width: '64px',
              height: '64px',
              border: '4px solid #3b3b3b',
              borderTopColor: '#646cff',
              borderRadius: '50%',
              boxSizing: 'border-box'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;