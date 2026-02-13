import { testimonialsCards } from "../constants";
import cardIcon from "../assets/quotes.svg";
import { motion } from "framer-motion";

export default function Testimonials() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  return (
    <div className="container py-sectionPadding my-sectionMargin">
      <div className="flex items-center text-center justify-between gap-6 flex-col lg:flex-row mb-20">
        <h1 className="text-white text-4xl md:text-5xl font-semibold leading-[170%]">
          What people are <br /> saying about us
        </h1>
        <p className="lg:mr-20 md:text-lg text-white/70 leading-[180%] max-w-[450px]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {testimonialsCards.map((card, index) => (
          <motion.div
            variants={cardVariants}
            key={index}
            className="h-full flex flex-col max-w-[450px] mx-auto px-10 py-[60px] rounded-[20px] hover:bg-[#313039] duration-200"
          >
            <img src={cardIcon} alt="quotes" className="w-[42px]" />
            <p className="flex-1 mt-10 mb-6 text-lg text-white leading-[1.8] tracking-[.02]">
              {card.text}
            </p>
            <div className="flex items-center gap-4">
              <img
                src={card.partnerImg}
                alt="partner image"
                className={`w-[48px] h-[48px] rounded-full ${index === 0 ? "blur-xs" : ""}`}
              />
              <div className="">
                <h2 className="text-[20px] text-white mb-1">
                  {card.partnerName}
                </h2>
                <p className="text-white opacity-50">{card.partnerTitle}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
