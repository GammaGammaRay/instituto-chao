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
