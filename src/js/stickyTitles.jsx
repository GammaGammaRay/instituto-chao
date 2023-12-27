import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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

    return () => {
      // Clean up any resources if needed
      timeline.kill(); // Kill the timeline on component unmount
    };
  }, []);

  return (
    <div ref={main}>
      <h1 ref={title}>Title</h1>
      {/* Other content */}
    </div>
  );
};

export default stickyTitles;

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import _ from "lodash"; // Import lodash debounce

// const stickyTitles = (main, title) => {
//   const [windowSize, setWindowSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   const updateOnScreenResize = _.debounce(() => {
//     const sectionHeight = main.current.offsetHeight;
//     const titleHeight = title.current.offsetHeight;

//     const timeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: main.current,
//         start: "-50 top",
//         end: `+=${sectionHeight - titleHeight}`,
//         scrub: true,
//         markers: true,
//       },
//     });

//     timeline.to(title.current, {
//       y: sectionHeight - titleHeight,
//       ease: "none",
//     });
//   }, 100); // Adjust debounce delay as needed

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//       updateOnScreenResize();
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     updateOnScreenResize(); // Initial update

//     return () => {
//       // Clean up any resources if needed
//     };
//   }, [windowSize]); // Trigger useEffect when windowSize changes

//   return (
//     <div ref={main}>
//       <h1 ref={title}>Title</h1>
//       {/* Other content */}
//     </div>
//   );
// };

// export default stickyTitles;
