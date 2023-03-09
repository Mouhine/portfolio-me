"use client";
import React, { useRef, useEffect } from "react";
import AnimatedText from "./AnimatedText";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsMouse } from "react-icons/bs";
import { motion } from "framer-motion";
import { container, item } from "../utils/FramerMotionVariants";

import Link from "next/link";
const HomePage = () => {
  const homeRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={homeRef}
      className=" md:h-screen pt-[80px] md:pt-0 relative text-white px-4 grid place-content-center   "
    >
      <div className=" relative max-w-6xl w-full grid grid-cols-12 mx-auto">
        <section className="md:col-span-6 col-span-12  place-self-center  ">
          <section className=" text-[50px] md:text-[60px] leading-[70px]  ">
            <AnimatedText text="Hi,I'am   " fontSize={"3xl"} delay={0} />
            <AnimatedText text="Mohammed" fontSize={"4xl"} delay={0.2} />
            <div className="flex space-x-4">
              <AnimatedText text="Full   " fontSize={"6xl"} delay={0.3} />
              <AnimatedText text=" Stack " fontSize={"6xl"} delay={0.3} />
            </div>
            <div className="flex items-center space-x-0 md:space-x-4 flex-wrap ">
              <AnimatedText text="Web " fontSize={"6xl"} delay={0.3} />
              <AnimatedText text="developer " fontSize={"6xl"} delay={0.4} />
            </div>
          </section>
          <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="flex items-center space-x-4 py-6"
          >
            <Link href={"https://github.com/Mouhine"} target="blank">
              <motion.div
                variants={item}
                whileHover={{
                  scale: 1.1,
                }}
                className="p-1 rounded-full border bg-tertiary"
              >
                <AiFillGithub size={24} />
              </motion.div>
            </Link>

            <Link
              href={"https://www.linkedin.com/in/mohammed-mouhine-956a15221/"}
              target="blank"
            >
              <motion.div
                variants={item}
                whileHover={{
                  scale: 1.1,
                }}
                className="p-1 rounded-full border bg-tertiary"
              >
                <AiFillLinkedin size={24} />
              </motion.div>
            </Link>
          </motion.section>
          <section className="flex flex-col md:flex-row items-left max-w-[300px] w-full  md:items-center md:space-x-8 space-y-3 md:space-y-0 py-6 z-30 flex-wrap ">
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              className=" relative z-10 px-4 py-2 text-sm rounded bg-tertiary shadow-md text-white hover:bg-black hover:text-white delay-100 transition-all "
            >
              <Link href="/Contact">
                <span> Contact</span>
              </Link>
            </motion.button>
            <Link
              href={
                "https://drive.google.com/file/d/1ks-KwyaHUPtHY6STHshWE3IscZBzWwnT/view?usp=sharing"
              }
            >
              <motion.button
                whileHover={{
                  scale: 1.1,
                }}
                className=" relative z-10 px-4 py-2  w-full text-sm rounded bg-tertiary shadow-md text-white hover:bg-black hover:text-white delay-100 transition-all "
              >
                resume
              </motion.button>
            </Link>
          </section>
        </section>

        <section className="md:col-span-6 col-span-12 grid place-content-center ">
          <img src="/bg.png" alt="" />
        </section>
      </div>
      <div
        className="absolute hidden md:flex left-1/2 animate-bounce -translate-x-1/2 bottom-8  items-center flex-col space-y-2"
        onClick={() => {
          if (typeof window !== "undefined") {
            window.scrollTo(
              homeRef.current?.offsetTop as number,
              homeRef.current?.offsetHeight as number
            );
          }
        }}
      >
        <BsMouse size={40} />
        <span className=" rotate-360 text-[10px]">Scroll Down</span>
      </div>
    </div>
  );
};

export default HomePage;
