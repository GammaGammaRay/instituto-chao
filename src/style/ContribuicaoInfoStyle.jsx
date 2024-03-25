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
  align-items: center;
  justify-content: space-around;
  height: 100svh;
  width: 90svw;

  @media (min-width: 768px) {
    max-width: 96svw;
    flex-direction: row;
    justify-content: space-between;
  }

  /* background-color: #d3d3d330; */
`;

export const ContribuicaoColLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    /* height: 50svh; */
    align-items: start;
    margin-right: 2svw;
  }

  /* @media (min-width: 1300px) {
    justify-content: space-between;
  } */

  /* background-color: #f080806b; */
`;

export const ContribuicaoColRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 768px) {
    width: 40svw;
    height: 50svh;
  }

  /* background-color: lightgreen; */
`;

export const Line = styled.div`
  width: 100%;
  /* background-color: #3d70cf6b; */
  /* margin: 5svh 0px; */
`;

export const LineVert = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const LineVertManutencao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  /* text-align: end; */

  @media (min-width: 768px) {
    align-items: start;
    width: 100%;
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
  font-size: clamp(26px, 3svw, 40px);

  font-weight: 400;

  @media (min-width: 768px) {
    font-size: clamp(46px, 4svw, 80px);
    font-weight: 400;
  }

  /* background-color: lightblue; */
`;

export const ContribuicaoSugerida = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

export const LineInfoBold = styled.span`
  font-size: clamp(30px, 3svw, 50px);
  line-height: 0.75;
  /* transform: translateY(5px); */
  &.contribuicao {
    font-size: 4svw;
  }
  @media (min-width: 768px) {
    font-size: clamp(50px, 5svw, 50px);
    font-size: 7svw;
    line-height: 0.75;
  }
  /* background-color: blanchedalmond; */
`;

export const LineInfoBoldRight = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: end;
  text-align: end;

  font-size: 1.5svw;

  /* background-color: blanchedalmond; */

  @media (min-width: 768px) {
    justify-content: start;
    text-align: start;
    /* font-size: 2svw; */
  }
`;

export const LineInfoPercentage = styled.span`
  font-size: 10svw;
  line-height: 0.75;
  /* text-align: center; */
  /* background-color: #dc143c60; */

  @media (min-width: 768px) {
    /* font-size: clamp(5rem, 8rem, 8rem); */
  }
`;

export const LineInfoArrecadacao = styled.span`
  font-size: clamp(12px, 1svw, 24px);
  overflow-wrap: break-word; /* Use overflow-wrap instead of word-wrap */
  text-align: end;
  /* display: flex;
  justify-content: end;
  align-items: end; */
  font-family: "Grotesk";
  font-weight: 100;
  /* background-color: #deb8877b; */

  @media (min-width: 768px) {
    text-align: start;
    font-weight: 500;
    max-width: 15svw;
    margin: 0 0.6svw;
  }
`;

export const LineContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  max-width: 70%;
  margin-right: 2svw;
  /* font-size: 1.5em; */
  /* background-color: #0000ff2f; */

  @media (min-width: 768px) {
    font-size: 1em;
    /* font-size: clamp(0.5em, 1em, 2em); */
  }
  span {
    overflow: visible;
  }
`;
export const LineContentRight = styled.div`
  font-size: clamp(16px, 4svw, 80px);
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: end;
  /* background-color: #00800067; */

  /* span {
    font-size: x-small;
  } */

  &.porcentagemContribuicao {
    flex-direction: row;
    justify-content: end;
  }

  @media (min-width: 768px) {
    justify-content: end;

    &.porcentagemContribuicao {
      flex-direction: row;
    }
  }
`;

export const IconWrapper = styled(Icon)`
  /* width: 10svw; */
  font-size: clamp(50px, 5svw, 100px);
  margin: 3svh 0;
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
  LineInfoPercentage,
  LineInfoArrecadacao,
  LineContentLeft,
  LineContentRight,
  IconWrapper,
};
