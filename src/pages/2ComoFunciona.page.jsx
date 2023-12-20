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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const sectionHeight = main.current.offsetHeight;
      const titleHeight = title.current.offsetHeight;
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: main.current,
          start: "-50 top",
          end: () => `+=${sectionHeight - titleHeight}`,
          scrub: true, // Add scrubbing effect
          markers: true, // Add markers for visualization (remove this in production)
        },
      });

      // Stick the title to the top
      timeline.to(title.current, {
        y: sectionHeight - titleHeight, // Adjust the value as needed
        ease: "none",
      });
    }, main);

    return () => ctx.revert();
  }, []);

  return (
    <ComoFuncionaSection ref={main} id="como-funciona">
      <ComoFuncionaContainer>
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
        <ComoFuncionaTitle ref={title}>
          <span>COMO</span>
          <span>FUNCIONA?</span>
        </ComoFuncionaTitle>
      </ComoFuncionaContainer>
    </ComoFuncionaSection>
  );
}

const ComoFuncionaSection = styled(Section)`
  background-color: var(--color-brown);
  p {
    margin-bottom: 12px;
  }
`;

const ComoFuncionaText = styled(SectionText)`
  padding-right: var(--text-padding);
  overflow-y: scroll;
`;

const ComoFuncionaContainer = styled(ContentContainer)`
  line-height: 1.2em;
  height: 100%;
  color: white;
  /* padding-top: 24px; */
  /* overflow: hidden; */

  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    width: 95%;

    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 1200px) {
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: 60%;

    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const ComoFuncionaTitle = styled(VerticalTitle)`
  font-family: var(--title-font);
  font-weight: var(--title-font-weight);
  font-size: var(--title-font-size-horz);
  height: fit-content;
  line-height: 0.8em;
  word-wrap: break-word;

  display: flex;
  flex-direction: row;
  align-items: start;
  flex-basis: 0;
  writing-mode: vertical-lr;

  text-align: end;
  background-color: lightcyan;
  will-change: transform;

  @media (min-width: 768px) {
    width: 100%;
    height: fit-content;
    writing-mode: vertical-rl;
    text-orientation: sideways;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    flex-basis: 0;
    font-size: var(--title-font-size-vert);
    will-change: transform;
  }

  span {
    overflow: visible;

    @media (min-width: 768px) {
      /* transform: rotate(180deg); */
    }
  }

  &.sticky {
    /* position: absolute; */
    /* z-index: -1; */
    top: 0;
    background-color: white;
  }

  /* position: sticky; */
`;

export default ComoFunciona;
