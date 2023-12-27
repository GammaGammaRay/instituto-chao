import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import _ from "lodash"; // Import lodash debounce

const stickyTitles = (main, title) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: "-50 top",
        end: `+=${main.current.offsetHeight - title.current.offsetHeight}`,
        scrub: true,
        // markers: true,
      },
    });

    timeline.to(title.current, {
      y: main.current.offsetHeight - title.current.offsetHeight,
      ease: "none",
    });

    const updateOnScreenResize = _.debounce(() => {
      const newEnd = main.current.offsetHeight - title.current.offsetHeight;
      timeline.scrollTrigger.animation.end = `+=${newEnd}`;
      timeline.invalidate();
    }, 100); // Adjust the debounce delay as needed

    const handleResize = () => {
      updateOnScreenResize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      updateOnScreenResize.cancel();
      timeline.kill();
    };
  }, [main, title]);

  return () => {
    timeline.kill();
  };
};

export default stickyTitles;
