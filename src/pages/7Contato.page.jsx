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
        {!isMobile ? (
          <div></div>
        ) : (
          <SocialLinksContainer>
            <LinkWrapper>
              <a href="https://www.facebook.com/institutochao/">
                <StyledIcon icon="simple-icons:facebook" />
              </a>
            </LinkWrapper>

            <LinkWrapper>
              <a href="https://www.instagram.com/institutochao">
                <StyledIcon icon="simple-icons:instagram" />
              </a>
            </LinkWrapper>
          </SocialLinksContainer>
        )}
        <ContatoEnderecoContainer>
          <h2>CONTATO E ENDEREÇO</h2>
          <ContatoEnderecoInfo>
            <div>
              <span>+55 11 3819-4205</span>
              <span>
                <a href="mailto:contato@institutochao.org">
                  contato@institutochao.org
                </a>
              </span>
            </div>
            <div>
              <span>Rua Harmonia, 114 - Vila Madalena</span>
              <span>São Paulo / SP - 05435-000 - BR</span>
            </div>
          </ContatoEnderecoInfo>
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
                  <StyledIcon icon="simple-icons:facebook" />
                </a>
              </LinkWrapper>

              <LinkWrapper>
                <a href="https://www.instagram.com/institutochao">
                  <StyledIcon icon="simple-icons:instagram" />
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
  letter-spacing: 0.12em;
  background-color: var(--color-salmon);
  color: white;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
`;

const InfosContainer = styled(ContentContainer)`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column-reverse;
  align-items: end;
  justify-content: space-between;

  /* background-color: #80fe95ab; */

  h2 {
    margin-left: 12px;
    font-family: var(--title-font);
    font-weight: var(--title-font-weight);
  }

  @media (min-width: 768px) {
    height: 100%;
    padding: 15px;
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
    h2 {
      margin-left: 0px;
      font-size: 5em;
    }
  }
`;

const ContatoEnderecoContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  font-size: 24px;

  /* background-color: #206bad6a; */

  span {
    margin-bottom: 6px;
  }

  h2 {
    font-size: 10dvw;
    margin-bottom: 10px;
  }

  @media (min-width: 768px) {
    font-size: 34px;
    width: 90%;
    justify-content: end;
    padding-bottom: 50px;
    margin-left: 50px;
    h2 {
      font-size: max(5dvw, 7dvw);
      margin-bottom: 40px;
    }
  }
`;

const ContatoEnderecoInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 12px;
  margin-top: 12px;

  /* background-color: #a76b21; */
  span {
    margin-bottom: 12px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  @media (min-width: 768px) {
    width: 90%;
    height: 90px;
    flex-direction: row;
    justify-content: space-between;
    span {
      margin-bottom: 0px;
    }

    div {
      justify-content: space-between;
    }

    div:nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: start;
    }
    div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: end;
    }
  }
`;

const HorarioContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  width: 100%;

  /* background-color: blue; */

  h2 {
    writing-mode: vertical-rl;
    font-size: 15dvh;
  }

  @media (min-width: 768px) {
    align-items: start;
    justify-content: end;
    width: 70%;
    flex-direction: row;
    h2 {
      font-size: 20dvh;
      margin-right: 16px;
    }
  }
`;
const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  padding-right: 20px;

  /* background-color: darkcyan; */

  @media (min-width: 768px) {
    width: 100%;
    justify-content: space-between;
    align-items: end;
    height: 100%;
    width: 50%;
  }
`;

const HorariosLeft = styled.div`
  height: 50%;
  width: 100%;
  min-width: 250px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;

  /* background-color: #4c008267; */

  @media (min-width: 768px) {
    margin-top: 20px;
    height: 30%;
    min-height: 350px;
  }
`;

const HorariosRight = styled.div`
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
  justify-content: space-between;
  height: 100%;
  width: 100%;
  /* background-color: #ff149160; */

  @media (min-width: 768px) {
    padding-right: 12px;
  }
`;

const Horario = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: end;

  /* background-color: darkblue; */

  @media (min-width: 768px) {
    margin-bottom: 0px;
    font-size: 34px;
  }

  span:nth-child(2) {
    font-weight: 100;
    font-size: smaller;
  }
`;

const SocialLinksContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;

  /* background-color: #14ff575f; */

  @media (min-width: 768px) {
    height: 15%;
    align-items: center;
    justify-content: end;
  }
`;

const LinkWrapper = styled.div`
  margin-left: 30px;
  cursor: pointer;
  :hover {
    color: #c4c4c4;
  }
  @media (min-width: 768px) {
    margin-right: 50px;
    width: 120px;
    height: 120px;
  }
`;

const StyledIcon = styled(Icon)`
  width: 80px;
  height: 100px;
  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export default Contato;
