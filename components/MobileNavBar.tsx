import React from "react";
import { AiOutlineCloseCircle, AiOutlineDownload } from "react-icons/ai";
import { motion } from "framer-motion";
import SocialMedia from "./SocialMedia";
import { useWindowContext } from "@/context";
import { FaDelicious, FaInfoCircle } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { GiSkills } from "react-icons/gi";
import { IoMdContact } from "react-icons/io";
import Link from "next/link";
const MobileNavBar = () => {
  const { setIsNavOpen } = useWindowContext();
  const handleClose = () => {
    setIsNavOpen(false);
  };
  return (
    <motion.div className="fixed inset-0 w-1/2 bg-[#050816]  text-secondary h-screen  z-50 ">
      <div className=" flex  justify-end p-4 ">
        <button onClick={handleClose}>
          <AiOutlineCloseCircle size={28} />
        </button>
      </div>
      <div className="py-8 px-3">
        <ul className="flex flex-col space-y-6 text-lg ">
          <li className="flex items-center space-x-6" onClick={handleClose}>
            <FiHome size={24} />
            <Link href="/">Home</Link>
          </li>
          <li className="flex items-center space-x-6" onClick={handleClose}>
            <FaInfoCircle size={24} />
            <Link href="/About">About</Link>
          </li>
          <li className="flex items-center space-x-6" onClick={handleClose}>
            <FaDelicious />
            <Link href="/Projects">Projects</Link>
          </li>
          <li className="flex items-center space-x-6" onClick={handleClose}>
            <GiSkills />
            <Link href="/Skills">Skills</Link>
          </li>
          <li className="flex items-center space-x-6" onClick={handleClose}>
            <IoMdContact />
            <Link href="/Contact">Contact</Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href={
                "https://drive.google.com/file/d/1ks-KwyaHUPtHY6STHshWE3IscZBzWwnT/view?usp=sharing"
              }
              target="blank"
              className="flex items-center space-x-4"
            >
              <AiOutlineDownload size={24} />
              <span> Resume</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="absolute bottom-0 py-4 flex items-center justify-center w-full ">
        <SocialMedia />
      </div>
    </motion.div>
  );
};

export default MobileNavBar;
