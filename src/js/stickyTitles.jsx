import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import _ from "lodash"; // Import lodash debounce

const stickyTitles = (main, title) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sectionHeight = main.current.offsetHeight;
    const titleHeight = title.current.offsetHeight;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: "-50 top",
        end: `+=${sectionHeight - titleHeight}`,
        scrub: true,
        // markers: true,
      },
    });

    timeline.to(title.current, {
      y: sectionHeight - titleHeight,
      ease: "none",
    });

    const updateOnScreenResize = _.debounce(() => {
      const sectionHeight = main.current.offsetHeight;
      const titleHeight = title.current.offsetHeight;

      timeline.scrollTrigger.animation.end = `+=${sectionHeight - titleHeight}`;
      timeline.invalidate().restart(); // Restart the timeline with updated values
    }, 100); // Debounce delay in milliseconds

    const handleResize = () => {
      updateOnScreenResize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      updateOnScreenResize.cancel(); // Cancel the debounced function on component unmount
      timeline.kill(); // Kill the timeline on component unmount
    };
  }, [main, title]); // Ensure useEffect runs whenever main or title changes

  return (
    <div ref={main}>
      <h1 ref={title}>Title</h1>
      {/* Other content */}
    </div>
  );
};

export default stickyTitles;
