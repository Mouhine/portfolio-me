//@ts-nocheck
import React, { useEffect, useState } from "react";
import { useWindowContext } from "@/context";
import { motion } from "framer-motion";
import {
  AiFillCloseCircle,
  AiFillGithub,
  AiFillInfoCircle,
  AiOutlineInfoCircle,
  AiOutlineLink,
} from "react-icons/ai";
import client, { urlFor } from "@/utils/client";
import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
const ProjectInfo = () => {
  const { isOpen, setIsOpen, projectId } = useWindowContext();
  const [projectDetails, setProjectDetails] = useState<Project[] | []>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const getProjectDetails = async () => {
      const response = await client.fetch(
        `*[_type == "project" && _id == '${projectId}']`
      );
      setProjectDetails(response);
    };
    getProjectDetails();
    console.log(projectDetails, projectId);
  }, []);

  const githuburl = projectDetails[0]?.github;
  console.log(githuburl);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 grid place-content-center ">
      <motion.div
        initial={{
          opacity: 0,
          y: 200,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeIn",
        }}
        className="max-w-[400px] p-4 w-[90vw] relative md:h-[450px] z-50 bg-[#1d1d1d] rounded-lg shadow "
      >
        <button
          className="absolute top-2 transition-colors delay-150 hover:bg-sky-600 right-2 border p-2 rounded-full "
          onClick={() => setIsOpen(false)}
        >
          <AiFillCloseCircle />
        </button>

        {loading && (
          <section className="h-full grid grid-cols-12 gap-4 ">
            <div className=" col-span-12  flex flex-col space-y-3">
              <h1 className="text-lg text-white">{projectDetails[0]?.title}</h1>
              <p className="text-sm text-gray-500 ">
                {projectDetails[0]?.description}
              </p>
              <div className="flex items-center space-x-4">
                <Link href={githuburl ? githuburl : ""} target="blank">
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                    }}
                    className="p-1 rounded-full border transition-colors delay-150 hover:bg-sky-500"
                  >
                    <AiFillGithub size={24} color="white" />
                  </motion.button>
                </Link>
                <Link href={projectDetails[0]?.live || ""} target="blank">
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                    }}
                    className="p-1 rounded-full border transition-colors delay-150 hover:bg-sky-500"
                  >
                    <AiOutlineLink size={24} color="white" />
                  </motion.button>
                </Link>
              </div>{" "}
            </div>

            <div className="col-span-12   p-2 border shadow">
              {projectDetails[0]?.cover.asset && (
                <img
                  src={urlFor(projectDetails[0]?.cover)}
                  alt=""
                  className="w-full h-full object-fill rounded-md"
                />
              )}
            </div>
          </section>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectInfo;
