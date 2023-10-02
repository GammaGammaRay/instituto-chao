import React, { useEffect, useRef } from "react";
import {
  Section,
  SectionText,
  VerticalTitle,
  ContentContainer,
} from "../style/PageContainers";
import { styled } from "styled-components";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
// import { Container } from "postcss";
// import LottieScrollTrigger from "../js/lottieScrollTrigger";

function Contribuicao() {
  const info = useRef();
  const section = useRef();

  return (
    <ContribuicaoSection id="contribuicao" ref={section}>
      <ContribuicaoContainer>
        <ContribuicaoColLeft>
          <Line>
            <LineContent>
              <LineContentLeft>
                <span>TOTAL DE</span>
                <span>CUSTOS</span>
              </LineContentLeft>
              <LineContentRight>
                <span>R$</span>
                <LineInfoBold>680.900</LineInfoBold>
              </LineContentRight>
            </LineContent>
            <LineRect />
          </Line>

          <Line>
            <LineContent>
              <LineContentLeft>
                <span>PREVISÃO DE</span>
                <span>VENDAS DE</span>
                <span>PRODUTOS</span>
              </LineContentLeft>
              <LineContentRight>
                <span>R$</span>
                <LineInfoBold>680.900</LineInfoBold>
              </LineContentRight>
            </LineContent>
            <LineRect />
          </Line>

          <Line>
            <LineContent>
              <LineContentLeft>
                <span>NECESSIDADE</span>
                <span>MÍNIMA DE</span>
                <span>ARRECADAÇÃO</span>
              </LineContentLeft>
              <LineContentRight>
                <LineInfoExtraBold>25%</LineInfoExtraBold>
                <LineInfoSmall>
                  <span>De arrecadações</span>
                  <span>para pagar os custos</span>
                  <span>do espaço e do</span>
                  <span>nosso trabalho</span>
                </LineInfoSmall>
              </LineContentRight>
            </LineContent>
            <LineRect />
          </Line>
        </ContribuicaoColLeft>
        <ContribuicaoColRight>
          <LineVert>
            <LineContentVert>
              <LineInfoBold>
                <span>CONTRIBUIÇÃO</span>
                <br />
                <span>SUGERIDA</span>
              </LineInfoBold>
              <LineInfoExtraBold>
                <span>30%</span>
              </LineInfoExtraBold>
            </LineContentVert>
            <LineRect />
          </LineVert>
          <LineVert>
            OU MAIS
            <LineRect />
          </LineVert>
        </ContribuicaoColRight>
      </ContribuicaoContainer>
    </ContribuicaoSection>
  );
}

const ContribuicaoSection = styled(Section)`
  padding-top: var(--nav-height);
  padding-bottom: var(--nav-height);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: var(--color-brown2);
  box-sizing: border-box;

  @media (min-width: 768px) {
    flex-direction: column;
  }

  color: white;
`;

const ContribuicaoContainer = styled(ContentContainer)`
  width: 95%;
  height: 90%;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: 90%;
    flex-direction: row;
    height: 100%;
  }
`;

const ContribuicaoColLeft = styled.div`
  height: 100%;
  width: 67.5%;

  margin-bottom: 55px;

  @media (min-width: 768px) {
    width: 55%;
    height: 100%;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContribuicaoColRight = styled.div`
  height: 100%;
  width: 37.5%;
`;

const Line = styled.div`
  width: 100%;
  height: fit-content;
`;

const LineVert = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

const LineRect = styled.div`
  height: 2px;
  width: 100%;
  background-color: white;
`;

const LineContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;

  font-weight: 700;
  font-size: calc(var(--title-font-size-horz) * 0.2);
`;

const LineContentVert = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  background-color: green;

  font-weight: 700;
  font-size: calc(var(--title-font-size-horz) * 0.2);
`;

const LineInfoBold = styled.span`
  font-size: calc(var(--title-font-size-horz) * 0.45);
  transform: translateY(5px);
  @media (min-width: 768px) {
    font-size: calc(var(--title-font-size-horz) * 0.35);
  }
`;

const LineInfoExtraBold = styled.span`
  font-size: calc(var(--title-font-size-horz) * 0.7);
  transform: translateY(5px);
  @media (min-width: 768px) {
    font-size: calc(var(--title-font-size-horz) * 0.5);
  }
`;

const LineInfoSmall = styled.span`
  font-weight: 700;
  font-size: calc(var(--title-font-size-horz) * 0.15);
  transform: translateY(5px);
`;

const LineContentLeft = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  span {
    overflow: visible;
  }
`;
const LineContentRight = styled.div`
  font-size: calc(var(--title-font-size-horz) * 0.25);
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: end;
`;

export default Contribuicao;
