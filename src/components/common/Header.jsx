"use client";

import Link from "next/link";
import { useState } from "react";
import CartSidebar from "@/components/common/CartSidebar";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/comparison" },
  { name: "Contact", href: "/contact" },
];

function LogoMark() {
  return (
    <svg
      width="50"
      height="32"
      viewBox="0 0 50 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M2 30L13.5 7L25 30H17.5L13.5 21L9.5 30H2Z" fill="#B88E2F" />
      <path d="M21 30L32.5 7L48 30H39.5L32.5 19L27.5 30H21Z" fill="#B88E2F" />
    </svg>
  );
}

function AccountIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="8" r="4" stroke="black" strokeWidth="2" />
      <path
        d="M5 24C5.8 18.8 9.2 16 14 16C18.8 16 22.2 18.8 23 24"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="12.5" cy="12.5" r="7.5" stroke="black" strokeWidth="2" />
      <path
        d="M18.5 18.5L24 24"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M14 24C13.5 23.6 5 18.2 5 10.8C5 7 7.5 4.5 10.7 4.5C12.6 4.5 13.8 5.4 14 6.1C14.2 5.4 15.4 4.5 17.3 4.5C20.5 4.5 23 7 23 10.8C23 18.2 14.5 23.6 14 24Z"
        stroke="black"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M5 6H8L10 19H22L24 10H10"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="11.5" cy="23" r="1.8" fill="black" />
      <circle cx="21" cy="23" r="1.8" fill="black" />
    </svg>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-[5px]" aria-label="Furniro home">
      <LogoMark />

      <span className="font-['Montserrat'] text-[34px] font-bold leading-[41px] text-black">
        Furniro
      </span>
    </Link>
  );
}

function IconButton({ label, children, onClick }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-7 w-7 items-center justify-center"
    >
      {children}
    </button>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <>
      <header className="sticky top-0 z-[999] bg-white shadow-sm">
        <div className="mx-auto flex h-[80px] w-full max-w-[1440px] items-center justify-between px-5 md:h-[90px] lg:h-[100px] lg:px-[54px]">
          <Logo />

          <nav className="hidden lg:block" aria-label="Main navigation">
            <ul className="flex items-center gap-[75px]">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-['Poppins'] text-[16px] font-medium leading-[24px] text-black transition hover:text-[#B88E2F]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-[45px] lg:flex">
            <IconButton label="Account">
              <AccountIcon />
            </IconButton>

            <IconButton label="Search">
              <SearchIcon />
            </IconButton>

            <IconButton label="Wishlist">
              <HeartIcon />
            </IconButton>

            <div className="relative">
              <IconButton
                label="Cart"
                onClick={() => setIsCartOpen(true)}
              >
                <CartIcon />
              </IconButton>

              {cartCount > 0 && (
                <span className="absolute -right-[8px] -top-[8px] flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#B88E2F] px-[4px] text-[11px] font-semibold leading-none text-white">
                  {cartCount}
                </span>
              )}
            </div>
          </div>

          <button
            type="button"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-[#D9D9D9] bg-white text-2xl lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? "×" : "☰"}
          </button>
        </div>

        {isOpen && (
          <div className="absolute left-0 top-full z-[998] w-full border-t border-[#D9D9D9] bg-white shadow-lg lg:hidden">
            <nav className="px-5 py-5 md:px-10" aria-label="Mobile navigation">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="block rounded-md px-3 py-3 font-['Poppins'] text-[18px] font-medium text-black transition hover:bg-[#F9F1E7] hover:text-[#B88E2F]"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center gap-6 border-t border-[#D9D9D9] pt-5">
                <IconButton label="Account">
                  <AccountIcon />
                </IconButton>

                <IconButton label="Search">
                  <SearchIcon />
                </IconButton>

                <IconButton label="Wishlist">
                  <HeartIcon />
                </IconButton>

                <IconButton
                  label="Cart"
                  onClick={() => {
                    setIsOpen(false);
                    setIsCartOpen(true);
                  }}
                >
                  <CartIcon />
                </IconButton>
              </div>
            </nav>
          </div>
        )}
      </header>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
}