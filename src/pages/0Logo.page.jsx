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
    }, 10);

    debouncedAnimation();

    return () => {
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
    /* position: fixed; */
    width: 0px;
  }
`;

const LogoSection = styled(Section)`
  height: 100%;
  background-color: black;
`;

export default Logo;
