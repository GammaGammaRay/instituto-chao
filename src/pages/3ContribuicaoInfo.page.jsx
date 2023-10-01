import React, { useEffect, useRef } from "react";
import {
  Section,
  SectionText,
  VerticalTitle,
  ContentContainer,
} from "../style/PageContainers";
import { styled } from "styled-components";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
// import LottieScrollTrigger from "../js/lottieScrollTrigger";

function Contribuicao() {
  const info = useRef();
  const section = useRef();

  useEffect(() => {
    console.log("useLayoutEffect executed");

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      // LottieScrollTrigger({
      //   target: "#animationWindow",
      //   path: "https://assets.codepen.io/35984/tapered_hello.json",
      //   speed: "medium",
      //   scrub: 2, // seconds it takes for the playhead to "catch up"
      //   // you can also add ANY ScrollTrigger values here too, like trigger, start, end, onEnter, onLeave, onUpdate, etc. See https://greensock.com/docs/v3/Plugins/ScrollTrigger
      // });

      const animation = gsap.timeline({
        defaults: {
          duration: 1.5,
          ease: "power3.inOut",
        },
      });
      // <--------- ANIMATION START --------->
      animation
        .from(info.current, {
          opacity: 0,
          scrollTrigger: {
            trigger: info.current,
            start: "top 100%",
            end: "bottom 50%",
            scrub: true,
          },
        })
        .from(section.current, {
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
          },
        });

      // <--------- ANIMATION END --------->
    }, info); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <ContribuicaoSection id="contribuicao" ref={section}>
      <img
        ref={info}
        src="calculoContribuicao.png"
        alt="calculo da contribuição"
      />
    </ContribuicaoSection>
  );
}

const ContribuicaoSection = styled(Section)`
  padding-top: var(--nav-height);
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-brown2);
  img {
    width: 1000px;
  }
`;

export default Contribuicao;
