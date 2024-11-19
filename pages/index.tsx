import React from "react";
import MainLayout from "../src/layout/MainLayout";
import Image from "next/image";
import Link from "next/link";
import P2PWorks from "@/component/P2PWorks";

const HomePione = () => {
  return (
    <MainLayout>
      <section className="py-20 ">
        <div className="relative z-20 flex flex-col items-center mt-20 py-10">
          <div className="flex flex-col md:flex-row justify-center items-center space-x-10 z-20">
            {/* Nội dung chữ và liên kết */}
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="flex flex-col"
            >
              <div className=" md:w-[600px]">
                <p className="text-[48px] md:text-[#FF8311] font-rubik font-bold">
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

            {/* Hình ảnh điện thoại */}
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="flex flex-col md:flex-row items-end z-20 space-x-1"
            >
              {/* Phone 1 */}
              <Image
                src="/images/Phone.png"
                alt="Phone "
                width={300}
                height={300}
              />
            </div>
          </div>

          {/* Hình Ellipse */}
          <Image
            src="/images/Ellipse1.png"
            alt="Ellipse 1"
            width={500}
            height={500}
            className="absolute bottom-0 right-0 "
          />
          <Image
            src="/images/Ellipse2.png"
            alt="Ellipse 2"
            width={300}
            height={300}
            className="absolute bottom-0 left-0 "
          />
        </div>
      </section>
      <section
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className=""
      >
        <div className="container ">
          <div className="rounded-[10px] bg-white border shadow-lg p-5 flex flex-col md:flex-row gap-10 items-center md:justify-between">
            <div className="flex flex-col items-center ">
              <p className="text-[48px] font-rubik font-semibold">10</p>
              <p className="text-[24px] font-rubik">Business year</p>
            </div>

            <div className="h-full border-r-4 border-[#FF8311] mx-5"></div>

            <div className="flex flex-col items-center">
              <p className="text-[48px] font-rubik font-semibold">10M+</p>
              <p className="text-[24px] font-rubik">Global active users</p>
            </div>

            <div className="h-full border-r-4 border-[#FF8311] mx-5"></div>
            <div className="flex flex-col items-center">
              <p className="text-[48px] font-rubik font-semibold">5M+</p>
              <p className="text-[24px] font-rubik">Global active users</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-10">
        <div className="flex flex-col md:flex-row gap-20">
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
      <section className=" relative">
        <div className="container">
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
      <section className=" relative">
        <div className="container ">
          <div className="relative z-10">
            {" "}
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
    </MainLayout>
  );
};
export default HomePione;
