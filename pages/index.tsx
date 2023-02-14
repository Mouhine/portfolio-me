import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.div>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </motion.div>
  );
}
