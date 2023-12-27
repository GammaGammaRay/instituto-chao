import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const stickyTitles = (main, title) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const sectionHeight = main.current.offsetHeight;
      const titleHeight = title.current.offsetHeight;
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: main.current,
          start: "-50 top",
          end: () => `+=${sectionHeight - titleHeight}`,
          scrub: true, // Add scrubbing effect
          markers: true, // Add markers for visualization (remove this in production)
        },
      });

      // Stick the title to the top
      timeline.to(title.current, {
        y: sectionHeight - titleHeight, // Adjust the value as needed
        ease: "none",
      });
    }, main);

    return () => ctx.revert();
  }, []);

  return { main, title };
};

export default stickyTitles;
