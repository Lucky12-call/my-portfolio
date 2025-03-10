/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";

const ProgressBar = ({ value }) => {
  const progressRef = useRef(null);
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  useEffect(() => {
    if (inView) {
      // Start the animation when the progress bar is in view
      gsap.fromTo(
        progressRef.current,
        { width: "5%" }, // Start from 5%
        {
          width: `${value}%`, // Animate to the given value
          duration: 2, // Animation duration
          ease: "power2.out", // Easing function
        }
      );
    }
  }, [inView, value]);

  return (
    <div
      ref={inViewRef}
      style={{
        width: "100%",
        height: "10px",
        backgroundColor: "#e0e0e0",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <div
        ref={progressRef}
        style={{
          width: "5%", // Initial width
          height: "100%",
          // backgroundColor: "#218FEC",
          borderRadius: "10px",
        }}
        className="glowing-box"
      />
    </div>
  );
};

export default ProgressBar;
