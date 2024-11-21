import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer data-aos="fade-up" className="bg-gradient-top ">
      <div className="px-10 py-10">
        <div className="container">
          <div className="flex flex-col xl:flex-row items-center gap-20">
            {/* Logo và mô tả */}
            <div className="flex flex-col items-center xl:items-start xl:flex-grow">
              {/* Logo */}
              <Image
                src="/images/LogoFooter.svg"
                width={250}
                height={250}
                alt="Logo"
              />
              <div className="max-w-[500px] mt-10">
                <span className="text-white font-rubik text-[22px]">
                  QMP P2P - Safe, fast and easy digital asset management
                  solution for all users.
                </span>
              </div>
              <div className="mt-20">
                <span className="font-rubik font-semibold text-white text-[22px]">
                  Download
                </span>
                <div className="flex flex-col md:flex-row mt-5">
                  <Link href="/">
                    <Image
                      src="/images/AppStore.png"
                      alt=""
                      width={200}
                      height={100}
                      className="transform transition-transform duration-200 ease-in-out hover:translate-y-[-3px]"
                    />
                  </Link>
                  <Link href="">
                    <Image
                      src="/images/GooglePlay.png"
                      alt=""
                      width={200}
                      height={100}
                      className="transform transition-transform duration-200 ease-in-out hover:translate-y-[-3px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
            {/* Danh sách sản phẩm */}
            <div>
              <div>
                {Products.map((product) => (
                  <div key={product.id}>
                    <h3 className="font-semibold text-white font-rubik text-[18px]">
                      {product.name}
                    </h3>
                    <ul className="flex flex-col md:flex-row items-center text-white font-rubik text-[16px] font-medium space-y-2 md:space-y-0 space-x-4 mt-2">
                      {product.links.map((link, index) => (
                        <li key={index}>
                          <Link
                            href={link.link}
                            className="hover:text-white focus:text-white"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-2">
                <span className="text-white font-rubik text-[16px] font-normal">
                  Contact us : contact@qunest.com
                </span>
              </div>
              {/* Mạng xã hội */}
              {/* <div className="flex flex-col mb-2 mt-2">
                <span className="font-rubik text-[22px] font-semibold text-white">
                  Social Network
                </span>
                <ul className="space-x-4 flex items-center gap-4 mt-2">
                  {Icon.map((icon) => (
                    <li
                      className="transform text-white transition-transform duration-200 ease-in-out hover:translate-y-[-3px]"
                      key={icon.name}
                    >
                      <Link href={icon.href}>
                        <Image
                          src={icon.src}
                          width={25}
                          height={25}
                          alt={icon.alt}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <hr className="border-t border-white w-full" /> */}
      <div className="bg-black ">
        <div className="text-center py-5">
          <p className="text-sm text-[#A7A7A7]">
            Copyright © 2024 Designed by QMP P2P - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Dữ liệu sản phẩm mẫu với các mục con
export const Icon = [
  // {
  //   name: "Telegram",
  //   src: "/image/icon/Tele.svg",
  //   alt: "Telegram",
  //   href: "/",
  // },
  {
    name: "Facebook",
    src: "/images/icons/Facebook.png",
    alt: "Facebook",
    href: "/",
  },
  {
    name: "Twitter",
    src: "/images/icons/Twitter.png",
    alt: "Twitter",
    href: "/",
  },

  {
    name: "Instagram",
    src: "/images/icons/Instagram.png",
    alt: "Instagram",
    href: "/",
  },
];
export const Products = [
  {
    id: 1,
    name: "Quick Links",
    links: [
      { label: "Privacy policy", link: "/privacy" },
      { label: "Terms of Service", link: "/terms" },
    ],
  },
];
