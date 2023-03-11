//@ts-nocheck
import { useEffect, useState } from "react";
import HomePage from "@/components/Home";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import AboutMe from "@/components/AboutMe";
import StarsCanvas from "@/components/Stars";

export default function Home() {
  const [client, setClient] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setClient(true);
    }
  }, []);
  return (
    <motion.div className="w-full bg-[#050816] ">
      <div className="relative z-0">
        <HomePage />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
        {client ? <StarsCanvas /> : ""}
      </div>
    </motion.div>
  );
}
