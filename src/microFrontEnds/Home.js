import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const Outer = styled.div`
  background: goldenrod;
  flex-grow: 1;
  padding: 1rem;
  margin-left: 60px;
`;

const Home = () => {
  return (
    <Outer>
      <Typography variant="h1">Container Home</Typography>
    </Outer>
  );
};

export default Home;
