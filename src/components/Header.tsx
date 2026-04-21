import { navLinks } from "../constants";
import logoImg from "../assets/logo.svg";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-10 container flex gap-8 justify-between items-center flex-col sm:flex-row py-9"
    >
      <div className="w-[120px] md:w-[150px] cursor-pointer">
        <img src={logoImg} alt="HooBank Logo" className="w-full h-full" />
      </div>
      <ul className="flex items-center gap-6 sm:gap-14 ">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className=" text-white/70 hover:text-white cursor-pointer duration-200 text-[16px]"
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
