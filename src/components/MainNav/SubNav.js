import React from "react";
import { Route, Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { getMatchedRoute } from "../../helpers/routeHelpers";
import { billingRoutesFlat } from "./billingRoutes";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import { matchPath } from "react-router-dom";

const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 60px;
  width: 230px;
  height: 100vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background: white;
  opacity: 0.8;
  //overflow: hidden;
`;

const Slider = styled.div`
  transform: translateX(-${props => props.level * 230}px);
  transition: transform 0.4s;
  //opacity: 0.4;
`;
const Level = styled.div`
  position: absolute;
  left: 230px;
  top: 0;
  background: pink;
  //border: 1px solid red;
  width: 230px;
`;

const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1rem;
  text-decoration: none;
  word-break: break-all;
`;

const NavLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: greenyellow;
  border-bottom: 1px solid #000;
  text-decoration: none;
`;

const SubNavLevel = ({ routes, base, rootTitle }) => {
  const parentPath = base.substring(0, base.lastIndexOf("/"));
  return (
    <Level>
      {rootTitle ? (
        <Box m={1}>
          <Typography variant="h4">{rootTitle}</Typography>
        </Box>
      ) : (
        <div>
          <BackLink to={parentPath}>
            <ChevronLeft /> Back
          </BackLink>
          <NavLink to={base}>Dashboard</NavLink>
        </div>
      )}
      {routes.map(route => {
        const fullPath = `${base}${route.path}`;
        if (route.title || true)
          // this needs to be rendered invisible when param route?
          return (
            <div key={route.path}>
              {/*<p style={{ wordBreak: "break-all", border: "2px solid #f00" }}>*/}
              {/*  {fullPath}*/}
              {/*</p>*/}
              {route.title && (
                <NavLink to={fullPath}>
                  {route.title}
                  {route.routes && <ChevronRight />}
                </NavLink>
              )}
              {route.routes && (
                <Route
                  path={fullPath}
                  component={() => (
                    <SubNavLevel routes={route.routes} base={fullPath} />
                  )}
                />
              )}
            </div>
          );
        return false;
      })}
    </Level>
  );
};

export const SubNav = ({ routes, base, location: { pathname }, rootTitle }) => {
  // Get the level (translateX) to slide the nav container to
  const matchedRoute = getMatchedRoute(billingRoutesFlat, pathname);
  let level = 1;
  if (matchedRoute) {
    // Level of current path
    const currentLevel = matchedRoute.path.split("/").length - 1;
    //Level of most distant sibling to current path
    const endSibling = billingRoutesFlat.find(route =>
      route.path.includes(pathname)
    );
    const maxLevel = endSibling
      ? endSibling.path.split("/").length - 1
      : currentLevel;
    console.log("currentLevel = ", currentLevel, "maxLevel = ", maxLevel);
    level = Math.min(currentLevel, maxLevel - 1);
  }
  return (
    <Outer>
      <Slider level={level}>
        <SubNavLevel routes={routes} base={base} rootTitle={rootTitle} />
      </Slider>
    </Outer>
  );
};

export default withRouter(SubNav);
