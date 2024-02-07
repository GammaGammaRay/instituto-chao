import React, { useLayoutEffect, useEffect, useRef } from "react";
import { styled } from "styled-components";

import { Section } from "../style/PageContainers";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import debounce from "lodash.debounce";

function Logo() {
  const logoPage = useRef();

  useEffect(() => {
    const handleAnimation = () => {
      gsap.registerPlugin(ScrollTrigger);
      let animation;

      if (window.innerWidth > 768) {
        // Change the animation for screen widths above 768px
        animation = gsap.fromTo(
          ".logo",
          { width: 300, opacity: 0 },
          {
            width: 400,
            opacity: 1,
            duration: 2,
            ease: "back",
          }
        );
      } else {
        // Default animation for screen widths below or equal to 768px
        animation = gsap.fromTo(
          ".logo",
          { width: 200, opacity: 0 },
          {
            width: 300,
            opacity: 1,
            duration: 2,
            ease: "power2.inOut",
          }
        );
      }

      ScrollTrigger.saveStyles(".logo");
      ScrollTrigger.matchMedia({
        "(min-width: 769px)": () => {
          ScrollTrigger.create({
            trigger: ".logo",
            animation: animation,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          });
        },
      });
    };

    const debouncedAnimation = debounce(handleAnimation, 10);
    debouncedAnimation();

    window.addEventListener("resize", debouncedAnimation);

    return () => {
      window.removeEventListener("resize", debouncedAnimation);
      debouncedAnimation.cancel();
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
    position: fixed;
    width: 0px;
  }
`;

const LogoSection = styled(Section)`
  height: 100%;
  background-color: black;
`;

export default Logo;
