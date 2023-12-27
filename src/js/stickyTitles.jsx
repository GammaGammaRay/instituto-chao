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
        markers: true,
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

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import _ from "lodash"; // Import lodash debounce

// const stickyTitles = (main, title) => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const updateSectionHeight = () => main.current.offsetHeight;
//     const updateTitleHeight = () => title.current.offsetHeight;

//     const timeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: main.current,
//         start: "top top", // Updated start position to always start at the top of the section
//         end: () => `+=${updateSectionHeight() - updateTitleHeight()}`,
//         scrub: true,
//         markers: true,
//       },
//     });

//     timeline.to(title.current, {
//       y: () => updateSectionHeight() - updateTitleHeight(),
//       ease: "none",
//     });

//     const updateOnScreenResize = _.debounce(() => {
//       timeline.scrollTrigger.animation.end = `+=${
//         updateSectionHeight() - updateTitleHeight()
//       }`;
//       timeline.scrollTrigger.update();
//     }, 100);

//     const handleResize = () => {
//       updateOnScreenResize();
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       updateOnScreenResize.cancel();
//       timeline.kill();
//     };
//   }, [main, title]);

//   return (
//     <div ref={main}>
//       <h1 ref={title}>Title</h1>
//       {/* Other content */}
//     </div>
//   );
// };

// export default stickyTitles;
