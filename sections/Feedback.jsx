"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, zoomIn, fadeIn } from "../utils/motion";

const Feedback = () => (
  <section
    className={`${styles.paddings}`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=" flex flex-col md:flex-row mx-auto w-full relative justify-center items-center gap-8"
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.4, 1)}
        className=" md:w-[370px] md:h-[618px] w-full border rounded-[32px] p-8 border-[#6a6a6a] text-white relative flex flex-col justify-end"
      >
        <div className=" feedback-gradient" />
        <h3 className=" text-[32px] font-bold leading-[40px]">Samantha </h3>
        <p className=" text-[16px] leading-[23px]">Founder Metaverus</p>
        <p className=" pt-[30px] text-[18px] md:text-[16px] sm:leading-[30px] md:leading-[40px]  lg:leading-[45.6px] lg:text-[22px] ">
          “With the development of today's technology, metaverse is very useful
          for today's work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className=" md:w-[768px] md:h-[618px] w-full h-[300px]"
      >
        <img
          src="planet-09.png"
          alt="planet-09"
          className=" rounded-[32px] w-full h-full object-cover object-center"
        />
      </motion.div>
      <motion.div
        variants={zoomIn(0.6, 1)}
        className=" absolute w-[130px] h-[130]  lg:left-[30%] lg:top-[20%] md:left-[25%] md:top-[10%] md:block  hidden"
      >
        <img src="stamp.png" alt="stamp" />
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
