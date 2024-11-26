"use client";
import React, { useState } from "react";

const P2PWorks = () => {
  const [isBuySelected, setIsBuySelected] = useState(true);
  return (
    <div className="flex justify-center items-center ">
      <div className="w-full">
        {/* Tab navigation */}
        <div
          data-aos="fade-right"
          className="flex flex-col lg:flex-row items-center lg:justify-between space-y-4 mb-6"
        >
          <span className="font-rubik text-[30px] md:text-[40px] text-[#FF8311] font-medium">
            How P2P works
          </span>
          <div className="flex text-center space-x-5 ">
            <button
              onClick={() => setIsBuySelected(true)}
              className={`font-rubik font-medium text-[15px] md:text-[20px] text-center px-2 py-2  rounded-lg ${
                isBuySelected
                  ? "bg-[#FF8311] text-white shadow-md"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              <span>Buy Cryptocurrency</span>
            </button>
            <button
              onClick={() => setIsBuySelected(false)}
              className={`font-rubik font-medium text-[15px] md:text-[20px] text-center px-2 py-2 rounded-lg ${
                !isBuySelected
                  ? "bg-[#FF8311] text-white shadow-md"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              <span>Sell Cryptocurrency</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div data-aos="zoom-in-down" className="relative overflow-hidden">
          <div
            className={`transition-all duration-500 ease-in-out ${
              isBuySelected ? "translate-x-0" : "translate-x-[-100%]"
            }`}
          >
            {/* Buy Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 space-y-5 lg:space-x-5 lg:space-y-0 justify-items-center ">
              {Cryptocurrency.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center rounded-lg bg-white p-5 shadow-lg"
                >
                  <div className="w-24 h-24 mb-3">
                    <img
                      src={item.image}
                      alt={`Crypto ${item.id}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-[#FF8311] text-[20px] font-rubik font-medium ">
                    {item.title}
                  </p>
                  <p className="w-full md:max-w-[550px] max-w-[300px] text-center text-[16px] font-rubik">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-500 ease-in-out ${
              !isBuySelected ? "translate-x-0" : "-translate-x-[100%]"
            } absolute top-0 left-0 w-full`}
          >
            {/* Sell Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 space-y-5 lg:space-x-5 lg:space-y-0 justify-items-center ">
              {Cryptocurrency.slice(3, 6).map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center rounded-lg bg-white p-5 shadow-lg"
                >
                  <div className="w-24 h-24 mb-3">
                    <img
                      src={item.image}
                      alt={`Crypto ${item.id}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-[#FF8311] font-semibold text-center">
                    {item.title}
                  </p>
                  <p className="w-full md:max-w-[550px] max-w-[300px] text-center text-[16px] font-rubik">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default P2PWorks;
// Dữ liệu Cryptocurrency
const Cryptocurrency = [
  {
    id: 1,
    image: "/images/icons/1.png",
    title: "1. Place an order",
    content:
      "Once you place a P2P order, the crypto assets will be deposited into QMP P2P.",
  },
  {
    id: 2,
    image: "/images/icons/2.png",
    title: "2. Payment to seller",
    content:
      "Send funds to the seller via the suggested payment methods. Complete the fiat transaction and click Transferred, notify seller on Binance P2P.",
  },
  {
    id: 3,
    image: "/images/icons/3.png",
    title: "3. Receive Crypto",
    content:
      "Once the seller confirms receipt of the funds, the escrow crypto will be unlocked.",
  },
  {
    id: 4,
    image: "/images/icons/1.png",
    title: "1. Place an order",
    content:
      "Once you place a P2P order, the crypto assets will be deposited into QMP P2P.",
  },
  {
    id: 5,
    image: "/images/icons/4.png",
    title: "2. Payment Verification",
    content:
      "Check the transaction information in the payment account provided and make sure you receive the buyer's payment.",
  },
  {
    id: 6,
    image: "/images/icons/5.png",
    title: "3. Unlock Crypto",
    content:
      "Once you confirm receipt of funds, release the crypto to the buyer on Binance P2P.",
  },
];
