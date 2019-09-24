import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";
import Breadcrumbs from "./components/MainNav/Breadcrumbs";
import MainNav from "./components/MainNav";
import Billing from "./microFrontEnds/Billing";

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
          <Route
            path="/billing"
            component={() => (
              <>
                <Breadcrumbs basePath="/billing" baseTitle="Billing" />
                <Billing />
              </>
            )}
          />
        </Content>
      </Container>
    </BrowserRouter>
  );
}

export default App;
