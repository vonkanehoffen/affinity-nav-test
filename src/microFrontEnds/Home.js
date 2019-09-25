import React from "react";
import styled from "styled-components";

const Outer = styled.div`
  background: goldenrod;
  flex-grow: 1;
  padding: 1rem;
  margin-left: 60px;
`;

const Home = () => {
  return (
    <Outer>
      <h1>Container Home</h1>
    </Outer>
  );
};

export default Home;
