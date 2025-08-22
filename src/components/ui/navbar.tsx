"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHandHoldingHeart } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations("nav");

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Rabbit School"
            width={150}
            height={45}
            className="w-[150px] h-auto md:w-[220px]"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-800">
          <Link href="/" className="hover:text-yellow-500 transition">
            {t("home")}
          </Link>
          <Link href="/about" className="hover:text-yellow-500 transition">
            about
          </Link>
          <Link
            href="/how-we-work"
            className="hover:text-yellow-500 transition"
          >
            howWeWork
          </Link>
          <Link
            href="/get-involved"
            className="hover:text-yellow-500 transition"
          >
            getInvolved
          </Link>
          <Link href="/contact" className="hover:text-yellow-500 transition">
            contact
          </Link>

        </nav>

        {/* Donate Button */}
        <Link
          href="/donate"
          className="hidden md:flex items-center space-x-2 bg-orange-400 hover:bg-orange-500 text-white font-medium px-5 py-2 rounded-full transition"
        >
          <FaHandHoldingHeart />
          <span>donate</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-1">
            <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
              home
            </Link>
            <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
              about
            </Link>
            <Link
              href="/how-we-work"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              howWeWork
            </Link>
            <Link
              href="/get-involved"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              getInvolved
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              contact
            </Link>

            <Link
              href="/donate"
              className="flex items-center space-x-2 bg-orange-400 hover:bg-orange-500 text-white font-medium px-4 py-2 m-4 rounded-full transition"
            >
              <FaHandHoldingHeart />
              <span>donate</span>
            </Link>

            {/* Mobile Language Button */}
          </nav>
        </div>
      )}
    </header>
  );
}
