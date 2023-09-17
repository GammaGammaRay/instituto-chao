import React, { useEffect, useRef } from "react";
import {
  Section,
  SectionText,
  VerticalTitle,
  ContentContainer,
} from "../style/PageContainers";
import { styled } from "styled-components";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

function QuemSomos() {
  const main = useRef();
  const title = useRef();

  useEffect(() => {
    console.log("useLayoutEffect executed");

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const animation = gsap.timeline({
        defaults: {
          opacity: 0,
          duration: 1.5,
          ease: "power3.inOut",
        },
      });
      // <--------- ANIMATION START --------->
      animation
        .from(title.current.querySelectorAll("span"), {
          opacity: 0,
          yPercent: -150,
          stagger: 0.5,
          scrollTrigger: {
            trigger: title.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: true,
            markers: true,
          },
        })
        .from(main.current, {
          scrollTrigger: {
            trigger: main.current,
            start: "top 50px",
            end: "bottom top",
            scrub: true,
            // markers: true,
            pin: true,
          },
        })

        .from(main.current.querySelectorAll("p"), {
          opacity: 0,
          delay: -1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: main.current,
            start: "top 70%",
            end: "bottom bottom",
            // markers: true,
            scrub: true,
          },
        });
      // <--------- ANIMATION END --------->
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <QuemSomosSection className="quemSomosSection" ref={main}>
      <QuemSomosContainer>
        <QuemSomosTitle ref={title} className="quemSomosTitle">
          <span className="quem">QUEM</span>
          <span className="somos">SOMOS?</span>
        </QuemSomosTitle>
        <QuemSomosText>
          <p>
            O Chão é uma associação de trabalhadores, sem fins lucrativos, que
            se movimenta para o aprofundamento da consciência crítica, da
            democracia e da igualdade de direitos, a fim de construir
            coletivamente uma sociedade justa e solidária.
          </p>
          <p>
            Buscamos uma democracia real: tudo é decidido em assembléias
            semanais, divide-se as funções de forma conjunta, recebe-se
            igualmente e apenas pelo trabalho, não remunera-se capital. Não há
            relação de exploração.
          </p>
          <p>
            Seguimos os princípios da Economia Solidária, uma política econômica
            do cuidado, tendo as pessoas como sujeito e finalidade da atividade
            econômica.
          </p>
          <p>
            Articulamos e integramos redes que fomentam a autonomia, o
            cooperativismo, a autogestão, o antirracismo, o feminismo, o
            antifascismo, o anti capacitismo e a redistribuição radical de
            renda.
          </p>
          <p>
            Visando a equidade e a horizontalidade, o Chão não tem dono, nem
            hierarquia. A prática diária se baseia no debate reflexivo sobre o
            trabalho e sustenta a busca por deslocamentos, visando a superação
            do sistema capitalista. A partir da vivência, se dá a construção de
            bases organizativas que favoreçam a tomada de decisão coletiva,
            através das tecnologias comunicacionais cotidianas. Saberes e
            práticas são valorizadas a partir das potências de trabalho. Pessoas
            que vieram de todas as classes e com todos os níveis de escolaridade
            decidindo os rumos e se responsabilizando juntas pelo caminho
            trilhado.
          </p>
          <p>
            Com todas as contradições inerentes, o nosso caminho é o do cuidado,
            da aproximação das pessoas, da busca por relações mais justas e
            transparentes. Aliando-se a movimentos sociais, comunidades
            tradicionais e outras instituições, lutamos pela reforma agrária e
            urbana, pela agroecologia, pela educação pública, pela saúde
            pública, pelo combate à fome, pela biodiversidade e preservação
            ambiental e pela soberania alimentar.
          </p>
        </QuemSomosText>
      </QuemSomosContainer>
    </QuemSomosSection>
  );
}

const QuemSomosSection = styled(Section)`
  /* scroll-padding-bottom: 10vh; */
  background-color: var(--color-yellow);
  p {
    margin-bottom: 12px;
  }
`;

const QuemSomosText = styled(SectionText)`
  /* padding-left: var(--text-padding); */
`;

const QuemSomosContainer = styled(ContentContainer)`
  line-height: 1.2em;
  padding-top: 24px;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const QuemSomosTitle = styled(VerticalTitle)`
  font-family: var(--title-font);
  font-weight: var(--title-font-weight);
  font-size: var(--title-font-size);
  writing-mode: vertical-lr;
  text-orientation: sideways;
  line-height: 0.8em;
  word-wrap: break-word;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  flex-basis: 0;

  text-align: end;

  span {
    overflow: visible;
    transform: rotate(180deg);
  }

  /* position: sticky; */
`;

export default QuemSomos;
