import React from 'react';
import AboutMe from './AboutMe';
import '../section.css';
import Works from './Works';

const Portfolio = () => {
  return (
    <section className=" w-full mt-32 md:mt-56">
      <AboutMe />
      <Works />
    </section>
  );
};

export default Portfolio;
