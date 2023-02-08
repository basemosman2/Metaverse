'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, footerVariants } from '../utils/motion';

const Footer = () => (
  <footer className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=" w-full mx-auto"
    >
      <motion.div
        variants={footerVariants}
        className=" flex flex-col justify-center items-center"
      >
        <div className=" flex justify-between items-center w-full flex-col md:flex-row gap-4">
          <h2 className=" lg:text-[64px] lg:leading-[80px] leading-[32px] font-bold text-white text-[32px] text-center md:text-[32px]">Enter the Metaverse </h2>
          <div className=" md:w-[246px] h-[64px] w-full text-white bg-[#25618B] rounded-[32px] flex justify-center items-center gap-4">
            <img src="headset.svg" alt="headset" className=" w-[24px] h-[24px]" />
            <p className=" text-[16px]">ENTER METAVERSE</p>
          </div>
        </div>
        <hr className=" w-full h-[2px] bg-white opacity-5 my-12" />
        <div className=" flex items-center w-full justify-between flex-col md:flex-row gap-4">
          <h3 className=" text-[24px] font-normal text-white">METAVERUS</h3>
          <p className=" text-[14px] font-normal text-center text-white opacity-70">Copyright © 2021 - 2022 Metaversus. All rights reserved.</p>
          <div className=" flex justify-center items-center gap-4">
            <img src="twitter.svg" alt="twitter" className=" text-[#f1f5f8] w-[22px] h-[18px]" />
            <img src="linkedin.svg" alt="linkedin" className=" text-[#f1f5f8] w-[22px] h-[18px]" />
            <img src="instagram.svg" alt="instagram" className=" text-[#f1f5f8] w-[22px] h-[18px]" />
            <img src="facebook.svg" alt="facebook" className=" text-[#f1f5f8] w-[22px] h-[18px]" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  </footer>
);

export default Footer;
