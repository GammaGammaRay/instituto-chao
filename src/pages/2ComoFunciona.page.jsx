import React, { useRef } from "react";
import {
  Section,
  SectionText,
  VerticalTitle,
  ContentContainer,
} from "../style/PageContainers";
import { styled } from "styled-components";
import stickyTitles from "../js/stickyTitles.jsx";

function ComoFunciona() {
  const main = useRef();
  const title = useRef();

  // stickyTitles(main, title);

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
          <br />
          <p>
            Todo mês fazemos uma previsão de custos e uma previsão de vendas e,
            a partir disso, sugerimos aos frequentadores, a cada compra, um
            percentual de contribuição para que possamos manter o espaço
            funcionando. Ao longo dos anos esses valores foram se estabilizando
            e, hoje, nossa necessidade mínima é de 25% e a sugestão de 30% sobre
            o valor dos produtos.
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
`;

const ComoFuncionaText = styled(SectionText)`
  padding-right: var(--text-padding);
`;

const ComoFuncionaContainer = styled(ContentContainer)`
  line-height: 1.2em;
  height: 100%;
  color: white;
  /* padding-top: 24px; */
  overflow-y: auto;
  overflow-x: hidden;

  display: flex;
  flex-direction: row;
  justify-content: center;

  &::-webkit-scrollbar {
    width: 12px;
  }
  /* &::-webkit-scrollbar-track {
    background: #f1f1f1;
  } */
  &::-webkit-scrollbar-thumb {
    background: #ffffff;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #bdbdbd;
  }

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
  writing-mode: vertical-rl;
  position: sticky;
  top: 0px;
`;

export default ComoFunciona;
