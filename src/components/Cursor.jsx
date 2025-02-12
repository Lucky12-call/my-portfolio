import { useEffect, useState } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const [position, setPosition] = useState({x: 0, y: 0})
  useEffect(() => {
    // Select the follower element
    const follower = document.querySelector(".follower");

    // Set initial position to the center of the viewport
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    // Add mousemove event listener to update the follower's position
    window.addEventListener("mousemove", (e) => {
      gsap.to(follower, {
        duration: 0.9, // Smooth follow speed
        x: e.clientX, // Update X position
        y: e.clientY, // Update Y position
      });
      setPosition({x: e.clientX, y: e.clientY})
    });


    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <>
      <div className="follower hidden md:block" style={{left: `${position.x}px`, top: `${position.y}px`}}></div>
    </>
  );
};

export default Cursor;