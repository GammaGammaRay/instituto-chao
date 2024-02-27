import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { Section } from "../style/PageContainers";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

function Logo() {
  const logoPage = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const animation = gsap.fromTo(
      ".logo",
      { width: 300, opacity: 0 },
      {
        width: 400,
        opacity: 1,
        duration: 2,
        ease: "back",
      }
    );

    ScrollTrigger.create({
      trigger: ".logo",
      animation: animation,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none",
    });
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
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* height: 100vh; // Adjust height to viewport height */
  /* z-index: 1; // Set a higher z-index to ensure it's above the following section */
  img {
    width: 100%;
    max-width: 400px; // Set maximum width for the logo
  }
`;

const LogoSection = styled(Section)`
  flex-direction: column;
  align-items: center;
  justify-content: start;
  overflow-y: hidden;
  @media (min-width: 768px) {
    margin-top: var(--nav-height);
  }

  background-color: black;
  justify-content: center;
`;

export default Logo;
