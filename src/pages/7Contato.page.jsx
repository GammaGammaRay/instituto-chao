import React from "react";
import {
  ContentContainer,
  HorizontalTitle,
  Section,
} from "../style/PageContainers";
import styled from "styled-components";
import { Icon } from "@iconify/react";

function Contato() {
  return (
    <ContatoSection id="contato">
      <InfosContainer>
        <ContatoEnderecoContainer>
          <h2>CONTATO E ENDEREÇO</h2>
          <span>+55 11 3819-4205</span>
          <span>
            <a href="mailto:contato@institutochao.org">
              contato@institutochao.org
            </a>
          </span>
          <span>Rua Harmonia, 114 - Vila Madalena</span>
          <span>São Paulo / SP - 05435-000 - BR</span>
        </ContatoEnderecoContainer>

        <HorarioContainer>
          <HorariosLeft>
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
            <SocialLinksContainer>
              <a href="https://www.facebook.com/institutochao/">
                <LinkWrapper icon="simple-icons:facebook" width="5em" />
              </a>

              <a href="https://www.facebook.com/institutochao/">
                <LinkWrapper icon="simple-icons:instagram" width="5em" />
              </a>
            </SocialLinksContainer>
          </HorariosLeft>
          <h2 style={{ fontSize: "9em" }}>HORÁRIO</h2>
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
  /* overflow: hidden; */

  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
`;

const InfosContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: column-reverse;
  align-items: start;
  justify-content: space-between;

  /* height: 100%; */
  width: 100%;
  background-color: #80fe95ab;
  padding-bottom: 40px;
  padding-top: 40px;
  /* margin-bottom: 20px; */
  /* padding-bottom: 30px; */

  h2 {
    font-family: var(--title-font);
    font-weight: var(--title-font-weight);
  }

  @media (min-width: 768px) {
    /* height: 100%; */
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
    margin-bottom: 50px;
    h2 {
      font-size: calc(var(--title-font-size-horz) * 0.8);
    }
  }
`;

const ContatoEnderecoContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  /* width: 100%; */

  font-size: 25px;
  background-color: #206bad6a;

  @media (min-width: 768px) {
    width: 50%;
    height: 50%;
  }
`;

const HorarioContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  background-color: #892be265;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: end;
    width: 50%;
  }

  h2 {
    writing-mode: vertical-rl;
  }
`;

const HorariosLeft = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  background-color: #4c008267;
`;

const HorariosLista = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  height: 70%;
  background-color: #ff149160;
  padding-right: 12px;
`;

const Horario = styled.div`
  font-size: 24px;
  display: flex;
  flex-direction: column;

  align-items: end;
  margin-bottom: 16px;
  span:nth-child(2) {
    font-weight: 100;
    font-size: smaller;
  }
`;

const SocialLinksContainer = styled.div`
  width: 100%;

  background-color: #14ff575f;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;

  @media (min-width: 768px) {
    align-items: end;
    justify-content: end;
  }
`;

const LinkWrapper = styled(Icon)`
  margin-left: 12px;
`;

export default Contato;
