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
        <EnderecoContatoContainer>
          <EnderecoContato>
            <h1>CONTATO E ENDEREÇO</h1>
            <ContatoEnderecoInfo>
              <ContactLinkContainer>
                <ContactLink href="tel:+551138194205" draggable="false">
                  <StyledIconContact icon="material-symbols:add-call-rounded" />
                  +55 11 3819-4205
                </ContactLink>
                <ContactLink
                  href="mailto:contato@institutochao.org"
                  draggable="false"
                >
                  <StyledIconContact icon="material-symbols:outgoing-mail" />
                  contato@institutochao.org
                </ContactLink>
                <ContactLink
                  href="https://maps.app.goo.gl/YxRLDpG2yAKwpt9V6"
                  draggable="false"
                >
                  <StyledIconContact icon="flowbite:map-pin-alt-solid" />
                  <span>
                    Rua Harmonia, 114 - Vila Madalena <br /> São Paulo / SP -
                    05435-000 - BR
                  </span>
                </ContactLink>
              </ContactLinkContainer>
              {isMobile ? (
                <SocialLinksContainer>
                  <LinkWrapper>
                    <a href="https://www.facebook.com/institutochao/">
                      <StyledIconSocial icon="simple-icons:facebook" />
                    </a>
                  </LinkWrapper>

                  <LinkWrapper>
                    <a href="https://www.instagram.com/institutochao">
                      <StyledIconSocial icon="simple-icons:instagram" />
                    </a>
                  </LinkWrapper>
                </SocialLinksContainer>
              ) : (
                <div />
              )}
            </ContatoEnderecoInfo>
          </EnderecoContato>
        </EnderecoContatoContainer>
        <SectionRightContainer>
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
              <h1>HORÁRIO</h1>
            </HorariosRight>
          </HorarioContainer>
          {isMobile ? (
            <div />
          ) : (
            <SocialLinksContainer>
              <LinkWrapper>
                <a href="https://www.facebook.com/institutochao/">
                  <StyledIconSocial icon="simple-icons:facebook" />
                </a>
              </LinkWrapper>

              <LinkWrapper>
                <a href="https://www.instagram.com/institutochao">
                  <StyledIconSocial icon="simple-icons:instagram" />
                </a>
              </LinkWrapper>
            </SocialLinksContainer>
          )}
        </SectionRightContainer>
      </InfosContainer>
    </ContatoSection>
  );
}

const ContatoSection = styled(Section)`
  max-height: 100dvh;
  background-color: var(--color-salmon);
  color: white;
  overflow: hidden;
`;

const InfosContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: column-reverse;
  align-items: end;
  justify-content: space-between;

  width: 97svw;
  min-height: 90dvh;
  margin-top: 40px;

  /* background-color: #80fe95ab; */
  h1,
  h2 {
    font-family: var(--title-font);
    font-weight: var(--title-font-weight);
  }
  @media (min-width: 768px) {
    flex-direction: row;
    margin: 0px;
  }

  svg {
    fill: white;
  }
`;

const EnderecoContatoContainer = styled.div`
  /* height: 100%; */
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: space-between;
  user-select: text;

  h1 {
    font-size: clamp(24px, 12svw, 130px);
    white-space: nowrap;
    margin-bottom: 1svh;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: clamp(24px, 8svw, 120px);
    }
  }

  /* background-color: #80ccfe4c; */
`;

const EnderecoContato = styled.div`
  /* background-color: #80fec3ab; */
`;

const ContatoEnderecoInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  font-size: clamp(18px, 2.2svw, 24px);
  /* background-color: #a76b21; */

  div:nth-child(1) {
    display: flex;
    /* flex-direction: column; */
  }
  div:nth-child(2) {
    display: flex;
    /* flex-direction: column; */
  }
  .StyledIcon {
    width: 20px;
    height: 20px;
  }

  @media (min-width: 500px) {
    font-size: clamp(22px, 2.2svw, 26px);
  }
  @media (min-width: 768px) {
    font-size: clamp(18px, 4svw, 42px);
    flex-direction: row;
    justify-content: space-between;
    div:nth-child(2) {
      display: flex;
      align-items: end;
    }
  }
`;

const HorarioContainer = styled.div`
  height: 100%;
  /* width: fit-content; */
  width: fit-content;

  display: flex;
  flex-direction: row;
  align-items: start;
  /* justify-content: end; */

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
  }

  /* background-color: #fe80ceab; */
`;

const HorariosLeft = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;

  /* background-color: #4c008267; */

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
  }
`;

const HorariosRight = styled.div`
  font-size: clamp(32px, 2dvw, 120px);
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;

  writing-mode: vertical-rl;
  h1 {
    font-size: clamp(32px, 19svh, 130px);
  }

  @media (min-width: 768px) {
    font-size: clamp(32px, 19svh, 160px);
  }
  /* background-color: #8834c567; */
`;

const HorariosLista = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  height: fit-content;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
    /* height: 30%; */
  }

  /* background-color: #ff149160; */
`;

const SectionRightContainer = styled.div`
  height: 100%;
  width: 55dvw;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #ff149160; */
`;

const Horario = styled.div`
  font-size: clamp(16px, 2dvw, 32px);
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: end;
  white-space: nowrap;

  span:nth-child(2) {
    font-weight: 300;
    font-size: smaller;
    margin-top: 3px;
    margin-bottom: 1.5svh;
  }
`;

const ContactLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: #00008b34; */
`;

const ContactLink = styled.a`
  display: flex;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  user-select: text;

  &:hover {
    background-color: white;
    color: var(--color-salmon);
  }

  /* background-color: #00008b34; */
`;

const SocialLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: end;
  /* width: 25%; */
  /* width: fit-content; */
  /* height: 100%; */
  /* background-color: #14ff575f; */

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: start;
    justify-content: end;
    width: fit-content;
  }

  @media (min-width: 768px) {
    width: fit-content;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
  }
`;

const LinkWrapper = styled.div`
  @media (min-width: 768px) {
    margin: 0 15px;
    cursor: pointer;
    border-radius: 1dvw;
    &:hover {
      background-color: white;
    }
  }
`;

const StyledIconSocial = styled(Icon)`
  width: 60px;
  height: 60px;
  margin: 5px;
  &:hover {
    color: var(--color-salmon);
  }

  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 768px) {
    width: 8dvw;
    height: 100%;
    margin: 5px;
  }
`;

const StyledIconContact = styled(Icon)`
  width: clamp(24px, 3dvw, 36px);
  height: clamp(24px, 3dvw, 36px);
`;

export default Contato;
