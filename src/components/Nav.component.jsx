import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function Nav() {
  const buttons = useRef();

  // <--------- ANIMATION WRAPPER START--------->
  useEffect(() => {
    console.log("useLayoutEffect executed");

    const ctx = gsap.context(() => {
      const animation = gsap.timeline({
        defaults: {
          duration: 0.6,
          ease: "power3.inOut",
        },
      });
      // <--------- ANIMATION START --------->
      animation.from(buttons.current.querySelectorAll("div"), {
        opacity: 0,
        yPercent: -150,
        stagger: 0.1,
      });
      // <--------- ANIMATION END --------->
    }, buttons); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);
  // <--------- ANIMATION WRAPPER END--------->

  function scrollToSection(sectionId) {
    gsap.to(window, {
      scrollTo: {
        y: `#${sectionId}`,
        offsetY: 100, // Adjust the offsetY as needed
      },
      duration: 1, // Adjust the duration as needed
    });
  }

  return (
    <NavContainer>
      <NavButtonContainer ref={buttons}>
        <NavBtn onClick={() => scrollToSection("quem-somos")}>
          Quem Somos?
        </NavBtn>
        <NavBtn onClick={() => scrollToSection("como-funciona")}>
          Como Funciona?
        </NavBtn>
        <NavBtn onClick={() => scrollToSection("buscamos")}>
          O que buscamos?
        </NavBtn>
        <NavBtn onClick={() => scrollToSection("historico")}>Histórico</NavBtn>
        <NavBtn onClick={() => scrollToSection("balanco")}>Balanço</NavBtn>
        <NavBtn onClick={() => scrollToSection("contato")}>Contato</NavBtn>
      </NavButtonContainer>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  width: 100%;
  height: var(--nav-height);
  position: fixed;

  top: 0px;
  left: 0px;
  z-index: 10;
  background-color: black;

  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  color: white;
`;

const NavButtonContainer = styled.div`
  width: fit-content;
  max-width: 100%;
  width: 800px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const NavBtn = styled.div`
  cursor: pointer;
`;

export default Nav;
