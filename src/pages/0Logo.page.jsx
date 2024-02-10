import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { Section } from "../style/PageContainers";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import debounce from "lodash.debounce";

function Logo() {
  const logoPage = useRef();

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const animation = gsap.fromTo(
  //     ".logo",
  //     { width: "5vw", opacity: 0 },
  //     {
  //       width: "20vw", // Use relative units for width
  //       opacity: 1,
  //       duration: 2,
  //       ease: "back",
  //     }
  //   );

  //   const handleAnimation = () => {
  //     gsap.registerPlugin(ScrollTrigger);
  //     let animation;

  //     if (window.innerWidth > 768) {
  //       animation = gsap.fromTo(
  //         ".logo",
  //         { width: "10vw", opacity: 0 },
  //         {
  //           width: "20vw", // Use relative units for width
  //           opacity: 1,
  //           duration: 2,
  //           ease: "back",
  //         }
  //       );
  //     } else {
  //       animation = gsap.fromTo(
  //         ".logo",
  //         { width: "5vw", opacity: 0 },
  //         {
  //           width: "15vw", // Use relative units for width
  //           opacity: 1,
  //           duration: 2,
  //           ease: "power2.inOut",
  //         }
  //       );
  //     }

  //     ScrollTrigger.saveStyles(".logo");
  //     ScrollTrigger.matchMedia({
  //       "(min-width: 769px)": () => {
  //         ScrollTrigger.create({
  //           trigger: ".logo",
  //           animation: animation,
  //           start: "top 80%",
  //           end: "bottom 20%",
  //           toggleActions: "play none none none",
  //           pin: true, // Pin the trigger element
  //           pinSpacing: false, // Disable spacing for pinned element
  //         });
  //       },
  //     });
  //   };

  //   const debouncedAnimation = debounce(handleAnimation, 10);
  //   debouncedAnimation();

  //   window.addEventListener("resize", debouncedAnimation);

  //   return () => {
  //     window.removeEventListener("resize", debouncedAnimation);
  //     debouncedAnimation.cancel();
  //   };
  // }, []);

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
  position: relative; // Set position to relative
  /* height: 100vh; // Adjust height to viewport height */
  /* z-index: 1; // Set a higher z-index to ensure it's above the following section */
  img {
    width: 100%;
    max-width: 400px; // Set maximum width for the logo
  }
`;

const LogoSection = styled(Section)`
  background-color: black;
  justify-content: center;
`;

export default Logo;
