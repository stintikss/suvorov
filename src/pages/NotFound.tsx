import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { SmileAnimate, NotFoundAnimate, ButtonNotFound } from '../tools/Animate/AnimatedShapes'
import { Smile } from '../image/svg';

const NotFound: React.FC = () => {

  const navigate = useNavigate();
    //ХУКИ:

    //
    useEffect(() => {

    }, []);

    return (
      <>
        <div className='bg-[linear-gradient(135deg,var(--primary-color)_0%,var(--secondary-color)_33%,var(--tertiary-color)_66%)] w-full h-screen flex justify-center items-center'>
          <motion.div className='max-w-[400px] bg-[var(--header-bg-color)] flex-col flex items-center text-white p-10 rounded-[25px] text-center' {...NotFoundAnimate()}>
            <motion.div className='text-6xl mb-4' {...SmileAnimate()}>
              <Smile />
            </motion.div>
            <h1 className="text-4xl font-bold mb-2">404</h1>
            <p className="text-lg mb-6" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Страница не найдена. Возможно, вы свернули не туда?
            </p>
            <motion.div {...ButtonNotFound()} onClick={() => navigate('/home')}>
              <button className='px-6 py-2 rounded-[12px] bg-[#ffffff10] hover:bg-[#ffffff20] transition-all duration-300 border border-white cursor-pointer'>
                Вернуться
              </button>
            </motion.div>
          </motion.div>
        </div>
      </>
    );
};

export default NotFound;