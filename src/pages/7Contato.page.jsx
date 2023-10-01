import React from "react";
import { ContentContainer, Section } from "../style/PageContainers";
import styled from "styled-components";

function Contato() {
  return (
    <ContatoSection>
      <ContatoBG />
      <ContatoInfoContainer>
        <h2>CONTATO E ENDEREÇO</h2>
        <span>+55 11 3819-4205</span>
        <span>
          <a href="mailto:contato@institutochao.org">
            contato@institutochao.org
          </a>
        </span>
        <span>Rua Harmonia, 114 - Vila Madalena</span>
        <span>São Paulo / SP - 05435-000 - BR</span>
      </ContatoInfoContainer>
    </ContatoSection>
  );
}

const ContatoSection = styled(Section)``;
const ContatoInfoContainer = styled(ContentContainer)``;
const ContatoBG = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--color-salmon);

  position: absolute;
  z-index: -1;
`;
export default Contato;
