import styled from "styled-components";
import { Section, ContentContainer } from "./PageContainers";
import { Icon } from "@iconify/react";

export const ContribuicaoSection = styled(Section)`
  box-shadow: 0px -10px 12pxF rgba(0, 0, 0, 0.1); /* Horizontal offset, vertical offset, blur radius, color */
  font-family: "MDNichrome";
  letter-spacing: 0.1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: var(--color-brown2);

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  color: white;
  /* background-color: lightpink; */
`;

export const ContribuicaoContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-around;
  height: 100svh;
  width: 100svw;

  @media (min-width: 768px) {
    height: 80svh;
    width: 90svw;
    flex-direction: row;
    justify-content: space-around;
  }

  background-color: #d3d3d330;
`;

export const ContribuicaoColLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;

  @media (min-width: 768px) {
    padding-right: 3svw;
    /* justify-content: space-between; */
  }

  /* @media (min-width: 1300px) {
    justify-content: space-between;
  } */

  /* background-color: lightcoral; */
`;

export const ContribuicaoColRight = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;

  /* background-color: lightgreen; */
`;

export const Line = styled.div`
  width: 100%;
`;

export const LineVert = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LineVertManutencao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  @media (min-width: 768px) {
    align-items: start;
  }
`;

export const LineRect = styled.div`
  height: 2px;
  background-color: white;
`;

export const LineContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;

  font-weight: 400;
  /* font-size: 3svw; */

  @media (min-width: 768px) {
    font-weight: 400;
  }

  /* background-color: lightblue; */
`;

export const ContribuicaoSugerida = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
`;

export const LineInfoBold = styled.span`
  /* font-size: 5svw; */
  /* transform: translateY(5px); */
  &.contribuicao {
    /* font-size: 4svw; */
  }
  @media (min-width: 768px) {
    /* font-size: 7svw; */
  }
  /* background-color: blanchedalmond; */
`;

export const LineInfoBoldRight = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: end;
  text-align: end;

  /* font-size: 1.5svw; */
  /* transform: translateY(5px); */

  /* background-color: blanchedalmond; */

  @media (min-width: 768px) {
    justify-content: start;
    text-align: start;
    /* font-size: 2em; */
  }
`;

export const LineInfoExtraBold = styled.span`
  font-size: 6ssvw;
  /* text-align: center; */
  /* background-color: #dc143c60; */

  @media (min-width: 768px) {
    /* font-size: clamp(5rem, 8rem, 8rem); */
  }
`;

export const LineInfoSmall = styled.span`
  /* font-size: 3svw; */
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
    /* font-size: 2dvh; */
    text-align: start;
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const LineContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  /* font-size: 1.5em; */
  /* background-color: #0000ff58; */

  @media (min-width: 768px) {
    font-size: 1em;
    /* font-size: clamp(0.5em, 1em, 2em); */
  }
  span {
    overflow: visible;
  }
`;
export const LineContentRight = styled.div`
  /* font-size: 1em; */

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
    /* font-size: 1em; */

    &.porcentagemContribuicao {
      flex-direction: row;
    }
  }
`;

export const IconWrapper = styled(Icon)`
  /* width: 10svw; */
  /* font-size: 5svw; */
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
