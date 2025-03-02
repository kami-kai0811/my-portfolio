import Hero from '@/components/sections/Hero/Hero';
import Portfolio from '@/components/sections/Portfolio/Portfolio';
import Skill from '@/components/sections/Skill/Skill';
import Contact from '@/components/sections/Contact/Contact';
import Footer from '@/components/layout/Footer/Footer';

export default function Home() {
  return (
    <div>
      <Hero />
      <Portfolio />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}
