"use client";
import React, { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import { useWindowContext } from "@/context";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import SocialMedia from "./SocialMedia";
const NavBar = () => {
  const { setIsNavOpen } = useWindowContext();

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

  return (
    <motion.nav
      className={`  px-2 py-4 mx-auto  z-40 text-white h-[6vh] max-w-6xl w-full   fixed inset-0  flex bg-[#050816] items-center justify-between `}
    >
      <div className="text-center space-y-4  text-sm   mx-4">
        <h1 className="text-2xl font-bold flex  ">
          <div
            className="pt-1 md:hidden cursor-pointer "
            onClick={() => setIsNavOpen(true)}
          >
            <FaBars className="ml-1" />
          </div>
        </h1>
        <div className=" pb-4 hidden md:block ">
          <img src="/Logo2.svg" alt="logo" className="h-[30px] w-[30px] " />
        </div>
      </div>
      <div className="text-sm  flex space-x-4 ">
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
          >
            <Link href="/">
              <span className="">Home</span>
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            variants={item}
            className="flex items-center space-x-3  cursor-pointer "
          >
            {" "}
            <Link href="/About">
              <span className="">About Me</span>
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            variants={item}
            className="flex items-center space-x-3  cursor-pointer "
          >
            {" "}
            <Link href="/Projects">
              <span className="">Projects</span>
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            variants={item}
            className="flex items-center space-x-3  cursor-pointer "
          >
            {" "}
            <Link href="/Skills">
              <span className="">Skills</span>
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            variants={item}
            className="flex items-center space-x-3 cursor-pointer"
          >
            {" "}
            <Link href="/Contact">
              <span className="">Contact</span>
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            variants={item}
            className="flex items-center space-x-3 cursor-pointer"
          >
            {" "}
            <Link
              href={
                "https://drive.google.com/file/d/1ks-KwyaHUPtHY6STHshWE3IscZBzWwnT/view?usp=sharing"
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
