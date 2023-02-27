"use client";
import React, { useRef, useEffect } from "react";
import AnimatedText from "./AnimatedText";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsMouse } from "react-icons/bs";
import { motion } from "framer-motion";
import { container, item } from "../utils/FramerMotionVariants";
import { useWindowContext } from "@/context";

import Link from "next/link";
const About = () => {
  const { setHomeScrollVaue, homeScrollValue, contactScrollValue } =
    useWindowContext();
  const homeRef = useRef<HTMLDivElement | null>(null);
  const top = homeRef.current?.getBoundingClientRect().height;
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHomeScrollVaue(top as number);
      console.log(homeScrollValue);
    }
  }, [homeScrollValue]);
  return (
    <div
      ref={homeRef}
      className="bg-[#1d1d1d] md:h-screen pt-[80px] md:pt-0 text-white px-4 grid place-content-center   "
    >
      <div className=" relative max-w-6xl w-full grid grid-cols-12 mx-auto">
        <div className="absolute top-0 left-0">
          <motion.div className="  absolute shadow-md w-[200px] h-[200px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 top-12 md:left-[200px]"></motion.div>
          <motion.div className="  absolute shadow-md w-[150px] h-[150px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 top-12 md:left-[150px]"></motion.div>
          <motion.div className="  absolute shadow-md w-[100px] h-[100px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 top-6 md:left-[300px]"></motion.div>
          <motion.div className="  absolute shadow-md w-[50px] h-[50px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 top-4 left-md:[350px] left-[120px]"></motion.div>
        </div>
        <section className="md:col-span-6 col-span-12  place-self-center  ">
          <section className=" text-[50px] md:text-[60px] leading-[70px]  ">
            <AnimatedText text="Hi,I'am   " fontSize={"3xl"} delay={0} />
            <AnimatedText text="Mohammed" fontSize={"4xl"} delay={0.2} />
            <AnimatedText text="Front End   " fontSize={"6xl"} delay={0.3} />
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
                className="p-1 rounded-full border bg-[#205295]"
              >
                <AiFillGithub size={24} />
              </motion.div>
            </Link>

            <Link
              href={"https://www.linkedin.com/in/mohamed-mouhine-956a15221/"}
              target="blank"
            >
              <motion.div
                variants={item}
                whileHover={{
                  scale: 1.1,
                }}
                className="p-1 rounded-full border bg-[#205295]"
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
              className=" relative z-10 px-4 py-2 text-sm rounded border-sky-500 bg-sky-500 text-white hover:bg-black hover:text-white delay-100 transition-all "
              onClick={() => {
                window.scrollTo(0, contactScrollValue * 3);
              }}
            >
              Contact
            </motion.button>
            <Link
              href={
                "https://drive.google.com/file/d/1rHcEjTSlEug0OOFUZjbEWlOJoFbkkW9f/view?usp=sharing"
              }
            >
              <motion.button
                whileHover={{
                  scale: 1.1,
                }}
                className=" relative z-10 px-4 py-2  w-full text-sm rounded border-sky-500 bg-sky-500 text-white hover:bg-black hover:text-white delay-100 transition-all "
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
        className="absolute hidden md:flex left-1/2 animate-bounce -translate-x-1/2 bottom-8 flex items-center flex-col space-y-2"
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

export default About;
