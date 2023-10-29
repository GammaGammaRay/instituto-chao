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
} from "../style/PageContainers";
import { getSpreadsheetData } from "../service/getGoogleSheets.js";

function Balanco() {
  const main = useRef();
  const title = useRef();
  const bg = useRef();

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
          setSpreadsheetData("Data is not in the expected format");
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
      <BalancoBg />
      <BalancoContainer>
        <BalancoTitle ref={title} className="BalancoTitle">
          <span className="balanco">BALANÇO</span>
        </BalancoTitle>
        {spreadsheetData === null ? (
          <BalancoText>Loading...</BalancoText>
        ) : (
          <div>
            {spreadsheetData.slice(0, 1).map((data, index) => (
              <div key={index}>{data}</div>
            ))}
          </div>
        )}
      </BalancoContainer>
    </BalancoSection>
  );
}

const BalancoSection = styled(Section)`
  height: 100%;

  p {
    margin-bottom: 12px;
  }
`;

const BalancoBg = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-red);
  z-index: -5;
  position: absolute;
`;

const BalancoText = styled(SectionText)`
  margin-bottom: 500px;
  /* padding-left: var(--text-padding); */
  /* overflow-y: scroll; */
`;

const BalancoContainer = styled(ContentContainer)`
  line-height: 1.2em;
  /* height: 100%; */
  /* padding-top: 24px; */
  /* overflow: hidden; */

  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
  }
`;

const BalancoTitle = styled(VerticalTitle)`
  font-family: var(--title-font);
  font-weight: var(--title-font-weight);
  /* font-size: clamp(13v, 1vw, 20px); */
  /* font-size: clamp(13v, 1vw, 20px); */
  height: 100%;

  /* position: sticky; */

  line-height: 0.8em;
  /* word-wrap: break-word; */

  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  flex-basis: 0;

  text-align: end;

  @media (min-width: 768px) {
    width: 100%;
    writing-mode: vertical-lr;
    text-orientation: sideways;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    flex-basis: 0;
    font-size: calc(var(--title-font-size) * 0.95);
  }

  span {
    overflow: visible;

    @media (min-width: 768px) {
      transform: rotate(180deg);
    }
  }

  /* position: sticky; */
`;

export default Balanco;
