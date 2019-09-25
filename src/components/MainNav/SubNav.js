import React from "react";
import { Route, Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { getMatchedRoute } from "../../helpers/routeHelpers";
import { billingRoutesFlat } from "./billingRoutes";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import { matchPath, useParams } from "react-router-dom";

const Outer = styled.div`
  position: fixed;
  top: 300px;
  left: 360px;
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
  const params = useParams();
  // console.log("params: ", params);
  const parentPath = base.substring(0, base.lastIndexOf("/"));
  // console.log("routes passed to SubNavLevel = ", routes);
  // Fuck horrible but working. Render just the rout when it's a param level
  // TODO: Tidy this up - it just removes the <Level> wrapper and Dash / back links
  if (!routes[0].title) {
    const route = routes[0];
    const fullPath = Object.keys(params).reduce(
      (acc, paramName) => acc.replace(`:${paramName}`, params[paramName]),
      `${base}${route.path}`
    );
    console.log("doing no title render: ", fullPath);
    return (
      <Route
        path={fullPath}
        component={() => (
          <SubNavLevel routes={route.children} base={fullPath} />
        )}
      />
    );
  }
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
        // Construct the full path including the base and swap any parameters
        // already matched in the current route
        const fullPath = Object.keys(params).reduce(
          (acc, paramName) => acc.replace(`:${paramName}`, params[paramName]),
          `${base}${route.path}`
        );

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
                  {route.children && <ChevronRight />}
                </NavLink>
              )}
              {route.children && (
                <Route
                  path={fullPath}
                  component={() => (
                    <SubNavLevel routes={route.children} base={fullPath} />
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

/**
 * Main nav component called from the app root
 * @param routes - entire routing hierarchy for the app
 * @param base - namespace for the app. eg. /billing
 * @param pathname - current path - from React Router
 * @param rootTitle - menu title for root level. eg. "Billing"
 * @returns {*}
 * @constructor
 */
export const SubNav = ({ routes, base, location: { pathname }, rootTitle }) => {
  // Get the level (translateX) to slide the nav container to
  // debugger;
  // TODO: Clean pathname (trailing slash breaks this)
  const matchedRoute = getMatchedRoute(billingRoutesFlat, pathname);
  let level = 1;
  console.log("matchedRoute = ", matchedRoute);
  if (matchedRoute) {
    // Level of current path (match not including /:param)
    const currentLevel = (matchedRoute.path.match(/\/[^:]/g) || []).length;
    //Level of most distant sibling to current path
    const endSibling = billingRoutesFlat.find(route =>
      // matchPath(pathname, {
      //   path: route.path,
      //   exact: false,
      //   strict: false
      // })
      route.path.includes(pathname)
    );
    const endSiblingLevel = (endSibling.path.match(/\/[^:]/g) || []).length;
    const maxLevel = endSibling ? endSiblingLevel : currentLevel;
    level = Math.min(currentLevel, maxLevel);
    console.log(billingRoutesFlat);
    console.log(
      "pathname =",
      pathname,
      "\nmatchedRoute = ",
      matchedRoute,
      "\ncurrentLevel = ",
      currentLevel,
      "\nendSibling = ",
      endSibling,
      "\nendSiblingLevel = ",
      endSiblingLevel,
      "\nmaxLevel = ",
      maxLevel,
      "\nlevel = ",
      level
    );
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
