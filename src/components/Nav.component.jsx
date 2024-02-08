import React, { useContext, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { MobileContext } from "../context/mobileContext.jsx";

gsap.registerPlugin(ScrollToPlugin);

function Nav() {
  const buttons = useRef();
  const buttonMenu = useRef();

  const [buttonMenuOpen, setButtonMenuOpen] = useState(false);

  const isMobile = useContext(MobileContext);

  const toggleMenu = () => {
    console.log("toggleMenu called");
    setButtonMenuOpen((prevState) => {
      console.log("prevState:", prevState);
      return !prevState;
    });
  };

  // <--------- ANIMATION WRAPPER START--------->
  useEffect(() => {
    if (!isMobile) {
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
    }
    // else {
    //   return;
    // }
  }, []); // // <--------- ANIMATION WRAPPER START--------->

  // useEffect(() => {
  //   // if (isMobile) {
  //   console.log("useLayoutEffect executed");

  //   const ctx = gsap.context(() => {
  //     const animation = gsap.timeline({
  //       defaults: {
  //         scale: 1,
  //         duration: 0.6,
  //         ease: "power3.inOut",
  //       },
  //     });
  //     // <--------- ANIMATION START --------->
  //     animation.from(buttons.current.querySelectorAll("div"), {
  //       opacity: 0,
  //       yPercent: -150,
  //       stagger: 0.1,
  //     });
  //     animation.from(buttonMenu.current, {
  //       opacity: 0,
  //       scale: 0,
  //     });
  //     // <--------- ANIMATION END --------->
  //   }, buttons); // <- Scope!
  //   return () => ctx.revert(); // <- Cleanup!
  //   // } else {
  //   //   return;
  //   // }
  // }, []);

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
        <ButtonMenu ref={buttonMenu} onClick={toggleMenu}>
          <img
            className="MenuButtonImage"
            type="image/svg+xml"
            src="chao_burguerMenu-border.svg"
            alt="Logo Instituto Chão"
          />
          <MenuContent open={buttonMenuOpen}>
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
          </MenuContent>
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
  /* background-color: gray; */
  cursor: pointer;

  & img {
    width: 50px;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
`;

const MenuContent = styled.div`
  width: 200px;
  position: absolute;
  top: 50px;
  right: 0;
  background-color: white;
  padding: 10px;
  flex-direction: column;
  display: ${({ open }) => (open ? "flex" : "none")};
`;

const NavBar = styled.div`
  width: 100%;
  height: var(--nav-height);
  position: fixed;
  overflow-x: hidden;
  overflow-y: hidden;
  font-size: 20px;

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
  margin-top: 12px;
`;

export default Nav;
