import React, { useLayoutEffect, useEffect, useRef } from "react";
import { styled } from "styled-components";

import { Section } from "../style/PageContainers";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import debounce from "lodash.debounce";

function Logo() {
  const logoPage = useRef();

  useEffect(() => {
    const debouncedAnimation = debounce(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
        ".logo",
        { width: 300, opacity: 0 },
        {
          width: 400,
          opacity: 1,
          duration: 2,
          ease: "back",
        }
      );
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: logoPage.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          markers: true,
        },
      });

      tl.fromTo(
        logoPage.current,
        { y: 0 },
        { y: "100%", ease: "none" } // Adjust the y value as needed
      );
    }, 10); // Adjust the debounce delay as needed

    debouncedAnimation();

    return () => {
      debouncedAnimation.cancel(); // Cancel any pending debounced function calls on unmount
    };
  }, []);

  return (
    <LogoSection>
      <LogoPage ref={logoPage}>
        <img
          className="logo"
          type="image/svg+xml"
          src="chao_logo_preto-no-branco.svg"
          alt="Logo Instituto Chão"
        />
      </LogoPage>
    </LogoSection>
  );
}

const LogoPage = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  img {
    /* position: fixed; */
    width: 0px;
  }
`;

const LogoSection = styled(Section)`
  height: 100%;
  background-color: black;
`;

export default Logo;
