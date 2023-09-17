import React, { useLayoutEffect, useRef } from "react";
import { styled } from "styled-components";

import { Section } from "../style/PageContainers";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

function Logo() {
  const logoPage = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.fromTo(
      ".logo",
      { width: 300, opacity: 0 },
      {
        width: 500,
        opacity: 1,
        duration: 2,
        ease: "back",
      }
    );
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
  background-color: black;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 0px;
  }
`;

const LogoSection = styled(Section)`
  /* scroll-snap-align: unset; */
  height: 100%;
`;

export default Logo;
