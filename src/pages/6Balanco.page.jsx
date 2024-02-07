import React, { useEffect, useState, useRef } from "react";
import { styled } from "styled-components";
import {
  Section,
  SectionText,
  VerticalTitle,
  ContentContainer,
  HorizontalTitle,
} from "../style/PageContainers";
import { fetchData, formatCurrency } from "../service/getGoogleSheets.jsx";

function Balanco() {
  const main = useRef();
  const title = useRef();

  const [spreadsheetData, setSpreadsheetData] = useState([]);

  useEffect(() => {
    fetchData(setSpreadsheetData);
  }, []);

  function mapDataToTable(data) {
    if (!data || typeof data !== "object") {
      console.error("Invalid data format.");
      return null;
    }

    const keys = Object.keys(data);
    const dataArray = keys.map((key) => data[key]);

    if (dataArray.length < 2) {
      console.error("Insufficient data arrays.");
      return null;
    }

    const firstArray = dataArray[0].slice(0, -6); // Exclude last 4 entries
    const secondArray = dataArray[1].slice(0, -6); // Exclude last 4 entries

    return (
      <>
        {firstArray.slice(2).map((data, index) => (
          <BalancoTableLine
            key={`entry-${index}`}
            style={{
              backgroundColor: index % 2 === 0 ? "#ffffff1c" : "#ffffff0",
            }}
          >
            <span style={{ width: "60%" }}>{data}</span>
            <span style={{ width: "40%" }}>
              R$ {formatCurrency(secondArray[index + 2])}
            </span>
          </BalancoTableLine>
        ))}
      </>
    );
  }

  return (
    <BalancoSection id="balanco" ref={main}>
      {spreadsheetData === null || spreadsheetData.length === 0 ? (
        <BalancoText>Buscando Dados...</BalancoText>
      ) : (
        <BalancoContainer>
          <BalancoTableTop>
            <BalancoTableTopContent>
              <BalancoTitle ref={title}>
                <span style={{ marginBottom: "8px" }}>BALANÇO</span>
                <span>FINANCEIRO</span>
              </BalancoTitle>

              <MonthTitle>
                <img
                  className="logoSolidBlack"
                  type="image/svg+xml"
                  src="chaoLogo_solidBlack.svg"
                  alt="Logo Instituto Chão"
                />
                {/* MÊS */}
                {spreadsheetData[0].slice(0, 1).map((data, index) => (
                  <h2 key={`month-${index}`}>{data}</h2>
                ))}
                {/* ANO */}
                {spreadsheetData[0].slice(1, 2).map((data, index) => (
                  <h2 key={`year-${index}`}>{data}</h2>
                ))}
              </MonthTitle>
            </BalancoTableTopContent>
            <HorizontalLine />
          </BalancoTableTop>

          <BalancoTableBody>
            <h3>CUSTOS OPERACIONAIS</h3>
            {mapDataToTable(spreadsheetData)}
            <HorizontalLine />
            <BalancoTableLine>
              <h3>DESPESAS TOTAIS</h3>
              <span>
                {spreadsheetData[1].slice(15, 16).map((data, index) => (
                  <div key={`${index}`}>R$ {formatCurrency(data)}</div>
                ))}
              </span>
            </BalancoTableLine>
            <HorizontalLine />

            <BalancoTableLine>
              <h3>ARRECADAÇÕES TOTAIS</h3>
              <span>
                {spreadsheetData[1].slice(16, 17).map((data, index) => (
                  <div key={`${index}`}>R$ {formatCurrency(data)}</div>
                ))}
              </span>
            </BalancoTableLine>
            <HorizontalLine />
            <BalancoTableLine>
              <h3>SALDO MENSAL</h3>
              <span>
                {spreadsheetData[1].slice(17, 18).map((data, index) => (
                  <div key={`${index}`}>R$ {formatCurrency(data)}</div>
                ))}
              </span>
            </BalancoTableLine>
            <HorizontalLine />
            <BalancoTableLine>
              <h3>VENDAS DE PRODUTOS</h3>
              <span>
                {spreadsheetData[1].slice(18, 19).map((data, index) => (
                  <div key={`${index}`}>R$ {formatCurrency(data)}</div>
                ))}
              </span>
            </BalancoTableLine>
            <HorizontalLine />
            <BalancoTableLine>
              <h3>PERCENTUAL DE ARRECADAÇÃO</h3>
              <span>
                {spreadsheetData[1].slice(19, 20).map((data, index) => (
                  <div key={`${index}`}>{data}%</div>
                ))}
              </span>
            </BalancoTableLine>
            <HorizontalLine />
          </BalancoTableBody>
        </BalancoContainer>
      )}
    </BalancoSection>
  );
}

const BalancoSection = styled(Section)`
  justify-content: start;
  background-color: var(--color-red);
  display: flex;
  justify-content: center;
  /* overflow-y: hidden; */
  height: fit-content;

  h3 {
    font-size: 5dvw;
    line-height: 3dvh;
    font-weight: 500;
  }
  @media (min-width: 768px) {
    font-size: 4dvh;
  }
`;

const BalancoText = styled(SectionText)`
  margin-bottom: 500px;

  /* background-color: #892be258; */
`;

const BalancoContainer = styled(ContentContainer)`
  line-height: 1.2em;
  width: 66%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 20px;

  overflow-x: hidden;

  /* background-color: #7fffd488; */

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
  }
`;

const BalancoTitle = styled(HorizontalTitle)`
  font-family: var(--title-font);
  font-weight: var(--title-font-weight);
  font-size: 5vw;
  height: 100%;

  line-height: 0.8em;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  flex-basis: 0;

  text-align: end;

  @media (min-width: 768px) {
    width: 100%;
    align-items: start;
    justify-content: end;
    flex-basis: 0;
  }
`;

const MonthTitle = styled(HorizontalTitle)`
  font-family: var(--title-font);
  font-weight: var(--title-font-weight);
  font-size: clamp(3vw, 4vw, 20px);
  height: 100%;

  line-height: 0.8em;

  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  flex-basis: 0;

  text-align: end;

  /* background-color: #00ffff78; */

  @media (min-width: 768px) {
    width: 100%;
    flex-basis: 0;
  }

  .h2 {
    overflow: visible;
  }
`;

const BalancoTableTopContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const BalancoTableTop = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: start;
  align-items: end;

  /* position: sticky; */
  background-color: var(--color-red);
  /* height: 200px; */

  /* background-color: bisque; */
`;
const BalancoTableBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  padding-top: 20px;
  overflow-y: hidden;
  overflow-x: hidden;

  /* background-color: #e553e051; */

  h3 {
    font-size: 3dvh;
  }
`;

const BalancoTableLine = styled.div`
  width: 100%;
  height: fit-content;
  font-size: 3dvw;

  padding: 16px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* background-color: antiquewhite; */

  @media (min-width: 768px) {
    font-size: 2dvw;
  }

  span:nth-child(1) {
    @media (min-width: 768px) {
      font-size: 2dvw;
    }
    font-size: 4dvw;
    /* background-color: antiquewhite; */
  }
  span:nth-child(2) {
    @media (min-width: 768px) {
      font-size: 2dvw;
    }
    font-size: 5dvw;
    width: fit-content;
    align-items: end;
    /* background-color: antiquewhite; */
  }
`;

const HorizontalLine = styled.div`
  background-color: black;
  /* margin: 0; */
  /* padding: 0; */
  height: 4px;

  /* margin-bottom: 6px; */
`;

export default Balanco;
