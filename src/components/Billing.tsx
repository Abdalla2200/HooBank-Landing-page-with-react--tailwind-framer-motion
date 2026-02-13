import billingImg from "../assets/bill.png";
import appStoreLogo from "../assets/apple.svg";
import googleLogo from "../assets/google.svg";
import { motion } from "framer-motion";

export default function Billing() {
  return (
    <div className="container py-sectionPadding my-sectionMargin flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
      <motion.img
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        src={billingImg}
        alt="bill"
        className="max-w-[360px] sm:max-w-[530px]"
      />
      <div className="max-w-[470px] text-center lg:text-start">
        <h3 className="text-white text-4xl sm:text-5xl font-semibold mb-6 leading-[160%]">
          Easily control your billing & invoicing.
        </h3>
        <p className="text-white/70  mb-12 leading-[160%]">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex items-center gap-10 justify-center ">
          <img src={appStoreLogo} alt="app store" className="cursor-pointer" />
          <img src={googleLogo} alt="google play" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
