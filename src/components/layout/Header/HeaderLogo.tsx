import React from 'react';
import Link from 'next/link';

const HeaderLogo = () => {
  return (
    <Link href="#home" className="text-lg font-bold">
      Kamiya Kaito
    </Link>
  );
};

export default HeaderLogo;
