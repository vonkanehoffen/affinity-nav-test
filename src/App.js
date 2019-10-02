import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import AuroraTheme from "./components/AuroraTheme/AuroraTheme";
import styled from "styled-components";
import Billing from "./microFrontEnds/Billing";
import Sales from "./microFrontEnds/Sales";
import RootNav from "./components/RootNav";
import Home from "./microFrontEnds/Home";

const Container = styled.div`
  display: flex;
`;

/**
 * App root
 * Note ultimately `Billing` and `Sales` would be different micro front end codebases
 * with separate builds. See https://martinfowler.com/articles/micro-frontends.html
 *
 * @returns {*}
 * @constructor
 */
function App() {
  return (
    <BrowserRouter>
      <AuroraTheme>
        <Container>
          <RootNav />
          <Route path="/" exact component={Home} />
          <Route path="/billing" component={Billing} />
          <Route path="/sales" component={Sales} />
        </Container>
      </AuroraTheme>
    </BrowserRouter>
  );
}

export default App;
