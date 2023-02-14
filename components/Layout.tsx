import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { useWindowContext } from "@/context";
import ProjectInfo from "./ProjectInfo";
const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, setIsOpen } = useWindowContext();
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <div className="bg-[#1d1d1d] ">
      <header>
        <NavBar />
      </header>
      {isOpen && <ProjectInfo />}
      <main className="ml-10 md:ml-32">{children}</main>
    </div>
  );
};

export default Layout;
