import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import {
  Section,
  SectionText,
  Title,
  ContentContainer,
} from "../style/PageContainers";

function Historico() {
  const main = useRef();
  const title = useRef();

  return (
    <HistoricoSection id="historico" ref={main}>
      <HistoricoContainer>
        <HistoricoText>
          <p>
            Abrimos as portas em maio de 2015, começamos com 6 pessoas e um
            financiamento coletivo de R$42 mil.
          </p>

          <p>
            Já no primeiro ano de funcionamento, o faturamento mensal cresceu
            mais de 400%. De junho de 2016 a dezembro de 2023, período de crise
            econômica e política no país, o crescimento foi superior a 600%.
            Nesse periodo, o Chão movimentou mais de R$150 milhões.
          </p>

          <p>
            Atualmente, somos uma equipe de 30 pessoas, que movimenta mais de
            R$3,2 milhões por mês em alimentos orgânicos, agroecológicos e
            artesanais, sempre priorizando produtos provenientes da reforma
            agrária, da agricultura familiar e de comunidades indígenas e
            quilombolas.
          </p>

          <p>
            Sempre tivemos o objetivo de ser um projeto auto sustentável. Para
            isso é necessário ter escala e uma grande diversidade de produtos,
            sendo uma alternativa real tanto para pequenos produtores, que podem
            escoar boa parte da produção em um só lugar, quanto para os
            consumidores, que podem satisfazer suas compras também em um só
            espaço.
          </p>

          <p>
            Ao longo desses 8 anos, o modelo de negócio e organizacional do Chão
            se consolidou, tornando-se uma alternativa real de comercialização
            solidária, fechando a cadeia de alimentos baseada em outra lógica
            desde a produção agroecológica e orgânica dos produtos, como sua
            venda de forma justa e distributiva.
          </p>

          <p>
            Nesse contexto, nossa rede de fornecedores e produtores passou a
            incentivar e dar suporte à ampliação desse modelo para escoamento da
            sua produção em detrimento à tentativa de entrada nos mercados
            convencionais, na direção da construção de uma rede solidária de
            produção, distribuição e comercialização de alimentos agroecológicos
            - agricultores e agroindústrias familiares, associações e
            cooperativas.
          </p>
        </HistoricoText>
        <HistoricoTitle ref={title}>HISTÓRICO</HistoricoTitle>
      </HistoricoContainer>
    </HistoricoSection>
  );
}

const HistoricoSection = styled(Section)`
  display: flex;
  background-color: var(--color-pink);
  overflow: hidden;
`;

const HistoricoContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: row;
  justify-content: center;

  /* background-color: #00ffff40; */
`;

const HistoricoText = styled(SectionText)`
  overflow-y: auto;

  &::-webkit-scrollbar-thumb {
    background: #000000;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #292929;
  }
`;

const HistoricoTitle = styled(Title)`
  writing-mode: vertical-lr;
  /* background-color: #deb8875d; */
`;

export default Historico;
