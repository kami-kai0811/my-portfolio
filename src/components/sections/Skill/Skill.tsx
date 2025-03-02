import React from 'react';
import Languages from './Languages';
import Image from 'next/image';
import Link from 'next/link';

const Skill = () => {
  return (
    <section className=" w-full   md:mt-56 bg-red-300" id="skill">
      <div className="  w-full   px-12 py-36 ">
        <div className="container mx-auto text-center">
          <div className=" grid grid-cols-1  md:grid-cols-[6fr,4fr] items-center ">
            <div className="order-1 mb-16 md:pl-8 md:order-2">
              <h2 className="text-6xl font-bold md:mt-12 md:my-8">
                Skill Stack
              </h2>
              <p className="mt-16 md:mt-0 text-xl">
                私がこれまで学習してきた言語
              </p>
            </div>
            <div className="order-2 md:order-1 ">
              <Languages />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
