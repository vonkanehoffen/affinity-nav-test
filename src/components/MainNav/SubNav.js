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
  top: 0;
  left: 60px;
  width: 230px;
  height: 100vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background: white;
  //opacity: 0.8;
  overflow: hidden;
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

function populatePathParams(params, path) {
  return Object.keys(params).reduce(
    (acc, paramName) => acc.replace(`:${paramName}`, params[paramName]),
    path
  );
}

/**
 * Render a level of navigation
 * This gets called recursively to traverse the routing tree
 * @param routes - current level of the routing object / tree
 * @param base - base URL for current level
 * @param rootTitle - root menu title. Passed once when called initially from <SubNav/>
 * @returns {*}
 * @constructor
 */
function SubNavLevel({ routes, base, rootTitle }) {
  // Hook to get current :params on the route
  const params = useParams();
  const parentPath = base.substring(0, base.lastIndexOf("/"));
  if (!routes[0].title) {
    const route = routes[0];
    const fullPath = populatePathParams(params, `${base}${route.path}`);
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
          <NavLink
            to={Object.keys(params).reduce(
              (acc, paramName) =>
                acc.replace(`:${paramName}`, params[paramName]),
              base
            )}
          >
            Dashboard
          </NavLink>
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
                  {/*<pre>{fullPath}</pre>*/}
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
}

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
  let currentRoute,
    level = 1;

  // Recursively search for the current route
  const matchRoute = (routes, base) => {
    const match = routes.find(r => {
      console.log("finding match: ", `${base}${r.path}`);
      return matchPath(pathname, {
        path: `${base}${r.path}`,
        exact: false,
        strict: false
      });
    });
    if (match) {
      console.log("matched", match);
      currentRoute = match;
      // If it doesn't have a title then it's a non-rendered layer.
      // i.e. dynamic route that's going to have it's links in a table or something
      if (match.title) level++;
      if (currentRoute.children) {
        matchRoute(currentRoute.children, `${base}${match.path}`);
      }
    }
  };
  matchRoute(routes, base);
  if (currentRoute) {
    if (!currentRoute.children || !currentRoute.children[0].title) level--;
  }

  console.log("currentRoute = ", currentRoute, "\nlevel = ", level);

  return (
    <Outer>
      <Slider level={level}>
        <SubNavLevel routes={routes} base={base} rootTitle={rootTitle} />
      </Slider>
    </Outer>
  );
};

export default withRouter(SubNav);
