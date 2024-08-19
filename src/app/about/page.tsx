import Link from "next/link";
import {FaLinkedin,FaGithub,FaInstagram,FaFileDownload} from "react-icons/fa";


export default function Page() {
  return (
    <div className="flex flex-row mx-64 mt-20 justify-between">
      <div className="flex flex-col mt-20 w-[800px]">
        <h1 className="text-7xl text-white drop-shadow-lg">
          Hello, It's <span className="text-purple-600">Kaan</span>
        </h1>
        <h1 className="text-5xl text-white drop-shadow-lg">
          I'm a{" "}
          <span className="text-purple-600">Full-stack Web Developer</span>
        </h1>
        <p className="text-white text-2xl mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          fringilla sollicitudin mi, eget sodales elit ultricies nec. Aliquam
          tincidunt metus lacus, at pharetra turpis pretium ac. Proin vel
          hendrerit quam. Nunc vel rutrum arcu. Suspendisse id imperdiet libero.
          Sed et velit sollicitudin, cursus nisl vel, porttitor nunc. Donec
          tincidunt sit amet felis ut lobortis. Sed vestibulum imperdiet erat et
          hendrerit. Etiam a auctor elit. Quisque sagittis posuere nulla sed
          maximus. Pellentesque faucibus scelerisque ligula id sollicitudin.
        </p>
        <div className="flex flex-row *:transition *:duration-300 *:text-3xl *:text-white gap-4 mt-5">
          <Link className="hover:text-purple-600" title="LinkedIn" href={"/projects"}>
           <FaLinkedin/>
          </Link>
          <Link className="hover:text-purple-600" title="Github" href={"/projects"}>
           <FaGithub/>
          </Link>
          <Link className="hover:text-purple-600" title="Instagram" href={"/projects"}>
           <FaInstagram/>
          </Link>
          <Link className="hover:text-purple-600" title="Resume" href={"/projects"}>
           <FaFileDownload/>
          </Link>
        </div>
      </div>
      <div
        className="w-[500px] h-[500px] flex flex-row items-center justify-center overflow-hidden mr-4 border border-purple-300 rounded-full bg-purple-400"
        style={{ boxShadow: "0 0 100px #9333ea" }}
      >
        <video
          src="waving.webm"
          autoPlay // Optional: To start playing automatically
          loop // Optional: To loop the video
          muted // Optional: To mute the video
          className="h-[600px] max-w-none ml-[660px] mt-28"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
