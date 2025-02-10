import { useEffect, useRef } from "react";
import { animateBox } from "./animation";
import { Button } from "@material-tailwind/react";
import { projectArr } from "./projectData";
import { FaGithub, FaCircleArrowRight } from "react-icons/fa6";

const Projects = () => {
  const project = useRef();

  useEffect(() => {
    animateBox(project);
  });

  return (
    <>
      <section
        ref={project}
        id="project"
        className="mt-10 md:mt-20 w-full px-5 md:px-0"
      >
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold pl-2">
          PROJECTS
        </h1>

        <div className="w-full md:w-4/5 mx-auto mt-10 flex flex-col md:flex-row flex-wrap justify-between items-center gap-10">
          {projectArr.map((project) => (
            <div
              key={project.id}
              className="relative w-full md:w-[530px] h-60 md:h-80 overflow-hidden rounded-lg shadow-lg group"
            >
              {/* Image */}
              <img
                src={project.projectImg} // Replace with your image URL
                alt={project.projectName}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Slider */}
              <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex flex-col justify-end p-6 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                <h1 className="text-xl md:text-2xl lg:text-3xl mb-5 font-semibold text-white">
                  {project.projectName}
                </h1>
                <div className="flex space-x-4">
                  <a href={project.liveLink}>
                    <Button className="px-6 lg:px-8 py-2 lg:py-3 text-sm rounded-md bg-blue-500 hover:scale-105">
                      Live{" "}
                      <FaCircleArrowRight size={24} className="inline ml-2" />
                    </Button>
                  </a>
                  <a href={project.githubLink}>
                    <Button className="px-6 lg:px-8 py-2 lg:py-3 text-sm rounded-md bg-indigo-900 hover:scale-105">
                      Github <FaGithub size={24} className="inline ml-2" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
