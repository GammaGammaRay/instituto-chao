import React, { useEffect, useState, useRef } from "react";
import { styled } from "styled-components";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Section,
  SectionText,
  VerticalTitle,
  ContentContainer,
  HorizontalTitle,
} from "../style/PageContainers";
import { getSpreadsheetData } from "../service/getGoogleSheets.js";

function Balanco() {
  const main = useRef();
  const title = useRef();

  const [spreadsheetData, setSpreadsheetData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSpreadsheetData();
        console.log(data); // Log the fetched data to understand its structure

        // Convert the object into an array of arrays
        const dataArray = Object.values(data);

        if (Array.isArray(dataArray) && dataArray.length > 0) {
          setSpreadsheetData(dataArray);
        } else {
          setSpreadsheetData("Dados não estão no formato esperado.");
        }
      } catch (error) {
        console.error("Error fetching data", error);
        setSpreadsheetData("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  return (
    <BalancoSection id="balanco" className="BalancoSection" ref={main}>
      <BalancoContainer>
        <BalancoTableTop>
          <BalancoTitle ref={title} className="BalancoTitle">
            <span className="balanco">BALANÇO</span>
            <span className="balanco">FINANCEIRO</span>
          </BalancoTitle>
        </BalancoTableTop>
        {spreadsheetData === null ? (
          <BalancoText>Buscando Dados...</BalancoText>
        ) : (
          <MonthTitle>
            {/* MÊS */}
            {spreadsheetData[0].slice(0, 1).map((data, index) => (
              <div key={index}>{data}</div>
            ))}
            {/* ANO */}
            {spreadsheetData[0].slice(1, 2).map((data, index) => (
              <div key={index}>{data}</div>
            ))}
          </MonthTitle>
        )}
      </BalancoContainer>
    </BalancoSection>
  );
}

const BalancoSection = styled(Section)`
  height: 100%;
  background-color: var(--color-red);
`;

const BalancoText = styled(SectionText)`
  margin-bottom: 500px;
`;

const BalancoContainer = styled(ContentContainer)`
  line-height: 1.2em;
  width: 66%;

  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
  }
`;

const BalancoTitle = styled(HorizontalTitle)`
  font-family: var(--title-font);
  font-weight: var(--title-font-weight);
  font-size: var(--title-font-size-horz);
  height: 100%;

  line-height: 0.8em;

  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  flex-basis: 0;

  text-align: end;

  @media (min-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    flex-basis: 0;
  }

  span {
    overflow: visible;
  }
`;

const MonthTitle = styled(HorizontalTitle)`
  font-family: var(--title-font);
  font-weight: var(--title-font-weight);
  font-size: var(--title-font-size-horz);
  height: 100%;

  line-height: 0.8em;

  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;
  flex-basis: 0;

  text-align: end;

  @media (min-width: 768px) {
    width: 100%;
    flex-direction: column;
    flex-basis: 0;
  }

  span {
    overflow: visible;
  }
`;

const BalancoTableTop = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
const BalancoTableTopLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
const BalancoTableTopRight = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Balanco;
