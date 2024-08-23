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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
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
    <div className="flex-col-container">
      <motion.div
        ref={aboutRef}
        initial="hidden"
        animate={aboutControls}
        variants={variants}
        className="flex-row-container"
      >
        <div className="flex-col-content">
          <h1 className="text-large-white">
            Hello, It's <span className="text-purple-500">Kaan</span>
          </h1>
          <h1 className="text-medium-white">
            I'm a <span className="text-purple-500 text-animation"></span>
          </h1>
          <p className="text-small-white">
            Electrical and Electronics Engineer skilled in web development.
            Actively involved in full-stack development using TypeScript,
            Next.js, React, HTML, Tailwind CSS, Node.js, and PostgreSQL. Quick
            learner, adaptable to evolving technologies, and committed to
            delivering efficient solutions in dynamic environments.
          </p>
          <div className="flex-row-icons">
            <Link
              className="icon-link icon-link-linkedin"
              title="LinkedIn"
              href={"https://www.linkedin.com/in/kaan-k%C4%B1rman/"}
            >
              <FaLinkedin />
            </Link>
            <Link
              className="icon-link icon-link-github"
              title="Github"
              href={"https://github.com/kaankirman"}
            >
              <FaGithub />
            </Link>
            <Link
              className="icon-link icon-link-instagram"
              title="Instagram"
              href={"https://www.instagram.com/krmnkaan/"}
            >
              <FaInstagram />
            </Link>
            <Link
              className="icon-link icon-link-resume"
              title="Resume"
              href={"/Kaan-Kirman-CV.pdf"}
            >
              <FaFileDownload />
            </Link>
          </div>
        </div>
        <div
          className="image-container"
          style={{ boxShadow: "0 0 100px #9333ea" }}
        >
          <img src="image3.png" className="image" />
        </div>
      </motion.div>

      <motion.div
        id="projects"
        ref={projectsRef}
        initial="hidden"
        animate={projectsControls}
        variants={variants}
        className="projects-container"
      >
        <h1 className="projects-title">Projects</h1>
        <div className="project-card-div">
          <div className="projects-column">
            {projectsColOne.map((project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                data={project.data}
                web={project.web}
              />
            ))}
          </div>
          <div className="projects-column-padded">
            {projectsColTwo.map((project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                data={project.data}
                web={project.web}
                mobile={project.mobile}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        id="timeline"
        ref={timelineRef}
        initial="hidden"
        animate={timelineControls}
        variants={variants}
        className="timeline-container"
      >
        <h1 className="timeline-title">Timeline</h1>
        <div className="flex flex-col w-full">
          <VerticalTimeline animate={false}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#9333ea",
                color: "#fff",
                boxShadow: "0 0 30px #a855f7",
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
        className="contact-container"
      >
        <div
          className="contact-content"
          style={{
            backgroundImage: "url('/neon-city.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0 0 30px #c084fc",
          }}
        >
          <div className="contact-header">
            <h1 className="contact-title">Contact Me</h1>
            <h2 className="contact-subtitle">Let's get in touch!</h2>
          </div>
          <div className="contact-links">
            <Link
              href={"https://www.linkedin.com/in/kaan-k%C4%B1rman/"}
              className="contact-link"
            >
              <FaLinkedin className="contact-link-linkedin" />
              <h1 className="contact-link-text">
                Connect with me on{" "}
                <span className="contact-link-text-linkedin">LinkedIn</span>
              </h1>
            </Link>
            <Link
              href={"https://github.com/kaankirman"}
              className="contact-link"
            >
              <FaGithub className="contact-link-github" />
              <h1 className="contact-link-text">
                Check out my <span className="contact-link-text-github">projects</span>
              </h1>
            </Link>
            <Link
              href={"mailto:kaankirman00@gmail.com"}
              className="contact-link"
            >
              <FaEnvelopeOpenText className="contact-link-email" />
              <h1 className="contact-link-text">
                Send me an <span className="contact-link-text-email">e-mail</span>
              </h1>
            </Link>
            <Link
              href={"/Kaan-Kirman-CV.pdf"}
              className="contact-link"
            >
              <FaFileDownload className="contact-link-resume" />
              <h1 className="contact-link-text">
                View my <span className="contact-link-text-resume">CV</span>
              </h1>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}