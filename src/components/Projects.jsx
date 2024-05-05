import { useEffect, useRef } from "react";
import { animateBox } from "./animation";
import { Button } from "@material-tailwind/react";

export let res = null;

const Projects = () => {
  const project = useRef();

  useEffect(() => {
    animateBox(project);
  });

  return (
    <>
      <section ref={project} id="project" className="mt-10 md:mt-20 w-full">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold pl-2">
          PROJECTS
        </h1>

        <div className="w-full md:w-4/5 mx-auto mt-10 flex flex-col md:flex-row justify-between items-center gap-10">

          {/* project first  */}
          <div className=" md:w-1/2 rounded-lg p-5 shadow-lg hover:scale-105 transition-transform">
            <h1 className="text-sm md:text-lg lg:text-xl mb-2 ">Recipe Finder Website</h1>
            <img
              src="images/fairFood.png"
              alt="project-img"
              className="h-60 w-full rounded-lg"
            />

            <div className="flex gap-10 mt-5 justify-starts">
              <Button className="px-6 lg:px-8 py-3 lg:py-4  rounded-md bg-gradient-to-r from-blue-500 to-indigo-900 hover:scale-105">
                <a href="https://fairfoods.netlify.app">Live</a>
              </Button>
              <Button className="px-6 lg:px-8 py-3 lg:py-4  rounded-md bg-gradient-to-r from-blue-500 to-indigo-900 hover:scale-105">
                <a href="https://github.com/Lucky12-call/recipe-finder-reactjs.git">Github</a>
              </Button>
            </div>
          </div>

          {/* project second */}
          <div className=" md:w-1/2 rounded-lg p-5 shadow-lg  hover:scale-105 transition-transform">
          <h1 className="text-sm md:text-lg lg:text-xl mb-2 ">Weather Web-App</h1>
            <img
              src="images/weather-app.png"
              alt="project-img"
              className="h-60 w-full rounded-lg"
            />

            <div className="flex gap-10 mt-5 justify-start">
              <Button className="px-6 lg:px-8 py-3 lg:py-4  rounded-md bg-gradient-to-r from-blue-500 to-indigo-900 hover:scale-105">
                <a href="https://joyful-youtiao-290708.netlify.app/">Live</a>
              </Button>
              <Button className="px-6 lg:px-8 py-3 lg:py-4  rounded-md bg-gradient-to-r from-blue-500 to-indigo-900 hover:scale-105">
                <a href="https://github.com/Lucky12-call/weather-web-app-reactjs.git">Github</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
