import Link from "next/link";
import React from "react";
import Lottie from "react-lottie";

interface ProjectCardProps {
  data: any;
  name: string;
  web: string;
  mobile?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  data,
  name,
  web,
  mobile,
}) => {
  return (
    <div className="flex flex-row rounded-xl overflow-hidden w-[500px] border-2 transition duration-300 border-purple-300 items-center px-4 gap-7 hover:border-white hover:scale-110 button-hover">
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
        style={{ cursor:"default"}}
      />
      <div className="flex flex-col">
        <Link href={web} className="text-3xl text-white cursor-pointer transition duration-300 hover:text-purple-600 hover:translate-x-1 animate-pulse" >Web</Link>
        {mobile && <Link href={mobile} className="text-3xl text-white cursor-pointer transition duration-300 hover:text-purple-600 hover:translate-x-1 animate-pulse">Mobile</Link>}
      </div>
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
    </div>
  );
};

export default ProjectCard;
