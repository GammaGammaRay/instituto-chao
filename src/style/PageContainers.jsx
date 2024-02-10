import { styled } from "styled-components";

const Section = styled.section`
  /* height: calc(100svh- var(--nav-height)); */
  /* height: 100svh; */
  height: calc(100svh - var(--nav-height));

  scroll-snap-type: y mandatory;
  scroll-snap-stop: always;
  scroll-snap-align: start;
  scroll-margin-top: var(--nav-height);
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  z-index: 1;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;

  /* background-color: aqua; */

  @media (min-width: 768px) {
    /* padding: 10dvh 0px; */
    width: 70%;
  }
`;

const SectionText = styled.div`
  font-size: var(--text-font-size);
  line-height: 1.2em;
  word-wrap: break-word;
  max-height: 98svh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1svh 1svw;

  p {
    margin-bottom: 1em;
  }

  @media (min-width: 768px) {
    max-height: 90svh;
    text-align: justify;
  }
`;

const VerticalTitle = styled.div`
  font-family: var(--title-font);
  font-weight: var(--title-font-weight);

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

  span {
    @media (min-width: 768px) {
      transform: rotate(180deg);
    }
  }

  @media (min-width: 768px) {
    text-orientation: sideways;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    flex-basis: 0;
  }
`;

const HorizontalTitle = styled.div`
  font-family: var(--title-font);
  font-weight: var(--title-font-weight);
  font-size: clamp(10vw, 4vw, 20px);
  line-height: 0.8em;
  word-wrap: break-word;

  display: flex;
  flex-direction: row;
  align-items: start;
  flex-basis: 0;

  text-align: end;
  /* background-color: lightcyan; */

  @media (max-width: 768px) {
    font-size: 10px;
  }

  @media (min-width: 768px) {
    height: fit-content;
    text-orientation: sideways;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    flex-basis: 0;
    font-size: var(--title-font-size-vert);
  }
`;

export {
  Section,
  ContentContainer,
  SectionText,
  VerticalTitle,
  HorizontalTitle,
};
