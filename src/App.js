import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";
import MainNav from "./components/MainNav";
import Billing from "./microFrontEnds/Billing";
import Sales from "./microFrontEnds/Sales";

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  background: paleturquoise;
  flex-grow: 1;
  padding: 1rem;
  margin-left: 290px;
`;

function App() {
  return (
    <BrowserRouter>
      <Container>
        <MainNav />
        <Content>
          <Route path="/billing" component={Billing} />
          <Route path="/sales" component={Sales} />
        </Content>
      </Container>
    </BrowserRouter>
  );
}

export default App;
