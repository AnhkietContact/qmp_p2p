"use client";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const Scrollheader = [
    { id: 1, label: "Instruct", link: "instruct" },
    { id: 2, label: "Features", link: "features" },
    { id: 3, label: "Download", link: "download" },
    { id: 4, label: "FAQs", link: "faq" },
    { id: 5, label: "Contact", link: "contact" },
  ];

  return (
    <Fragment>
      <header
        className={`${isScrolled} bg-[#FFF] shadow-md fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ease-in-out`}
      >
        <div className="container py-5 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={"/"}>
              <Image
                src={"/images/Logo.svg"}
                alt="Logo"
                width={200}
                height={200}
                className="h-auto"
              />
            </Link>
          </div>

          {/* Pc */}
          <nav className="hidden xl:flex space-x-6">
            {Scrollheader.map((item) => (
              <Link
                key={item.id}
                href={`#${item.link}`}
                scroll={false} // Disable Next.js scroll handling for internal links
                className={`px-4 py-2 font-medium font-rubik text-[20px] ${
                  item.id === 5
                    ? "rounded-full bg-gradient-right text-white font-ibm font-semibold"
                    : ""
                } transform transition-transform duration-200 ease-in-out hover:translate-y-[-3px]`}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default behavior (which would add # to URL)
                  handleSmoothScroll(item.link); // Smooth scroll to target element
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Icon Menu Hamburger Mobile */}
          <div className="xl:hidden flex items-center justify-center gap-4">
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="flex items-center justify-center"
            >
              {isMenuOpen ? (
                <HiOutlineX size={30} />
              ) : (
                <HiOutlineMenu size={30} />
              )}
            </button>
          </div>
        </div>
        {/* Menu Mobile */}
        {isMenuOpen && (
          <nav className="xl:hidden fixed top-0 left-0 right-0 bottom-0 bg-white z-50 p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              {/* Logo vẫn hiển thị trong menu */}
              <div className="flex-shrink-0">
                <Link href={"/"}>
                  <Image
                    src={"/images/Logo.svg"}
                    alt="Logo"
                    width={150}
                    height={150}
                    className="h-auto"
                  />
                </Link>
              </div>

              {/* Close menu */}
              <button onClick={toggleMenu}>
                <HiOutlineX size={30} />
              </button>
            </div>

            {/* Menu links */}
            {Scrollheader.map((item) => (
              <Link
                key={item.id}
                href={`#${item.link}`}
                scroll={false} // Disable Next.js scroll handling
                className="block py-4 px-4 text-center font-medium font-rubik text-[20px]  transform transition-transform duration-200 ease-in-out hover:translate-y-[-3px]"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default behavior (which would add # to URL)
                  handleSmoothScroll(item.link); // Smooth scroll to the target element
                  toggleMenu(); // Close the menu when a link is clicked
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </Fragment>
  );
};

export default Header;
