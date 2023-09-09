import React from "react";
import {
  ContentContainer,
  Section,
  SectionText,
  VerticalTitle,
} from "../style/PageContainers.jsx";
import { styled } from "styled-components";

function ComoFunciona() {
  return (
    <Section>
      <ComoFuncionaContainer>
        <SectionText>
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
        </SectionText>
        <ComoFuncionaTitle>COMO FUNCIONA?</ComoFuncionaTitle>
      </ComoFuncionaContainer>
    </Section>
  );
}

const ComoFuncionaContainer = styled(ContentContainer)`
  background-color: var(--color-brown);
  color: white;
  line-height: 1.2em;
  padding-top: 24px;
  /* overflow: hidden; */
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

const ComoFuncionaTitle = styled(VerticalTitle)`
  font-family: var(--title-font) a;
  font-weight: 500;
  font-size: 16vh;
  line-height: 0.8em;
  word-wrap: break-word;

  writing-mode: vertical-rl;

  display: flex;
  align-items: end;
  justify-content: end;

  text-align: start;
`;

export default ComoFunciona;
