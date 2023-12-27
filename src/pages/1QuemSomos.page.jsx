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
import stickyTitles from "../js/stickyTitles.jsx";

function QuemSomos() {
  const main = useRef();
  const title = useRef();
  stickyTitles(main, title);

  return (
    <QuemSomosSection id="quem-somos" className="quemSomosSection" ref={main}>
      <QuemSomosContainer>
        {/* <StickyContainer> */}
        <QuemSomosTitle ref={title} className="quemSomosTitle">
          <span className="quem">QUEM</span>
          <span className="somos">SOMOS?</span>
        </QuemSomosTitle>
        {/* </StickyContainer> */}
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
  background-color: #e5d26a;
`;

const QuemSomosContainer = styled(ContentContainer)`
  line-height: 1.2em;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: start;
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

const QuemSomosText = styled(SectionText)`
  padding-left: calc(var(--text-padding) * 0.2);
  @media (min-width: 768px) {
    padding-left: var(--text-padding);
  }
`;

const QuemSomosTitle = styled(VerticalTitle)`
  writing-mode: vertical-lr;
  flex-direction: column;

  span {
    @media (min-width: 768px) {
      transform: rotate(180deg);
    }
  }
`;

export default QuemSomos;
