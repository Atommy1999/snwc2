import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import close from "../public/icons/close.svg";

const Overlay = ({ children, title, onClose }) => {
  return (
    <motion.div
      animate={{ top: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="opacity-0 top-10 overflow-y-scroll hidden-scrollbar fixed flex flex-col items-center bg-white w-screen h-screen px-8 z-50"
    >
      <div className="flex flex-row justify-between items-center w-full max-w-xl mt-6">
        <h2 className="m-0 text-2xl">{title}</h2>
        <button className="mt-2" onClick={onClose}>
          <Image width={30} height={30} src={close} alt="close" />
        </button>
      </div>
      <div className="w-full max-w-xl pb-12">{children}</div>
    </motion.div>
  );
};

export default Overlay;
