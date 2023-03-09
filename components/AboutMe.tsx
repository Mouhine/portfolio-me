//@ts-nocheck
import Image from "next/image";
import React from "react";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";
import { styles } from "@/utils/styles";
import Tilt from "react-tilt";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <Image
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const AboutMe = () => {
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },

    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Front End Developer",
      icon: creator,
    },
  ];
  return (
    <section className="max-w-5xl  mx-auto py-6">
      <div className=" max-w-5xl mx-auto items-center flex flex-col md:flex-row px-6 gap-6 ">
        <motion.div
          className="text-white md:w-1/2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>
          <p className="text-secondary">
            {`  I'm a skilled software developer with experience in TypeScript and
            JavaScript, and expertise in frameworks like React, Node.js, and
            Next.js. I'm a quick learner and collaborate closely with clients
            to create efficient, scalable, and user-friendly solutions that
            solve real-world problems. Let's work together to bring your ideas
            to life!`}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Image
            src={"/about.svg"}
            height={600}
            width={600}
            alt="about me logo"
          />
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto flex justify-center">
        <div className="mt-8 flex  flex-wrap gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
