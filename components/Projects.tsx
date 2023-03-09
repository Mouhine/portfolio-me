//@ts-nocheck
"use client";

import React from "react";
import { useRef, useState, useEffect } from "react";
import { useWindowContext } from "@/context";

import ProjectCard from "./ProjectCard";
import AnimatedText from "./AnimatedText";
import client, { urlFor } from "../utils/client";
import { Project } from "@/types/project";
import { textVariant } from "@/utils/motion";
import { styles } from "@/utils/styles";
import { motion } from "framer-motion";
const Projects = () => {
  const [projects, setProjects] = useState<Project[] | []>([]);

  useEffect(() => {
    const getProjects = async () => {
      const projects = await client.fetch(`*[_type == "project"]`);
      setProjects(projects);
      console.log(projects);
    };
    getProjects();
  }, []);

  return (
    <div
      id="projects"
      className="  mx-auto mt-12 max-w-6xl px-8 h-full lg:min-h-screen  grid place-content-center"
    >
      <motion.div
        className="text-white md:w-[80%] py-5 "
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </motion.div>
        <p className="text-secondary">
          {`  Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.`}
        </p>
      </motion.div>

      <section className=" max-w-6xl  mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6  ">
        {projects.map((project) => {
          return <ProjectCard key={project._id} project={project} />;
        })}
      </section>
    </div>
  );
};

export default Projects;
