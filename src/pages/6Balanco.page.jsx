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
  const main = useRef();
  const title = useRef();

  const isMobile = useContext(MobileContext);

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
    <BalancoSection id="balanco" ref={main}>
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
              <BalancoTitle ref={title}>
                <span>BALANÇO</span>
                <span>FINANCEIRO</span>
              </BalancoTitle>

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
            <h3> CUSTOS OPERACIONAIS</h3>
            <HorizontalLine />
            {mapDataToTable(spreadsheetData)}
            <BalancoTableLine
              style={{
                backgroundColor: "#ffffff1c",
              }}
            >
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
              {/* <span style={{ fontSize: `clamp(30px,10svw, 50px)` }}> */}
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
  background-color: var(--color-red);
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: start;
  /* overflow-y: hidden; */

  h3 {
    font-weight: 500;
    /* line-height: 0.75; */
  }
  @media (min-width: 768px) {
    /* font-size: 4svh; */
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
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 1svh 0.5svw;

  /* background-color: #7fffd488; */

  @media (min-width: 768px) {
    width: 70%;
    /* height: 90%; */
  }

  &::-webkit-scrollbar-thumb {
    background: #000000;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #292929;
  }
`;

const BalancoTableTopContent = styled.div`
  /* font-size: clamp(40px, 8svw, 100px); */
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 100%;
  }
  /* background-color: azure; */
`;

const BalancoTitle = styled.div`
  font-family: var(--title-font);
  font-weight: var(--title-font-weight);
  width: fit-content;

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

const MonthTitle = styled.div`
  font-family: var(--title-font);
  font-weight: var(--title-font-weight);

  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
  flex-basis: 0;

  text-align: end;

  /* background-color: #00ffff78; */

  @media (min-width: 768px) {
    width: 100%;
    flex-basis: 0;

    img {
      padding: 0.8svh;
    }
  }

  .h2 {
    overflow: visible;
  }
`;

const BalancoTableTop = styled.div`
  /* font-size: clamp(30px, 3svw, 42px); */

  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  /* background-color: blue; */
`;
const BalancoTableBody = styled.div`
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  /* height: fit-content; */

  /* margin-top: 2svh; */

  /* overflow-y: hidden; */
  /* overflow-x: hidden; */

  h3 {
    /* font-size: clamp(22px, 3svh, 40px); */
    width: fit-content;
    @media (min-width: 768px) {
      /* font-size: clamp(30px, 3svh, 50px); */
    }
  }
`;

const BalancoTableLine = styled.div`
  font-size: clamp(16px, 2.2svw, 26px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* align-items: flex-start;  */
  padding-top: 1svh;
  padding-left: 0.5svw;
  padding-right: 0.5svw;

  /* @media (min-width: 768px) {
    font-size: clamp(24px, 4svw, 30px);
  } */

  span:nth-child(1) {
    padding-right: 12px;
    @media (min-width: 768px) {
      width: 50%;
    }
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
    height: 3px;
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

export default Balanco;
