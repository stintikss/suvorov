import { motion, AnimatePresence } from 'framer-motion';

type AnimatedShapesProps = {
  hideShapnes: boolean;
};

export const AnimatedShapes = ({ hideShapnes }: AnimatedShapesProps) => {
  return (
    <>
      <AnimatePresence>
        {!hideShapnes && (
          <motion.div
            style={{
              position: 'fixed',
              top: '10%',
              left: '15%',
              width: 150,
              height: 150,
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 110, 196, 0.6)',
              filter: 'blur(60px)',
              zIndex: 0,
            }}
            animate={{
                x: [0, -45, 0, 45, 0],
                y: [0, 45, 0, -45, 0],
                scale: [1, 0.8, 1, 0.8, 1]
            }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.5 },
              x: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
              y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
              scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!hideShapnes && (
          <motion.div
            style={{
              position: 'fixed',
              bottom: '20%',
              right: '10%',
              width: 200,
              height: 200,
              borderRadius: '50%',
              backgroundColor: 'rgba(120, 115, 245, 0.5)',
              filter: 'blur(80px)',
              zIndex: 0,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              x: [0, -45, 0, 45, 0],
              y: [0, 45, 0, -45, 0],
              scale: [1, 0.8, 1, 0.8, 1],
            }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.5 },
              x: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
              y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
              scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!hideShapnes && (
          <motion.div
            style={{
              position: 'fixed',
              bottom: '20%',
              left: '25%',
              width: 350,
              height: 350,
              borderRadius: '50%',
              backgroundColor: 'rgb(255, 255, 255)',
              filter: 'blur(80px)',
              zIndex: 0,
              opacity: 0.3
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.3,
              x: [0, -30, 0, 30, 0],
              y: [0, 30, 0, -30, 0],
              scale: [1, 0.8, 1, 0.8, 1],
            }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.5 },
              x: { duration: 15, repeat: Infinity, ease: 'easeInOut' },
              y: { duration: 15, repeat: Infinity, ease: 'easeInOut' },
              scale: { duration: 15, repeat: Infinity, ease: 'easeInOut' },
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export const arrowDoubleAnimation = (hideArrow: boolean) => ({
  animate: {
    y: [0, -12, 0, -5, 0],
    opacity: hideArrow ? 0 : 1,
    scale: hideArrow ? 0.8 : 1,
  },
  transition: {
    y: {
      duration: 1.5,
      ease: 'easeInOut',
      times: [0, 0.2, 0.4, 0.7, 1],
      repeat: Infinity,
      repeatDelay: 2,
    },
    opacity: {
      duration: 0.5,
      ease: 'easeOut',
    },
    scale: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
});

export const headerCardAnimation = ({
  initial: {
    opacity: 0,
    scale: 0.95
  },
  animate: {
    opacity: 1,
    scale: 1
  },
  transition: {
    duration: 1,
    ease: 'easeInOut'
  }
})

export const MainAnimation = (visible: boolean) => ({
  initial: {
    opacity: 0,
    scale: 0.50
  },
  animate: visible ? {
    opacity: 1,
    scale: 1
  } : {
    opacity: 0,
    scale: 0.50
  },
  transition: {
    duration: 0.7,
    ease: 'easeInOut'
  }
})

export const menuAnimation = () => ({
  initial: {
    opacity: 0,
    y: -50
  },
  animate: {
    opacity: 1,
    y: 10,
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  }
})

export const NotFoundAnimate = () => ({
  initial: {
    opacity: 0,
    scale: 0.9,
    y: 10
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0
  },
  transition: {
    duration: 0.6,
    ease: 'easeInOut'
  }
})

export const SmileAnimate = () => ({
  animate: {
    rotate: [0, 10, -10, 10, 0]
  },
  transition: {
    duration: 1,
    repeat: Infinity,
    repeatDelay: 2
  }
})

export const ButtonNotFound = () => ({
  initial: {
    opacity: 0,
    scale: 0.8
  },
  animate: {
    opacity: 1,
    scale: 1
  },
  transition: {
    duration: 1,
    ease: 'easeInOut',
    delay: 0.5
  }
})