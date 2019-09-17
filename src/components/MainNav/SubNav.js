import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";

const Outer = styled.div`
  position: absolute;
  top: 0;
  left: 60px;
  width: 230px;
  height: 100vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background: white;
  overflow: hidden;
`;

const Level = styled.div`
  background: goldenrod;
  border: 1px solid red;
`;

const NavLink = styled(Link)`
  display: block;
  padding: 1rem;
  background: greenyellow;
  border: 1px solid #000;
`;

const SubNavLevel = ({ routes, base = "" }) => {
  return (
    <Switch>
      {routes.map(route => (
        <Level key={route.path}>
          <NavLink to={`${base}${route.path}`}>{route.title}</NavLink>
          {route.routes && (
            <Route
              path={route.path}
              component={() => (
                <SubNavLevel routes={route.routes} base={route.path} />
              )}
            />
          )}
        </Level>
      ))}
    </Switch>
  );
};

export const SubNav = ({ routes }) => (
  <Outer>
    <SubNavLevel routes={routes} />
  </Outer>
);

export default SubNav;
