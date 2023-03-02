import HomePage from "@/components/Home";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <motion.div className="w-full">
      <HomePage />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </motion.div>
  );
}
