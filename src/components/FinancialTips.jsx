import { useEffect, useState } from "react";
import { FcMoneyTransfer } from "react-icons/fc";

const financialExpertTips = [
  {
    author: "Warren Buffett",
    quote:
      "The stock market is designed to transfer money from the Active to the Patient.",
    tip: "Invest for the long term and avoid frequent trading to maximize returns.",
  },
  {
    author: "Benjamin Franklin",
    quote: "An investment in knowledge pays the best interest.",
    tip: "Continuously educate yourself about personal finance and investing to make informed decisions.",
  },
  {
    author: "John D. Rockefeller",
    quote:
      "Do not save what is left after spending, but spend what is left after saving.",
    tip: "Prioritize savings and investments before making discretionary purchases.",
  },
  {
    author: "Dave Ramsey",
    quote:
      "You must gain control over your money or the lack of it will forever control you.",
    tip: "Create and stick to a budget to take control of your financial situation.",
  },
  {
    author: "Albert Einstein",
    quote:
      "Compound interest is the eighth wonder of the world. He who understands it, earns it; he who doesn't, pays it.",
    tip: "Start saving and investing early to benefit from the power of compound interest.",
  },
  {
    author: "Peter Lynch",
    quote: "Know what you own, and know why you own it.",
    tip: "Research and understand your investments to make informed decisions.",
  },
  {
    author: "Suze Orman",
    quote:
      "The only people who see the whole picture are the ones who take the time to look at it.",
    tip: "Regularly review your financial plan and adjust as necessary to stay on track with your goals.",
  },
  {
    author: "Robert Kiyosaki",
    quote: "It's not how much money you make. It's how much money you keep.",
    tip: "Focus on managing expenses and building wealth rather than just increasing income.",
  },
  {
    author: "Jim Rohn",
    quote:
      "Formal education will make you a living; self-education will make you a fortune.",
    tip: "Invest in personal development and self-education to enhance your financial potential.",
  },
  {
    author: "Jack Bogle",
    quote: "The greatest enemy of a good plan is the dream of a perfect plan.",
    tip: "Take action with a good plan rather than waiting for the perfect strategy that may never come.",
  },
];

export const FinancialTips = () => {
  const [showQuote, setShowQuote] = useState(financialExpertTips[0]);

  useEffect(() => {
    setInterval(() => {
      setShowQuote(
        financialExpertTips[
          Math.floor(Math.random() * financialExpertTips.length)
        ]
      );
    }, 5000);
  }, []);
  const { author, quote, tip } = showQuote;

  return (
    <div
      className="d-flex flex-column justify-content-center "
      style={{ height: "100%" }}
    >
      <div className="text-center p-5 " style={{ fontSize: "1.3rem" }}>
        <FcMoneyTransfer
          className="text-success"
          style={{ fontSize: "10rem" }}
        />
        <div>Money Grows if you don't spend</div>
      </div>
      <h4>{tip}</h4>
      <div className="fw-bolder">- {author}</div>
    </div>
  );
};
