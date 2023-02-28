"use client";
import React, { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import { useWindowContext } from "@/context";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import SocialMedia from "./SocialMedia";
const NavBar = () => {
  const {
    skillsScrollValue,
    projectsScrollValue,
    contactScrollValue,
    homeScrollValue,
    setIsNavOpen,
  } = useWindowContext();
  useEffect(() => {
    console.log(
      skillsScrollValue,
      projectsScrollValue,
      contactScrollValue,
      homeScrollValue
    );
  });
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
    show: { opacity: 1, y: 0 },
  };
  const [expand, setExpand] = useState(false);

  return (
    <motion.nav
      className={` font-mono px-2 bg-[#1d1d1d] mx-auto  z-40 text-white h-[6vh] max-w-6xl w-full   fixed inset-0 border-b flex  items-center justify-between `}
    >
      <div className="text-center space-y-4 font-mono text-sm   mx-4">
        <h1 className="text-2xl font-bold flex  ">
          <div
            className="pt-1 md:hidden cursor-pointer "
            onClick={() => setIsNavOpen(true)}
          >
            <FaBars className="ml-1" />
          </div>
        </h1>
        <div className=" pb-4 hidden md:block ">
          <img src="/Logo2.svg" alt="" className="h-[30px] w-[30px] " />
        </div>
      </div>
      <div className="text-sm font-sans flex space-x-4 ">
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="  items-center space-x-6 hidden md:flex  text-[#f2f7fd]  "
        >
          <motion.li
            variants={item}
            whileHover={{ scale: 1.2 }}
            className="flex items-center space-x-3  cursor-pointer"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <span className="">About</span>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            variants={item}
            className="flex items-center space-x-3  cursor-pointer "
            onClick={() => {
              window.scrollTo(homeScrollValue, projectsScrollValue);
            }}
          >
            {" "}
            <span className="">Projects</span>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            variants={item}
            className="flex items-center space-x-3  cursor-pointer "
            onClick={() => {
              window.scrollTo(0, skillsScrollValue * 2);
            }}
          >
            {" "}
            <span className="">Skills</span>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            variants={item}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => {
              window.scrollTo(0, contactScrollValue * 3);
            }}
          >
            {" "}
            <span className="">Contact</span>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            variants={item}
            className="flex items-center space-x-3 cursor-pointer"
          >
            {" "}
            <Link
              href={
                "https://drive.google.com/file/d/1rHcEjTSlEug0OOFUZjbEWlOJoFbkkW9f/view?usp=sharing"
              }
              target="blank"
            >
              <span> Download Cv</span>
            </Link>
          </motion.li>
        </motion.ul>
      </div>
      <SocialMedia />
    </motion.nav>
  );
};

export default NavBar;
