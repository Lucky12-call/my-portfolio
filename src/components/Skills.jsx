import { skillsArr } from "./data/skillsData";
import { useEffect, useRef } from "react";
import { animateBox } from "./data/animation";
import ProgressBar from "./ProgressBar";

const Skills = () => {
  const skill = useRef();

  useEffect(() => {
    animateBox(skill);
  }, []);

  return (
    <>
      <section ref={skill} id="skills" className="mt-10 md:mt-44 w-full">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold pl-2">
          SKILLS
        </h1>
        <h2 className="text-md md:text-xl lg:text-2xl font-semibold mt-5 text-center text-blue-500">
          I Work Hard to Improve My Skills Regularly
        </h2>
        <div className="w-full md:w-4/5 columns-1 md:gap-12 md:columns-2 mx-auto md:mt-5 lg:mt-10  p-5">
          {skillsArr.map((skill) => (
            <div
              key={skill.id}
              className="mb-5 md:mb-10 hover:scale-105 transition-transform"
            >
              <div className="flex justify-between items-center">
                <h1>{skill.skillName}</h1>
                <h1>{skill.value}%</h1>
              </div>
              <ProgressBar value={skill.value} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
