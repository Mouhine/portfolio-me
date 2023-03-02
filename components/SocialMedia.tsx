import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="flex space-x-8 items-center  ">
      <Link
        href={" https://github.com/Mouhine"} //https://www.linkedin.com/in/mohamed-mouhine-956a15221/
        target="blank"
      >
        <AiFillGithub size={24} />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/mohammed-mouhine-956a15221/"}
        target="blank"
      >
        {" "}
        <AiFillLinkedin size={24} />
      </Link>
    </div>
  );
};

export default SocialMedia;
