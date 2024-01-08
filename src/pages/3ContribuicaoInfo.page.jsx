import React from "react";
import { Section, ContentContainer } from "../style/PageContainers";
import { styled } from "styled-components";
import { Icon } from "@iconify/react";

function Contribuicao() {
  return (
    <ContribuicaoSection id="contribuicao">
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
          <IconWrapper icon="pepicons-pop:division-circle" />

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
          <IconWrapper icon="pepicons-pop:equal-circle" />

          <Line>
            <LineContent>
              <LineContentLeft>
                <span>NECESSIDADE</span>
                <span>MÍNIMA DE</span>
                <span>ARRECADAÇÃO</span>
              </LineContentLeft>
              <LineContentRight className="vert">
                <LineInfoExtraBold className="percentageLarge">
                  25%
                </LineInfoExtraBold>
                <LineInfoSmall>
                  <span>De arrecadações </span>
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
              <LineInfoBold className="contribuicao">
                <span>CONTRIBUIÇÃO</span>
                <br />
                <span>SUGERIDA</span>
              </LineInfoBold>
              <LineInfoExtraBold className="percentageLarge">
                <span>30%</span>
              </LineInfoExtraBold>
            </LineContentVert>
            <LineRect />
          </LineVert>
          <LineVertManutencao>
            <LineInfoBoldRight>
              <span>OU MAIS</span>
              <span>Para manutencão e ampliacão</span>
              <span>(equilibra as contas e possibilita</span>
              <span>investir no projeto)</span>
            </LineInfoBoldRight>
          </LineVertManutencao>
          <LineRect />
        </ContribuicaoColRight>
      </ContribuicaoContainer>
    </ContribuicaoSection>
  );
}

const ContribuicaoSection = styled(Section)`
  box-shadow: 0px -10px 12px rgba(0, 0, 0, 0.1); /* Horizontal offset, vertical offset, blur radius, color */
  font-family: "MDNichrome";
  letter-spacing: 0.1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: var(--color-brown2);
  overflow-x: hidden;
  overflow-y: hidden;

  @media (min-width: 1300px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }

  color: white;
  /* background-color: lightpink; */
`;

const ContribuicaoContainer = styled(ContentContainer)`
  width: 98%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 16px;

  @media (min-width: 1300px) {
    align-items: center;
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }

  /* background-color: lightgrey; */
`;

const ContribuicaoColLeft = styled.div`
  width: 95%;
  height: 100%;

  /* padding-left: 40px; */
  /* padding-right: 40px; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  /* background-color: #cd5c5ca3; */
  padding-bottom: 50px;

  @media (min-width: 1300px) {
    align-items: start;
    width: 80%;
    height: 100%;
    justify-content: space-between;
    padding-bottom: 0px;
    padding-left: 50px;
    /* padding-right: 50px; */
  }

  /* background-color: lightcoral; */
`;

const ContribuicaoColRight = styled.div`
  height: fit-content;
  width: 95%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 50px;

  @media (min-width: 1300px) {
    width: 40%;
    padding-right: 50px;
    padding-left: 50px;
    flex-direction: column;
    height: fit-content;
  }

  /* background-color: lightgreen; */
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
  /* align-items: end;
  justify-content: end; */
`;
const LineVertManutencao = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: end;

  @media (min-width: 1300px) {
    align-items: start;
  }

  font-size: 1em;
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

  font-weight: 400;
  font-size: calc(var(--title-font-size-horz) * 0.4);

  @media (min-width: 768px) {
    font-weight: 400;
  }

  /* background-color: lightblue; */
`;

const LineContentVert = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  padding-bottom: 6px;
  @media (min-width: 768px) {
    align-items: center;
    padding-bottom: 0px;
  }
`;

const LineInfoBold = styled.span`
  font-size: 3em;
  transform: translateY(5px);
  &.contribuicao {
    /* font-size: clamp(20px, 50px, 80px); */
    font-size: clamp(0.5rem, 2rem, 3rem);
  }
  @media (min-width: 768px) {
    font-size: 6rem;
    &.contribuicao {
      /* font-size: clamp(20px, 50px, 80px); */
      font-size: clamp(1rem, 4rem, 6rem);
    }
  }
`;

const LineInfoBoldRight = styled.span`
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

const LineInfoExtraBold = styled.span`
  font-size: clamp(20px, 16px, 20px);
  /* background-color: #dc143c60; */

  @media (min-width: 768px) {
    font-size: 10rem;
    /* font-size: clamp(16px, 50px, 70px); */
  }
`;

const LineInfoSmall = styled.span`
  height: 100%;
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  font-weight: 500;
  font-size: 0.8em;
  @media (min-width: 768px) {
    font-size: 0.2em;
  }
`;

const LineContentLeft = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;

  font-size: 1.5em;

  @media (min-width: 768px) {
    /* font-size: 1em; */
    font-size: clamp(1em, 2em, 1em);
  }
  span {
    overflow: visible;
  }
`;
const LineContentRight = styled.div`
  font-size: 1em;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: end;
  /* background-color: green; */
  &.vert {
    flex-direction: column;
  }
  @media (min-width: 768px) {
    font-size: 1em;
    padding-left: 50px;
    &.vert {
      flex-direction: row;
    }
  }
`;

const IconWrapper = styled(Icon)`
  width: 45px;
  height: 45px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export default Contribuicao;
