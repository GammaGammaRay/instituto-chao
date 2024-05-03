import { styled } from "styled-components";

const Section = styled.section`
  height: 100lvh;
  /* height: -webkit-fill-available; */
  min-width: 100svw;

  scroll-snap-align: start;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  z-index: 1;
  overflow-y: hidden;

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
  padding: 2svh 0.5svw;

  /* background-color: #00ffff44; */

  @media (min-width: 768px) {
    width: clamp(70svw, 80svw, 85svw);
    /* width: 70svw; */
    padding: 3svh 2svw;
  }
`;

const SectionTextWrapper = styled.div`
  max-height: 96svh;
  /* background-color: #892be267; */
  position: relative;
`;

const SectionText = styled.div`
  font-size: clamp(20px, 3vw, 24px);
  /* line-height: 1.2em; */
  white-space: break-spaces;
  word-wrap: break-word;
  height: 100%;
  max-height: 96svh;
  /* text-align: justify; */

  display: flex;
  flex-direction: column;
  align-items: start;

  padding: 0svh 1svw 0svh 3svw;

  position: relative;

  &::-webkit-scrollbar {
    width: var(--scroll-bar-width);
    background-color: #ffffff28;
    border-radius: 10px;
  }

  p {
    margin-bottom: 2svh;
  }

  @media (min-width: 768px) {
    /* line-height: 1.2em; */
    font-size: clamp(18px, 3vw, 24px);
    padding: 0 1svw;
    max-height: 90svh;
    &::-webkit-scrollbar {
      width: var(--scroll-bar-width-large);
    }
  }
`;

const Title = styled.h1`
  /* background-color: brown; */

  font-family: var(--title-font);
  font-weight: var(--title-font-weight);
  font-size: clamp(70px, 10svw, 70px);
  color: black;
  white-space: nowrap;

  margin-top: 40px;

  word-wrap: break-word;

  display: flex;
  flex-direction: row;
  align-items: start;
  flex-basis: 0;

  span {
    margin-bottom: 2svh;
  }

  @media (min-width: 768px) {
    white-space: normal;
    font-size: clamp(120px, 10svw, 200px);
    line-height: 0.8em;
    margin-top: 0;
    flex-direction: column;
  }

  @media (min-width: 768px) and (max-height: 600px) {
    white-space: normal;
    font-size: clamp(70px, 20svh, 200px);
    line-height: 0.8em;
    margin-top: 0;
    flex-direction: column;
  }
`;

export { Section, ContentContainer, SectionText, Title, SectionTextWrapper };
