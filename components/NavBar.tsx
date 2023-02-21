"use client";
import React, { useEffect, useState } from "react";
import { MdContactMail } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { AiFillGithub, AiFillLinkedin, AiOutlineProject } from "react-icons/ai";
import { motion } from "framer-motion";
import { useWindowContext } from "@/context";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
const NavBar = () => {
  const {
    skillsScrollValue,
    projectsScrollValue,
    contactScrollValue,
    homeScrollValue,
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
      className={`bg-[#1d1d1d] ${
        expand ? "w-36" : "w-10"
      } font-mono px-2 bg-[#1d1d1d]  z-50 text-white h-screen   md:w-32  fixed inset-0 border-r flex flex-col items-center justify-between `}
    >
      <div className="text-center space-y-4 font-mono text-sm mx-4">
        <h1 className="text-2xl font-bold flex  ">
          <div
            className="pt-1 md:hidden cursor-pointer "
            onClick={() => setExpand((v) => !v)}
          >
            <FaBars className="ml-1" />
          </div>
          <span className={` ${expand ? "block" : "hidden"}   md:block`}>
            Mouhine
          </span>
        </h1>
      </div>
      <div className="text-sm font-sans ">
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col space-y-4 text-[#f2f7fd]  "
        >
          <motion.li
            variants={item}
            whileHover={{ scale: 1.2 }}
            className="flex items-center space-x-3  cursor-pointer"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <SiAboutdotme size={18} />
            <span className={` ${expand ? "block" : "hidden"}   md:block`}>
              About
            </span>
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
            <AiOutlineProject size={18} />{" "}
            <span className={` ${expand ? "block" : "hidden"}   md:block`}>
              Projects
            </span>
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
            <GiSkills size={18} />{" "}
            <span className={` ${expand ? "block" : "hidden"}   md:block`}>
              Skills
            </span>
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
            <MdContactMail size={18} />{" "}
            <span className={` ${expand ? "block" : "hidden"}   md:block`}>
              Contact
            </span>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            variants={item}
            className="flex items-center space-x-3 cursor-pointer"
          >
            {" "}
            <BsFillArrowDownCircleFill
              size={18}
              className="animate-bounce"
            />{" "}
            <Link
              href={
                "https://drive.google.com/file/d/14QBb0McZG93n_pA7P0nfZfQ44lQM0dK-/view?usp=sharing"
              }
              target="blank"
            >
              <span
                className={` ${
                  expand ? "block" : "hidden"
                }   md:block text-[10px] `}
              >
                {" "}
                Download Cv
              </span>
            </Link>
          </motion.li>
        </motion.ul>
      </div>
      <div
        className={`py-4 flex ${
          expand
            ? "flex-row space-x-4 space-y-0 "
            : "flex-col space-x-0 space-y-4"
        } md:flex-row  items-center  md:space-y-0  md:space-x-4`}
      >
        <Link
          href={" https://github.com/Mouhine"} //https://www.linkedin.com/in/mohamed-mouhine-956a15221/
          target="blank"
        >
          <AiFillGithub size={20} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/mohamed-mouhine-956a15221/"}
          target="blank"
        >
          {" "}
          <AiFillLinkedin size={20} />
        </Link>
      </div>
    </motion.nav>
  );
};

export default NavBar;
