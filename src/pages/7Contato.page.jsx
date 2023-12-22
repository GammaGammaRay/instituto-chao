import React from "react";
import { ContentContainer, Section } from "../style/PageContainers";
import styled from "styled-components";

function Contato() {
  return (
    <ContatoSection id="contato">
      <ContentContainer>
        <HorarioContainer>
          <HorariosLista>
            <Horario>
              <span>2ᵃ FEIRA</span>
              <span>8 ÀS 14h</span>
            </Horario>
            <Horario>
              <span>3ᵃ a 6ᵃ FEIRA</span>
              <span>8 ÀS 19h</span>
            </Horario>
            <Horario>
              <span>SÁB. E DOM.</span>
              <span>8 ÀS 17h</span>
            </Horario>
          </HorariosLista>
          <HorarioTitle>HORÁRIO</HorarioTitle>
        </HorarioContainer>
        <ContatoEnderecoContainer>
          <h2>CONTATO E ENDEREÇO</h2>
          <span>
            +55 11 3819-4205
            <a href="mailto:contato@institutochao.org">
              contato@institutochao.org
            </a>
          </span>
          <span>Rua Harmonia, 114 - Vila Madalena</span>
          <span>São Paulo / SP - 05435-000 - BR</span>
        </ContatoEnderecoContainer>
      </ContentContainer>
    </ContatoSection>
  );
}

const ContatoSection = styled(Section)`
  font-family: "Grotesk";
  letter-spacing: 0.1em;
  background-color: var(--color-salmon);
  color: white;
`;

const HorarioContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const HorarioTitle = styled.div`
  font-family: var(--title-font);
  font-weight: var(--title-font-weight);
  font-size: var(--title-font-size-horz);
  writing-mode: vertical-rl;
`;

const HorariosLista = styled.div`
  display: flex;
  flex-direction: column;
`;

const Horario = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const ContatoEnderecoContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  font-size: 25px;

  h2 {
    font-family: "MDNichrome";
    margin-bottom: 30px;
    font-family: var(--title-font);
    font-weight: var(--title-font-weight);
    font-size: calc(var(--title-font-size-horz) * 0.5);
  }

  a {
    margin-left: 20px;
  }
`;

export default Contato;
