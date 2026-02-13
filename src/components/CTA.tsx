import Button from "./UI/Button";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <div className="container py-sectionPadding my-sectionMargin">
      <motion.div
        initial={{ scale: 0.6 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className=" bg-[#282730] rounded-[20px] p-8 md:p-16 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-10 lg:max-w-[1150px] lg:mx-auto"
      >
        <div className="text-center lg:text-start">
          <h1 className="font-semibold text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.4] mb-6">
            Let’s try our service now!
          </h1>
          <p className="max-w-[450px] md:text-lg leading-[1.6] text-white/70">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <Button />
      </motion.div>
    </div>
  );
}
