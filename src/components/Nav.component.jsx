import React from "react";
import { styled } from "styled-components";

function Nav() {
  return (
    <NavContainer>
      <NavButtonContainer>
        <NavBtn>Quem Somos?</NavBtn>
        <NavBtn>Como Funciona?</NavBtn>
        <NavBtn>O que buscamos?</NavBtn>
        <NavBtn>Histórico</NavBtn>
        <NavBtn>Balanço</NavBtn>
        <NavBtn>Contato</NavBtn>
      </NavButtonContainer>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  width: 100%;
  height: var(--nav-height);
  position: fixed;

  top: 0px;
  left: 0px;
  z-index: 10;
  background-color: black;

  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  color: white;
`;

const NavButtonContainer = styled.div`
  width: fit-content;
  /* margin-right: 16px; */
  width: 60%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const NavBtn = styled.div`
  /* margin-left: 16px; */
`;

export default Nav;
