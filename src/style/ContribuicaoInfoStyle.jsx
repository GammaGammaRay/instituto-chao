import styled from "styled-components";
import { Section, ContentContainer } from "./PageContainers";
import { Icon } from "@iconify/react";

export const ContribuicaoSection = styled(Section)`
  box-shadow: 0px -10px 12px rgba(0, 0, 0, 0.1); /* Horizontal offset, vertical offset, blur radius, color */
  font-family: "MDNichrome";
  letter-spacing: 0.1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: var(--color-brown2);
  /* overflow-x: hidden; */
  /* overflow-y: hidden; */

  @media (min-width: 1300px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* box-sizing: border-box; */
  }

  color: white;
  /* background-color: lightpink; */
`;

export const ContribuicaoContainer = styled(ContentContainer)`
  width: 98%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 1300px) {
    align-items: center;
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }

  background-color: lightgrey;
`;

export const ContribuicaoColLeft = styled.div`
  width: 95%;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  /* background-color: #cd5c5ca3; */

  @media (min-width: 1300px) {
    align-items: start;
    width: 80%;
    justify-content: space-between;
  }

  /* background-color: lightcoral; */
`;

export const ContribuicaoColRight = styled.div`
  width: 95%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1300px) {
    width: 40%;
    flex-direction: column;
  }

  /* background-color: lightgreen; */
`;

export const Line = styled.div`
  width: 100%;
`;

export const LineVert = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: end;
  justify-content: end; */
`;
export const LineVertManutencao = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;

  @media (min-width: 1300px) {
    align-items: start;
  }

  font-size: 1em;
`;

export const LineRect = styled.div`
  height: 2px;
  width: 100%;
  background-color: white;
`;

export const LineContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;

  font-weight: 400;
  font-size: 3dvw;

  @media (min-width: 768px) {
    font-weight: 400;
  }

  /* background-color: lightblue; */
`;

export const ContribuicaoSugerida = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  @media (min-width: 768px) {
    align-items: center;
  }
`;

export const LineInfoBold = styled.span`
  font-size: 5dvw;
  transform: translateY(5px);
  &.contribuicao {
    font-size: 4dvw;
  }
  @media (min-width: 768px) {
    font-size: 7dvw;
  }
`;

export const LineInfoBoldRight = styled.span`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: end;
  text-align: end;

  font-size: 1.5em;
  /* transform: translateY(5px); */

  /* background-color: blanchedalmond; */

  @media (min-width: 768px) {
    font-size: 2em;
  }
  @media (min-width: 1300px) {
    justify-content: start;
    text-align: start;
  }
`;

export const LineInfoExtraBold = styled.span`
  font-size: 20dvw;
  width: fit-content;
  text-align: center;
  /* background-color: #dc143c60; */

  @media (min-width: 768px) {
    font-size: clamp(5rem, 8rem, 8rem);
  }
`;

export const LineInfoSmall = styled.span`
  font-size: 3dvw;
  width: 40%;
  overflow-wrap: break-word; /* Use overflow-wrap instead of word-wrap */
  text-align: end;
  display: flex;
  justify-content: end;
  align-items: end;
  /* font-weight: 100; */
  font-family: "Grotesk";
  font-weight: 100;
  /* background-color: #deb8877b; */

  @media (min-width: 768px) {
    font-size: 2dvh;
    text-align: start;
    /* font-size: 1rem; */
    font-weight: 500;
  }
`;

export const LineContentLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;

  font-size: 1.5em;
  max-width: 50%;
  /* background-color: #0000ff58; */

  @media (min-width: 768px) {
    /* font-size: 1em; */
    font-size: clamp(0.5em, 1em, 2em);
  }
  span {
    overflow: visible;
  }
`;
export const LineContentRight = styled.div`
  font-size: 1em;

  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: end;
  /* background-color: #00800067; */

  &.porcentagemContribuicao {
    flex-direction: row;
    justify-content: end;
  }

  @media (min-width: 768px) {
    justify-content: end;
    font-size: 1em;

    &.porcentagemContribuicao {
      flex-direction: row;
    }
  }
`;

export const IconWrapper = styled(Icon)`
  /* width: 50px; */
  /* background-color: #ff69b499; */

  /* @media (min-width: 768px) {
    width: 100px;
  } */
`;

export default {
  ContribuicaoSection,
  ContribuicaoContainer,
  ContribuicaoColLeft,
  ContribuicaoColRight,
  Line,
  LineVert,
  LineVertManutencao,
  LineRect,
  LineContent,
  ContribuicaoSugerida,
  LineInfoBold,
  LineInfoBoldRight,
  LineInfoExtraBold,
  LineInfoSmall,
  LineContentLeft,
  LineContentRight,
  IconWrapper,
};
