import { useScrollEffect } from "../tools/proccesor";
import { menuAnimation } from '../tools/Animate/AnimatedShapes';
import { AnimatePresence, motion } from 'framer-motion';
import menuImage from '../image/5Yhh72V.png'
import { useState } from "react";
import { useLocation } from "react-router-dom";

 interface MenuProps {
  bg?: string,
 }

 export const Menu: React.FC<MenuProps> = ({ bg = '#141414' }) => {
  const { menuX } = useScrollEffect();
  const [open, setOpen] = useState(false);
  const location = useLocation()

  const menuItems = [
    { label: 'Главная', href: '/home' },
    { label: 'Отзывы', href: '/' },
    { label: 'Бета', href: '/beta' }
  ];

  const ActivateLocate = ( href: string ) => {
    return location.pathname === href
  }

  return (
    <AnimatePresence mode="wait">
      {menuX ? (
        <motion.div
        key="menu"
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-[1000] bg-[${bg}] px-5 py-3 shadow-md w-[90%] max-w-[384px] h-[54px] flex justify-center items-center rounded-full border border-[#ffffff1a] overflow-hidden`}
        variants={menuAnimation()}
        initial="initial"
        animate="animate"
        exit="exit"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div className="relative flex justify-center items-center h-full w-full">
          <motion.div 
            className="absolute flex gap-4"
          >
            {menuItems.map((item, index) => {
              const isActive = ActivateLocate(item.href)
              return (                      
                <motion.a
                  key={index}
                  href={isActive ? undefined : item.href}
                  className={`transition-colors whitespace-nowrap select-none ${isActive ? 'text-[#d6d6d6] cursor-default' : 'text-[#a1a1a1] hover:text-gray-300 cursor-pointer'}`}
                  whileHover={isActive ? undefined : { scale: 1.05 }}
                  whileTap={isActive ? undefined : { scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </motion.div>
      ) : (
        <motion.div
          key="menu"
          className={`fixed top-5 left-1/2 -translate-x-1/2 z-[1000] bg-[${bg}] px-5 py-3 shadow-md w-[90%] max-w-[384px] h-[54px] flex justify-center items-center rounded-full border border-[#ffffff1a] overflow-hidden`}
          variants={menuAnimation()}
          initial="initial"
          animate="animate"
          exit="exit"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div className="relative flex justify-center items-center h-full w-full">
            <motion.div
              className="absolute flex items-center justify-center"
              animate={open ? "hidden" : "visible"}
              variants={{
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  x: 0,
                  transition: { delay: 0.3, duration: 0.3 } 
                },
                hidden: { 
                  opacity: 0, 
                  scale: 0.5,
                  x: 0,
                  transition: { duration: 0.3 } 
                }
              }}
            >
              <img 
                className="w-8 h-8 sm:w-8 sm:h-8 md:w-8 md:h-8 object-cover rounded-full select-none pointer-events-none"
                src={menuImage}
                alt="Menu Avatar"
                draggable={false}
              />
            </motion.div>

            <motion.div 
              className="absolute flex gap-4"
              initial={{ opacity: 0, x: "100%" }}
              animate={open ? {
                opacity: 1,
                x: 0,
                transition: { delay: 0.3, duration: 0.4 }
              } : {
                opacity: 0,
                x: "100%",
                transition: { duration: 0.3 }
              }}
            >
              {menuItems.map((item, index) => {
                const isActive = ActivateLocate(item.href)
                return (                      
                  <motion.a
                    key={index}
                    href={isActive ? undefined : item.href}
                    className={`transition-colors whitespace-nowrap select-none ${isActive ? 'text-[#d6d6d6] cursor-default' : 'text-[#a1a1a1] hover:text-gray-300 cursor-pointer'}`}
                    whileHover={isActive ? undefined : { scale: 1.05 }}
                    whileTap={isActive ? undefined : { scale: 0.95 }}
                  >
                    {item.label}
                  </motion.a>
                )
              })}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};