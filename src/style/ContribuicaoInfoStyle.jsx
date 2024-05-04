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
  height: 100dvh;
  width: 90dvw;

  @media (min-width: 768px) {
    max-width: 96dvw;
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
    /* height: 50dvh; */
    align-items: start;
    margin-right: 2dvw;
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
    width: 40dvw;
    height: 50dvh;
  }

  /* background-color: lightgreen; */
`;

export const Line = styled.div`
  width: 100%;
  /* background-color: #3d70cf6b; */
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
  font-size: clamp(26px, 3dvw, 40px);

  font-weight: 400;

  @media (min-width: 768px) {
    font-size: clamp(46px, 4dvw, 80px);
    font-weight: 400;
  }

  /* background-color: lightblue; */
`;

export const ContribuicaoSugerida = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

export const LineInfoBold = styled.span`
  font-size: clamp(30px, 3dvw, 50px);

  @media (min-width: 768px) {
    font-size: clamp(50px, 5dvw, 50px);
    font-size: 7dvw;
  }
  /* background-color: blanchedalmond; */
`;

export const LineInfoBoldRight = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: end;
  text-align: end;

  font-size: clamp(12px, 2dvw, 24px);

  /* background-color: blanchedalmond; */

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: start;
    text-align: start;
  }
`;

export const LineInfoPercentage = styled.span`
  font-size: clamp(50px, 10dvw, 48px);
  /* background-color: #dc143c60; */

  @media (min-width: 768px) {
  }
`;

export const LineInfoArrecadacao = styled.span`
  font-size: clamp(10px, 0.8dvw, 16px);
  overflow-wrap: break-word;
  text-align: end;
  font-weight: 100;
  /* background-color: #deb8877b; */

  @media (min-width: 768px) {
    font-size: clamp(12px, 0.8dvw, 16px);
    text-align: start;
    font-weight: 100;
    max-width: 25dvw;
    margin: 0 0.6dvw;
  }
`;

export const LineContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: clamp(26px, 3dvw, 40px);
  max-width: 70%;
  margin-right: 2dvw;
  /* background-color: #0000ff2f; */

  @media (min-width: 768px) {
    font-size: 1em;
    font-size: clamp(12px, 0.8dvw, 16px);
  }
  span {
    overflow: visible;
  }
`;
export const LineContentRight = styled.div`
  font-size: clamp(16px, 4dvw, 80px);
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

    &.porcentagemContribuicao {
      flex-direction: row;
    }
  }
`;

export const IconWrapper = styled(Icon)`
  /* width: 10dvw; */
  font-size: clamp(50px, 5dvw, 100px);
  margin: 3dvh 0;
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
