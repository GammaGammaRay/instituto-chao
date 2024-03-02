import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";

const SectionText = ({ className, children }) => {
  const text = useRef();

  useEffect(() => {
    const textContainer = text.current;
    const handleScroll = () => {
      textContainer.classList.toggle(
        "overflowing-top",
        textContainer.scrollTop > 0
      );
      textContainer.classList.toggle(
        "overflowing-bottom",
        textContainer.scrollHeight > textContainer.clientHeight &&
          textContainer.scrollHeight - textContainer.scrollTop >
            textContainer.clientHeight + 1
      );
    };
    textContainer.addEventListener("scroll", handleScroll);
    return () => {
      textContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={className} ref={text}>
      {children}
    </div>
  );
};

const StyledSectionText = styled(SectionText)`
  /* Your existing styles here */

  overflow: auto;

  &::-webkit-scrollbar-thumb {
    background: #000000;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #292929;
  }

  -webkit-mask-image: linear-gradient(
    180deg,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
  mask-image: linear-gradient(
    180deg,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
`;

// export { StyledSectionText as SectionText };
