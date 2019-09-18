import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Breadcrumbs from "./components/MainNav/Breadcrumbs";
import MainNav from "./components/MainNav";
import Views from "./components/Views";

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
          <Breadcrumbs />
          <Views />
        </Content>
      </Container>
    </BrowserRouter>
  );
}

export default App;
