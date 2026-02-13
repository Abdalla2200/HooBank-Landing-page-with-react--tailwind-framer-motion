import CtaImg from "../assets/card.png";
import Button from "./UI/Button";
import { motion } from "framer-motion";
export default function CardDeal() {
  return (
    <div className="container py-sectionPadding my-sectionMargin flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-6">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center lg:text-start"
      >
        <h1 className="text-white text-3xl sm:text-5xl font-semibold leading-[160%] mb-6">
          Find a better card deal
          <br />
          in few easy steps.
        </h1>
        <p className="text-white/70 sm:text-lg leading-[170%] mb-12 max-w-[500px]">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button />
      </motion.div>
      <motion.img
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        src={CtaImg}
        alt="card image"
        className="max-w-[350px] sm:max-w-[500px]"
      />
    </div>
  );
}
