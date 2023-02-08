'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'tween', index * 0.5, 1)}
    className=" grid lg:grid-cols-[auto_646px_auto] grid-col-1 md:grid-cols-[1fr_auto] gap-10 justify-center"
  >
    <div className=" md:w-[270px] md:h-[250px] h-[250px] md:rounded-[30px] md:col-span-full lg:col-auto ">
      <img src={imgUrl} alt={title} className=" object-cover w-full h-full rounded-[32px]" />
    </div>
    <div className="lg:max-w-[646px]">
      <h2 className=" text-white md:text-[42px] font-bold md:leading-[52px] text-[24px]">{title}</h2>
      <p className=" text-[#5d6680] md:text-[20px] text-[20px] md:leading-[40px] leading-6">{subtitle}</p>
    </div>
    <div className=" lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] justify-self-end">
      <img src="arrow.svg" alt="arrow-down" className=" border border-white w-full h-full p-2 lg:p-8 rounded-full" />
    </div>
  </motion.div>
);

export default InsightCard;
