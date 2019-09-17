import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ArrowBack from "@material-ui/icons/ArrowBack";

export const Outer = styled.div`
  width: 300px;
  padding-left: 60px;
  background: palegoldenrod;
`;

const LevelOuter = styled.div`
  width: 300px;
  background: palevioletred;
  border: 1px solid #000;
`;

export const Level = ({ title, children }) => (
  <LevelOuter>
    <Box m={1}>
      {title ? (
        <Typography variant="h4">{title}</Typography>
      ) : (
        <Typography variant="h4">
          <ArrowBack /> Back
        </Typography>
      )}
    </Box>
    {children}
  </LevelOuter>
);

export const ItemLink = styled(Link)`
  display: block;
  padding: 10px;
  background: white;
  border-bottom: 1px solid lightgrey;
  cursor: pointer;
  &:hover {
    color: blueviolet;
  }
`;
