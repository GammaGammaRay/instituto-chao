import React from "react";
import {
  ContentContainer,
  Section,
  SectionText,
  VerticalTitle,
} from "../style/PageContainers";
import { styled } from "styled-components";

function Historico() {
  return (
    <Section>
      <QuemSomosContainer>
        <QuemSomosTitle>HISTÓRICO</QuemSomosTitle>
        <SectionText></SectionText>
      </QuemSomosContainer>
    </Section>
  );
}

const QuemSomosContainer = styled(ContentContainer)`
  background-color: var(--color1-yellow);
  color: black;
  line-height: 1.2em;
  padding-top: 24px;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  justify-content: start;
`;

const QuemSomosTitle = styled(VerticalTitle)`
  font-family: var(--title-font);
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

export default Historico;
