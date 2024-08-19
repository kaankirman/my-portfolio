import Link from "next/link";
import React from "react";
import Lottie from "react-lottie";

interface ProjectCardProps {
  data: any;
  name: string;
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data, name,url }) => {
  return (
    <Link
      href={url}
      className="flex flex-row rounded-xl overflow-hidden w-full border-2 transition duration-300 border-purple-300 items-center px-4 gap-7 cursor-pointer hover:border-white hover:scale-105"
      style={{ boxShadow: "0 0 50px #9333ea" }}
    >
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: data,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        isClickToPauseDisabled={true}
        speed={0.5}
        height={130}
        width={200}
      />
      <div
        className="w-[2px] h-16 bg-white"
        style={{ boxShadow: "0 0 10px #9333ea" }}
      >
        {" "}
      </div>
      <h1
        className="text-2xl text-white"
        style={{ textShadow: "0 0 30px #7e22ce" }}
      >
        {name}
      </h1>
    </Link>
  );
};

export default ProjectCard;
