import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { useWindowContext } from "@/context";
import ProjectInfo from "./ProjectInfo";
import MobileNavBar from "./MobileNavBar";
const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, setIsOpen, isNavOpen } = useWindowContext();
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <div className="bg-[#1d1d1d] ">
      {isNavOpen && <MobileNavBar />}
      <header>
        <NavBar />
      </header>
      {isOpen && <ProjectInfo />}
      <main className=" px-2">{children}</main>
    </div>
  );
};

export default Layout;
