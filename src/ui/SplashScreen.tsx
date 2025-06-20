import React from 'react';
import test from '../image/test.jpg';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen: React.FC = () => {
  return (
    <motion.div
      className="w-full h-screen flex justify-center items-center relative overflow-hidden"
      style={{ background: 'var(--splash-bg-initial-color)' }}
    >
      <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-500 blur-3xl opacity-30 animate-pulse" />
      <motion.img
        src={test}
        className="w-40 h-40 object-cover select-none pointer-events-none rounded-full shadow-[0_0_50px_rgba(255,255,255,0.1)] z-10"
        draggable={false}
        loading="eager"
        decoding="sync"
        fetchPriority="high"
        animate={{
          scale: [1, 1.05, 1, 1.05, 1],
          rotate: [0, 3, -3, 3, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

    <div className="absolute bottom-10 text-white text-lg tracking-widest font-semibold z-10 flex items-center">
      Загрузка
      <div className="loading-dots ml-2">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
    </motion.div>
  );
};

export default SplashScreen;
