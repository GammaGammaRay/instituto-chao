import React from "react";
import Nav from "./components/nav.component.jsx";
import Logo from "./pages/Logo.page.jsx";
import QuemSomos from "./pages/quemSomos.page.jsx";
import { BodyContainer } from "./style/PageContainers";
import ComoFunciona from "./pages/ComoFunciona.page.jsx";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <BodyContainer>
        <Logo />
        <QuemSomos />
        <ComoFunciona />
      </BodyContainer>
    </React.Fragment>
  );
}

export default App;
