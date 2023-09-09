import { styled } from "styled-components";

const BodyContainer = styled.div`
  margin-top: var(--nav-height);
  overflow-y: scroll;
  scroll-snap-type: y proximity;
  height: calc(100vh - var(--nav-height));
`;

const Section = styled.section`
  width: 100%;
  min-height: 100%;
  scroll-snap-align: start;
  /* scroll-padding-top: 50vh; */
  /* scroll-margin-top: 20vh; */
  overflow-y: hidden;
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
