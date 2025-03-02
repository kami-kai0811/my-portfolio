import React from 'react';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className="  w-full  bg-red-300 px-12 py-36  ">
      <div className="container mx-auto text-center">
        <div className=" grid grid-cols-1  md:grid-cols-2 items-center justify-items-center max-w-5xl mx-auto">
          <Image
            src="/images/apple.png"
            alt="リンゴの画像"
            width={300}
            height={500}
            className="ml-12 mt-20 md:mt-0 order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <h2 className="text-6xl font-bold md:mt-12 md:my-8">About Me</h2>
            <p className="mt-16 md:mt-0 text-xl">
              長野県在住の大学院生です。
              大学では、情報セキュリティを専攻し、サイバーリスクや安全なシステム設計に関する知見を深めています。
              一方で、web業界の革新性にも強い関心を持ち、プライベートではwebアプリケーション開発を通して技術の習得を目指しています。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
