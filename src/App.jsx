import React from "react";
import Nav from "./components/Nav.component.jsx";
import Lenis from "@studio-freight/lenis";

import { BodyContainer, Section } from "./style/PageContainers";

import styled from "styled-components";

import Logo from "./pages/0Logo.page.jsx";
import QuemSomos from "./pages/1QuemSomos.page.jsx";
import ComoFunciona from "./pages/2ComoFunciona.page.jsx";
import Buscamos from "./pages/4Buscamos.page.jsx";
import Contribuicao from "./pages/3ContribuicaoInfo.page.jsx";

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
