import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Section,
  SectionText,
  VerticalTitle,
  ContentContainer,
} from "../style/PageContainers";

function QuemSomos() {
  return (
    <QuemSomosSection id="quem-somos" className="quemSomosSection" ref={main}>
      <QuemSomosBg />
      <QuemSomosContainer>
        <QuemSomosTitle ref={title} className="quemSomosTitle">
          <span className="quem">QUEM</span>
          <span className="somos">SOMOS?</span>
        </QuemSomosTitle>
        <QuemSomosText>
          <p>
            O Chão é uma associação de trabalhadores, sem fins lucrativos, que
            se movimenta para o aprofundamento da consciência crítica, da
            democracia e da igualdade de direitos, a fim de construir
            coletivamente uma sociedade justa e solidária.
          </p>
          <p>
            Buscamos uma democracia real: tudo é decidido em assembléias
            semanais, divide-se as funções de forma conjunta, recebe-se
            igualmente e apenas pelo trabalho, não remunera-se capital. Não há
            relação de exploração.
          </p>
          <p>
            Seguimos os princípios da Economia Solidária, uma política econômica
            do cuidado, tendo as pessoas como sujeito e finalidade da atividade
            econômica.
          </p>
          <p>
            Articulamos e integramos redes que fomentam a autonomia, o
            cooperativismo, a autogestão, o antirracismo, o feminismo, o
            antifascismo, o anti capacitismo e a redistribuição radical de
            renda.
          </p>
          <p>
            Visando a equidade e a horizontalidade, o Chão não tem dono, nem
            hierarquia. A prática diária se baseia no debate reflexivo sobre o
            trabalho e sustenta a busca por deslocamentos, visando a superação
            do sistema capitalista. A partir da vivência, se dá a construção de
            bases organizativas que favoreçam a tomada de decisão coletiva,
            através das tecnologias comunicacionais cotidianas. Saberes e
            práticas são valorizadas a partir das potências de trabalho. Pessoas
            que vieram de todas as classes e com todos os níveis de escolaridade
            decidindo os rumos e se responsabilizando juntas pelo caminho
            trilhado.
          </p>
          <p>
            Com todas as contradições inerentes, o nosso caminho é o do cuidado,
            da aproximação das pessoas, da busca por relações mais justas e
            transparentes. Aliando-se a movimentos sociais, comunidades
            tradicionais e outras instituições, lutamos pela reforma agrária e
            urbana, pela agroecologia, pela educação pública, pela saúde
            pública, pelo combate à fome, pela biodiversidade e preservação
            ambiental e pela soberania alimentar.
          </p>
          <p>
            Com todas as contradições inerentes, o nosso caminho é o do cuidado,
            da aproximação das pessoas, da busca por relações mais justas e
            transparentes. Aliando-se a movimentos sociais, comunidades
            tradicionais e outras instituições, lutamos pela reforma agrária e
            urbana, pela agroecologia, pela educação pública, pela saúde
            pública, pelo combate à fome, pela biodiversidade e preservação
            ambiental e pela soberania alimentar.
          </p>
          <p>
            Com todas as contradições inerentes, o nosso caminho é o do cuidado,
            da aproximação das pessoas, da busca por relações mais justas e
            transparentes. Aliando-se a movimentos sociais, comunidades
            tradicionais e outras instituições, lutamos pela reforma agrária e
            urbana, pela agroecologia, pela educação pública, pela saúde
            pública, pelo combate à fome, pela biodiversidade e preservação
            ambiental e pela soberania alimentar.
          </p>
        </QuemSomosText>
      </QuemSomosContainer>
    </QuemSomosSection>
  );
}

const QuemSomosSection = styled(Section)`
  /* scroll-padding-bottom: 10vh; */
  p {
    margin-bottom: 12px;
  }
`;

const QuemSomosBg = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-yellow);
  z-index: -5;
  position: absolute;
`;

const QuemSomosText = styled(SectionText)`
  margin-bottom: 500px;
  /* padding-left: var(--text-padding); */
  /* overflow-y: scroll; */
`;

const QuemSomosContainer = styled(ContentContainer)`
  line-height: 1.2em;
  height: fit-content;
  /* padding-top: 24px; */
  /* overflow: hidden; */

  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
  }
`;

const QuemSomosTitle = styled(VerticalTitle)`
  font-family: var(--title-font);
  font-weight: var(--title-font-weight);
  font-size: clamp(13vw, 4vw, 20px);
  height: 100%;

  /* position: sticky; */

  line-height: 0.8em;
  /* word-wrap: break-word; */

  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  flex-basis: 0;

  text-align: end;

  @media (min-width: 768px) {
    width: 100%;
    writing-mode: vertical-lr;
    text-orientation: sideways;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    flex-basis: 0;
    font-size: calc(var(--title-font-size) * 0.95);
  }

  span {
    overflow: visible;

    @media (min-width: 768px) {
      transform: rotate(180deg);
    }
  }

  /* position: sticky; */
`;

export default QuemSomos;
