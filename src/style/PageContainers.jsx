import { styled } from "styled-components";

const BodyContainer = styled.div`
  height: 100vh;
  /* height: var(--section-height); */
  /* margin-top: var(--nav-height); */
`;

const Section = styled.section`
  width: 100%;
  min-height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  &:nth-of-type(1) {
    background-color: black;
  }
  &:nth-of-type(2) {
    background-color: var(--color-yellow);
    color: black;
  }
  &:nth-of-type(3) {
    background-color: var(--color-brown);
  }
  &:nth-of-type(4) {
    background-color: var(--color-brown2);
  }
  &:nth-of-type(5) {
    background-color: var(--color-green);
  }
  &:nth-of-type(6) {
    background-color: var(--color-pink);
  }
  &:nth-of-type(7) {
    background-color: var(--color-salmon);
  }
`;

const ContentContainer = styled.div`
  width: 70%;
  height: 100%;

  ::-webkit-scrollbar {
    width: 0 !important;
  }
`;

const SectionText = styled.div`
  width: 80%;
  align-items: center;
  font-size: 20px;
`;

const VerticalTitle = styled.div`
  width: fit-content;
`;

export { BodyContainer, Section, ContentContainer, SectionText, VerticalTitle };
