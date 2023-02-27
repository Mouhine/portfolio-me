import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="flex space-x-4 items-center pr-4 ">
      <Link
        href={" https://github.com/Mouhine"} //https://www.linkedin.com/in/mohamed-mouhine-956a15221/
        target="blank"
      >
        <AiFillGithub size={24} />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/mohamed-mouhine-956a15221/"}
        target="blank"
      >
        {" "}
        <AiFillLinkedin size={24} />
      </Link>
    </div>
  );
};

export default SocialMedia;
