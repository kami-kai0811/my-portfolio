'use client';
import React from 'react';
import Image from 'next/image';
import FallingPetal from './FallingPetal';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      id="home"
      className="container mt-32 flex flex-col md:flex-row md:flex-nowrap mx-auto px-14 lg:px-32 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <FallingPetal />
      <div className=" text-center  md:my-36  md:justify-start">
        <h1 className="font-bold text-5xl md:text-left  lg:text-7xl md:text-6xl">
          Kaito Kamiya{' '}
        </h1>
        <p className="py-4 ">
          2002年生まれ。
          <br /> 長野県在住の大学院生。
        </p>
      </div>
      <Image
        src="/images/Hero.png"
        alt="flower"
        width={500}
        height={400}
        priority
        className=" md:absolute md:top-6 lg:top-4 lg:right-53 md:w-3/5 w-10/12 mt-12 md:mt-10 right-10 mx-auto -z-10 lg:w-3/6 "
      />
    </motion.div>
  );
};

export default Hero;
