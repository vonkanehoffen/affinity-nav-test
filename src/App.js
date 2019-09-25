import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";
import Billing from "./microFrontEnds/Billing";
import Sales from "./microFrontEnds/Sales";
import RootNav from "./components/RootNav";

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <BrowserRouter>
      <Container>
        <RootNav />
        <Route path="/billing" component={Billing} />
        <Route path="/sales" component={Sales} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
