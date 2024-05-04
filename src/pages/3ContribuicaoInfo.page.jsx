import React, { useContext } from "react";

import { MobileContext } from "../context/mobileContext";
import {
  ContribuicaoSection,
  ContribuicaoContainer,
  ContribuicaoColLeft,
  ContribuicaoColRight,
  Line,
  LineVert,
  LineVertManutencao,
  LineRect,
  LineContent,
  ContribuicaoSugerida,
  LineInfoBold,
  LineInfoBoldRight,
  LineInfoPercentage,
  LineInfoArrecadacao,
  LineContentLeft,
  LineContentRight,
  IconWrapper,
} from "../style/ContribuicaoInfoStyle.jsx";

function Contribuicao() {
  const isMobile = useContext(MobileContext);
  return (
    <ContribuicaoSection id="contribuicao">
      <ContribuicaoContainer>
        <ContribuicaoColLeft>
          <Line>
            <LineContent>
              <LineContentLeft>
                <span>TOTAL DE CUSTOS</span>
              </LineContentLeft>
              <LineContentRight>
                <span>R$</span>
                <LineInfoBold>680.900</LineInfoBold>
              </LineContentRight>
            </LineContent>
            <LineRect />
          </Line>
          <IconWrapper icon="pepicons-pop:division-circle" />

          <Line>
            <LineContent>
              <LineContentLeft>
                <span>PREVISÃO DE VENDAS DE PRODUTOS</span>
              </LineContentLeft>
              <LineContentRight>
                <span>R$</span>
                <LineInfoBold>680.900</LineInfoBold>
              </LineContentRight>
            </LineContent>
            <LineRect />
          </Line>
          <IconWrapper icon="pepicons-pop:equal-circle" />

          <Line>
            {isMobile ? (
              <LineContent>
                <LineContentLeft>
                  <span>NECESSIDADE MÍNIMA DE ARRECADAÇÃO</span>
                </LineContentLeft>
                <LineContentRight className="vert">
                  <LineInfoArrecadacao>
                    <span>
                      Arrecadações para custos do espaço e nosso trabalho
                    </span>
                  </LineInfoArrecadacao>
                  <LineInfoPercentage>25%</LineInfoPercentage>
                </LineContentRight>
              </LineContent>
            ) : (
              <LineContent>
                <LineContentLeft>
                  <span>NECESSIDADE MÍNIMA DE ARRECADAÇÃO</span>
                </LineContentLeft>
                <LineContentRight className="porcentagemContribuicao">
                  <LineInfoPercentage>25%</LineInfoPercentage>

                  <LineInfoArrecadacao>
                    <span>
                      De arrecadações para pagar os custos do espaço e do nosso
                      trabalho
                    </span>
                  </LineInfoArrecadacao>
                </LineContentRight>
              </LineContent>
            )}

            <LineRect />
          </Line>
        </ContribuicaoColLeft>
        <ContribuicaoColRight>
          <LineVert>
            <ContribuicaoSugerida>
              <LineContentLeft className="contribuicao">
                CONTRIBUIÇÃO
                <br />
                SUGERIDA
              </LineContentLeft>
              <LineInfoPercentage>
                <span>30%</span>
              </LineInfoPercentage>
            </ContribuicaoSugerida>
            <LineRect />
          </LineVert>
          <LineVertManutencao>
            <LineInfoBoldRight>
              <span>OU MAIS</span>
              <span>Para manutencão e ampliacão</span>
              <span>(equilibra as contas e possibilita</span>
              <span>investir no projeto)</span>
            </LineInfoBoldRight>
          </LineVertManutencao>
          <LineRect />
        </ContribuicaoColRight>
      </ContribuicaoContainer>
    </ContribuicaoSection>
  );
}

export default Contribuicao;
