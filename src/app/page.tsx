"use client";
import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFileDownload,
  FaEnvelopeOpenText,
} from "react-icons/fa";

import ProjectCard from "@/components/ProjectCard";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CustomTimelineElement from "@/components/CustomTimelineElement";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  projectsColOne,
  projectsColTwo,
  timelineData,
} from "./utils/constants";

export default function Page() {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const aboutControls = useAnimation();

  useEffect(() => {
    if (aboutInView) {
      aboutControls.start("visible");
    } else {
      aboutControls.start("hidden");
    }
  }, [aboutInView, aboutControls]);

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const projectsControls = useAnimation();

  useEffect(() => {
    if (projectsInView) {
      projectsControls.start("visible");
    } else {
      projectsControls.start("hidden");
    }
  }, [projectsInView, projectsControls]);

  const [timelineRef, timelineInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const timelineControls = useAnimation();

  useEffect(() => {
    if (timelineInView) {
      timelineControls.start("visible");
    } else {
      timelineControls.start("hidden");
    }
  }, [timelineInView, timelineControls]);

  const [contactRef, contactInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const contactControls = useAnimation();

  useEffect(() => {
    if (contactInView) {
      contactControls.start("visible");
    } else {
      contactControls.start("hidden");
    }
  }, [contactInView, contactControls]);

  return (
    <div  className="flex flex-col" >
      <motion.div
        ref={aboutRef}
        initial="hidden"
        animate={aboutControls}
        variants={variants}
        className="flex flex-row px-4 items-center h-[calc(100vh-96px)] justify-between max-w-[1280px] self-center gap-20"
      >
        <div className="flex flex-col w-[800px] min-w-[500px]">
          <h1 className="text-7xl text-white drop-shadow-lg">
            Hello, It's <span className="text-purple-600">Kaan</span>
          </h1>
          <h1 className="text-5xl text-white w-full">
            I'm a <span className="text-purple-600 text-animation"></span>
          </h1>
          <p className="text-white text-2xl mt-6">
            Electrical and Electronics Engineer skilled in web development.
            Actively involved in full-stack development using TypeScript,
            Next.js, React, HTML, Tailwind CSS, Node.js, and PostgreSQL. Quick
            learner, adaptable to evolving technologies, and committed to
            delivering efficient solutions in dynamic environments.
          </p>
          <div className="flex flex-row *:transition *:duration-300 *:text-3xl *:text-white gap-4 mt-5">
            <Link
              className="hover:text-blue-600 hover:scale-125"
              title="LinkedIn"
              href={"https://www.linkedin.com/in/kaan-k%C4%B1rman/"}
            >
              <FaLinkedin />
            </Link>
            <Link
              className="hover:text-purple-600 hover:scale-125"
              title="Github"
              href={"https://github.com/kaankirman"}
            >
              <FaGithub />
            </Link>
            <Link
              className="hover:text-pink-700 hover:scale-125"
              title="Instagram"
              href={"https://www.instagram.com/krmnkaan/"}
            >
              <FaInstagram />
            </Link>
            <Link
              className="hover:text-yellow-600 hover:scale-125"
              title="Resume"
              href={"/Kaan-Kirman-CV.pdf"}
            >
              <FaFileDownload />
            </Link>
          </div>
        </div>
        <div
          className="w-[500px] h-[500px] min-w-[500px] flex flex-row items-center justify-center overflow-hidden mr-4 border border-purple-300 rounded-full bg-purple-200"
          style={{ boxShadow: "0 0 100px #9333ea" }}
        >
          <video
            src="talking.webm"
            autoPlay
            loop
            muted
            className="h-[600px] max-w-none mt-28 transform -scale-x-100"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>

      <motion.div
        id="projects"
        ref={projectsRef}
        initial="hidden"
        animate={projectsControls}
        variants={variants}
        className="flex flex-row items-center self-center max-w-[1280px] px-4 h-screen"
      >
        <div className="w-1/3 mb-20 mr-16">
          <video
            src="working.webm"
            autoPlay
            loop
            muted
            className="h-[450px] max-w-none ml-[-180px] mt-28"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex flex-col w-1/3 gap-10 items-center ">
          {projectsColOne.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              data={project.data}
              url={project.url}
            />
          ))}
        </div>
        <div className="flex flex-col w-1/3 gap-10 items-center px-10">
          {projectsColTwo.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              data={project.data}
              url={project.url}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        id="timeline"
        ref={timelineRef}
        initial="hidden"
        animate={timelineControls}
        variants={variants}
        className="flex flex-row"
      >
        <div className="flex flex-col w-full">
          <VerticalTimeline animate={false}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#9333ea",
                color: "#fff",
                boxShadow: "0 0 50px #9333ea",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #9333ea" }}
              date="Dec 2023 - present"
              dateClassName="text-white"
              iconStyle={{ background: "#9333ea", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title text-4xl">
                Freelancer
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-2xl">
                İzmir, Turkey
              </h4>
              <h1 className="text-lg">
                Developed and maintained websites for clients, ensuring optimal
                performance and user experience. Collaborated with clients to
                identify and address issues, ensuring satisfaction and repeat
                business. Utilized HTML, CSS, TypeScript, React and Next.js to
                create responsive, user-friendly websites.
              </h1>
            </VerticalTimelineElement>
            {timelineData.map((data, index) => (
              <CustomTimelineElement
                key={index}
                title={data.title}
                subtitle={data.subtitle}
                date={data.date}
                description={data.description}
              />
            ))}
          </VerticalTimeline>
        </div>
      </motion.div>

      <motion.div
        id="contact"
        ref={contactRef}
        initial="hidden"
        animate={contactControls}
        variants={variants}
        className="h-screen w-[1280px] flex flex-row self-center pl-14"
      >
        <div className="flex flex-col w-1/2 gap-10 justify-center">
          <h1
            className="text-8xl text-white"
            style={{ textShadow: "0 0 30px #fff" }}
          >
            Contact Me
          </h1>
          <h2
            className="text-purple-100 text-5xl"
            style={{ textShadow: "0 0 30px #7e22ce" }}
          >
            Bother me all you want :)
          </h2>
          <Link
            href={"https://www.linkedin.com/in/kaan-k%C4%B1rman/"}
            className="flex flex-row items-center gap-6 w-fit border-2 px-4 py-2 rounded-lg border-blue-300 shadow-lg contact-link-div"
            style={{ boxShadow: "0 0 15px #2563eb " }}
          >
            <FaLinkedin className="text-5xl text-blue-600 cursor-pointer" />
            <h1 className="text-white text-3xl">
              Connect with me on <span className="text-blue-600">LinkedIn</span>
            </h1>
          </Link>
          <Link
            href={"https://github.com/kaankirman"}
            className="flex flex-row items-center gap-6 w-fit border-2 px-4 py-2 rounded-lg border-purple-300 shadow-lg contact-link-div"
            style={{ boxShadow: "0 0 15px #9333ea " }}
          >
            <FaGithub className="text-5xl text-purple-600  cursor-pointer" />
            <h1 className="text-white text-3xl">
              Check out my <span className="text-purple-600">Projects</span>
            </h1>
          </Link>
          <Link
            href={"mailto:kaankirman00@gmail.com"}
            className="flex flex-row items-center gap-6 w-fit border-2 px-4 py-2 rounded-lg border-red-300 shadow-lg contact-link-div"
            style={{ boxShadow: "0 0 15px #dc2626 " }}
          >
            <FaEnvelopeOpenText className="text-5xl text-red-600  cursor-pointer" />
            <h1 className="text-white text-3xl">
              Send me an <span className="text-red-600">e-mail</span>
            </h1>
          </Link>
          <Link
            href={"/Kaan-Kirman-CV.pdf"}
            className="flex flex-row items-center gap-6 w-fit border-2 px-4 py-2 rounded-lg border-yellow-300 shadow-lg contact-link-div"
            style={{ boxShadow: "0 0 15px #ca8a04 " }}
          >
            <FaFileDownload className="text-5xl text-yellow-600  cursor-pointer" />
            <h1 className="text-white text-3xl">
              View my <span className="text-yellow-600">CV</span>
            </h1>
          </Link>
        </div>
        <div className="flex w-1/2 mb-20 items-center justify-center mt-32">
          <div
            className="w-[500px] h-[500px] flex flex-row items-center justify-center overflow-hidden mr-4 border border-purple-300 rounded-full bg-purple-200"
            style={{ boxShadow: "0 0 100px #9333ea" }}
          >
            <video
              src="phone.webm"
              autoPlay
              loop
              muted
              className="h-[600px] max-w-none mt-36 ml-24 transform -scale-x-100"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
