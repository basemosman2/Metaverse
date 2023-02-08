'use client';

import { motion } from 'framer-motion';
import styles from '../styles/index';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    onClick={() => handleClick(id)}
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={` relative ${active === id ? 'lg:flex-[3.5] flex-[10]'
      : 'lg:flex-[0.5] flex-[2]'} ${styles.flexCenter} min-w-[170px] h-full cursor-pointer transition-[flex] ease-out-flex duration-[0.75s]`}
  >
    <img src={imgUrl} alt={title} className=" absolute w-full h-full object-cover rounded-[24px]" />
    {active !== id ? (
      <h3 className=" font-semibold text-white text=[18px] sm:text-[24px] absolute lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] z-0 ">{title}</h3>
    ) : (
      <div className=" absolute p-8 bottom-0 justify-start w-full flex-col bg-[rgb(0,0,0,0.5)] rounded-b-[24px]">
        <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}>
          <img src="headset.svg" alt="headset" className=" w-1/2 h-1/2 object-contain" />
        </div>
        <p className=" text-white font-[16px] uppercase leading-[30px]">enter  the metaverse</p>
        <h2 className=" font-semibold text-white sm:text-[32px] text-[24px] mt-[10px]">{title}</h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
