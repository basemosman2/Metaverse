'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';
import { TypingText, TitleText } from '../components';

const WhatsNew = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} flex flex-col lg:flex-row justify-center items-center `}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.5, 1)}
        initial="hidden"
        whileInView="show"
        className=" flex flex-col flex-1 justify-center "
      >
        <TypingText title="| Whats New?" />
        <TitleText title="What's new about Metaversus?" />
        <div className=" flex flex-col md:flex-row  gap-8 mt-[30px]">
          <div className="">
            <div className=" bg-[#323f5d] w-[60px] h-[60px] rounded-[24px] flex justify-center items-center">
              <img src="vrpano.svg" alt="vrpano" className=" w-1/2 h-1/2 object-contain" />
            </div>
            <h3 className=" text-white font-bold mt-[20px] text-[24px] leading-[30px]">A new world</h3>
            <p className=" max-w-[225px] text-[#B0B0B0] leading-[29px]">we have the latest update with new world for you to try never mind</p>
          </div>
          <div>
            <div className=" bg-[#323f5d] w-[60px] h-[60px] rounded-[24px] flex justify-center items-center">
              <img src="headset.svg" alt="headset" className=" w-1/2 h-1/2 object-contain" />
            </div>
            <h3 className=" text-white font-bold mt-[20px] text-[24px] leading-[30px]">More realistic</h3>
            <p className=" max-w-[225px] text-[#B0B0B0] leading-[29px]">In the latest update, your eyes are narrow, making the world more realistic than ever</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants('right')}
        className=" flex flex-[1] justify-center items-center"
      >
        <img src="whats-new.png" alt="whatsNew" className=" object-contain" />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
