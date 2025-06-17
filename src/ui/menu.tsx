import { useScrollEffect } from "../tools/proccesor";
import { menuAnimation } from '../tools/Animate/AnimatedShapes';
import { AnimatePresence, motion } from 'framer-motion';

export const Menu = () => {
  const { menuX } = useScrollEffect();

  return (
    <AnimatePresence mode="wait">
      {menuX && (
        <motion.div
          key="menu"
          className="fixed top-0 left-0 w-full z-[1000] bg-white px-5 py-3 shadow-md"
          variants={menuAnimation()}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          sdfsdfsdf
        </motion.div>
      )}
    </AnimatePresence>
  );
};
