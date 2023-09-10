import React from "react";
import { Section } from "../style/PageContainers";
import { styled } from "styled-components";

function Contribuicao() {
  return (
    <ContribuicaoContainer>
      <img src="calculoContribuicao.png" alt="calculo da contribuição" />
    </ContribuicaoContainer>
  );
}

const ContribuicaoContainer = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    max-width: 90%;
  }
`;

export default Contribuicao;
