import React, { useEffect, useState, useRef, useContext } from "react";
import { styled } from "styled-components";
import {
  Section,
  SectionText,
  ContentContainer,
} from "../style/PageContainers";
import { fetchData, formatCurrency } from "../service/getGoogleSheets.jsx";
import { MobileContext } from "../context/mobileContext";

function Balanco() {
  const isMobile = useContext(MobileContext);

  const [spreadsheetData, setSpreadsheetData] = useState([]);

  const [sheetId, setSheetId] = useState(0);

  useEffect(() => {
    fetchData(setSpreadsheetData, sheetId);
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
            <span>{data}</span>
            <span style={{ whiteSpace: "nowrap" }}>
              R$ {formatCurrency(secondArray[index + 2])}
            </span>
          </BalancoTableLine>
        ))}
      </>
    );
  }

  return (
    <BalancoSection id="balanco">
      {spreadsheetData === null || spreadsheetData.length === 0 ? (
        // {true ? (
        <BalancoLoading>
          <Loader />
          Buscando Dados...
        </BalancoLoading>
      ) : (
        <BalancoContainer>
          <BalancoTableTop>
            <BalancoTableTopContent>
              <h1>
                <span>BALANÇO</span>
                <br />
                <span>FINANCEIRO</span>
              </h1>

              <MonthTitle>
                {isMobile ? (
                  <div></div>
                ) : (
                  <img
                    className="logoSolidBlack"
                    type="image/svg+xml"
                    src="chaoLogo_solidBlack.svg"
                    alt="Logo Instituto Chão"
                  />
                )}

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
          </BalancoTableTop>

          <BalancoTableBody>
            <h3>CUSTOS OPERACIONAIS</h3>
            <HorizontalLine />
            {mapDataToTable(spreadsheetData)}
            <BalancoTableLine
              style={{
                backgroundColor: "#ffffff1c",
              }}
            >
              <h3>DESPESAS TOTAIS</h3>
              <span style={{ fontWeight: "700" }}>
                {spreadsheetData[1].slice(15, 16).map((data, index) => (
                  <div key={`${index}`}>R$ {formatCurrency(data)}</div>
                ))}
              </span>
            </BalancoTableLine>
            <HorizontalLine />
            <BalancoTableLine>
              <h3>ARRECADAÇÕES TOTAIS</h3>
              <span style={{ fontWeight: "700" }}>
                {spreadsheetData[1].slice(16, 17).map((data, index) => (
                  <div key={`${index}`}>R$ {formatCurrency(data)}</div>
                ))}
              </span>
            </BalancoTableLine>
            <HorizontalLine />
            <BalancoTableLine>
              <h3>SALDO MENSAL</h3>
              <span style={{ fontWeight: "700" }}>
                {spreadsheetData[1].slice(17, 18).map((data, index) => (
                  <div key={`${index}`}>R$ {formatCurrency(data)}</div>
                ))}
              </span>
            </BalancoTableLine>
            <HorizontalLine />
            <BalancoTableLine>
              <h3>VENDAS DE PRODUTOS</h3>
              <span style={{ fontWeight: "700" }}>
                {spreadsheetData[1].slice(18, 19).map((data, index) => (
                  <div key={`${index}`}>R$ {formatCurrency(data)}</div>
                ))}
              </span>
            </BalancoTableLine>
            <HorizontalLine />
            <BalancoTableLine>
              <h3>PERCENTUAL DE ARRECADAÇÃO</h3>

              <PercentualArrecadacao>
                {spreadsheetData[1].slice(19, 20).map((data, index) => (
                  <div key={`${index}`}>{data}%</div>
                ))}
              </PercentualArrecadacao>
            </BalancoTableLine>
            <HorizontalLine />
          </BalancoTableBody>
        </BalancoContainer>
      )}
    </BalancoSection>
  );
}

const BalancoSection = styled(Section)`
  background-color: var(--color-red);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-size: clamp(14px, 2.4svh, 18px);
  margin: 0;
  color: black;

  h1,
  h2 {
    font-family: var(--title-font);
    font-weight: var(--title-font-weight);
    font-weight: 500;
  }
  h1 {
    font-size: clamp(42px, 5svw, 80px);
  }

  h2 {
    font-size: clamp(16px, 10svw, 24px);
  }

  h3 {
    font-size: clamp(16px, 10svw, 18px);
    font-weight: 700;
  }

  @media (min-width: 768px) {
    font-size: clamp(16px, 3svh, 22px);

    h1 {
      font-size: clamp(42px, 5svw, 80px);
    }

    h2 {
      font-size: clamp(32px, 2.8svw, 46px);
    }

    h3 {
      font-size: clamp(22px, 2.8svw, 32px);
    }
  }
`;

const BalancoLoading = styled(SectionText)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* background-color: #892be258; */
`;

const BalancoContainer = styled(ContentContainer)`
  width: 94%;
  min-height: 96%;
  max-height: 98svh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 0svh 0svw;
  /* padding: 1svh 0.5svw; */
  /* margin: 20svh 30px; */

  /* background-color: #7fffd488; */

  @media (min-width: 768px) {
    width: 90%;
  }
`;

const BalancoTableTopContent = styled.div`
  /* width: 90%; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: fit-content;

  @media (min-width: 768px) {
    width: 100%;
  }
  /* background-color: azure; */
`;

const MonthTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;

  /* background-color: #00ffff78; */

  @media (min-width: 768px) {
    img {
      padding: 0.8svh;
    }
  }
`;

const BalancoTableTop = styled.div`
  width: 100%;

  /* background-color: blue; */
`;
const BalancoTableBody = styled.div`
  /* background-color: #0000ff49; */

  width: 100%;
`;

const BalancoTableLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0.75dvh 0;

  span:nth-child(1) {
    width: 70%;
    /* padding-right: 12px; */
    @media (min-width: 768px) {
      width: 50dvw;
    }
    /* background-color: blanchedalmond; */
  }

  span:nth-child(2) {
    white-space: nowrap;
  }
`;

const HorizontalLine = styled.div`
  background-color: black;
  z-index: 3;
  height: 2px;

  @media (min-width: 768px) {
    height: 2px;
  }
`;

const Loader = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: block;
  margin: 40px auto;
  position: relative;
  background: #fff;
  box-shadow: -24px 0 #fff, 24px 0 #fff;
  box-sizing: border-box;
  animation: shadowPulse 1.2s linear infinite;

  @keyframes shadowPulse {
    33% {
      background: #fff;
      box-shadow: -24px 0 #ff3d00, 24px 0 #fff;
    }
    66% {
      background: #ff3d00;
      box-shadow: -24px 0 #fff, 24px 0 #fff;
    }
    100% {
      background: #fff;
      box-shadow: -24px 0 #fff, 24px 0 #ff3d00;
    }
  }
`;

const PercentualArrecadacao = styled.div`
  font-size: clamp(25px, 10svw, 24px);
  font-weight: 800;

  @media (min-width: 768px) {
    font-size: clamp(26px, 2.8svw, 38px);
  }
`;

export default Balanco;
