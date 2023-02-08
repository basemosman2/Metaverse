'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText, TitleText, InsightCard } from '../components';
import { staggerContainer } from '../utils/motion';
import { insights } from '../constants';

const Insights = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=" flex flex-col mx-auto w-full"
    >
      <TypingText title="| Insight" textStyles="text-center mx-auto" />
      <TitleText title="Insight about metaverse" textStyles=" text-center mb-[30px]" />
      <div className=" flex flex-col gap-4 mt-[40px]">
        {insights.map((insight, index) => (
          <InsightCard key={insight.title} {...insight} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
