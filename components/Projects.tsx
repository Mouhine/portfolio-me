"use client";
import React from "react";
import { useRef, useState, useEffect } from "react";
import { useWindowContext } from "@/context";

import ProjectCard from "./ProjectCard";
import AnimatedText from "./AnimatedText";
import client, { urlFor } from "../utils/client";
import { Project } from "@/types/project";
const Projects = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const top = ref.current?.getBoundingClientRect().height;
  const [projects, setProjects] = useState<Project[] | []>([]);
  const { projectsScrollValue, setProjectsScrollVaue } = useWindowContext();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setProjectsScrollVaue(top as number);
    }
  }, [projectsScrollValue]);

  useEffect(() => {
    const getProjects = async () => {
      const projects = await client.fetch(`*[_type == "project"]`);
      setProjects(projects);
      console.log(projects);
    };
    getProjects();
  }, []);
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,

      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <div
      ref={ref}
      className=" snap-y px-4  h-full lg:h-screen bg-[#1d1d1d] grid place-content-center"
    >
      <div className=" font-bold text-center py-6 text-white">
        <AnimatedText text="My Projects" delay={0} fontSize="5xl" />
      </div>

      <section className=" max-w-5xl  mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {projects.map((project) => {
          return <ProjectCard key={project._id} project={project} />;
        })}
      </section>
    </div>
  );
};

export default Projects;
