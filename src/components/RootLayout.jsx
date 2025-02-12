import Navbar from "./Navbar";
import Hero from "./Hero";
import { lazy, Suspense } from "react";
import Loader from "./Loader";

const About = lazy(() => import("./About"));
const Skills = lazy(() => import("./Skills"));
const Projects = lazy(() => import("./Projects"));
const Contact = lazy(() => import("./Contact"));
const Footer = lazy(() => import("./Footer"));

const RootLayout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Navbar />
      <section className="w-full max-w-screen xl:w-11/12 mx-auto relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </section>
    </Suspense>
  );
};

export default RootLayout;
