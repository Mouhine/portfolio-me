//@ts-nocheck
"use client";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full, DiReact, DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { GrGraphQl } from "react-icons/gr";
import {
  SiTypescript,
  SiStyledcomponents,
  SiMaterialui,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiPrisma,
  SiExpress,
  SiFirebase,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { styles } from "@/utils/styles";
const Skills = () => {
  const FrontendSkills = [
    {
      name: "HTML",
      color: Math.floor(Math.random() * 16777215).toString(16),
      icon: <AiFillHtml5 />,
    },
    {
      name: "CSS",
      color: Math.floor(Math.random() * 16777215).toString(16),
      icon: <DiCss3Full />,
    },
    {
      name: "Javascript",
      color: Math.floor(Math.random() * 16777215).toString(16),
      icon: <IoLogoJavascript />,
    },
    {
      name: "React",
      color: Math.floor(Math.random() * 16777215).toString(16),
      icon: <DiReact />,
    },
    {
      name: "Nextjs",
      color: Math.floor(Math.random() * 16777215).toString(16),
      icon: <TbBrandNextjs />,
    },
    {
      name: "tailwindcss",
      color: Math.floor(Math.random() * 16777215).toString(16),
      icon: <SiTailwindcss />,
    },
    {
      name: "Redux Toolkit",
      color: Math.floor(Math.random() * 16777215).toString(16),
      icon: <SiRedux />,
    },
    {
      name: "Typescript",
      color: Math.floor(Math.random() * 16777215).toString(16),
      icon: <SiTypescript />,
    },
    {
      name: "Styled Component",
      color: Math.floor(Math.random() * 16777215).toString(16),
      icon: <SiStyledcomponents />,
    },
    {
      name: "Material ui",
      color: Math.floor(Math.random() * 16777215).toString(16),
      icon: <SiMaterialui />,
    },
  ];

  const BackendSkills = [
    {
      name: "Nodejs",
      icon: <SiNodedotjs />,
    },
    {
      name: "Expressjs",
      icon: <SiExpress />,
    },
    {
      name: "Prisma",
      icon: <SiPrisma />,
    },
    {
      name: "mongoDB",
      icon: <DiMongodb />,
    },
    {
      name: "GraphQL",
      icon: <GrGraphQl />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
    },
  ];

  return (
    <div className="  mx-auto  max-w-6xl px-4 h-full mt-8   grid place-content-center font-mono">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>my skills</p>
        <h2 className={`${styles.sectionHeadText}`}>Skills.</h2>
      </motion.div>
      <section className="max-w-5xl grid grid-cols-12 ">
        <div className=" col-span-12 md:col-span-6 flex flex-col gap-5  ">
          <h1 className="md:text-center text-2xl text-secondary font-bold ">
            Frontend Skills
          </h1>
          <section className="flex flex-wrap">
            {FrontendSkills.map((skill, i) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  key={i}
                  className={`flex items-center m-2 space-x-3 px-4 py-2 rounded bg-white shadow`}
                >
                  {skill.icon}
                  <p>{skill.name}</p>
                </motion.div>
              );
            })}
          </section>
        </div>
        <div className=" col-span-12 md:col-span-6 ">
          <h1 className="md:text-center text-secondary font-bold text-2xl">
            Backend Skills
          </h1>
          <section className="flex md:h-[100px] flex-wrap">
            {BackendSkills.map((skill, i) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  key={i}
                  className={`flex items-center m-2 space-x-3 px-4 py-2 h-10 rounded bg-white shadow`}
                >
                  {skill.icon}
                  <p>{skill.name}</p>
                </motion.div>
              );
            })}
          </section>
        </div>
      </section>
    </div>
  );
};

export default Skills;
