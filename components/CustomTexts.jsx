'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={` font-normal text-[14px] text-[#C7C7C780] ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span
        variants={textVariant2(index / 10)}
        key={index}
      >
        {letter === ' ' ? '\u00A0' : letter }
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2(0.5)}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold text-[30px] md:text-[44px] md:leading-[45px] lg:text-[64px] lg:leading-[65px] text-white ${textStyles} `}
  >
    {title}
  </motion.h2>
);
