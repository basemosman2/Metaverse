'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText, TitleText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';
import { exploreWorlds } from '../constants';
import MapCard from '../components/MapCard';

const World = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=" flex flex-col mx-auto w-full"
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText title="Track friends around you and invite them to play together in the same world" textStyles="text-center lg:max-w-[962px] mx-auto leading-[38px]" />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className=" mt-[65px] w-full mx-auto relative"
      >
        <img src="map.png" alt="map" className=" object-contain w-full h-full" />
        <div className=" absolute w-[30px] h-[30px] sm:w-[70px] sm:h-[70px]  bg-[#5d6680] p-[6px] rounded-full bottom-[20%] right-[10%] z-10">
          <img src="people-01.png" alt="people-01" className=" object-contain w-full" />
        </div>
        <div className=" absolute w-[30px] h-[30px] sm:w-[70px] sm:h-[70px]  bg-[#5d6680] p-[6px] rounded-full top-[10%] left-[10%] z-10">
          <img src="people-02.png" alt="people-02" className=" object-contain w-full" />
        </div>
        <div className=" absolute w-[30px] h-[30px] sm:w-[70px] sm:h-[70px]  bg-[#5d6680] p-[6px] rounded-full top-[45%] left-[45%] z-10">
          <img src="people-03.png" alt="people-03" className=" object-contain w-full" />
        </div>
        {/* {exploreWorlds.slice(1, 3).map((world) => (
          <MapCard {...world} key={world.id} />
        ))} */}
      </motion.div>
    </motion.div>
  </section>
);

export default World;
