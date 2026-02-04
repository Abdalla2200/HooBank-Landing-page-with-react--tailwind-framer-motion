import heroImg from "../assets/robot.png";
import discountImg from "../assets/Discount.svg";
import arrowIcon from "../assets/arrow-up.svg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="container pb-sectionPadding mb-sectionMargin flex flex-col lg:flex-row justify-between items-center gap-10">
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className=""
      >
        <div className="mb-3 w-fit flex items-center gap-2 sm:gap-3 bg-linear-to-r from-[#272727] to-[#11101D] rounded-lg py-1 px-2 sm:px-4 ">
          <div className="">
            <img src={discountImg} alt="discount icon" />
          </div>
          <p className="text-white/70 text-sm sm:text-lg">
            <span className="text-white">20% </span> DISCOUNT FOR{" "}
            <span className="text-white">1 MONTH </span> ACCOUNT
          </p>
        </div>
        <div className="text-white flex items-center gap-8 sm:gap-16">
          <div className=" text-[36px] sm:text-[56px] md:text-[72px] font-semibold">
            <h1>The Next</h1>{" "}
            <h1 className="bg-linear-to-r from-[#33BBCF] via-[#7DE7EB] to-[#BEF3F5] bg-clip-text text-transparent">
              Generation
            </h1>
          </div>
          <div className="cursor-pointer w-[100px] sm:w-[140px] h-[100px] sm:h-[140px] rounded-full border-2 border-[#7DE7EB] text-[#7DE7EB] sm:text-lg font-medium flex justify-center items-center">
            <div className="">
              <p className="flex items-center gap-[6px]">
                Get{" "}
                <span>
                  <img src={arrowIcon} alt="arrow icon" />
                </span>
              </p>
              <p>Started</p>
            </div>
          </div>
        </div>
        <div className="">
          {" "}
          <h1 className="text-white text-[36px] sm:text-[56px] md:text-[72px] font-semibold">
            Payment Method.
          </h1>
        </div>
        <div className=""></div>
      </motion.div>
      <motion.div
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="w-[350px] sm:w-[500px]"
      >
        <img src={heroImg} alt="Hero Image" className="w-full h-full" />
      </motion.div>
    </div>
  );
}
