import React, { useState } from "react";

const P2PWorks = () => {
  const [isBuySelected, setIsBuySelected] = useState(true);
  return (
    <div className="flex justify-center items-center my-10">
      <div className="w-full">
        {/* Tab navigation */}
        <div data-aos="fade-right" className="flex flex-col md:flex-row md:justify-between space-y-4 items-center mb-6">
          <span className="font-rubik text-[40px] text-[#FF8311] font-medium">
            How P2P works
          </span>
          <div className=" space-y-4 md:space-x-3">
            <button
              onClick={() => setIsBuySelected(true)}
              className={`font-rubik font-medium text-[20px] flex-1 text-center px-2 py-2 shadow-lg rounded-lg ${
                isBuySelected
                  ? "bg-[#FF8311] text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              Buy Cryptocurrency
            </button>
            <button
              onClick={() => setIsBuySelected(false)}
              className={`font-rubik font-medium text-[20px] flex-1 text-center px-2 py-2 rounded-lg ${
                !isBuySelected
                  ? "bg-[#FF8311] text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              Sell Cryptocurrency
            </button>
          </div>
        </div>

        {/* Content */}
        <div data-aos="fade-left" className="relative overflow-hidden">
          <div
            className={`transition-all duration-500 ease-in-out ${
              isBuySelected ? "translate-x-0" : "translate-x-[-100%]"
            }`}
          >
            {/* Buy Content */}
            <div className="flex flex-wrap justify-center md:justify-around space-y-6 md:space-y-0 md:space-x-6">
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
                  <p className="max-w-[300px] text-center">{item.content}</p>
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
            <div className="flex flex-wrap justify-center md:justify-around space-y-6 md:space-y-0 md:space-x-6">
              {Cryptocurrency.slice(3, 6).map((item) => (
                <div
                  key={item.id}
                  className="rounded-lg bg-white shadow-lg flex flex-col items-center px-5 py-5"
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
                  <p className="max-w-[300px] text-center">{item.content}</p>
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
