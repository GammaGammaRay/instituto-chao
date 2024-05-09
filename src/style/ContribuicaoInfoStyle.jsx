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
  width: 96dvw;

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

  /* background-color: #f080806b; */
`;

export const ContribuicaoColRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 768px) {
    justify-content: center;
    align-items: center;
    width: 40dvw;
    height: 50dvh;
  }

  /* background-color: lightgreen; */
`;

export const Line = styled.div`
  width: 96dvw;
  @media (min-width: 768px) {
    width: 100%;
  }
  /* background-color: #3d70cf6b; */
`;

export const LineVert = styled.div`
  display: flex;
  flex-direction: column;
  width: 96dvw;
  /* background-color: #3d70cf6b; */
  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const LineVertManutencao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  font-size: clamp(26px, 3dvw, 40px);

  @media (min-width: 768px) {
    align-items: start;
  }
  /* background-color: #a14dbb6b; */
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
    font-size: clamp(46px, 4dvw, 50px);
    font-weight: 400;
  }

  /* background-color: lightblue; */
`;

export const ContribuicaoSugerida = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;
  /* line-height: 0.8; */
  @media (min-width: 768px) {
    align-items: start;
    flex-direction: column;
  }
  /* background-color: #3d70cf6b; */
`;

export const LineInfoBold = styled.span`
  line-height: 0.8;
  font-size: clamp(40px, 5dvw, 90px);
  @media (min-width: 768px) {
    font-size: clamp(50px, 5dvw, 90px);
  }
  /* background-color: blanchedalmond; */
`;

export const LineInfoBoldRight = styled.span`
  font-family: "Hanken Grotesk", sans-serif;
  font-weight: 400;
  line-height: 0.8;
  letter-spacing: 0.05em;
  font-weight: 600;
  /* font-size: clamp(11px, 0.8dvw, 16px); */
  font-size: clamp(12px, 2dvw, 24px);
  display: flex;
  flex-direction: column;
  justify-content: end;
  text-align: end;

  /* background-color: blanchedalmond; */

  @media (min-width: 768px) {
    font-size: clamp(12px, 1.5dvw, 24px);
    flex-direction: column;
    justify-content: start;
    text-align: start;
  }
`;

export const LineInfoPercentage = styled.span`
  font-size: clamp(73px, 5dvw, 48px);
  /* background-color: #dc143c60; */
  line-height: 0.8;

  @media (min-width: 768px) {
    font-size: clamp(100px, 10dvw, 140px);
  }
`;

export const LineInfoArrecadacao = styled.span`
  font-family: "Hanken Grotesk", sans-serif;
  font-weight: 400;
  line-height: 0.8;
  font-size: clamp(11px, 0.8dvw, 16px);
  letter-spacing: 0.05em;
  font-weight: 600;
  margin-right: 4px;
  width: 40%;
  max-width: 200px;
  text-align: end;
  /* background-color: #deb8877b; */

  @media (min-width: 768px) {
    font-size: clamp(12px, 0.8dvw, 16px);
    text-align: end;
    max-width: 35%;
    margin: 5px 0.6dvw;
  }
`;

export const LineContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: clamp(28px, 5dvw, 55px);
  max-width: 60%;
  /* height: 100%; */
  margin-right: 2dvw;

  @media (min-width: 768px) {
    max-width: 50%;
    font-size: clamp(32px, 4.5dvw, 64px);
  }
  span {
    overflow: visible;
  }
  /* background-color: #0000ff2f; */
`;
export const LineContentRight = styled.div`
  font-size: clamp(16px, 4dvw, 60px);
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: end;
  /* background-color: #00800067; */

  @media (min-width: 768px) {
    font-size: clamp(16px, 4dvw, 50px);
    justify-content: end;
  }
`;

export const IconWrapper = styled(Icon)`
  font-size: clamp(50px, 5dvw, 100px);
  margin: 3dvh 0;
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
