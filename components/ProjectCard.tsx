//@ts-nocheck

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiFillGithub, AiOutlineLink, AiFillInfoCircle } from "react-icons/ai";
import { useWindowContext } from "@/context";
import { Project } from "@/types/project";
import { urlFor } from "@/utils/client";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-tilt";
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
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <motion.div
        className="     rounded-t "
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        onMouseEnter={() => setMouse(true)}
        onMouseLeave={() => setMouse(false)}
      >
        <div className="h-[200px] rounded-md relative shadow overflow-hidden">
          <img
            src={urlFor(project.cover)}
            alt=""
            className="w-full h-full object-fill"
          />
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
        </div>

        <div className="  ">
          <div className="mt-5">
            <h3 className=" text-secondary font-bold text-md">
              {project.title}
            </h3>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags?.map((tag) => (
              <p
                key={`${name}-${tag}`}
                className={`text-[12px] text-secondary `}
              >
                #{tag}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ProjectCard;
