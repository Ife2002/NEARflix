import React,{useState} from "react";

import { motion } from "framer-motion";

const Overlay = ({ children, close }) => {
  
  const variants = {
    open: { backgroundColor: "#1652f0" },
    closed: { backgroundColor: "#00000090" },
  };

  return (
    <motion.div
      className="flex h-[100%] w-[100%] px-[30%] fixed z-100 bg-[#00000040] bottom-0 top-0"
      onClick={close}
      variants={variants}
      initial={"open"}
      animate={"open"}
      exit={"closed"}
      key="overlay"
    >
      {children}
    </motion.div>
  );
};

export default Overlay;