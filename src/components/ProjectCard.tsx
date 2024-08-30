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
    <div className="project-card">
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
        style={{ cursor: "default" }}
      />
      <h1
        className="project-card-name"
        style={{ textShadow: "0 0 30px #7e22ce" }}
      >
        {name}
      </h1>

      <div
        className="project-card-divider"
        style={{ boxShadow: "0 0 10px #9333ea" }}
      >
        {" "}
      </div>
      <div className="project-card-link-div">
        <Link href={web} className="project-card-link">
          Web
        </Link>
        {mobile && (
          <Link href={mobile} className="project-card-link">
            Mobile
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
