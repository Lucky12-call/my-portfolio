import { useEffect, useRef } from "react";
import { animateBox } from "./data/animation";
import { projectArr } from "./data/projectData";
import { FaCircleArrowRight } from "react-icons/fa6";
import { TfiGithub } from "react-icons/tfi";

const Projects = () => {
  const project = useRef();

  useEffect(() => {
    animateBox(project);
  });

  return (
    <section
      ref={project}
      id="project"
      className="mt-10 md:mt-20 w-full px-5 md:px-0 z-50 relative"
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
            <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex flex-col justify-end p-3 md:p-6 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
              <h1 className="text-2xl lg:text-3xl mb-5 font-semibold text-white">
                {project.projectName}
              </h1>
              <div className="flex space-x-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glowing-box h-8 md:h-10 w-20 md:w-32"
                >
                  <button className="glowing-btn font-medium text-white">
                    Live
                    <FaCircleArrowRight size={20} className="max-sm:hidden" />
                  </button>
                </a>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glowing-box h-8 md:h-10 w-20 md:w-32"
                >
                  <button className="glowing-btn font-medium text-white">
                    Github
                    <TfiGithub size={20} className="max-sm:hidden" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
