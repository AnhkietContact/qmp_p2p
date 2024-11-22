import React from "react";
import Image from "next/image";
import Link from "next/link";
import P2PWorks from "@/component/P2PWorks";
import Advantages from "@/component/Advantages";
import Features from "@/component/Features";
import Testimonials from "@/component/Testimonials";
import Questions from "@/component/Questions";

const P2PHOME = () => {
  return (
    <>
      <section className="mb-10 md:mb-20 mt-10 md:mt-20">
        <div className=" relative z-30 flex flex-col items-center">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-center items-center md:space-x-10 ">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="flex flex-col items-center md:ml-20 relative z-30"
            >
              <div className=" md:w-[600px]">
                <p className="text-[32px] md:text-[48px] text-[#FF8311] text-center md:text-left font-rubik font-bold">
                  QMP P2P - Financial connection, increasing value
                </p>
                <p className="font-rubik text-center md:text-left text-[20px] text-gray-700 mt-5">
                  Optimize transactions - Transparent profits!
                </p>
              </div>
              <div className="flex mt-5 space-x-4 ">
                <Link href="/">
                  <Image
                    src="/images/AppStore.png"
                    alt="App Store"
                    width={200}
                    height={100}
                    className="transform transition-transform duration-200 ease-in-out hover:translate-y-[-3px]"
                  />
                </Link>
                <Link href="/">
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

            <div
              data-aos="flip-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="px-5 z-30 relative "
            >
              <Image
                src="/images/Phone.png"
                alt="Phone"
                width={476}
                height={574}
              />
            </div>
          </div>

          <Image
            src="/images/Ellipse1.png"
            alt="Ellipse 1"
            width={500}
            height={500}
            className="absolute bottom-0 right-0 z-10"
          />
          <Image
            src="/images/Ellipse2.png"
            alt="Ellipse 2"
            width={300}
            height={300}
            className="absolute bottom-0 left-0 z-10"
          />
        </div>
      </section>
      <section
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className=" relative z-30 mb-10 md:mb-20 "
      >
        <div className="container">
          <div className="">
            <div className="px-20 rounded-[10px] bg-white border shadow-lg p-5 flex flex-col md:flex-row gap-10 items-center md:justify-between">
              <div className="flex flex-col text-center items-center">
                <p className="text-[32px] md:text-[48px] font-rubik font-semibold">
                  10
                </p>
                <p className="text-[20px] md:text-[24px] font-rubik">
                  Business years
                </p>
              </div>

              <div className="h-20 md:border-l-2 border-[#FF8311] hidden md:block mx-5 w-full md:w-auto"></div>

              <div className="flex flex-col text-center items-center">
                <p className="text-[32px] md:text-[48px] font-rubik font-semibold">
                  10M+
                </p>
                <p className="text-[20px] md:text-[24px] font-rubik">
                  Global active users
                </p>
              </div>

              <div className="h-20 md:border-l-2 border-[#FF8311] hidden md:block mx-5 w-full md:w-auto"></div>

              <div className="flex flex-col text-center items-center">
                <p className="text-[32px] md:text-[48px] font-rubik font-semibold">
                  5M+
                </p>
                <p className="text-[20px] md:text-[24px] font-rubik">
                  Active users
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="instruct" className="container mb-10 md:mb-20 pt-20">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-20 lg:gap-0 ">
          <Image
            src="/images/Phone_P2P.svg"
            alt=""
            width={605}
            height={500}
            className="relative z-30"
            data-aos="fade-right"
          />
          <div data-aos="zoom-in" className=" space-y-5  relative z-30">
            <span className="text-[24px] font-rubik text-[#FF8311]">
              How it works
            </span>
            <div className="max-w-[500px]">
              <p className="font-rubik text-[#FF8311] font-medium text-[25px] md:text-[40px]">
                Sell USDQ and receive USD smoothly in just 3 steps
              </p>
            </div>
            <p className="text-[20px] font-rubik">
              Easily fund your crypto wallet to start trading
            </p>
            <div className="">
              <div className="flex items-center gap-4">
                <p className="font-sonsie text-[#FF8311] font-bold">1</p>
                <p className="text-[18px] md:text-[20px] font-rubik">
                  Register and verify your account
                </p>
              </div>
              <div className="flex items-center gap-4">
                <p className="font-sonsie text-[#FF8311] font-bold">2</p>
                <p className="text-[18px] md:text-[20px] font-rubik">
                  Deposit USDQ
                </p>
              </div>
              <div className="flex items-center gap-4">
                <p className="font-sonsie text-[#FF8311] font-bold">3</p>
                <p className="text-[18px] md:text-[20px] font-rubik">
                  Sell USDQ and withdraw USD to bank.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-20 mb-10 md:mb-20 ">
        <div data-aos="fade-right" className="container relative z-30">
          <div className="rounded-[10px] border bg-white shadow-lg p-5 flex flex-col md:flex-row gap-10 items-center md:justify-between">
            <div className="flex flex-col md:flex-row md:flex-grow items-center gap-10">
              <div className="container flex flex-col text-center md:text-left space-y-3">
                <span className="font-rubik text-[24px] text-[#FF8311]">
                  Benefit
                </span>
                <span className="font-rubik text-[30px] md:text-[40px] text-[#FF8311]">
                  Security & Safety
                </span>
                <span className="font-rubik text=[18px] md:text-[20px]">
                  TOP 15 safest exchanges by CER.live. Your trusted choice!
                </span>
              </div>
              <Image
                src="/images/Service.svg"
                alt="Phone"
                width={194}
                height={194}
                className="w-full h-[194px] "
              />
            </div>
          </div>
        </div>
        <Image
          src="/images/Ellipse4.png"
          alt="Ellipse 1"
          width={500}
          height={500}
          className="absolute bottom-0 right-0 "
        />
      </section>
      <section className="relative mb-10 md:mb-20">
        <div className="container ">
          <div className="relative z-10">
            <P2PWorks />
          </div>
        </div>
        <Image
          src="/images/Ellipse5.png"
          alt="Ellipse 2"
          width={300}
          height={300}
          className="absolute bottom-0 left-0 "
        />
      </section>
      <section className=" mb-10 md:mb-20">
        <div className="container ">
          <div data-aos="fade-right" className="mb-5">
            <span className="font-rubik font-medium text-[30px] md:text-[40px] text-[#FF8311]">
              Advantages of P2P trading platform
            </span>
          </div>
          <Advantages />
        </div>
      </section>
      <section
        id="features"
        className="bg-gradient-angular mb-10 md:mb-20 pt-5"
      >
        <div className="container py-20 ">
          <div data-aos="fade-down" className="text-center mb-10">
            <span className="font-semibold font-rubik text-[30px] md:text-[40px] text-white">
              Explore the features of QMP P2P
            </span>
          </div>
          <div>
            <Features />
          </div>
        </div>
      </section>
      <section className="mb-10 md:mb-20">
        <div className="container">
          <div
            data-aos="zoom-in-down"
            className="flex flex-col items-center justify-center mb-6"
          >
            <span className="block text-[30px] md:text-[40px] font-rubik text-[#FF8311] font-semibold mb-2">
              Testimonials
            </span>
            <hr className="border-2 border-[#FF8311] w-16" />
            <span className="font-rubik text-[18px] md:text-[25px] mt-4">
              What users are saying about QMP
            </span>
          </div>
          <div>
            <Testimonials />
          </div>
        </div>
      </section>
      <section id="faq" className="mb-10 md:mb-20">
        <div className="container pt-10 md:pt-24">
          <div
            data-aos="zoom-in-down"
            className="flex flex-col items-center justify-center mb-6"
          >
            <span className="block text-[30px] text-center md:text-left md:text-[40px] font-rubik text-[#FF8311] font-semibold mb-2">
              Frequently Asked Questions
            </span>
            <hr className="border-2 border-[#FF8311] w-16" />
            <span className="font-rubik text-[18px] md:text-[20px] text-center md:text-left mt-4">
              Here are some frequently asked questions users ask when using QMP
            </span>
          </div>
          <div>
            <Questions />
          </div>
        </div>
      </section>
      <section
        id="download"
        className="bg-gradient-top mb-10 md:mb-20 md:pt-20"
      >
        <div data-aos="fade-down" className="container py-10 ">
          <div className="flex flex-col items-center justify-center mb-6">
            <span className="block text-[48px] font-rubik text-white font-semibold mb-2">
              QMP P2P
            </span>
            <hr className="border-2 border-white w-16" />
            <div className="w-full  md:w-[550px] text-center mt-4">
              <span className="font-rubik text-white text-[18px] md:text-[20px]">
                QMP P2P works seamlessly across all devices! Download the app
                from Google Play Store for Android, or grab it on the App Store
                for iOS. We’re excited to welcome you to the QMP P2P community!
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center mt-5 space-x-4">
            <Link href="/">
              <Image
                src="/images/AppStore.png"
                alt="App Store"
                width={250}
                height={200}
                className="transform transition-transform duration-200 ease-in-out hover:translate-y-[-3px]"
              />
            </Link>
            <Link href="/">
              <Image
                src="/images/GooglePlay.png"
                alt="Google Play"
                width={250}
                height={200}
                className="transform transition-transform duration-200 ease-in-out hover:translate-y-[-3px]"
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="mb-10 md:mb-20">
        <div className="container ">
          <div className="flex flex-col items-center justify-center mb-6">
            <div data-aos="zoom-in">
              <span className="block text-[30px] md:text-[40px] text-center md:text-left font-rubik text-[#FF8311] font-semibold mb-2">
                Subscribe to get updates
              </span>
            </div>
            <hr data-aos="zoom-in" className="border-2 border-[#FF8311] w-16" />
            <div
              // data-aos="zoom-in"
              className="w-full sm:w-[500px] md:w-[800px] text-center mt-4"
            >
              <span className="font-rubik text-[18px] md:text-[20px]">
                Would you like us to send you regular updates about product
                features, promotions, and security updates? Input your email
                address below, and we’ll make sure that we keep you informed.
              </span>
            </div>
            <div
              data-aos="zoom-in"
              className="flex flex-col items-center md:w-[450px] space-y-5 mt-5"
            >
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full  h-[60px] px-2 py-2 border-2 border-gray-300 rounded-lg text-lg placeholder:text-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF8311] focus:border-[#FF8311] transition-all duration-300"
              />

              <button
                type="submit"
                className="w-full  bg-[#FF8311] text-white px-2 py-2 rounded-lg font-rubik md:text-[18px] font-medium transition-all duration-300 hover:bg-[#ff6a00] focus:outline-none"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default P2PHOME;
