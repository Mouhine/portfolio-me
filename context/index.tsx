"use client";
import {
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
interface windowProps {
  homeScrollValue: number;
  setHomeScrollVaue: Dispatch<SetStateAction<number>>;
  projectsScrollValue: number;
  setProjectsScrollVaue: Dispatch<SetStateAction<number>>;
  skillsScrollValue: number;
  setSkillsScrollVaue: Dispatch<SetStateAction<number>>;
  contactScrollValue: number;
  setContactScrollVaue: Dispatch<SetStateAction<number>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  projectId: string;
  setProjectId: Dispatch<SetStateAction<string>>;
}
const windowContext = createContext({} as windowProps);
export const useWindowContext = () => {
  return useContext(windowContext);
};

export const WindowProvider = ({ children }: { children: React.ReactNode }) => {
  const [homeScrollValue, setHomeScrollVaue] = useState(0);
  const [projectsScrollValue, setProjectsScrollVaue] = useState<number>(0);
  const [skillsScrollValue, setSkillsScrollVaue] = useState<number>(0);
  const [contactScrollValue, setContactScrollVaue] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);
  // const [window]
  const [projectId, setProjectId] = useState("");
  const value = {
    homeScrollValue,
    setHomeScrollVaue,
    projectsScrollValue,
    setProjectsScrollVaue,
    skillsScrollValue,
    setSkillsScrollVaue,
    contactScrollValue,
    setContactScrollVaue,
    isOpen,
    setIsOpen,
    projectId,
    setProjectId,
  };
  return (
    <windowContext.Provider value={value}>{children}</windowContext.Provider>
  );
};
