import { useScrollEffect } from "../tools/proccesor";
import { menuAnimation } from '../tools/Animate/AnimatedShapes';
import { AnimatePresence, motion } from 'framer-motion';
import menuImage from '../image/5Yhh72V.png'

export const Menu = () => {
  const { menuX } = useScrollEffect();

  return (
    <AnimatePresence mode="wait">
      {menuX ? (
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
      ) : (
        <motion.div
          key="menu"
          className="fixed top-5 left-1/2 -translate-x-1/2 z-[1000] bg-[#141414] px-5 py-3 shadow-md w-[384px] h-[54px] flex justify-center rounded-[999px] border-1 border-[#ffffff1a]"
          variants={menuAnimation()}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <img src={menuImage} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
