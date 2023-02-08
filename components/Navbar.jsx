'use client';

import { motion } from 'framer-motion';
import styles from '../styles/index';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className=" absolute w-[50%] inset-0 gradient-01" />
    <div className={` flex justify-between gap-8 items-center ${styles.innerWidth} mx-auto`}>
      <img src="search.svg" alt="search" className=" w-[25px] h-[25px] object-contain" />
      <h2 className=" uppercase font-extrabold text-[24px] leading-[25px] text-white">metaversus</h2>
      <img src="menu.svg" alt="menu" className=" w-[25px] h-[25px] object-contain" />
    </div>
  </motion.nav>
);

export default Navbar;
