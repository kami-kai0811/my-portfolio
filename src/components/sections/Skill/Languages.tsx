import React from 'react';
import { FaJs } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

const Languages = () => {
  return (
    <div className="space-y-12">
      <div className="space-y-4 border-4 border-black  py-12 px-4 hover:border-orange-400 transition-all duration-300 cursor-pointer hover:scale-105 ">
        <FaHtml5 className="text-9xl mx-auto text-orange-400 bg-black" />
        <h2 className="text-4xl">HTML/CSS</h2>
        <p className="text-xl">
          基礎的な知識を習得しており、実用的なWebページを制作することが可能です。
        </p>
      </div>
      <div className="space-y-4 border-4 border-black  py-12 px-4 hover:border-yellow-400 transition-all duration-300 cursor-pointer hover:scale-105">
        <FaJs className="text-9xl mx-auto text-yellow-400 bg-black" />
        <h2 className="text-4xl">JavaScript</h2>
        <p className="text-xl">
          基本的な文法に加え、DOM操作や非同期処理も実装可能です。ReactやNext.jsを活用した開発経験があります。
        </p>
      </div>
      <div className="space-y-4 border-4 border-black  py-12 px-4 hover:border-white transition-all duration-300 cursor-pointer hover:scale-105">
        <SiTypescript className="text-9xl mx-auto text-blue-600 bg-white" />
        <h2 className="text-4xl">TypeScript</h2>
        <p className="text-xl">
          JavaScriptに比べ学習時間は短いものの、最近はほぼ全ての開発でTypeScriptを採用しています。
        </p>
      </div>
      <div className="space-y-4 border-4 border-black  py-12 px-4 hover:border-blue-600 transition-all duration-300 cursor-pointer hover:scale-105">
        <FaPython className="text-9xl mx-auto text-blue-600 bg-black" />
        <h2 className="text-4xl">Python</h2>
        <p className="text-xl">
          大学の講義で基礎文法を習得し、プログラムの記述が可能です。PyTorchを用いた機械学習の実装経験もあります。
        </p>
      </div>
    </div>
  );
};

export default Languages;
