import { useEffect, useRef } from "react";
import { animateBox } from "./animation";
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
            <img
              src="images/about-avatar.png"
              alt="my-img"
              className="bg-transparent h-3/4 w-3/5 rounded-xl absolute top-2 right-2 ring-2 lg:ring-4 ring-blue-500 hover:scale-105 transition-transform"
            />
            <img
              src="images/laptop-img.webp"
              alt="my-img"
              className="h-3/5 w-1/2 rounded-xl absolute bottom-2 left-2 ring-2 lg:ring-4 ring-blue-500 hover:scale-105 transition-transform"
            />
          </div>

          {/* right section */}
          <div className="w-full lg:w-1/2 h-auto lg:h-full lg:ml-5">
            <h1 className="text-xl md:text-2xl lg:text-3xl mt-5 lg:mt-0">
              My Bio
            </h1>
            <h1 className="mt-2 lg:mt-5">
              Hi, I am Lochan Kumar. With the degree BCA in Software Development
              from Singhania University, Jhunjhnu. A Skilled and Passionate
              Frontend React Developer based in Rajasthan, India. With a solid
              foundation in HTML, CSS, and JavaScript, I bring creativity and
              technical expertise to every project.
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

            <Button className="px-6 lg:px-8 py-3 lg:py-4 mt-5 rounded-md bg-gradient-to-r from-blue-500 to-indigo-900 hover:scale-105">
              <a
                href="resume/Lochan-Kumar.pdf"
                download="resume/Lochan-Kumar.pdf"
              >
                DOWNLOAD RESUME
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
