import { Button, Input, Textarea } from "@material-tailwind/react";
import { FaLocationDot, FaMessage, FaPhone } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { useEffect, useRef } from "react";
import { animateBox } from "./data/animation";
import { useThemeStore } from "../store/useThemeStore";

const Contact = () => {
  const contact = useRef();
  const { theme } = useThemeStore();

  useEffect(() => {
    animateBox(contact);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <section ref={contact} id="contact" className="w-full mt-10 md:mt-20">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold pl-2">
          CONTACT
        </h1>

        <h2 className="text-md md:text-xl lg:text-2xl font-semibold my-5 text-center text-blue-500">
          I Want to Hear from You
        </h2>
        <div className="w-full md:w-4/5 mx-auto p-5 flex flex-col md:flex-row justify-between">
          {/* left section */}
          <div className="w-full md:w-1/2">
            <div className="flex items-center mb-5">
              <FaLocationDot
                color="white"
                className="text-5xl md:text-6xl p-4 rounded-full bg-blue-500"
              />
              <div className="ml-5">
                <span>Address</span>
                <br />
                <span className="text-gray-500">Jurhera, Bharatpur</span>
              </div>
            </div>

            <div className="flex items-center mb-5">
              <FaMessage
                color="white"
                className="text-5xl md:text-6xl p-4 rounded-full bg-blue-500 "
              />
              <div className="ml-5">
                <span>Email</span>
                <br />
                <span className="text-gray-500">lk899202@gmail.com</span>
              </div>
            </div>

            <div className="flex items-center mb-5">
              <FaPhone
                color="white"
                className="text-5xl md:text-6xl p-4 rounded-full bg-blue-500"
              />
              <div className="ml-5">
                <span>Phone</span>
                <br />
                <span className="text-gray-500">+91 8562859784</span>
              </div>
            </div>
          </div>

          {/* right section */}
          <div className="w-full md:w-1/2 mt-5 md:mt-0">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={`flex flex-wrap gap-5 text-${
                theme === "light" ? "black" : "white"
              }`}
            >
              <Input
                size="lg"
                type="text"
                {...register("name", { required: true })}
                label="Your Name"
                variant="outlined"
              />
              {errors.name && (
                <h6 className="text-red-600">name is required*</h6>
              )}

              <Input
                size="lg"
                type="email"
                {...register("email", { required: true })}
                label="Your Email"
                variant="outlined"
              />
              {errors.name && (
                <h6 className="text-red-600">email is required*</h6>
              )}

              <Input
                size="lg"
                type="number"
                {...register("phone", { required: true })}
                label="Your Phone"
                variant="outlined"
              />
              {errors.name && (
                <h6 className="text-red-600">phone no. is required*</h6>
              )}
              <Textarea label="Message..." size="lg" {...register("message")} />
              <Button
                type="submit"
                className="px-6 lg:px-8 py-3 lg:py-4  rounded-md bg-blue-500 hover:scale-105"
              >
                Submit Now
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
