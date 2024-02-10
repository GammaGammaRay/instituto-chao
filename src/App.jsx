import React from "react";
import Nav from "./components/Nav.component.jsx";

import Logo from "./pages/0Logo.page.jsx";
import QuemSomos from "./pages/1QuemSomos.page.jsx";
import ComoFunciona from "./pages/2ComoFunciona.page.jsx";
import Buscamos from "./pages/4Buscamos.page.jsx";
import Contribuicao from "./pages/3ContribuicaoInfo.page.jsx";
import Historico from "./pages/5Historico.jsx.jsx";
import Balanco from "./pages/6Balanco.page.jsx";
import Contato from "./pages/7Contato.page.jsx";

import { MobileProvider } from "./context/mobileContext.jsx";

function App() {
  return (
    <React.Fragment>
      <MobileProvider>
        <Nav />
        <Logo />
        <QuemSomos />
        <ComoFunciona />
        <Contribuicao />
        <Buscamos />
        <Historico />
        <Balanco />
        <Contato />
      </MobileProvider>
    </React.Fragment>
  );
}

export default App;
