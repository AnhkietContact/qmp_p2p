import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Questions() {
  return (
    <div
      data-aos="fade-up"
      className="flex justify-center items-center space-y-4 flex-col "
    >
      {Frequently.map((item) => (
        <Accordion
          key={item.id}
          className="bg-white-opacity-10 transition-all duration-300 w-full lg:w-[45%]" 
        >
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon sx={{ color: "#000", fontSize: 30 }} />}
            aria-controls={`panel${item.id}-content`}
            id={`panel${item.id}-header`}
          >
            <span className="font-rubik font-semibold text-[18px]">{item.title}</span>
          </AccordionSummary>
          <AccordionDetails className="font-rubik text-[16px]">
            {item.description}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

const Frequently = [
  {
    id: 1,
    title: "What is P2P exchange?",
    description:
      "P2P stands for peer-to-peer and a P2P exchange is a platform that allows users to buy and sell cryptocurrencies for fiat currency directly with other users. Learn more about What is P2P Trading and How Does a Local Bitcoin Exchange Work?",
  },
  {
    id: 2,
    title: "How to Sell Bitcoin on QMP P2P?",
    description:
      "First, browse Buy Crypto Ads for the cryptocurrency you want to sell and find the best offers that support your preferred payment method. You can read reviews and check the buyer's requirements. If you find the requirements acceptable, initiate the trade and don't release the crypto until you receive the funds using the payment method you provided. Learn more about how to sell crypto via P2P or how to trade bitcoin for cash via QMP P2P.",
  },
  {
    id: 3,
    title: "What cryptocurrencies are supported in P2P trading?",
    description:
      "You can use a variety of cryptocurrencies in P2P trading. You can choose from digital assets such as Bitcoin, Ethereum, and stablecoins.",
  },
  {
    id: 4,
    title: "How to Buy Bitcoin on QMP P2P?",
    description:
      "You can use a variety of cryptocurrencies in P2P trading. You can choose from digital assets such as Bitcoin, Ethereum, and stablecoins.",
  },
  {
    id: 5,
    title: "Why is QMP P2P better than other P2P marketplaces?",
    description:
      "QMP P2P is the largest P2P exchange with over 800 payment methods and over 100 fiat currencies. We provide escrow services to ensure safe and fair trading. Additionally, on QMP P2P, you can buy and sell cryptocurrencies with zero fees. Learn more about why QMP P2P stands out.",
  },
  {
    id: 6,
    title:
      "How do I protect myself from scammers? Use FTW margin on Binance P2P!",
    description:
      "As one of the platform’s safeguards, Binance P2P has a mechanism to hold the crypto funds linked to any pending trade. This mechanism prevents theft or fraud by adding a layer of security that prevents attempts to steal your cash or crypto, even if the person fails to fulfill their trading obligations. Learn more about safeguarding your trades.",
  },
];
