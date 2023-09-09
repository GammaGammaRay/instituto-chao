import React from "react";
import {
  ContentContainer,
  Section,
  SectionText,
  VerticalTitle,
} from "../style/PageContainers";
import { styled } from "styled-components";

function Buscamos() {
  return (
    <Section>
      <BuscamosContainer>
        <BuscamosTitle>O QUE BUSCAMOS?</BuscamosTitle>
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
    </Section>
  );
}

const BuscamosText = styled(SectionText)`
  padding-right: var(--text-padding);
`;

const BuscamosContainer = styled(ContentContainer)`
  background-color: var(--color-green);
  color: black;
  line-height: 1.2em;
  padding-top: 24px;

  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;

  /* overflow-y: auto; */
`;

const BuscamosTitle = styled(VerticalTitle)`
  font-family: var(--title-font);
  font-weight: var(--title-font-weight);
  font-size: var(--title-font-size);
  line-height: 0.8em;
  word-wrap: break-word;

  writing-mode: vertical-rl;
  transform: rotate(180deg);

  display: flex;
  align-items: end;
  justify-content: start;

  text-align: end;

  position: sticky;
  top: 0px;
`;

const ExtraHeightDiv = styled.div`
  height: 600px;
`;

export default Buscamos;
