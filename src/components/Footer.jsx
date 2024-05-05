import { IconButton } from "@material-tailwind/react";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {

  return (
    <section className="bg-forth text-white w-full flex flex-col items-center mt-10 md:mt-20">
      <p className="text-sm md:text-lg text-center px-5 md:px-12 text-blue-500">
      “Take the attitude of a student, never be too big to ask questions, never know too much to learn something new.” 🙂😉
      </p>
      <div className="flex gap-5 m-5 items-center">
        <a href="https://www.linkedin.com/in/lochan-kumar-8334011b0/">
          <IconButton>
            <FaLinkedin className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-blue-500 hover:scale-110 transition-transform" />
          </IconButton>
        </a>

        <a href="https://github.com/Lucky12-call">
          <IconButton>
            <FaGithub className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-blue-500 hover:scale-110 transition-transform" />
          </IconButton>
        </a>

        <a href="https://twitter.com/LochanKuma2473">
          <IconButton>
            <FaXTwitter  className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-blue-500 hover:scale-110 transition-transform" />
          </IconButton>
        </a>
      </div>
      <p className="m-5">lk899202@gmail.com</p>
    </section>
  );
};

export default Footer;
