import React from "react";
import { motion } from "framer-motion";
const AnimatedText = ({
  text,
  fontSize,
  delay,
}: {
  text: string;
  fontSize: string;
  delay: number;
}) => {
  console.log(fontSize);
  const textArr = text.split("");
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,

      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: delay,
      },
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex "
    >
      {textArr.map((char, i) => {
        return (
          <motion.span
            variants={item}
            key={i}
            className={` cursor-pointer font-bold  font-sans inline-block `}
            whileHover={{
              color: "#C147E9",
              scaleY: 1.4,
              transition: {
                ease: "easeInOut",
              },
            }}
          >
            {char}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default AnimatedText;
