import { styled } from "styled-components";

const BodyContainer = styled.div`
  height: 100vh;
`;

const Section = styled.section`
  width: 100vw;
  /* height: calc(100% - var(--nav-height)); */
  height: calc(100% - var(--nav-height));
  scroll-snap-type: y mandatory;
  scroll-snap-stop: always;
  scroll-snap-align: start;
  scroll-margin: 50px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: start;
    justify-content: start;
    max-width: 100%;
  }
`;

const ContentContainer = styled.div`
  /* margin-top: 26px; */
  /* height: fit-content; */
  padding-top: 20px;

  @media (min-width: 768px) {
    padding-left: 12px;
    padding-right: 12px;
  }
`;

const SectionText = styled.div`
  font-size: 16px;
  max-width: 750px;
  height: 95%;
  width: 90%;
  min-width: 40%;
  align-items: center;
  line-height: 1.2em;
  padding-bottom: 12px;
  /* text-align: justify; */

  p {
    margin-bottom: 12px;
  }

  @media (min-width: 768px) {
    text-align: justify;
    font-size: 22px;
  }
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

  span {
    margin-bottom: 16px;

    @media (min-width: 768px) {
      margin-bottom: 0px;
      transform: rotate(180deg);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: clamp(2em, 10vh, 10vh);
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
