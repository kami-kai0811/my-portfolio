'use client';

import React from 'react';
import { useState } from 'react';
import HeaderLogo from './HeaderLogo';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

const Header = () => {
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen(!isOpen);
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-10 py-6 bg-background opacity-85 bg-slate-800 ">
      <div className="container mx-auto flex justify-between items-center px-14 lg:px-32  w-full">
        <HeaderLogo />
        <DesktopNavigation stateAndToggle={[isOpen, toggle]} />
      </div>
      <MobileNavigation stateAndToggle={[isOpen, toggle]} />
    </header>
  );
};

export default Header;
