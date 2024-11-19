import React from "react";
import MainLayout from "../src/layout/MainLayout";
import Image from "next/image";
import Link from "next/link";
import P2PWorks from "@/component/P2PWorks";
import Advantages from "@/component/Advantages";
import Features from "@/component/Features";
import Testimonials from "@/component/Testimonials";
import Questions from "@/component/Questions";
import Subscribe from "@/component/Subscribe";

const HomePione = () => {
  return (
    <MainLayout>
      <section className="py-20">
        <div className="z-30 relative flex flex-col items-center mt-20 py-10">
          <div className="flex flex-col md:flex-row justify-center items-center space-x-10 z-30 relative">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="flex flex-col text-center md:text-left items-center relative z-30"
            >
              <div className=" md:w-[600px]">
                <p className="text-[48px] text-[#FF8311] font-rubik font-bold">
                  QMP P2P - Financial connection, increasing value
                </p>
                <p className="font-rubik text-[20px] text-gray-700 mt-5">
                  Optimize transactions - Transparent profits!
                </p>
              </div>
              <div className="flex mt-5 space-x-4">
                <Link href="/">
                  <Image
                    src="/images/AppStore.png"
                    alt="App Store"
                    width={200}
                    height={100}
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/images/GooglePlay.png"
                    alt="Google Play"
                    width={200}
                    height={100}
                  />
                </Link>
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="flex flex-col md:flex-row items-end z-30 relative"
            >
              <Image
                src="/images/Phone.png"
                alt="Phone"
                width={300}
                height={300}
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
        className=" relative z-30"
      >
        <div className="container">
          <div className="px-20 rounded-[10px] bg-white border shadow-lg p-5 flex flex-col lg:flex-row gap-10 items-center md:justify-between">
            <div className="flex flex-col items-center">
              <p className="text-[48px] font-rubik font-semibold">10</p>
              <p className="text-[24px] font-rubik">Business year</p>
            </div>

            {/* Đường phân cách dọc trên màn hình lớn và ngang trên mobile */}
            <div className="h-20  lg:border-l-2 border-t-2 lg:border-t-0 border-[#FF8311] mx-5 w-full md:w-auto"></div>

            <div className="flex flex-col items-center">
              <p className="text-[48px] font-rubik font-semibold">10M+</p>
              <p className="text-[24px] font-rubik">Global active users</p>
            </div>

            {/* Đường phân cách dọc trên màn hình lớn và ngang trên mobile */}
            <div className="h-20  lg:border-l-2 border-t-2 lg:border-t-0 border-[#FF8311] mx-5 w-full md:w-auto"></div>

            <div className="flex flex-col items-center">
              <p className="text-[48px] font-rubik font-semibold">5M+</p>
              <p className="text-[24px] font-rubik">Global active users</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-10 mb-20">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <Image
            src="/images/Phone_P2P.png"
            alt=""
            width={605}
            height={500}
            className=""
            data-aos="fade-right"
          />
          <div data-aos="fade-left" className=" space-y-5">
            <span className="text-[24px] font-rubik text-[#FF8311]">
              How it works
            </span>
            <div className="max-w-[500px]">
              <p className="font-rubik text-[#FF8311] font-medium text-[40px]">
                Sell ​​USDT and receive USD smoothly in just 3 steps
              </p>
            </div>
            <p className="text-[20px] font-rubik">
              Easily fund your crypto wallet to start trading
            </p>
            <div className="">
              <div className="flex items-center gap-4">
                <div className="relative w-[44px] h-[50px]">
                  <Image
                    src="/images/Ellipse3.png"
                    alt=""
                    width={44}
                    height={50}
                    className="absolute top-0 left-0"
                  />
                  <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  font-semibold">
                    1
                  </p>
                </div>
                <p className="text-[20px] font-rubik">
                  Register and verify your account
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-[44px] h-[50px]">
                  <Image
                    src="/images/Ellipse3.png"
                    alt=""
                    width={44}
                    height={50}
                    className="absolute top-0 left-0"
                  />
                  <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  font-semibold">
                    2
                  </p>
                </div>
                <p className="text-[20px] font-rubik">Deposit USDT</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-[44px] h-[50px]">
                  <Image
                    src="/images/Ellipse3.png"
                    alt=""
                    width={44}
                    height={50}
                    className="absolute top-0 left-0"
                  />
                  <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  font-semibold">
                    3
                  </p>
                </div>
                <p className="text-[20px] font-rubik">
                  Sell ​​USDT and withdraw VND to bank.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-20">
        <div data-aos="fade-right" className="container mb-20">
          <div className="rounded-[10px] border bg-white shadow-lg p-5 flex flex-col md:flex-row gap-10 items-center md:justify-between relative z-10">
            <div className="container flex flex-col space-y-3">
              <span className="font-rubik text-[24px] text-[#FF8311]">
                Benefit
              </span>
              <span className="font-rubik text-[40px] font-[40px] text-[#FF8311]">
                Security & Safety
              </span>
              <span className="font-rubik text-[20px]">
                TOP 15 safest exchanges by CER.live. Your trusted choice!
              </span>
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
      <section className="relative mb-20">
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
      <section>
        <div className="container mb-20">
          <div data-aos="fade-right">
            <span className="font-rubik font-medium text-[40px] text-[#FF8311]">
              Advantages of P2P trading platform
            </span>
          </div>
          <Advantages />
        </div>
      </section>
      <section id="features" className="bg-gradient-angular mb-20">
        <div className="container py-20">
          <div data-aos="fade-down" className="text-center mb-20">
            <span className="font-semibold font-rubik text-[48px] text-white">
              Explore the features of QMP P2P
            </span>
          </div>
          <div>
            <Features />
          </div>
        </div>
      </section>
      <section className="mb-20">
        <div className="container">
          <div
            data-aos="zoom-in-down"
            className="flex flex-col items-center justify-center mb-6"
          >
            <span className="block text-[48px] font-rubik text-[#FF8311] font-semibold mb-2">
              Testimonials
            </span>
            <hr className="border-2 border-[#FF8311] w-16" />
            <span className="font-rubik text-[20px] mt-4">
              What users are saying about QMP
            </span>
          </div>
          <div>
            <Testimonials />
          </div>
        </div>
      </section>
      <section className="mb-20">
        <div className="container">
          <div
            data-aos="zoom-in-down"
            className="flex flex-col items-center justify-center mb-6"
          >
            <span className="block text-[48px] font-rubik text-[#FF8311] font-semibold mb-2">
              Frequently Asked Questions
            </span>
            <hr className="border-2 border-[#FF8311] w-16" />
            <span className="font-rubik text-[20px] mt-4">
              Here are some frequently asked questions users ask when using QMP
            </span>
          </div>
          <div>
            {" "}
            <Questions />
          </div>
        </div>
      </section>
      <section id="download" className="bg-gradient-top">
        <div
          data-aos="fade-down"
          data-aos-offset="400"
          className="container py-20"
        >
          <div className="flex flex-col items-center justify-center mb-6">
            <span className="block text-[48px] font-rubik text-white font-semibold mb-2">
              QMP P2P
            </span>
            <hr className="border-2 border-white w-16" />
            <div className="w-[300px] lg:w-[550px] text-center mt-4">
              <span className="font-rubik text-white text-[20px]">
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
              />
            </Link>
            <Link href="/">
              <Image
                src="/images/GooglePlay.png"
                alt="Google Play"
                width={250}
                height={200}
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container">
          <div className="flex flex-col items-center justify-center mb-6">
            <div data-aos="zoom-in">
              <span className="block text-[48px] font-rubik text-[#27004E] font-semibold mb-2">
                Subscribe to get updates
              </span>
            </div>
            <hr data-aos="zoom-in" className="border-2 border-[#8000FF] w-16" />
            <div
              data-aos="zoom-in"
              className="w-[300px] lg:w-[850px] text-center mt-4"
            >
              <span className="font-rubik text-[20px]">
                Would you like us to send you regular updates about product
                features, promotions, and security updates? Input your email
                address below, and we’ll make sure that we keep you informed.
              </span>
            </div>
            <div
              data-aos="zoom-in-up"
              className="flex flex-col items-center space-y-5 mt-5"
            >
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full lg:w-[500px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8311] focus:border-[#FF8311]"
              />

              <button
                type="submit"
                className="w-full lg:w-[500px] bg-[#FF8311] text-white py-2 px-4 rounded-lg font-rubik text-[24px] font-medium transition duration-300 hover:bg-[#ff6a00] focus:outline-none"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
export default HomePione;
