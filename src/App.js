import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";
import RootNav from "./components/RootNav";
import BillingNav from "./components/BillingNav";
import Breadcrumbs from "./components/Breadcrumbs";

const Container = styled.div`
  display: flex;
`;

const View = styled.div`
  background: paleturquoise;
  flex-grow: 1;
  padding: 1rem;
`;

function App() {
  return (
    <BrowserRouter>
      <Container>
        <RootNav />
        <Route path="/billing" component={BillingNav} />
        <View>
          <Breadcrumbs />
          <Route path="/billing" component={() => <h1>Billing root</h1>} />
        </View>
      </Container>
    </BrowserRouter>
  );
}

export default App;
