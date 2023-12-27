import { styled } from "styled-components";

const BodyContainer = styled.div`
  /* height: 100vh; */
`;

const Section = styled.section`
  width: 100%;
  height: var(--section-height);
  /* min-height: 100%; */
  /* height: fit-content; */
  scroll-snap-type: y proximity;
  scroll-snap-stop: normal;
  scroll-snap-align: start;
  scroll-margin: var(--nav-height);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* overflow-y: scroll; */

  ::-webkit-scrollbar {
    width: 0 !important;
  }
  p {
    margin-bottom: 12px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: start;
    justify-content: start;
  }
`;

const ContentContainer = styled.div`
  margin-top: 26px;
  /* height: 100%; */

  background-color: #dc143c45;
`;

const SectionText = styled.div`
  max-width: 600px;

  width: 80%;
  min-width: 40%;
  align-items: center;
  font-size: 20px;
  text-align: justify;
  line-height: 1.2em;
`;

const VerticalTitle = styled.div`
  font-family: var(--title-font);
  font-weight: var(--title-font-weight);
  font-size: clamp(4em, 20vh, 70vh);
  height: fit-content;
  line-height: 0.8em;
  word-wrap: break-word;

  display: flex;
  flex-direction: row;
  align-items: start;
  flex-basis: 0;

  text-align: end;
  /* background-color: lightcyan; */
  will-change: transform;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 100%;
    height: fit-content;
    text-orientation: sideways;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    flex-basis: 0;
    will-change: transform;
  }

  /* span {
    overflow: visible;
  } */
`;

const HorizontalTitle = styled.div`
  font-family: var(--title-font);
  font-weight: var(--title-font-weight);
  font-size: clamp(10vw, 4vw, 20px);
  height: fit-content;
  line-height: 0.8em;
  word-wrap: break-word;

  display: flex;
  flex-direction: row;
  align-items: start;
  flex-basis: 0;

  text-align: end;
  /* background-color: lightcyan; */
  will-change: transform;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 10px;
  }

  @media (min-width: 768px) {
    width: 100%;
    height: fit-content;
    text-orientation: sideways;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    flex-basis: 0;
    font-size: var(--title-font-size-vert);
    will-change: transform;
  }
`;

export {
  BodyContainer,
  Section,
  ContentContainer,
  SectionText,
  VerticalTitle,
  HorizontalTitle,
};
