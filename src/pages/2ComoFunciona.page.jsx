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

function ComoFunciona() {
  const main = useRef();
  const title = useRef();
  // const info = useRef();

  return (
    <ComoFuncionaSection ref={main} id="como-funciona">
      <ComoFuncionaContainer>
        <ComoFuncionaTitle ref={title}>
          <span>COMO</span>
          <span>FUNCIONA?</span>
        </ComoFuncionaTitle>
        <ComoFuncionaText>
          <p>
            O Chão é essencialmente um lugar de construção cotidiana de um outro
            mundo necessário. Uma associação autogestionária que funciona como
            grupo de consumo aberto, financiado coletivamente. Temos um sítio,
            uma livraria, uma feira e uma mercearia com produtos agroecológicos,
            orgânicos e artesanais.
          </p>
          <br />
          <p>
            Através desses espaços de trabalho, convidamos as pessoas a
            experimentar conosco novas formas de relação. Vamos aos poucos,
            tensionando o estabelecido, deslocando o naturalizado, suspendendo o
            automático.
          </p>
          <br />
          <p>
            Nesse coletivo desenvolvemos constantemente tecnologias de
            transformação da relação financeirizada das pessoas consigo mesmas,
            com as outras e com o mundo. Visamos quebrar a meritocracia, a
            divisão entre trabalho material e imaterial e, assim, transformar os
            valores, as práticas sociais e as relações que estabelecemos com o
            trabalho, com produtores, fornecedores e frequentadores.
          </p>
          <br />
          <p>
            Em busca do fortalecimento de todos os componentes da cadeia
            produtiva, valorizamos economicamente produtores, trabalhadores e
            tornamos o preço mais acessível dos alimentos agroecológicos para
            todos. Os produtos são vendidos pelo preço de custo (preço de nota,
            frete e perdas).
          </p>
          <br />
          <p>
            Todo mês fazemos uma previsão de custos e uma previsão de vendas e,
            a partir disso, sugerimos aos frequentadores, a cada compra, um
            percentual de contribuição para que possamos manter o espaço
            funcionando. Ao longo dos anos esses valores foram se estabilizando
            e, hoje, nossa necessidade mínima é de 25% e a sugestão de 30% sobre
            o valor dos produtos.
          </p>
          {/* <img
            ref={info}
            src="calculoContribuicao.png"
            alt="calculo da contribuição"
          /> */}
        </ComoFuncionaText>
      </ComoFuncionaContainer>
    </ComoFuncionaSection>
  );
}

const ComoFuncionaSection = styled(Section)`
  background-color: var(--color-brown);
`;

const ComoFuncionaText = styled(SectionText)`
  /* padding-right: var(--text-padding); */
`;

const ComoFuncionaContainer = styled(ContentContainer)`
  line-height: 1.2em;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  color: white;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ComoFuncionaTitle = styled(VerticalTitle)`
  font-family: var(--title-font);
  font-weight: var(--title-font-weight);
  font-size: var(--title-font-size-horz);
  line-height: 0.8em;
  word-wrap: break-word;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  text-align: start;

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
    writing-mode: vertical-lr;
    text-orientation: sideways;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    flex-basis: 0;
    font-size: clamp(4vh, 20vh, 70vh);
  }
`;

export default ComoFunciona;
