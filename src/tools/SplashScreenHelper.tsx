import React, { useState, useEffect } from 'react';
import Router from '../router/router';
import SplashScreen from '../ui/SplashScreen';
import { AnimatePresence, motion } from 'framer-motion';

const SplashScreenHelper: React.FC = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 3000);
    })

    return (
      <>
        <AnimatePresence>
        {loading && (
          <motion.div
            key="splash"
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1}}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000 }}
          >
            <SplashScreen />
          </motion.div>
        )}
      </AnimatePresence>
      {!loading && <Router />}
      </>
    );
};

export default SplashScreenHelper;