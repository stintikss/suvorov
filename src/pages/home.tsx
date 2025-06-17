import { useEffect, useState } from "react";
import '../index.css'
import ImageTest from '../image/image'
import { AnimatePresence, motion } from 'framer-motion';
import { Title } from "../tools/API";
import { AnimatedShapes, arrowDoubleAnimation, headerCardAnimation, MainAnimation } from "../tools/Animate/AnimatedShapes";
import { Telegram, Discord, TikTok, Steam, Arrow, ArrowDouble } from "../image/svg";
import { useScrollEffect } from '../tools/proccesor'
// import { Menu } from '../ui/menu'
import { skillData } from "../tools/skillData";

function App() {
  const [data, setData] = useState({ title: "", image: "" });
  const [soc, setSoc] = useState(false)
  const [arrowRotate, setArrowRotate] = useState(180)
  const [border, setBorder] = useState(false)
  const { hideArrow, blurCard, blurSoc } = useScrollEffect();
  const { circle } = useScrollEffect( 250 );
  const { containerShow, skill } = useScrollEffect(300);


  useEffect(() => {
    fetch("https://api.linkpreview.net/?key=024a9fa6b53a131ca498b0733e991f15&q=https://t.me/Stintikss1")
      .then((res) => res.json())
      .then((d) => setData({ title: d.title, image: d.image }));
  }, []);

  const click = () => {
    setArrowRotate(prev => prev === 180 ? 0 : 180);
    setSoc(!soc)
  }

  const cardVariants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  
  return (
    <>
      {/* <Menu /> */}
      <div>
        <header className='relative w-full h-screen bg-[linear-gradient(135deg,var(--primary-color)_0%,var(--secondary-color)_33%,var(--tertiary-color)_66%)]'>
          <AnimatedShapes hideShapnes={circle} />
          <motion.div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center" {...headerCardAnimation}>            
            <div className="flex justify-center items-center flex-grow">
              <motion.div 
                className="w-[250px] h-[340px] rounded-[25px] flex flex-col justify-center items-center bg-[var(--header-bg-color)] p-[30px] mb-6"
                style={{
                  filter: blurCard ? 'blur(5px)' : 'none',
                  transition: 'filter 0.5s ease',
                }}
                onMouseEnter={() => setBorder(true)}
                onMouseLeave={() => setBorder(false)}
                animate={{
                  boxShadow: border 
                    ? '0 0 10px 2px rgba(255, 255, 255, 0.8)'
                    : '0 0 10px 2px rgba(255, 255, 255, 0)'
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <div className="h-[150px]">
                  <ImageTest src={data.image} />
                </div>
                <Title text={data.title} />
                <div className="bg-[#0f0f0f] w-full h-[35px] rounded-[5px] flex justify-center items-center">
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '18px' }} className="text-[#fff]">Frontend Developer</span>
                </div>
              </motion.div>
            </div>

            <div 
              className="rotate-0 flex justify-center"
              style={{
                filter: blurSoc ? 'blur(5px' : 'none',
                transition: 'filter 0.5s ease',
              }}
            >
              <motion.div 
                animate={{ height: soc ? 130 : 40 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="w-[250px] rounded-[25px] bg-[var(--header-bg-color)] overflow-hidden flex flex-col px-[15px]">
                
                  <motion.div 
                    animate={{
                      paddingTop: soc ? 20 : 0,
                      paddingBottom: soc ? 20 : 0,
                      opacity: 1,
                    }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-between h-full"
                  >
                    <div className="flex justify-between items-center w-full h-full">
                      <h1 className="text-white">Социальные сети</h1>
                      <Arrow rotate={arrowRotate} color={'#fff'} onClick={click} />
                    </div>

                    <AnimatePresence>
                      {soc && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{
                            opacity: 0,
                            scale: 0.9,
                            transition: { duration: 0.2, ease: 'easeIn' }
                          }}
                          transition={{ duration: 1.5, ease: 'linear' }}
                          className="flex justify-center gap-[7px] pt-2"
                        >
                          <Telegram onClick={() => window.open('https://t.me/Stintikss1', '_blank')} />
                          <Discord onClick={() => window.open('https://t.me/Stintikss1', '_blank')} />
                          <TikTok onClick={() => window.open('https://t.me/Stintikss1', '_blank')} />
                          <Steam onClick={() => window.open('https://t.me/Stintikss1', '_blank')} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>

            </div>
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 top-[700px]"
              {...arrowDoubleAnimation(hideArrow)}
            >
              <ArrowDouble />
            </motion.div>
          </motion.div>
        </header>
      </div>

      <div className="w-full min-h-[500px] md:min-h-[300px] bg-[#0a0a0a] py-20 px-6 text-white">
        <div className="max-w-6xl mx-auto flex flex-col gap-14">
          <h1 className="text-4xl font-bold" {...MainAnimation(skill)}>Мои навыки:</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillData.map((block, index) => (
              <motion.div
                key={block.title}
                className="bg-[#151515] p-6 rounded-2xl border border-[#2a2a2a] shadow-md"
                variants={cardVariants}
                animate={containerShow ? "visible" : "hidden"}
                initial="hidden"
                custom={index}
              >
                <h2 className="text-2xl font-semibold mb-4">{block.title}</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2 text-base">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
