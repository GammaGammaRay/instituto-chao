import React, { useRef, useState, useEffect, useContext } from "react";
import { styled } from "styled-components";
import {
  Section,
  SectionText,
  VerticalTitle,
  ContentContainer,
} from "../style/PageContainers";
import { MobileContext } from "../context/mobileContext";

function QuemSomos() {
  const main = useRef();
  const title = useRef();
  const isMobile = useContext(MobileContext);

  return (
    <QuemSomosSection id="quem-somos" ref={main}>
      <QuemSomosContainer>
        {!isMobile ? (
          <QuemSomosTitle ref={title}>
            <span className="quem">QUEM</span>
            <span className="somos">SOMOS?</span>
          </QuemSomosTitle>
        ) : (
          <div />
        )}

        <QuemSomosText>
          <p>
            O Chão é uma associação de trabalhadores, sem fins lucrativos, que
            se movimenta para o aprofundamento da consciência crítica, da
            democracia e da igualdade de direitos, a fim de construir
            coletivamente uma sociedade justa e solidária.
          </p>
          <br />
          <p>
            Buscamos uma democracia real: tudo é decidido em assembléias
            semanais, divide-se as funções de forma conjunta, recebe-se
            igualmente e apenas pelo trabalho, não remunera-se capital. Não há
            relação de exploração.
          </p>
          <br />
          <p>
            Seguimos os princípios da Economia Solidária, uma política econômica
            do cuidado, tendo as pessoas como sujeito e finalidade da atividade
            econômica.
          </p>
          <br />
          <p>
            Articulamos e integramos redes que fomentam a autonomia, o
            cooperativismo, a autogestão, o antirracismo, o feminismo, o
            antifascismo, o anti capacitismo e a redistribuição radical de
            renda.
          </p>
          <br />
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
          <br />
          <p>
            Com todas as contradições inerentes, o nosso caminho é o do cuidado,
            da aproximação das pessoas, da busca por relações mais justas e
            transparentes. Aliando-se a movimentos sociais, comunidades
            tradicionais e outras instituições, lutamos pela reforma agrária e
            urbana, pela agroecologia, pela educação pública, pela saúde
            pública, pelo combate à fome, pela biodiversidade e preservação
            ambiental e pela soberania alimentar.
          </p>
          <br />
          <p>
            Com todas as contradições inerentes, o nosso caminho é o do cuidado,
            da aproximação das pessoas, da busca por relações mais justas e
            transparentes. Aliando-se a movimentos sociais, comunidades
            tradicionais e outras instituições, lutamos pela reforma agrária e
            urbana, pela agroecologia, pela educação pública, pela saúde
            pública, pelo combate à fome, pela biodiversidade e preservação
            ambiental e pela soberania alimentar.
          </p>
          <br />
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
        {isMobile ? (
          <QuemSomosTitle ref={title}>
            <span className="quem">QUEM</span>
            <span className="somos">SOMOS?</span>
          </QuemSomosTitle>
        ) : (
          <div />
        )}
      </QuemSomosContainer>
    </QuemSomosSection>
  );
}

const QuemSomosSection = styled(Section)`
  background-color: #e5d26a;

  display: flex;
  position: relative;
`;

const QuemSomosContainer = styled(ContentContainer)`
  line-height: 1.2em;
  height: 100%;
  padding-right: 12px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;

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
    justify-content: space-between;
  }
`;

const QuemSomosText = styled(SectionText)`
  padding-left: calc(var(--text-padding) * 0.2);
  padding-right: 20px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background: #000000;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #292929;
  }

  @media (min-width: 768px) {
    padding-left: var(--text-padding);
  }
`;

const QuemSomosTitle = styled(VerticalTitle)`
  writing-mode: vertical-lr;
  flex-direction: column;
  flex-direction: row;
  /* position: sticky;
  top: 0px;
  &.sticky {
    position: fixed;
    z-index: 999;
  } */
  @media (min-width: 768px) {
    flex-direction: column;
    margin-left: 12px;
  }
  span {
    @media (min-width: 768px) {
      transform: rotate(180deg);
    }
  }
`;

export default QuemSomos;
