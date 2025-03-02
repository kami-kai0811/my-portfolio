import React from 'react';
import Link from 'next/link';
import { IoMenuSharp } from 'react-icons/io5';

type HumbergerProps = {
  stateAndToggle: [isOpen: boolean, setIsopen: () => void];
};

const DesktopNavigation = ({ stateAndToggle }: HumbergerProps) => {
  const [isOpen, toggle] = stateAndToggle;
  return (
    <>
      <nav className="space-x-12 hidden md:flex items-center">
        <Link
          href="#home"
          className="hover:text-red-300 transition-all duration-300"
        >
          ホーム
        </Link>
        <Link
          href="#portfolio"
          className="hover:text-red-300 transition-all duration-300"
        >
          ポートフォリオ
        </Link>
        <Link
          href="#skill"
          className="hover:text-red-300 transition-all duration-300"
        >
          スキル
        </Link>
        <Link
          href="#contact"
          className="hover:text-red-300 transition-all duration-300"
        >
          お問い合わせ
        </Link>
      </nav>
      <button className="md:hidden z-10" onClick={toggle}>
        {isOpen || (
          <IoMenuSharp
            size={30}
            className="hover:text-red-300 transition-all duration-300"
          />
        )}
      </button>
    </>
  );
};

export default DesktopNavigation;
