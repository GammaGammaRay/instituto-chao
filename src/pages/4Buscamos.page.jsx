import React, { useContext, useRef } from "react";
import { styled } from "styled-components";
import {
  Section,
  SectionText,
  VerticalTitle,
  ContentContainer,
} from "../style/PageContainers";
import { MobileContext } from "../context/mobileContext";

function Buscamos() {
  const isMobile = useContext(MobileContext);

  return (
    <BuscamosSection id="buscamos">
      <BuscamosContainer>
        {!isMobile ? (
          <BuscamosTitle>
            <span>O QUE </span>
            <span>BUSCAMOS?</span>
          </BuscamosTitle>
        ) : (
          <div />
        )}

        <BuscamosText>
          <p>
            Além de ser transparente, esta é uma forma mais eficiente de
            comercialização, já que não há exploração de quem produz, nem de
            quem trabalha e, mesmo contribuindo com o que precisamos para a
            manutenção do projeto, gasta-se menos comprando nesse modelo, pois
            não há especulação no preço dos produtos.
          </p>
          <p>
            No gráfico abaixo, em pesquisa realizada pelo Instituto Ipê, podemos
            ver um comparativo dos preços do Chão com outros mercados da região.
          </p>

          <img
            className="graficoComparacaoPreco"
            type="image/svg+xml"
            src="graph.svg"
            alt="Gráfico Comparando Preços dos Diferentes Tipos de Mercado"
          />
          <button a="https://drive.google.com/file/d/11ftAww3OHQfi0fInlIeFH-SM0idRE__R/view">
            Veja a pesquisa completa
          </button>

          <p>
            Assim, amplia-se o consumo de produtos mais sustentáveis, promove-se
            a redistribuição de renda e a descentralização do poder. Temos mais
            de 550 grupos produtores no Brasil que fornecem para a associação.,
            construindo uma rede horizontal e participativa de relações sociais
            e econômicas e sempre priorizando relações de produção e de trabalho
            mais democráticas em todo o país.
          </p>

          <p>
            A comida, além de ser a cadeia essencial, pode ser usada para fazer
            uma discussão cotidiana sobre modelo econômico e modo de estar no
            mundo. Em busca de alimento, as pessoas frequentam semanalmente esse
            espaço e, a cada dia, inserimos mais uma camada de questionamentos.
            O grande debate é a mudança das relações entre as pessoas.
          </p>

          <p>
            O objetivo é colocar luz em processos que estão escondidos nas
            relações convencionais de consumo. O ato de comprar significa
            incentivar ou não determinada rede de relações, determinado fluxo
            econômico.
          </p>

          <p>
            É, também, uma conversa sobre o valor do trabalho de cada parte da
            cadeia. Mostra como alguns trabalhos são muitas vezes
            desvalorizados, ainda que sejam tão essenciais para a vida. Que
            sociedade é essa na qual vivemos, que valoriza uns trabalhos tão
            mais do que outros? Como distribuímos a riqueza gerada na nossa
            sociedade?
          </p>

          <p>
            Precisamos pensar novos princípios econômicos, regidos por uma
            perspectiva solidária que afete toda a cadeia produtiva,
            transformando direta e radicalmente as relações sociais. Afirmamos
            na prática cotidiana da comercialização, que direitos elementares
            como alimentação, saúde, transporte, moradia e educação não podem
            ser fonte de lucro, em detrimento da defesa da vida.
          </p>
        </BuscamosText>
        {isMobile ? (
          <BuscamosTitle>
            <span>O QUE </span>
            <span>BUSCAMOS?</span>
          </BuscamosTitle>
        ) : (
          <div />
        )}
      </BuscamosContainer>
    </BuscamosSection>
  );
}

const BuscamosSection = styled(Section)`
  background-color: var(--color-green);
  display: flex;

  button {
    width: 50%;
    margin-top: 12px;
    margin-bottom: 20px;
  }
`;

const BuscamosContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const BuscamosText = styled(SectionText)`
  overflow: auto;

  &::-webkit-scrollbar-thumb {
    background: #000000;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #292929;
  }

  /* @media (min-width: 768px) {
    padding-left: var(--text-padding);
  } */
`;

const BuscamosTitle = styled(VerticalTitle)`
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

export default Buscamos;
