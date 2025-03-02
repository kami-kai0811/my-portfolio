'use client';

import React from 'react';
import { motion } from 'framer-motion';

const FallingPetal = () => {
  return (
    <motion.img
      src="/images/petal.png" // publicフォルダに配置した花びらの画像パス
      alt="Flower Petal"
      className="z-0"
      initial={{ y: -50, opacity: 0 }}
      animate={{
        y: '15vh', // 画面下まで落ちる
        opacity: [1, 1, 1, 0],
        x: [50, 20, 60, 30], // 左右に揺れる動き
        rotate: [0, 90, -40, 70], // 軽く回転してひらひら感を演出
      }}
      transition={{
        duration: 8,
        ease: 'easeInOut',
        repeat: 0,
      }}
      style={{
        position: 'absolute',
        zIndex: -60,
        width: '50px',
        height: '50px',
        left: `20%`,
        transform: 'translateX(-50%)',
      }}
    />
  );
};

export default FallingPetal;
