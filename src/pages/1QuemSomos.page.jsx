import React, { useRef, useState, useEffect, useContext } from "react";
import { styled } from "styled-components";
import {
  Section,
  SectionText,
  Title,
  ContentContainer,
  FadeTopOverflow,
  FadeBottomOverflow,
} from "../style/PageContainers";
import { MobileContext } from "../context/mobileContext";

function QuemSomos() {
  const text = useRef();
  const [isOverflowingTop, setOverflowingTop] = useState(false);
  const [isOverflowingBottom, setOverflowingBottom] = useState(false);
  const isMobile = useContext(MobileContext);

  const bottomScrollMargin = 5;

  useEffect(() => {
    const handleScroll = () => {
      if (text.current) {
        const { scrollTop, scrollHeight, clientHeight } = text.current;
        setOverflowingTop((prev) => (scrollTop > 0 ? true : false));
        setOverflowingBottom(
          (prev) => scrollTop + clientHeight < scrollHeight - bottomScrollMargin
        );
        // console.log("scroll top: " + scrollTop);
        // console.log("scroll height: " + scrollHeight);
        // console.log(
        //   "overflowing bottom: " +
        //     (scrollTop + clientHeight) +
        //     "<" +
        //     scrollHeight
        // );
      }
    };

    if (text.current) {
      text.current.addEventListener("scroll", handleScroll);
      console.log("add scroll event listener");
      handleScroll(); // Check initial state
    }

    return () => {
      if (text.current) {
        text.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    console.log("overflowing top: " + isOverflowingTop);
    console.log("overflowing bottom: " + isOverflowingBottom);
  }, [isOverflowingTop, isOverflowingBottom]);

  return (
    <QuemSomosSection id="quem-somos">
      <ContentContainer>
        {!isMobile ? (
          <QuemSomosTitle>
            <span>QUEM</span>
            <span>SOMOS?</span>
          </QuemSomosTitle>
        ) : (
          <div />
        )}

        <QuemSomosText ref={text} fadeTop={isOverflowingTop}>
          {/* <div className="sticky-wrapper">
            <FadeTopOverflow />
          </div> */}

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
          <FadeBottomOverflow />
        </QuemSomosText>
        {isMobile ? <QuemSomosTitle>QUEM SOMOS</QuemSomosTitle> : <div />}
      </ContentContainer>
    </QuemSomosSection>
  );
}

const QuemSomosSection = styled(Section)`
  background-color: #e5d26a;
`;

const QuemSomosText = styled(SectionText)`
  /* overflow: auto; */

  &::-webkit-scrollbar-thumb {
    background: #000000;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #292929;
  }
`;

const QuemSomosTitle = styled(Title)`
  writing-mode: vertical-lr;
  flex-direction: row;
  /* background-color: aqua; */

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
