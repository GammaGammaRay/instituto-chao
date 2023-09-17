import React from "react";
import Nav from "./components/Nav.component.jsx";
import styled from "styled-components";
import Lenis from "@studio-freight/lenis";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

import { BodyContainer, Section } from "./style/PageContainers";

import Logo from "./pages/0Logo.page.jsx";
import QuemSomos from "./pages/1QuemSomos.page.jsx";
import ComoFunciona from "./pages/2ComoFunciona.page.jsx";
import Buscamos from "./pages/4Buscamos.page.jsx";
import Contribuicao from "./pages/3ContribuicaoInfo.page.jsx";
import Historico from "./pages/5Historico.jsx.jsx";
import Balanco from "./pages/6Balanco.page.jsx";
import Contato from "./pages/7Contato.page.jsx";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <BodyContainer>
        <Logo />
        <QuemSomos />
        <ComoFunciona />
        <Contribuicao />
        <Buscamos />
        <Historico />
        <Balanco />
        <Contato />
      </BodyContainer>
    </React.Fragment>
  );
}

const LogoSection = styled(Section)`
  background-color: black;
  width: 100%;
  img {
    height: 800px;
  }
`;

export default App;
