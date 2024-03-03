import { styled } from "styled-components";

// div {
//   white-space: nowrap;
//   -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 90%, rgba(0,0,0,0));
// }

const Section = styled.section`
  height: 100svh;
  min-width: 100svw;

  scroll-snap-align: start;
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
  padding: 2svh 0.5svw;

  /* background-color: #00ffff44; */

  @media (min-width: 768px) {
    /* width: clamp(70svw, 75svw, 85svw); */
    width: 70svw;
    padding: 3svh 2svw;
    /* width: 70svw; */
  }
`;

const SectionText = styled.div`
  font-size: clamp(24px, 3vw, 28px);
  line-height: 1.2em;
  word-wrap: break-word;
  max-height: 96svh;
  /* text-align: justify; */

  display: flex;
  flex-direction: column;
  align-items: start;

  padding: 0svh 1svw 0svh 3svw;

  position: relative;
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: var(--scroll-bar-width);
  }

  p {
    margin-bottom: 2svh;
  }

  @media (min-width: 768px) {
    line-height: 1.2em;
    font-size: clamp(24px, 3vw, 28px);
    padding: 0 1svw;
    max-height: 90svh;
    &::-webkit-scrollbar {
      width: var(--scroll-bar-width-large);
    }
  }

  .sticky-wrapper {
    width: 100%;
    height: 200px;
    position: sticky;
    top: 0;
    z-index: 1; /* Ensure it's above other content */
  }
`;

const FadeTopOverflow = styled.div`
  position: absolute;
  top: 0;
  /* left: 0; */
  /* right: 0; */
  height: 200px;
  width: 100%;
  /* pointer-events: none; */
  z-index: 1;
  /* opacity: 1; */
  /* transition: opacity 0.3s; */
  /* background-color: aliceblue; */
  background: linear-gradient(to top, transparent, black 50%);
`;

const FadeBottomOverflow = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 20px;
  pointer-events: none;
  z-index: 1;
  /* opacity: 1; */
  /* transition: opacity 0.3s; */
`;

const Title = styled.h1`
  /* background-color: brown; */

  font-family: var(--title-font);
  font-weight: var(--title-font-weight);
  font-size: clamp(80px, 10svw, 140px);
  color: black;

  margin-top: 5svh;

  word-wrap: break-word;

  display: flex;
  flex-direction: row;
  align-items: start;
  flex-basis: 0;

  span {
    margin-bottom: 2svh;
  }

  @media (min-width: 768px) {
    font-size: clamp(120px, 10svw, 200px);
    line-height: 0.8em;
    margin-top: 0;
    flex-direction: column;
  }
`;

export {
  Section,
  ContentContainer,
  SectionText,
  Title,
  FadeTopOverflow,
  FadeBottomOverflow,
};
