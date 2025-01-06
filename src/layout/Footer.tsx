import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer data-aos="fade-up" className="bg-gradient-Footer">
      <div className="container py-10">
        <div className="flex flex-col xl:flex-row justify-center md:items-center ">
          {/* Logo và mô tả */}
          <div className="flex flex-col items-center xl:items-start xl:flex-grow">
            {/* Logo */}
            <Image
              src="/images/LogoFooter.svg"
              width={250}
              height={250}
              alt=""
              className="h-auto w-[70%] md:w-[250px] "
            />
            <div className="w-full md:max-w-[500px] text-center xl:text-left mt-5">
              <span className="text-white font-rubik text-[18px] md:text-[22px]">
                QMP P2P - Safe, fast and easy digital asset management solution
                for all users.
              </span>
            </div>
            <div className="mt-5">
              <span className="font-rubik font-semibold text-white text-[18px] md:text-[22px]">
                Download
              </span>
              <div className="flex mt-5 space-x-4 ">
                <Link href="https://testflight.apple.com/join/4dc5a6wn">
                  <Image
                    src="/images/AppStore.png"
                    alt="App Store"
                    width={200}
                    height={100}
                    className="transform transition-transform duration-200 ease-in-out hover:translate-y-[-3px]"
                  />
                </Link>
                <Link href="https://qmp.world/QMP_P2P.apk">
                  <Image
                    src="/images/GooglePlay.png"
                    alt="Google Play"
                    width={200}
                    height={100}
                    className="transform transition-transform duration-200 ease-in-out hover:translate-y-[-3px]"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-4">
            {Products.map((product) => (
              <div key={product.id} className="flex flex-col items-center">
                <h3 className="font-semibold text-white font-rubik text-[18px]">
                  {product.name}
                </h3>
                <ul className="flex flex-row text-white font-rubik text-[16px] font-medium space-x-4 mt-2">
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
                </ul>{" "}
                <div className="mt-2">
                  <span className="text-white font-rubik text-[16px] font-normal">
                    Contact us : contact@qunest.com
                  </span>
                </div>
              </div>
            ))}
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
      {/* <hr className="border-t border-white w-full" /> */}
      <div className="bg-white ">
        <div className="text-center py-5">
          <p className="text-sm font-inter text-[20px] ">
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
