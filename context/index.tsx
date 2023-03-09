"use client";
import {
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
interface windowProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  projectId: string;
  setProjectId: Dispatch<SetStateAction<string>>;
  isNavOpen: boolean;
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
}
const windowContext = createContext({} as windowProps);
export const useWindowContext = () => {
  return useContext(windowContext);
};

export const WindowProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const [window]
  const [projectId, setProjectId] = useState("");
  const value = {
    isOpen,
    setIsOpen,
    projectId,
    setProjectId,
    setIsNavOpen,
    isNavOpen,
  };
  return (
    <windowContext.Provider value={value}>{children}</windowContext.Provider>
  );
};
