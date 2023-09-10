import { styled } from "styled-components";

const BodyContainer = styled.div`
  margin-top: var(--nav-height);
  overflow-y: scroll;
  scroll-snap-type: y proximity;
  height: var(--section-height);
`;

const Section = styled.section`
  width: 100%;
  min-height: 100%;
  scroll-snap-align: start;
  scroll-snap-stop: always;

  overflow-y: hidden;

  &:nth-of-type(1) {
    background-color: black;
    height: 100%;
  }
  &:nth-of-type(2) {
    background-color: var(--color-yellow);
    height: 100%;
    color: black;
  }
  &:nth-of-type(3) {
    background-color: var(--color-brown);
    height: 100%;
  }
  &:nth-of-type(4) {
    background-color: var(--color-brown2);
    height: 100%;
  }
  &:nth-of-type(5) {
    background-color: var(--color-green);
    height: 100%;
  }
  &:nth-of-type(6) {
    background-color: var(--color-pink);
    height: 100%;
  }
  &:nth-of-type(7) {
    background-color: var(--color-salmon);
    height: 100%;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;

  ::-webkit-scrollbar {
    width: 0 !important;
  }
`;

const SectionText = styled.div`
  width: 60%;
`;

const VerticalTitle = styled.div`
  width: 30%;
`;

export { BodyContainer, Section, ContentContainer, SectionText, VerticalTitle };
