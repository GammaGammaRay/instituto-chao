import React from "react";
import { styled } from "styled-components";

import { Section } from "../style/PageContainers";

function Logo() {
  return (
    <LogoSection>
      <LogoPage>
        <img
          type="image/svg+xml"
          src="chao_logo_preto-no-branco.svg"
          alt="Logo Instituto Chão"
        />
      </LogoPage>
    </LogoSection>
  );
}

const LogoPage = styled.div`
  background-color: black;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
  }
`;

const LogoSection = styled(Section)`
  scroll-snap-align: unset;
  height: 100%;
`;

export default Logo;
