import { useEffect, useRef } from "react";
import { animateBox } from "./data/animation";
import TypingText from "./TypingText";
import { DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux, SiTailwindcss, SiPostman } from "react-icons/si";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa6";

const Hero = () => {
  const hero = useRef();

  const lines = [
    "Frontend Developer.",
    "Backend Developer.",
    "MERN Stack Developer.",
  ];

  useEffect(() => {
    animateBox(hero);
  }, []);

  return (
    <>
      <section
        ref={hero}
        className="h-screen w-full flex flex-col-reverse lg:flex-row justify-evenly items-center p-5"
      >
        <div className=" mt-10 md:mt-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold ">
            Hello,{" "}
            <div className="inline-flex items-center bg-indigo-950">
              <div className="text-3xl md:text-4xl lg:text-5xl animate-wave">
                👋
              </div>
            </div>
            <br /> I am <span className="clip-text">Lochan</span>,
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <TypingText lines={lines} speed={100} delayBetweenLines={1000} />
          </h1>

          <div className="flex items-center gap-5 mt-5">
            <h1 className="text-sm md:text-lg lg:text-xl border-r-2 border-white pr-2">
              Tech Stack
            </h1>
            <div className="flex items-center flex-wrap gap-5 m-2">
              <FaHtml5 className="h-6 w-6 md:h-6 md:w-8 lg:h-10 lg:w-10 text-red-600 hover:scale-110 transition-transform" />
              <FaCss3Alt className="h-6 w-6 md:h-6 md:w-8 lg:h-10 lg:w-10 text-blue-400 hover:scale-110 transition-transform" />
              <IoLogoJavascript className="h-6 w-6 md:h-6 md:w-8 lg:h-10 lg:w-10 text-yellow-600 hover:scale-110 transition-transform" />
              <FaReact className="h-6 w-6 md:h-6 md:w-8 lg:h-10 lg:w-10 text-blue-600 hover:scale-110 transition-transform" />
              <SiRedux className="h-6 w-6 md:h-6 md:w-8 lg:h-10 lg:w-10 text-purple-400 hover:scale-110 transition-transform" />
              <SiTailwindcss className="h-6 w-6 md:h-6 md:w-8 lg:h-10 lg:w-10 text-blue-700 hover:scale-110 transition-transform" />
              <FaNodeJs className="h-6 w-6 md:h-6 md:w-8 lg:h-10 lg:w-10 hover:scale-110 transition-transform text-green-700" />
              <DiMongodb className="h-6 w-6 md:h-6 md:w-8 lg:h-10 lg:w-10 hover:scale-110 transition-transform text-green-400" />
              <FaGithub className="h-6 w-6 md:h-6 md:w-8 lg:h-10 lg:w-10 hover:scale-110 transition-transform" />
              <SiPostman className="h-6 w-6 md:h-6 md:w-8 lg:h-10 lg:w-10 hover:scale-110 transition-transform text-red-700" />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="h-5 md:h-7 w-5 md:w-7 bubble absolute left-5 bottom-3"></div>
          <div className="h-8 md:h-10 w-8 md:w-10 bubble absolute left-16 bottom-5"></div>
          <div className="h-10 md:h-12 w-10 md:w-12 bubble absolute left-28 bottom-3"></div>
          <div className="h-4 md:h-6 w-4 md:w-6 bubble absolute left-48 bottom-3"></div>
          <div className="h-8 md:h-10 w-8 md:w-10 bubble absolute left-60 bottom-5"></div>

          <div className="h-4 md:h-6 w-4 md:w-6 bubble absolute right-10 bottom-3"></div>
          <div className="h-10 md:h-12 w-10 md:w-12 bubble absolute right-16 bottom-3"></div>

          <div className="h-6 md:h-8 w-full bg-[#9090ff] absolute -bottom-2 blur-2xl left-0"></div>
          <img
            className="h-80 w-80 md:h-[500px] md:w-[500px] mt-10 lg:mt-0  hover:scale-105 transition-transform drop-shadow-lg z-50"
            src="images/3d-img.webp"
            alt="main-img"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
