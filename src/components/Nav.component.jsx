import React, { useContext, useEffect, useRef } from "react";
import { styled } from "styled-components";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { MobileContext } from "../context/mobileContext.jsx";

gsap.registerPlugin(ScrollToPlugin);

function Nav() {
  const buttons = useRef();
  const buttonMenu = useRef();

  const isMobile = useContext(MobileContext);

  // <--------- ANIMATION WRAPPER START--------->
  useEffect(() => {
    // if (isMobile) {
    console.log("useLayoutEffect executed");

    const ctx = gsap.context(() => {
      const animation = gsap.timeline({
        defaults: {
          scale: 1,
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
      animation.from(buttonMenu.current, {
        opacity: 0,
        scale: 0,
      });
      // <--------- ANIMATION END --------->
    }, buttons); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
    // } else {
    //   return;
    // }
  }, []);

  function scrollToSection(sectionId) {
    gsap.to(window, {
      scrollTo: {
        y: `#${sectionId}`,
        offsetY: 100, // Adjust the offsetY as needed
      },
      duration: 0.5, // Adjust the duration as needed
    });
  }

  return (
    <React.Fragment>
      {isMobile ? (
        <ButtonMenu ref={buttonMenu}>
          <img
            className="MenuButtonImage"
            type="image/svg+xml"
            src="chao_burguerMenu-border.svg"
            alt="Logo Instituto Chão"
          />
          {/* <img
          className="MenuButtonImage"
          type="image/svg+xml"
          src="chao_burguerMenu-circle.svg"
          alt="Logo Instituto Chão"
        /> */}
        </ButtonMenu>
      ) : (
        <NavBar>
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
            <NavBtn onClick={() => scrollToSection("historico")}>
              Histórico
            </NavBtn>
            <NavBtn onClick={() => scrollToSection("balanco")}>Balanço</NavBtn>
            <NavBtn onClick={() => scrollToSection("contato")}>Contato</NavBtn>
          </NavButtonContainer>
        </NavBar>
      )}
    </React.Fragment>
  );
}

const ButtonMenu = styled.div`
  width: 50px;
  position: fixed;
  z-index: 1;
  top: 8px;
  right: 8px;
  background-color: none;
  :hover {
    cursor: pointer;
  }
  /* @media (min-width: 768px) {
    display: none;
  } */
  &img {
    width: 50px;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
`;

const NavBar = styled.div`
  /* display: none !important; */
  width: 100%;
  height: var(--nav-height);
  position: fixed;
  overflow-x: hidden;
  overflow-y: hidden;
  font-size: 20px;

  /* @media (min-width: 768px) {
    height: var(--nav-height);
    display: block;
  } */
  top: 0px;
  left: 0px;
  z-index: 10;
  background-color: black;

  /* padding-top: 16px; */

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
