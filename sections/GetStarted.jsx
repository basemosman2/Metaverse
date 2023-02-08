'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { StartSteps, TypingText, TitleText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';
import { startingFeatures } from '../constants';

const GetStarted = () => (
  <section className={` ${styles.paddings} `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=" flex flex-col lg:flex-row gap-8 mx-auto w-full"
    >
      <motion.div
        variants={planetVariants('left')}
        className=" flex-1 flex justify-center items-center "
      >
        <img src="get-started.png" alt="getStarted" className=" object-contain" />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className=" flex-[0.75] flex flex-col justify-center"
      >
        <TypingText title="|How Metaverus Works" />
        <div className=" mt-[30px] flex flex-col lg:max-w-[450px] gap-[24px]">
        <TitleText title={ <>Get started with just a few clicks</> } />
          {startingFeatures.map((feature, index) => (
            <StartSteps text={feature} number={index + 1} key={feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
