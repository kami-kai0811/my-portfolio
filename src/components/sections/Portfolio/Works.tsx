import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const Works = () => {
  return (
    <div className="  w-full px-12 py-36 md:pt-36 md:py-0" id="portfolio">
      <div className="container mx-auto text-center">
        <div className=" grid grid-cols-1  md:grid-cols-[4fr,6fr] items-center ">
          <div className="order-1 md:pr-8">
            <h2 className="text-6xl font-bold md:mt-12 md:my-8">Works</h2>
            <p className="mt-16 md:mt-0 text-xl">
              私が作ってきたwebアプリケーション
            </p>
            <div className="flex items-center justify-center gap-6 mt-4">
              <span>My github account :</span>
              <Link
                href={'https://github.com/kami-kai0811'}
                className="inline-block "
              >
                <FaGithub className="size-10" />
              </Link>
            </div>
          </div>
          <div className="order-2 grid md:grid-cols-2 gap-6  lg:gap-12 mt-12 md:mt-0">
            <Link
              href={'https://github.com/kami-kai0811'}
              className="text-center hover:text-red-300 transition-all duration-300"
            >
              <Image
                src="/images/portfolio1.jpg"
                alt="作品1"
                width={500}
                height={500}
                className="cursor-pointer w-full h-48 md:h-60 lg:h-72 object-cover rounded-md hover:scale-110 duration-300"
              />
              <p className=" my-6">作品1</p>
            </Link>
            <Link
              href={'https://github.com/kami-kai0811'}
              className="text-center hover:text-red-300 transition-all duration-300 "
            >
              <Image
                src="/images/portfolio2.jpg"
                alt="作品2"
                width={600}
                height={600}
                className="cursor-pointer w-full h-48 md:h-60 lg:h-72 object-cover rounded-md hover:scale-110 duration-300"
              />
              <p className=" mt-6">作品2</p>
            </Link>
            <Link
              href={'https://github.com/kami-kai0811'}
              className="text-center hover:text-red-300 transition-all duration-300"
            >
              <Image
                src="/images/portfolio3.jpg"
                alt="作品3"
                width={600}
                height={600}
                className="cursor-pointer w-full h-48 md:h-60 lg:h-72 object-cover rounded-md hover:scale-110 duration-300"
              />
              <p className=" my-6">作品3</p>
            </Link>
            <Link
              href={'https://github.com/kami-kai0811'}
              className="text-center hover:text-red-300 transition-all duration-300"
            >
              <Image
                src="/images/portfolio3.jpg"
                alt="作品4"
                width={600}
                height={600}
                className="cursor-pointer w-full h-48 md:h-60 lg:h-72 object-cover rounded-md hover:scale-110 duration-300"
              />
              <p className=" my-6">作品4</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
