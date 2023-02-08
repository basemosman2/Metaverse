'use client';

import { motion } from 'framer-motion';
import styles from '../styles/index';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className=" flex flex-col justify-center items-center relative z-10 ">
        <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading}`}>
          metaverse
        </motion.h1>
        <motion.div variants={textVariant(1.2)} className="flex justify-center items-center">
          <h1 className={`${styles.heroHeading}`}>ma</h1>
          <div className={`${styles.heroDText}`} />
          <h1 className={`${styles.heroHeading}`}>ness</h1>
        </motion.div>
      </div>
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className=" relative w-full md:-mt-[20px] -mt-[12px]">
        <div className=" absolute w-full h-[300px] hero-gradient rounded-tl-[140px] -top-[30px] z-[0]" />
        <img src="cover.png" alt="cover" className=" w-full object-cover sm:h-[500px] h-[350px] rounded-tl-[140px] relative z-10" />
        <a href="#explore">
          <div className=" w-full flex justify-end sm:-mt-[60px] -mt-[55px] pr-[40px] relative z-10">
            <img src="stamp.png" alt="stamp" className=" w-[75px] h-[75px] sm:w-[130px] sm:h-[130px] object-contain" />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
