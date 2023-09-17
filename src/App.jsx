import React from "react";
import Nav from "./components/Nav.component.jsx";
import Lenis from "@studio-freight/lenis";

import { BodyContainer, Section } from "./style/PageContainers";

import styled from "styled-components";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <BodyContainer>
        <LogoSection>
          <img
            className="logo"
            type="image/svg+xml"
            src="chao_logo_preto-no-branco.svg"
            alt="Logo Instituto Chão"
          />
        </LogoSection>
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
