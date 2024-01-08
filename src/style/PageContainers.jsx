import { styled } from "styled-components";

const BodyContainer = styled.div`
  height: 100vh;
`;

const Section = styled.section`
  width: 100vw;
  height: 100%;
  scroll-snap-type: y mandatory;
  scroll-snap-stop: always;
  scroll-snap-align: start;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;

  position: relative;

  @media (min-width: 768px) {
    scroll-margin: 50px 0px 0px 0px;
    height: calc(100% - var(--nav-height));
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ContentContainer = styled.div`
  /* margin-top: 26px; */
  /* height: fit-content; */
  padding-top: 20px;
  /* padding-bottom: 20px !important; */

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
  padding-left: 16px !important;
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

  margin-top: 66px;

  height: fit-content;
  line-height: 0.8em;
  word-wrap: break-word;

  display: flex;
  flex-direction: row;
  align-items: start;
  flex-basis: 0;
  width: 100%;
  font-size: clamp(2em, 10vh, 10vh);

  text-align: end;
  /* background-color: lightcyan; */
  will-change: transform;

  padding-left: 10px;
  padding-right: 20px;

  span {
    margin-bottom: 16px;

    @media (min-width: 768px) {
      margin-top: 0px;
      margin-bottom: 0px;
      transform: rotate(180deg);
    }
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
    font-size: clamp(4em, 20vh, 70vh);
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
