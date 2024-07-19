import { useEffect, useRef } from "react";
import { animateBox } from "./animation";
import { Button } from "@material-tailwind/react";
import { projectArr } from "./projectData";

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

        <div className="w-full md:w-4/5 mx-auto mt-10 flex flex-col md:flex-row flex-wrap justify-between items-center">
          {projectArr.map((project) => (
            <div
              key={project.id}
              className="rounded-lg p-5 shadow-lg hover:scale-105 transition-transform"
            >
              <h1 className="text-sm md:text-lg lg:text-xl mb-2 ">
                {project.projectName}
              </h1>
              <img
                src={project.projectImg}
                alt={project.projectName}
                className="h-60 w-full rounded-lg"
              />

              <div className="flex gap-10 mt-5 justify-starts">
                <a href={project.liveLink}>
                  <Button className="px-6 lg:px-8 py-3 lg:py-4  rounded-md bg-gradient-to-r from-blue-500 to-indigo-900 hover:scale-105">
                    Live
                  </Button>
                </a>
                <a href={project.githubLink}>
                  <Button className="px-6 lg:px-8 py-3 lg:py-4  rounded-md bg-gradient-to-r from-blue-500 to-indigo-900 hover:scale-105">
                    Github
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
