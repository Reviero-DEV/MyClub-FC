import React from "react";
import { FaArrowRight } from "react-icons/fa";
import imgHero from '../assets/img-hero.webp';

export const Hero: React.FC = () => {
  return (
    <section
      className="flex min-h-[75vh] w-full items-center py-16 px-6 md:px-12 bg-cover bg-center bg-no-repeat relative ba-"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.95), rgba(15, 23, 42, 0.4)), url(${imgHero})`
      }}

    >
      <div className="max-w-4xl mx-auto md:mx-0 relative z-10">
        <h1 data-aos="fade-right" data-aos-delay="0" className="text-4xl md:text-6xl font-bold leading-tight text-white">
           Uma só voz. Um só<br />
          <span className="text-red-600"> coração</span>
        </h1>

        <p  data-aos="fade-right" data-aos-delay="200" className="mt-6 text-lg md:text-xl leading-relaxed max-w-2xl text-slate-200">
          A nossa força vem das arquibancadas. Junte-se a milhões de apaixonados, acompanhe as notícias oficiais em tempo real e mostre o seu orgulho de ser MyClub onde quer que você esteja.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <button className="w-full cursor-pointer sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-red-600/20">
            Seja Sócio
          </button>

          <a href="#missao" className="group flex items-center gap-2 font-medium transition-colors text-slate-200 hover:text-red-500">
            Conheça o clube
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
