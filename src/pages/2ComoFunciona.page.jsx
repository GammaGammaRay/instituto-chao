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

function ComoFunciona() {
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

      animation
        // .from(main.current, {
        //   scrollTrigger: {
        //     trigger: main.current,
        //     start: "top top",
        //     end: "bottom bottom",
        //     scrub: true,
        //     markers: true,
        //     pin: true,
        //   },
        // })
        .from(main.current, {
          scrollTrigger: {
            trigger: main.current,
            start: "top 80%",
            end: "bottom 90%",
            scrub: true,
            // markers: true,
            // pin: true,
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
        })
        .from(main.current, {
          scrolltrigger: {
            trigger: main.current,
            start: "top top",
            end: "bottom bottom",
          },
        });
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <Section ref={main}>
      <ComoFuncionaContainer>
        <ComoFuncionaText>
          <p>
            O Chão é essencialmente um lugar de construção cotidiana de um outro
            mundo necessário. Uma associação autogestionária que funciona como
            grupo de consumo aberto, financiado coletivamente. Temos um sítio,
            uma livraria, uma feira e uma mercearia com produtos agroecológicos,
            orgânicos e artesanais.
          </p>
          <br />
          <p>
            Através desses espaços de trabalho, convidamos as pessoas a
            experimentar conosco novas formas de relação. Vamos aos poucos,
            tensionando o estabelecido, deslocando o naturalizado, suspendendo o
            automático.
          </p>
          <br />
          <p>
            Nesse coletivo desenvolvemos constantemente tecnologias de
            transformação da relação financeirizada das pessoas consigo mesmas,
            com as outras e com o mundo. Visamos quebrar a meritocracia, a
            divisão entre trabalho material e imaterial e, assim, transformar os
            valores, as práticas sociais e as relações que estabelecemos com o
            trabalho, com produtores, fornecedores e frequentadores.
          </p>
          <br />
          <p>
            Em busca do fortalecimento de todos os componentes da cadeia
            produtiva, valorizamos economicamente produtores, trabalhadores e
            tornamos o preço mais acessível dos alimentos agroecológicos para
            todos. Os produtos são vendidos pelo preço de custo (preço de nota,
            frete e perdas).
          </p>
          <br />
          <p>
            Todo mês fazemos uma previsão de custos e uma previsão de vendas e,
            a partir disso, sugerimos aos frequentadores, a cada compra, um
            percentual de contribuição para que possamos manter o espaço
            funcionando. Ao longo dos anos esses valores foram se estabilizando
            e, hoje, nossa necessidade mínima é de 25% e a sugestão de 30% sobre
            o valor dos produtos.
          </p>
        </ComoFuncionaText>
        <ComoFuncionaTitle ref={title}>
          <span>COMO</span>
          <span>FUNCIONA?</span>
        </ComoFuncionaTitle>
      </ComoFuncionaContainer>
    </Section>
  );
}

const ComoFuncionaText = styled(SectionText)`
  /* padding-right: var(--text-padding); */
`;

const ComoFuncionaContainer = styled(ContentContainer)`
  line-height: 1.2em;
  padding-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
`;

const ComoFuncionaTitle = styled(VerticalTitle)`
  font-family: var(--title-font);
  font-weight: var(--title-font-weight);
  font-size: var(--title-font-size);
  line-height: 0.8em;
  word-wrap: break-word;

  writing-mode: vertical-rl;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  text-align: start;
`;

export default ComoFunciona;
