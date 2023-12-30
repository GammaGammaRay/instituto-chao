import React from "react";
import {
  ContentContainer,
  HorizontalTitle,
  Section,
} from "../style/PageContainers";
import styled from "styled-components";

function Contato() {
  return (
    <ContatoSection id="contato">
      <InfosContainer>
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
          <h2>HORÁRIO</h2>
        </HorarioContainer>
      </InfosContainer>
    </ContatoSection>
  );
}

const ContatoSection = styled(Section)`
  font-family: "Grotesk";
  letter-spacing: 0.1em;
  background-color: var(--color-salmon);
  color: white;

  /* height: 100%; */
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const InfosContainer = styled(ContentContainer)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: end;
  /* justify-content: space-between; */
  /* background-color: #f0f8ff6a; */

  h2 {
    font-family: var(--title-font);
    font-weight: var(--title-font-weight);
    font-size: calc(var(--title-font-size-horz) * 0.8);
    overflow: visible;
  }
`;

const ContatoEnderecoContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 70%;
  height: 50%;
  font-size: 25px;
  background-color: #206bad6a;

  h2 {
    /* margin-bottom: 30px; */
  }

  a {
    margin-left: 20px;
  }
`;

const HorarioContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: end;
  background-color: #892be22b;
  width: 30%;
  height: 100%;

  h2 {
    writing-mode: vertical-rl;
    font-size: calc(var(--title-font-size-horz) * 1.2);
  }
`;

const HorariosLista = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 70%;
  background-color: #ff149160;
`;

const Horario = styled.div`
  font-size: 24px;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  span:nth-child(2) {
    font-weight: 100;
    font-size: smaller;
  }
`;

export default Contato;
