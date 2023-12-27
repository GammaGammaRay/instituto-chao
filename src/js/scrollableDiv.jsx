import React, { useRef, useEffect } from "react";

const ScrollableDiv = ({ children }) => {
  const scrollableRef = useRef();
  const sectionRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop <= windowHeight * 0.5) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }

      // Sync the div's scroll position with the window scroll
      const scrollableDiv = scrollableDivRef.current;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollableDiv) {
        scrollableDiv.scrollTop = scrollTop;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={scrollableRef}
      style={{
        overflowY: "auto",
        maxHeight: "500px",
        border: "1px solid #ccc",
      }}
    >
      <div ref={sectionRef}>{children}</div>
    </div>
  );
};

export default ScrollableDiv;
