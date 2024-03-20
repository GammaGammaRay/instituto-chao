import React, { useContext } from "react";
import { ContentContainer, Section } from "../style/PageContainers";
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
          <h1>CONTATO E ENDEREÇO</h1>
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
  /* letter-spacing: 0.12em; */
  background-color: var(--color-salmon);
  color: white;
`;

const InfosContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: column-reverse;
  align-items: end;

  padding: 0px 0px !important;
  height: 100%;
  /* max-width: 100svw; */
  width: 100svw;
  margin: 10px;

  background-color: #80fe95ab;
  h1,
  h2 {
    font-family: var(--title-font);
    font-weight: var(--title-font-weight);
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ContatoEnderecoContainer = styled.div`
  /* margin-left: auto; */
  /* display: flex; */
  flex-direction: column;
  font-size: clamp(18px, 1.8svw, 22px);

  /* width: fit-content; */
  /* width: 80%; */

  background-color: #206bad6a;

  h1 {
    font-size: clamp(24px, 8svw, 110px);
    white-space: nowrap;
  }
`;

const ContatoEnderecoInfo = styled.div`
  display: flex;

  background-color: #a76b21;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    div:nth-child(1) {
      display: flex;
      flex-direction: column;
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

  background-color: #0000ff3b;

  h2 {
    writing-mode: vertical-rl;
  }

  @media (min-width: 768px) {
    align-items: start;
    justify-content: end;
    flex-direction: row;
    h2 {
      h2 {
        font-size: 20dvh;
      }
    }
  }
`;
const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;

  height: 100%;

  background-color: darkcyan;
`;

const HorariosLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;

  /* background-color: #4c008267; */

  @media (min-width: 768px) {
    height: 30%;
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
  /* background-color: #ff149160; */
`;

const Horario = styled.div`
  font-size: large;
  display: flex;
  flex-direction: column;
  align-items: end;
  white-space: nowrap;
  font-weight: 600;

  span:nth-child(2) {
    font-weight: 100;
    font-size: smaller;
    margin-top: 0.2svh;
    margin-bottom: 1.5svh;
  }
`;

const SocialLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;

  background-color: #14ff575f;

  @media (min-width: 768px) {
    /* width: 100%; */
    align-items: center;
    justify-content: end;
  }
`;

const LinkWrapper = styled.div`
  cursor: pointer;
  :hover {
    color: #c4c4c4;
  }
`;

const StyledIcon = styled(Icon)`
  width: 80px;
  height: 100px;
`;

export default Contato;
