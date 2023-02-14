//@ts-nocheck

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiFillGithub, AiOutlineLink, AiFillInfoCircle } from "react-icons/ai";
import { useWindowContext } from "@/context";
import { Project } from "@/types/project";
import { urlFor } from "@/utils/client";
import Image from "next/image";
import Link from "next/link";
interface projectsProps {
  project: Project;
}

const variants = {
  hide: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const item = {
  hide: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {},
  },
};

const ProjectCard = ({ project }: projectsProps) => {
  const [mouse, setMouse] = useState(false);

  const { setIsOpen, setProjectId } = useWindowContext();

  return (
    <motion.div
      className="relative h-[200px]"
      onMouseEnter={() => setMouse(true)}
      onMouseLeave={() => setMouse(false)}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="h-full rounded-lg overflow-hidden">
        <img
          src={urlFor(project.cover)}
          alt=""
          className="w-full h-full object-fill"
        />
      </div>
      {mouse && (
        <motion.div
          variants={variants}
          initial="hide"
          animate="show"
          className="absolute inset-0 bg-black/50 flex items-center justify-center  space-x-6"
        >
          <Link href={project.github} target="blank">
            <motion.button
              variants={item}
              whileHover={{
                scale: 1.1,
              }}
              className="p-1 rounded-full border transition-colors delay-150 hover:bg-sky-500"
            >
              <AiFillGithub size={24} color="white" />
            </motion.button>
          </Link>
          <Link href={project.live} target="blank">
            <motion.button
              variants={item}
              whileHover={{
                scale: 1.1,
              }}
              className="p-1 rounded-full border transition-colors delay-150 hover:bg-sky-500"
            >
              <AiOutlineLink size={24} color="white" />
            </motion.button>
          </Link>
          <motion.button
            variants={item}
            whileHover={{
              scale: 1.1,
            }}
            className="p-1 rounded-full border transition-colors delay-150 hover:bg-sky-500"
            onClick={() => {
              setProjectId(project._id);
              setIsOpen(true);
            }}
          >
            <AiFillInfoCircle size={24} color="white" />
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
