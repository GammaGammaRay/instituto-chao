import { styled } from "styled-components";

const Section = styled.section`
  height: 100dvh;

  scroll-snap-align: start;
  scroll-snap-stop: always;
  overflow-y: hidden;

  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  z-index: 1;

  @media (min-width: 768px) {
    height: calc(100dvh - var(--nav-height));
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
  padding: 2dvh 0.5dvw;

  /* background-color: #00ffff44; */

  @media (min-width: 768px) {
    width: clamp(70dvw, 80dvw, 85dvw);
    /* width: 70dvw; */
    padding: 3dvh 2dvw;
  }
`;

const SectionText = styled.div`
  font-size: clamp(22px, 3vw, 24px);
  /* line-height: 1.2em; */
  white-space: break-spaces;
  word-wrap: break-word;
  height: 100%;
  max-height: 96dvh;
  /* text-align: justify; */

  display: flex;
  flex-direction: column;
  align-items: start;

  padding: 0dvh 1dvw 0dvh 3dvw;

  position: relative;

  &::-webkit-scrollbar {
    width: var(--scroll-bar-width);
    background-color: #ffffff28;
    border-radius: 10px;
  }

  p {
    margin-bottom: 2dvh;
  }

  @media (min-width: 768px) {
    /* line-height: 1.2em; */
    font-size: clamp(18px, 3vw, 32px);
    padding: 0 1dvw;
    max-height: 90dvh;
    max-width: 50dvw;
    &::-webkit-scrollbar {
      width: var(--scroll-bar-width-large);
    }
  }
`;

const Title = styled.h1`
  /* background-color: brown; */

  font-family: var(--title-font);
  font-weight: var(--title-font-weight);
  font-size: clamp(70px, 10dvw, 70px);
  color: black;
  white-space: nowrap;

  margin-top: 40px;

  word-wrap: break-word;

  display: flex;
  flex-direction: row;
  align-items: start;
  flex-basis: 0;

  span {
    margin-bottom: 2dvh;
  }

  @media (min-width: 768px) {
    white-space: normal;
    font-size: clamp(120px, 10dvw, 200px);
    line-height: 0.8em;
    margin-top: 0;
    flex-direction: column;
  }

  @media (min-width: 768px) and (max-height: 600px) {
    white-space: normal;
    font-size: clamp(70px, 20dvh, 200px);
    line-height: 0.8em;
    margin-top: 0;
    flex-direction: column;
  }
`;

export { Section, ContentContainer, SectionText, Title };
