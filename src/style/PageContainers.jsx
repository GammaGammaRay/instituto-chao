import { styled } from "styled-components";

const BodyContainer = styled.div`
  margin-top: var(--nav-height);
  overflow-y: scroll;
  scroll-snap-type: y proximity;
  height: calc(100vh - var(--nav-height));
`;

const Section = styled.div`
  width: 100%;

  scroll-snap-align: start;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const SectionText = styled.div`
  width: 60%;
  overflow-y: auto;
`;

const VerticalTitle = styled.div`
  width: 30%;
`;

export { BodyContainer, Section, ContentContainer, SectionText, VerticalTitle };
