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
              <LineContentRight>
                <LineInfoExtraBold>25%</LineInfoExtraBold>
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
  height: calc(100% - var(--nav-height));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: var(--color-brown2);
  overflow-x: hidden;
  overflow-y: hidden;

  @media (min-width: 768px) {
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
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  padding-bottom: 16px;
  padding-top: 16px;

  @media (min-width: 768px) {
    align-items: center;
    width: 80%;
    flex-direction: row;
    justify-content: space-between;
  }

  /* background-color: lightgrey; */
`;

const ContribuicaoColLeft = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: start;

  /* background-color: #cd5c5ca3; */

  @media (min-width: 768px) {
    /* width: 70%; */
    justify-content: space-between;
  }

  /* background-color: lightcoral; */
`;

const ContribuicaoColRight = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: fit-content;
    margin-left: 80px;
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
`;
const LineVertManutencao = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
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
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  font-weight: 400;
  font-size: calc(var(--title-font-size-horz) * 0.5);
`;

const LineInfoBold = styled.span`
  font-size: calc(var(--title-font-size-horz));
  transform: translateY(5px);
  @media (min-width: 768px) {
    font-size: calc(var(--title-font-size-horz) * 0.4);
  }
`;

const LineInfoBoldRight = styled.span`
  width: fit-content;
  display: flex;
  flex-direction: column;

  font-size: calc(var(--title-font-size-horz));
  transform: translateY(5px);

  @media (min-width: 768px) {
    font-size: calc(var(--title-font-size-horz) * 0.18);
  }
`;

const LineInfoExtraBold = styled.span`
  font-size: calc(var(--title-font-size-horz) * 3);
  transform: translateY(5px);
  @media (min-width: 768px) {
    font-size: calc(var(--title-font-size-horz) * 0.5);
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
  font-size: calc(var(--title-font-size-horz) * 0.09);

  /* background-color: #0000ff82; */
`;

const LineContentLeft = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;

  font-size: 2rem;

  /* background-color: #b8870b8c; */
  span {
    overflow: visible;
  }
`;
const LineContentRight = styled.div`
  font-size: calc(var(--title-font-size-horz) * 0.25);
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: end;
  /* background-color: green; */
`;

const IconWrapper = styled(Icon)`
  width: 45px;
  height: 45px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export default Contribuicao;
