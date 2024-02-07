import React, { useContext } from "react";
import {
  ContentContainer,
  HorizontalTitle,
  Section,
} from "../style/PageContainers";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { MobileContext } from "../context/mobileContext";

function Contato() {
  const isMobile = useContext(MobileContext);
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
        <RightDiv>
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
            </HorariosLeft>
            <HorariosRight>
              <h2>HORÁRIO</h2>
            </HorariosRight>
          </HorarioContainer>
          {!isMobile ? (
            <SocialLinksContainer>
              <LinkWrapper>
                <a href="https://www.facebook.com/institutochao/">
                  <Icon icon="simple-icons:facebook" width="7em" />
                </a>
              </LinkWrapper>

              <LinkWrapper>
                <a href="https://www.facebook.com/institutochao/">
                  <Icon icon="simple-icons:instagram" width="7em" />
                </a>
              </LinkWrapper>
            </SocialLinksContainer>
          ) : (
            <div></div>
          )}
        </RightDiv>
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
  padding: 15px;

  display: flex;
  flex-direction: column-reverse;
  align-items: end;
  justify-content: space-between;

  height: 90%;
  width: 100%;
  /* background-color: #80fe95ab; */
  padding-bottom: 40px;
  padding-top: 60px;
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
      font-size: 5em;
    }
  }
`;

const ContatoEnderecoContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  height: 50%;

  font-size: 26px;
  /* background-color: #206bad6a; */

  span {
    margin-bottom: 6px;
  }

  h2 {
    font-size: 10dvw;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    width: 90%;
    justify-content: end;
    h2 {
      font-size: clamp(5dvw, 6dvw, 7dvw);
      margin-bottom: 10px;
    }
  }
`;

const HorarioContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: end;
  width: 100%;
  height: 100%;

  h2 {
    writing-mode: vertical-rl;
    font-size: 15dvh;
  }

  @media (min-width: 768px) {
    width: 70%;
    flex-direction: row;
    h2 {
      margin-right: 16px;
    }
  }
`;
const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  justify-content: end;
  height: 100%;
  @media (min-width: 768px) {
    width: 50%;
    align-items: end;
  }
`;

const HorariosLeft = styled.div`
  height: 100%;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  /* background-color: #4c008267; */
`;
const HorariosRight = styled.div`
  height: 100%;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  /* background-color: #8834c567; */
`;

const HorariosLista = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  height: 70%;
  /* background-color: #ff149160; */
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
  height: 20%;

  /* background-color: #14ff575f; */

  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: end;
  margin-right: 20px;

  @media (min-width: 768px) {
    align-items: center;
    justify-content: end;
  }
`;

const LinkWrapper = styled.div`
  margin-left: 50px;
  cursor: pointer;
  :hover {
    color: #c4c4c4;
  }
`;

export default Contato;
