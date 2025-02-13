import { useEffect, useRef } from "react";
import { animateBox } from "./data/animation";
import { Button } from "@material-tailwind/react";

const About = () => {
  const about = useRef();

  useEffect(() => {
    animateBox(about);
  }, []);

  return (
    <>
      <section ref={about} id="about" className="w-full">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold pl-2">
          ABOUT ME
        </h1>

        <div className="h-auto w-full md:h-[500px] flex flex-col md:flex-row justify-between items-center md:w-4/5 mx-auto p-5 mt-10 ">
          {/* left section */}
          <div className="w-full lg:w-1/2 h-[50dvh] md:h-full mr-2 md:mr-20 relative">
            <div className="h-7 w-7 bubble absolute left-5 bottom-8 md:-bottom-8 z-50"></div>
            <div className="h-10 w-10 bubble absolute left-16 bottom-10 md:-bottom-10 z-50"></div>
            <div className="h-12 w-12 bubble absolute left-28 bottom-8 md:-bottom-8 z-50"></div>
            <div className="h-6 w-6 bubble absolute left-48 bottom-8 md:-bottom-8 z-50"></div>
            <div className="h-12 w-12 bubble absolute left-60 bottom-10 md:-bottom-10 z-50"></div>
            <div className="h-6 w-6 bubble absolute left-80 bottom-8 md:-bottom-8 z-50"></div>

            <div className="h-6 w-6 bubble absolute right-10 bottom-5 md:-bottom-5 z-50"></div>
            <div className="h-12 w-12 bubble absolute right-16 bottom-8 md:-bottom-8 z-50"></div>

            <div className="h-8 w-full bg-[#9090ff] absolute bottom-2 md:-bottom-2 blur-2xl left-0 z-50"></div>

            {/* Background spotlight */}
            <div
              className="absolute w-40 md:w-60 h-96 md:h-[850px] -rotate-45 bg-spotlight rounded-full blur-3xl opacity-50 "
              style={{
                left: `-200px`,
                top: `-250px`,
              }}
            ></div>

            <img
              src="images/about-avatar.png"
              alt="my-img"
              className="bg-transparent rounded-xl hover:scale-105 transition-transform z-50"
            />
          </div>

          {/* right section */}
          <div className="w-full lg:w-1/2 h-auto lg:h-full lg:ml-5 mt-10 md:mt-0">
            <h1 className="text-xl md:text-2xl lg:text-3xl mt-5 lg:mt-0">
              My Bio
            </h1>
            <h1 className="mt-2 lg:mt-5 ">
              Hello, I am Lochan Kumar. With the degree BCA in Software
              Development from Singhania University, Jhunjhnu. A Skilled and
              Passionate Frontend React Developer based in Rajasthan, India.
              Experienced MERN stack developer skilled in designing and
              developing modern, responsive web applications. Proficient in
              MongoDB, Express.js, React, and Node.js, I bring creativity and
              technical expertise to build scalable, efficient, and user-centric
              solutions.
            </h1>

            <table className="w-full mt-5 lg:mt-10">
              <tbody>
                <tr>
                  <td className="p-1 lg:p-3">
                    <span>Name</span> <br />
                    <span className="text-gray-500">Lochan Kumar</span>
                  </td>
                  <td className="p-1 lg:p-3">
                    <span>Address</span>
                    <br />
                    <span className="text-gray-500">Jurhera, Bharatpur</span>
                  </td>
                </tr>

                <tr>
                  <td className="p-1 lg:p-3">
                    <span>Email</span>
                    <br />
                    <span className="text-gray-500">lk899202@gmail.com</span>
                  </td>
                  <td className="p-1 lg:p-3">
                    <span>DOB</span>
                    <br />
                    <span className="text-gray-500">May 6, 2001</span>
                  </td>
                </tr>

                <tr>
                  <td className="p-1 lg:p-3">
                    <span>Phone</span>
                    <br />
                    <span className="text-gray-500">+91 856259784</span>
                  </td>
                  <td className="p-1 lg:p-3">
                    <span>Freelance</span>
                    <br />
                    <span className="text-gray-500">Available</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <a
              href="resume/Lochan-MERN-Stack.pdf"
              download="resume/Lochan-MERN-Stack.pdf"
            >
              <Button className="px-6 lg:px-8 py-3 lg:py-4 mt-5 rounded-md bg-blue-500 hover:scale-105">
                DOWNLOAD RESUME
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
