import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import {
  Section,
  SectionText,
  VerticalTitle,
  ContentContainer,
} from "../style/PageContainers";
import stickyTitles from "../js/stickyTitles.jsx";

function Historico() {
  const main = useRef();
  const title = useRef();

  // stickyTitles(main, title);

  return (
    <HistoricoSection id="historico" ref={main}>
      <HistoricoContainer>
        <HistoricoText>
          <p>
            Abrimos as portas em maio de 2015, começamos com 6 pessoas e um
            financiamento coletivo de R$42 mil.
          </p>
          <br />

          <p>
            Já no primeiro ano de funcionamento, o faturamento mensal cresceu
            mais de 400%. De junho de 2016 a dezembro de 2023, período de crise
            econômica e política no país, o crescimento foi superior a 600%.
            Nesse periodo, o Chão movimentou mais de R$150 milhões.
          </p>
          <br />

          <p>
            Atualmente, somos uma equipe de 30 pessoas, que movimenta mais de
            R$3,2 milhões por mês em alimentos orgânicos, agroecológicos e
            artesanais, sempre priorizando produtos provenientes da reforma
            agrária, da agricultura familiar e de comunidades indígenas e
            quilombolas.
          </p>
          <br />

          <p>
            Sempre tivemos o objetivo de ser um projeto auto sustentável. Para
            isso é necessário ter escala e uma grande diversidade de produtos,
            sendo uma alternativa real tanto para pequenos produtores, que podem
            escoar boa parte da produção em um só lugar, quanto para os
            consumidores, que podem satisfazer suas compras também em um só
            espaço.
          </p>
          <br />

          <p>
            Ao longo desses 8 anos, o modelo de negócio e organizacional do Chão
            se consolidou, tornando-se uma alternativa real de comercialização
            solidária, fechando a cadeia de alimentos baseada em outra lógica
            desde a produção agroecológica e orgânica dos produtos, como sua
            venda de forma justa e distributiva.
          </p>
          <br />

          <p>
            Nesse contexto, nossa rede de fornecedores e produtores passou a
            incentivar e dar suporte à ampliação desse modelo para escoamento da
            sua produção em detrimento à tentativa de entrada nos mercados
            convencionais, na direção da construção de uma rede solidária de
            produção, distribuição e comercialização de alimentos agroecológicos
            - agricultores e agroindústrias familiares, associações e
            cooperativas.
          </p>
          <br />
        </HistoricoText>
        <HistoricoTitle ref={title}>HISTÓRICO</HistoricoTitle>
      </HistoricoContainer>
    </HistoricoSection>
  );
}

const HistoricoSection = styled(Section)`
  background-color: var(--color-pink);
`;

const HistoricoContainer = styled(ContentContainer)`
  line-height: 1.2em;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  /* background-color: #00ffff40; */

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    width: 95%;
  }

  @media (min-width: 1200px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    width: 60%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const HistoricoText = styled(SectionText)`
  padding-right: calc(var(--text-padding) * 0.2);
  overflow-y: scroll;
`;

const HistoricoTitle = styled(VerticalTitle)`
  writing-mode: vertical-lr;
  /* background-color: #deb8875d; */
`;

export default Historico;
