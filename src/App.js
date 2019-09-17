import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";
import Breadcrumbs from "./components/MainNav/Breadcrumbs";
import MainNav from "./components/MainNav";

const Container = styled.div`
  display: flex;
`;

const View = styled.div`
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
        <View>
          <Breadcrumbs />
          <Route path="/billing" component={() => <h1>Billing root</h1>} />
        </View>
      </Container>
    </BrowserRouter>
  );
}

export default App;
