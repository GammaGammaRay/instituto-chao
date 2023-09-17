import React from "react";
import { Section } from "../style/PageContainers";
import { styled } from "styled-components";

function Contribuicao() {
  return (
    <ContribuicaoSection>
      <img src="calculoContribuicao.png" alt="calculo da contribuição" />
    </ContribuicaoSection>
  );
}

const ContribuicaoSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-brown2);
  img {
    max-width: 90%;
  }
`;

export default Contribuicao;
