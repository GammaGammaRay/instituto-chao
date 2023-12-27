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
import stickyTitles from "../js/stickyTitles";

function Buscamos() {
  const main = useRef();
  const title = useRef();
  stickyTitles(main, title);

  return (
    <BuscamosSection ref={main} id="buscamos">
      <BuscamosContainer>
        <BuscamosTitle ref={title}>
          <span>O QUE</span>
          <span>BUSCAMOS?</span>
        </BuscamosTitle>
        <BuscamosText>
          <p>
            Além de ser transparente, esta é uma forma mais eficiente de
            comercialização, já que não há exploração de quem produz, nem de
            quem trabalha e, mesmo contribuindo com o que precisamos para a
            manutenção do projeto, gasta-se menos comprando nesse modelo, pois
            não há especulação no preço dos produtos.
          </p>
          <br />
          <p>
            No gráfico abaixo, em pesquisa realizada pelo Instituto Ipê, podemos
            ver um comparativo dos preços do Chão com outros mercados da região.
          </p>

          <ExtraHeightDiv />

          <p>
            Assim, amplia-se o consumo de produtos mais sustentáveis, promove-se
            a redistribuição de renda e a descentralização do poder. Temos mais
            de 550 grupos produtores no Brasil que fornecem para a associação.,
            construindo uma rede horizontal e participativa de relações sociais
            e econômicas e sempre priorizando relações de produção e de trabalho
            mais democráticas em todo o país.
          </p>
          <br />

          <p>
            A comida, além de ser a cadeia essencial, pode ser usada para fazer
            uma discussão cotidiana sobre modelo econômico e modo de estar no
            mundo. Em busca de alimento, as pessoas frequentam semanalmente esse
            espaço e, a cada dia, inserimos mais uma camada de questionamentos.
            O grande debate é a mudança das relações entre as pessoas.
          </p>
          <br />

          <p>
            O objetivo é colocar luz em processos que estão escondidos nas
            relações convencionais de consumo. O ato de comprar significa
            incentivar ou não determinada rede de relações, determinado fluxo
            econômico.
          </p>
          <br />

          <p>
            É, também, uma conversa sobre o valor do trabalho de cada parte da
            cadeia. Mostra como alguns trabalhos são muitas vezes
            desvalorizados, ainda que sejam tão essenciais para a vida. Que
            sociedade é essa na qual vivemos, que valoriza uns trabalhos tão
            mais do que outros? Como distribuímos a riqueza gerada na nossa
            sociedade?
          </p>
          <br />

          <p>
            Precisamos pensar novos princípios econômicos, regidos por uma
            perspectiva solidária que afete toda a cadeia produtiva,
            transformando direta e radicalmente as relações sociais. Afirmamos
            na prática cotidiana da comercialização, que direitos elementares
            como alimentação, saúde, transporte, moradia e educação não podem
            ser fonte de lucro, em detrimento da defesa da vida.
          </p>
          <br />
        </BuscamosText>
      </BuscamosContainer>
    </BuscamosSection>
  );
}

const BuscamosSection = styled(Section)`
  background-color: var(--color-green);
`;

const BuscamosContainer = styled(ContentContainer)`
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
const BuscamosText = styled(SectionText)`
  padding-left: calc(var(--text-padding) * 0.2);
  @media (min-width: 768px) {
    padding-left: var(--text-padding);
  }
`;

const BuscamosTitle = styled(VerticalTitle)`
  writing-mode: vertical-rl;

  background-color: lightcyan;

  @media (min-width: 768px) {
    width: 100%;
    height: fit-content;
    writing-mode: vertical-lr;
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
      transform: rotate(180deg);
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

const ExtraHeightDiv = styled.div`
  height: 600px;
`;

export default Buscamos;
