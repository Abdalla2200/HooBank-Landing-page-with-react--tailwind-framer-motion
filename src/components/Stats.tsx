import { motion } from "framer-motion";
import { statsList } from "../constants";
export default function Status() {
  return (
    <div className="container py-sectionPadding my-sectionMargin flex flex-wrap items-center justify-center gap-8 md:justify-between ">
      {statsList.map((item) => (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          key={item.text}
          className="flex items-center gap-7 "
        >
          <p className="font-semibold text-4xl sm:text-[40px] text-white">
            {item.number}
          </p>
          <p className="text-[20px] bg-linear-to-r from-[#BEF3F5] via-[#7DE7EB] to-[#33BBCF] bg-clip-text text-transparent">
            {item.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
