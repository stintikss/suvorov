import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../index.css'
import ImageTest from '../image/image'
import { AnimatePresence, motion } from 'framer-motion';
import { Title } from "../tools/API";
import { AnimatedShapes, arrowDoubleAnimation, headerCardAnimation, MainAnimation } from "../tools/Animate/AnimatedShapes";
import { Telegram, Discord, TikTok, Steam, Arrow, ArrowDouble, Info } from "../image/svg";
import { useScrollEffect } from '../tools/proccesor'
import { Menu } from '../ui/menu'
import { skillData, Project } from "../tools/ContentBlocks";
import Loader from '../ui/SplashScreen'
import { Forme } from "../tools/API";

function App() {
  const [data, setData] = useState({ title: "", image: "" });
  const [soc, setSoc] = useState(false)
  const [arrowRotate, setArrowRotate] = useState(180)
  const [border, setBorder] = useState(false)
  const { hideArrow, blurCard, blurSoc } = useScrollEffect();
  const { circle } = useScrollEffect( 250 );
  const { containerShow, skill } = useScrollEffect(300);
  const [isModalProject, setIsModalProject] = useState<ProjectType | null>(null);
  const [isDetails, setIsDetails] = useState<ProjectType | null>(null);
  const [filterText, setFilterText] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const filteredProjects = Project.filter(project =>
    project.title.toLowerCase().includes(filterText.toLowerCase())
  );

  const navigate = useNavigate()


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  const isMobile = windowWidth < 768;


  useEffect(() => {
    fetch("https://api.linkpreview.net/?key=024a9fa6b53a131ca498b0733e991f15&q=https://t.me/devdrip")
      .then((res) => res.json())
      .then((d) => setData({ title: d.title, image: d.image }));
  }, []);

  const click = () => {
    setArrowRotate(prev => prev === 180 ? 0 : 180);
    setSoc(!soc)
  }

  useEffect(() => {
    if (isModalProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalProject]);
  
  

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

  interface ProjectType {
    id: string | number;
    title: string;
    img: string | null;
    text: string;
    new: boolean;
    cat: {
      img: (string | null)[];
      text: (string | number | null)[];
      link: string[];
    }
  }
  
  return (
    <>
      <Loader />
      <Menu />
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
            <div className="mt-5 w-full flex items-end flex-col gap-1">
              <motion.div
                className="text-white flex gap-2 bg-[#717171] w-22 h-7 justify-center items-center rounded-xl cursor-pointer hover:bg-[#5a5a5a] transition-colors" 
                initial={{ scale: 1 }}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [1, 0.9, 1]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/beta')}
              >
                <span>BETA</span>
                <Info color="#fff" />
              </motion.div>

              <motion.div
                className="w-64 text-right"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-xs text-gray-400 font-light italic">
                  Это тестовая версия. <span className="text-gray-300 font-medium">Нажмите для подробностей</span>
                </p>
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

      <div className="w-full min-h-[500px] md:min-h-[300px] bg-[#0a0a0a] py-20 px-6 text-white border-t border-t-[#2a2a2a]">
        <div className="max-w-6xl mx-auto flex flex-col">
          <div className="w-full flex justify-between">
            <h1 className="text-4xl font-bold mb-10">Мои проекты</h1>
            {!isMobile && (     
              <input
                type="text"
                placeholder="Поиск проектов..."
                className="mb-6 p-2 transition-colors duration-300 ease-in-out border border-gray-600 bg-[#121212] focus:outline-none focus:ring-2 focus:ring-[#5e5e5e] focus:border-[#5e5e5e] placeholder:text-gray-400 text-white rounded-xl w-[100px] md:w-[400px]"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
              />
            )}
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
          {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className="group max-w-[280px] w-full cursor-pointer rounded-xl border-2 border-[#767676] overflow-hidden transition-shadow hover:shadow-xl"
            onClick={() => setIsModalProject(project)}
            onMouseEnter={() => setIsDetails(project)}
            onMouseLeave={() => setIsDetails(null)}
          >
                <div className="relative aspect-[4/5]">
                  <div
                    className="absolute inset-0 bg-center bg-no-repeat bg-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    style={{ backgroundImage: `url(${project.img})` }}
                  ></div>
                  {project.new === true && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md select-none">
                      NEW🔥
                    </div>
                  )}
                  <AnimatePresence mode="wait">
                    {isDetails?.id === project.id ? (
                      <motion.div 
                        key='button'
                        className="absolute bottom-0 left-0 flex w-full justify-center items-center h-[75px] bg-black/30 backdrop-blur-sm border-t border-t-[#767676]"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.button
                          whileHover="hover"
                          initial="rest"
                          animate="rest"
                          className="relative overflow-hidden px-6 py-2 border-2 border-white rounded-xl w-31 h-10 flex items-center"
                        >
                          <motion.span
                            variants={{
                              rest: { scale: 0 },
                              hover: { scale: 2 },
                            }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="absolute inset-0 bg-white rounded-xl origin-center z-0"
                          />
                          <motion.span 
                            className="relative z-10 font-medium"
                            variants={{
                              rest: { color: '#ffffff' },
                              hover: { color: '#000000' }
                            }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                          >
                            Смотреть
                          </motion.span>
                        </motion.button>
                      </motion.div>
                    ) : (
                      <motion.div 
                        key='text'
                        className="absolute bottom-0 left-0 flex w-full justify-center items-center h-[75px] bg-black/20 backdrop-blur-sm border-t border-t-[#767676]"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}  
                      >
                        <span 
                          className="text-white font-[600]"
                          style={{ fontFamily: 'Rubik, sans-serif' }}
                        >
                            {project.title}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      <AnimatePresence>
        {isModalProject && (
          <motion.div 
            className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            onClick={() => setIsModalProject(null)}
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="bg-[#222] overflow-auto rounded-3xl border-2 border-gray-600 max-w-[700px] w-full p-6 flex flex-col gap-6"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">{isModalProject.title}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {isModalProject.cat.img && isModalProject.cat.img.length > 0 ? (
                  isModalProject.cat.img.map((imgSrc, index) => (
                    imgSrc ? (
                      <div 
                        key={index} 
                        className="rounded-lg overflow-hidden border border-gray-700 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (isModalProject.cat.link && isModalProject.cat.link[index]) {
                            window.open(isModalProject.cat.link[index], '_blank');
                          }
                        }}
                      >
                        <img 
                          src={imgSrc} 
                          alt={`${isModalProject.title} image ${index + 1}`} 
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <p className="text-white p-2">{isModalProject.cat.text && isModalProject.cat.text[index] != null
                          ? isModalProject.cat.text[index]
                          : 'Нет описания'}
                        </p>
                      </div>
                    ) : null
                  ))
                ) : (
                  <p className="text-white">Нет изображений для отображения</p>
                )}
              </div>


              <button 
                onClick={() => setIsModalProject(null)}
                className="self-end bg-red-600 hover:bg-red-700 transition-colors text-white px-4 py-2 rounded-xl font-semibold"
              >
                Закрыть
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full min-h-[500px] bg-[#0a0a0a] border-t border-t-[#2a2a2a] flex items-center">
        <div className="max-w-6xl mx-auto w-full flex flex-col px-7 md:px-0">
          <h1 className="text-4xl font-bold mb-10 text-white">Обратная связь</h1>
          <div className="w-full flex justify-center">
            <Forme />
          </div>
          
        </div>
      </div>


    </>
  )
}

export default App
