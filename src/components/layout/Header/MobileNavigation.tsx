import React from 'react';
import Link from 'next/link';
import { RxCross2 } from 'react-icons/rx';
import { motion } from 'framer-motion';

type HumbergerProps = {
  stateAndToggle: [isOpen: boolean, setIsopen: () => void];
};

const MobileNavigation = ({ stateAndToggle }: HumbergerProps) => {
  const [isOpen, toggle] = stateAndToggle;

  return (
    <>
      {isOpen && (
        <motion.nav
          className="z-0 fixed top-0 left-0 w-full h-screen  bg-white text-center text-xl md:text-2xl lg:text-2xl font-bold text-black"
          initial={{ y: ' -100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button className="fixed top-6 right-14 " onClick={toggle}>
            <RxCross2
              size={30}
              className="text-black hover:text-red-300 transition-all duration-300"
            />
          </button>
          <ul className="space-y-14 my-32">
            <li>
              <Link
                href="#home"
                className="hover:text-red-300 transition-all duration-300"
                onClick={toggle}
              >
                ホーム
              </Link>
            </li>
            <li>
              <Link
                href="#portfolio"
                className="hover:text-red-300 transition-all duration-300"
                onClick={toggle}
              >
                ポートフォリオ
              </Link>
            </li>
            <li>
              <Link
                href="#skill"
                className="hover:text-red-300 transition-all duration-300"
                onClick={toggle}
              >
                スキル
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:text-red-300 transition-all duration-300"
                onClick={toggle}
              >
                お問い合わせ
              </Link>
            </li>
          </ul>
        </motion.nav>
      )}
    </>
  );
};

export default MobileNavigation;
