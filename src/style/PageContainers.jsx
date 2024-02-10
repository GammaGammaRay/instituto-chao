import { styled } from "styled-components";

const Section = styled.section`
  /* width: 100%; */
  height: 100svh;

  /* padding: 3dvh, 0; */

  scroll-snap-type: y mandatory;
  scroll-snap-stop: always;
  scroll-snap-align: start;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  z-index: 1;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }
`;

const ContentContainer = styled.div`
  /* margin: 26em, 0em; */
  /* padding-top: 0em !important;
  padding-bottom: 5em !important; */
  /* padding-bottom: 20px !important; */

  /* padding-top: 20px; */
  /* padding-bottom: 20px; */

  @media (min-width: 768px) {
    width: 60%;
    padding-left: 5em;
    padding-right: 5em;
  }
`;

const SectionText = styled.div`
  font-size: 24px;
  max-width: 750px;
  min-width: 40%;
  align-items: center;
  line-height: 1.2em;
  word-wrap: break-word;

  overflow-y: auto;

  p {
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    min-width: 60%;
    max-width: 80%;
    text-align: justify;
    font-size: 26px;
  }
`;

const VerticalTitle = styled.div`
  font-family: var(--title-font);
  font-weight: var(--title-font-weight);

  /* margin-top: 40px; */

  /* height: fit-content; */
  line-height: 0.8em;
  word-wrap: break-word;

  display: flex;
  flex-direction: row;
  align-items: start;
  flex-basis: 0;
  /* width: 100%; */
  font-size: clamp(2em, 10vh, 10vh);

  text-align: end;
  /* background-color: lightcyan; */
  /* will-change: transform; */

  /* padding-left: 10px; */
  /* padding-right: 10px; */

  span {
    /* margin-bottom: 16px; */

    @media (min-width: 768px) {
      /* margin-top: 0px; */
      /* margin-bottom: 0px; */
      transform: rotate(180deg);
    }
  }

  @media (min-width: 768px) {
    /* width: 100%; */
    /* height: fit-content; */
    text-orientation: sideways;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    flex-basis: 0;
    /* will-change: transform; */
    font-size: clamp(4em, 20vh, 70vh);
    /* margin-top: 0px; */
  }
`;

const HorizontalTitle = styled.div`
  font-family: var(--title-font);
  font-weight: var(--title-font-weight);
  font-size: clamp(10vw, 4vw, 20px);
  /* height: fit-content; */
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
    /* width: 100%; */
    font-size: 10px;
  }

  @media (min-width: 768px) {
    /* width: 100%; */
    height: fit-content;
    text-orientation: sideways;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    flex-basis: 0;
    font-size: var(--title-font-size-vert);
    /* will-change: transform; */
  }
`;

export {
  Section,
  ContentContainer,
  SectionText,
  VerticalTitle,
  HorizontalTitle,
};
