import React from 'react';
import logo from '../assets/logo.webp';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-slate-950 shadow-md p-7">
      <div className="container mx-auto flex items-center justify-between px-6">

        <div className="shrink-0">
          <img src={logo} alt="MyClub Fc" className="h-20 w-auto" />
        </div>

        <div className="flex items-center gap-8">
          <nav className="hidden md:block">
            <ul className="flex gap-6 text-white font-medium">
              <li className="hover:text-red-600 cursor-pointer transition">Clube</li>
              <li className="hover:text-red-600 cursor-pointer transition">Jogos</li>
              <li className="hover:text-red-600 cursor-pointer transition">Notícias</li>
              <li className="hover:text-red-600 cursor-pointer transition">Loja</li>
              <li className="hover:text-red-600 cursor-pointer transition">Contato</li>
            </ul>
          </nav>

          <button className="flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-full font-bold hover:bg-red-700 transition shadow-lg">
            Seja Sócio
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
