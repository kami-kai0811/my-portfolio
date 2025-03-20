import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { works } from '@/config/works';

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
            {works.map((work, index) => {
              return (
                <Link
                  href={work.href}
                  className="text-center hover:text-red-300 transition-all duration-300 bg-slate-800 rounded-md hover:scale-110 flex flex-col gap-3"
                  key={index}
                >
                  <Image
                    src={work.image}
                    alt={work.title}
                    width={500}
                    height={500}
                    className="cursor-pointer w-full h-48 md:h-60 lg:h-72 object-cover rounded-md "
                  />
                  <div className="flex flex-col gap-3 pb-3">
                    <p>{work.title}</p>
                    <p>{work.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
