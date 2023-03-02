import Image from "next/image";
import React from "react";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";
const AboutMe = () => {
  return (
    <div className=" max-w-5xl mx-auto items-center flex flex-col md:flex-row px-6 gap-6 ">
      <motion.div
        className="text-white md:w-1/2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="flex space-x-2 text-[30px]  md:text-[40px] py-8 ">
          <AnimatedText text="So" fontSize="6xl" delay={0.2} />
          <AnimatedText text="How" fontSize="6xl" delay={0.2} />
          <AnimatedText text=" Am" fontSize="6xl" delay={0.2} />
          <AnimatedText text="  I" fontSize="6xl" delay={0.2} />
        </div>
        <p>
          Hi, my name is MOHAMMED MOUHINE, I am a self-thought Full Stack web
          developer, I dedicated myself for the past 2 years to learn and master
          the art of coding and through this journey I chose to go with web
          development, I have always been interested in IT domain since a very
          young age And after I drop out of college I decided to teach myself
          while working a full time job hoping one day I will have the chance to
          land my first job in the industry, I am a very responsible person, and
          I am very confident that i can get the job done fell free to check my
          projects for more reliability, I am always eager to learn more and
          more about this field
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Image
          src={"/about.svg"}
          height={600}
          width={600}
          alt="about me logo"
        />
      </motion.div>
    </div>
  );
};

export default AboutMe;
