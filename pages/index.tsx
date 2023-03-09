import HomePage from "@/components/Home";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import AboutMe from "@/components/AboutMe";
import StarsCanvas from "@/components/Stars";

const ReturnStar = () => {
  if (typeof window !== "undefined") {
    return <StarsCanvas />;
  }
  return <p></p>;
};

export default function Home() {
  return (
    <motion.div className="w-full bg-[#050816] ">
      <div className="relative z-0">
        <HomePage />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
        <ReturnStar />
      </div>
    </motion.div>
  );
}
