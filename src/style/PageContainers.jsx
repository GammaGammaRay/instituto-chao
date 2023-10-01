import { styled } from "styled-components";

const BodyContainer = styled.div`
  height: 100vh;
  /* height: var(--section-height); */
  /* margin-top: var(--nav-height); */
`;

const Section = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: start;
    justify-content: start;
  }

  overflow: hidden;
`;

const ContentContainer = styled.div`
  width: 70%;
  height: fit-content;

  ::-webkit-scrollbar {
    width: 0 !important;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 20%;
  }
`;

const SectionText = styled.div`
  margin-top: 26px;
  width: 80%;
  min-width: 40%;
  align-items: center;
  font-size: 20px;
  padding-bottom: 50px;
  line-height: 1.1em;
  text-align: justify;
`;

const VerticalTitle = styled.div`
  width: fit-content;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 10px;
  }
`;

export { BodyContainer, Section, ContentContainer, SectionText, VerticalTitle };
