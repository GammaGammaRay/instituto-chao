import { styled } from "styled-components";

const BodyContainer = styled.div`
  height: 100vh;
  /* height: var(--section-height); */
  /* margin-top: var(--nav-height); */
`;

const Section = styled.section`
  width: 100%;
  /* height: calc(100% - var(--nav-height)); */
  min-height: 100%;
  height: fit-content;
  scroll-snap-type: y proximity;
  scroll-snap-align: start;
  scroll-margin: var(--nav-height);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin-bottom: 12px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: start;
    justify-content: start;
  }

  overflow: hidden;
`;

const ContentContainer = styled.div`
  height: fit-content;

  ::-webkit-scrollbar {
    width: 0 !important;
  }
`;

const SectionText = styled.div`
  max-width: 600px;
  margin-top: 26px;
  width: 80%;
  min-width: 40%;
  align-items: center;
  font-size: 20px;
  padding-bottom: 50px;
  line-height: 1.1em;
  text-align: justify;
  line-height: 1.2em;
`;

const VerticalTitle = styled.div`
  width: fit-content;
  font-family: var(--title-font);
  font-weight: var(--title-font-weight);
  font-size: var(--title-font-size-horz);
  height: fit-content;
  line-height: 0.8em;
  word-wrap: break-word;

  display: flex;
  flex-direction: row;
  align-items: start;
  flex-basis: 0;

  text-align: end;
  will-change: transform;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 10px;
  }
`;

export { BodyContainer, Section, ContentContainer, SectionText, VerticalTitle };
