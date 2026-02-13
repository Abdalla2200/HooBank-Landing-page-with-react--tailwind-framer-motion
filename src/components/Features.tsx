import { featuresList } from "../constants";
import Button from "./UI/Button";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <div className="container py-sectionPadding my-sectionMargin flex flex-col md:flex-row gap-20 md:gap-10 items-start md:items-center justify-between">
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-center md:text-start"
      >
        <div className="max-w-[620px] mb-6 ">
          <h1 className="text-white font-semibold text-4xl sm:text-5xl leading-[160%]">
            You do the business, we’ll handle the money.
          </h1>
        </div>
        <div className="max-w-[550px] mb-12">
          <p className="text-white/70 leading-[170%]">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
        </div>
        <Button />
      </motion.div>
      <motion.div
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className=""
      >
        {featuresList.map((feature) => (
          <div className="flex items-center gap-5 mb-9 cursor-pointer hover:bg-[#3d3b47] rounded-[20px] p-4 duration-300">
            <div className="w-[64px] h-[64px] rounded-full flex  items-center justify-center bg-[#09977C1A]/70">
              <img src={feature.logo} alt="star" />
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-white/70 max-w-[350px]">{feature.text}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
