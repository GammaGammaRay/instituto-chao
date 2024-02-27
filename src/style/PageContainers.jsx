import { styled } from "styled-components";

const Section = styled.section`
  height: 100svh;
  min-width: 100svw;

  scroll-snap-type: y mandatory;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  z-index: 1;

  @media (min-width: 768px) {
    height: calc(100svh - var(--nav-height));
    scroll-margin-top: var(--nav-height);
    flex-direction: column;
    align-items: center;
    justify-content: start;
    overflow-y: hidden;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding: 3svh 2svw;

  /* background-color: #00ffff44; */

  @media (min-width: 768px) {
    /* padding: 10svh 0svw; */
    width: 70svw;
  }
`;

const SectionText = styled.div`
  /* font-size: min(36px, 5svw); */
  font-size: clamp(24px, 3vw, 28px);
  line-height: 1.2em;
  word-wrap: break-word;
  max-height: 96svh;
  text-align: justify;

  display: flex;
  flex-direction: column;
  align-items: start;

  padding: 0 1svw;
  /* margin: 1svh 2svw; */

  &::-webkit-scrollbar {
    width: var(--scroll-bar-width);
  }

  p {
    margin-bottom: 1svh;
  }

  @media (min-width: 768px) {
    max-height: 90svh;
  }
`;

const VerticalTitle = styled.div`
  font-family: var(--title-font);
  font-weight: var(--title-font-weight);
  font-size: clamp(80px, 10svw, 15svw);

  margin-top: 2svh;
  /* margin: 2svh 1.5svw; */

  line-height: 0.8em;
  word-wrap: break-word;

  display: flex;
  flex-direction: row;
  align-items: start;
  flex-basis: 0;

  text-align: end;

  span {
    margin-bottom: 2svh;
  }

  @media (min-width: 768px) {
    margin: 0;
    text-orientation: sideways;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    flex-basis: 0;
    span {
      transform: rotate(180deg);
    }
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
