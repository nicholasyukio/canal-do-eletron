'use client'; // This ensures that the component is rendered on the client side

import Image from "next/image";
import { useState } from "react";
import Link from "next/link"; // Using Link for routing

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-blue-200 p-1 font-[family-name:var(--font-geist-sans)] r-5">
    <div className="flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold p-5">
        <Image
          className="dark:invert"
          src="/new_logo.svg"
          alt="Next.js logo"
          width={150}
          height={60}
          priority
        />
      </div>

      {/* Menu items - Visible on larger screens */}
      <nav className="hidden text-lg md:text-xl lg:text-xl md:flex space-x-6 pl-10 pr-10">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="#card" className="hover:underline">
          Seu site
        </Link>
        <Link href="#engineers" className="hover:underline">
          Para engenheiros
        </Link>
        <Link href="#photographers" className="hover:underline">
          Para fotógrafos
        </Link>
        <Link href="#designers" className="hover:underline">
          Para designers
        </Link>
        <Link href="#lawyers" className="hover:underline">
          Para advogados
        </Link>
        <Link href="#health" className="hover:underline">
          Para profissionais da saúde
        </Link>
        <Link href="#you" className="hover:underline">
          Para você
        </Link>
        <Link href="#about" className="hover:underline">
          Sobre nós
        </Link>
        <Link href="#quote" className="hover:underline">
          Faça um orçamento
        </Link>
      </nav>

      {/* Hamburger Icon - Visible on mobile */}
      <div className="md:hidden ml-auto flex items-center pr-5">
        <button onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Visible when menu is open */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-24 left-0 w-screen bg-gray-200 p-5 flex flex-col space-y-4">
          <Link href="/" className="hover:underline" onClick={toggleMenu}>
          Home
          </Link>
          <Link href="#card" className="hover:underline" onClick={toggleMenu}>
            Seu site
          </Link>
          <Link href="#engineers" className="hover:underline" onClick={toggleMenu}>
            Para engenheiros
          </Link>
          <Link href="#photographers" className="hover:underline" onClick={toggleMenu}>
            Para fotógrafos
          </Link>
          <Link href="#designers" className="hover:underline" onClick={toggleMenu}>
            Para designers
          </Link>
          <Link href="#lawyers" className="hover:underline" onClick={toggleMenu}>
            Para advogados
          </Link>
          <Link href="#health" className="hover:underline" onClick={toggleMenu}>
            Para profissionais da saúde
          </Link>
          <Link href="#you" className="hover:underline" onClick={toggleMenu}>
            Para você
          </Link>
          <Link href="#about" className="hover:underline" onClick={toggleMenu}>
            Sobre nós
          </Link>
          <Link href="#quote" className="hover:underline" onClick={toggleMenu}>
            Solicite o seu orçamento
          </Link>
        </div>
      )}
      </div>
    </header>
  );
};

export default Header;
