'use client';
import React from 'react';
import Image from 'next/image';
import FallingPetal from './FallingPetal';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="container mt-32 flex flex-col md:flex-row md:flex-nowrap mx-auto px-14 lg:px-32 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4.0 }}
    >
      <FallingPetal />
      <div className=" text-center  md:my-20  md:justify-start max-w-xl md:pr-10">
        <h1 className=" section-title font-bold text-5xl md:text-left  lg:text-7xl md:text-6xl">
          My Portfolio
        </h1>
        <p className="py-8 text-left leading-8 text-xl ">
          こちらは、私のスキルアップと技術発信を目的に制作した
          ポートフォリオサイトです。
          私の経歴、これまでの制作実績、スキルなどをご紹介しています。
        </p>
      </div>
      <Image
        src="/images/Hero.png"
        alt="flower"
        width={500}
        height={400}
        priority
        className=" md:absolute md:top-6 lg:top-8 lg:right-53 md:w-3/5 w-10/12 mt-12 md:mt-10 right-10 mx-auto -z-20 lg:w-3/6 "
      />
    </motion.section>
  );
};

export default Hero;
