import React from "react";
import Nav from "./components/nav.component.jsx";
import Logo from "./pages/Logo.page.jsx";
import QuemSomos from "./pages/quemSomos.page.jsx";
import { BodyContainer } from "./style/PageContainers";
import ComoFunciona from "./pages/ComoFunciona.page.jsx";
import Contribuicao from "./pages/ContribuicaoInfo.page.jsx";
import Buscamos from "./pages/Buscamos.page.jsx";
import Historico from "./pages/Historico.jsx.jsx";
import Balanco from "./pages/Balanco.page.jsx";
import Contato from "./pages/Contato.page.jsx";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <BodyContainer>
        <Logo />
        <QuemSomos />
        <ComoFunciona />
        <Contribuicao />
        <Buscamos />
        <Historico />
        <Balanco />
        <Contato />
      </BodyContainer>
    </React.Fragment>
  );
}

export default App;
