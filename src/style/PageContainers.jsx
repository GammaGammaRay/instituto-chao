import { styled } from "styled-components";

const BodyContainer = styled.div`
  height: 100vh;
  /* height: var(--section-height); */
  /* margin-top: var(--nav-height); */
`;

const Section = styled.section`
  width: 100%;
  min-height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`;

const ContentContainer = styled.div`
  width: 70%;
  height: 100%;

  ::-webkit-scrollbar {
    width: 0 !important;
  }
`;

const SectionText = styled.div`
  width: 80%;
  align-items: center;
  font-size: 20px;
`;

const VerticalTitle = styled.div`
  width: fit-content;
`;

export { BodyContainer, Section, ContentContainer, SectionText, VerticalTitle };
