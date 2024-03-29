import React from "react";
import {
  Route,
  Link,
  matchPath,
  useParams,
  useLocation,
  useHistory
} from "react-router-dom";
import styled from "styled-components";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { colors } from "./AuroraTheme/AuroraTheme";

const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 50px;
  width: 230px;
  height: 100vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  background: white;
  overflow: hidden;
`;

const Slider = styled.div`
  transform: translateX(-${props => props.level * 230}px);
  transition: transform 0.4s;
`;
const Level = styled.div`
  position: absolute;
  left: 230px;
  top: 0;
  background: white;
  width: 230px;
`;

const NavLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0.8rem 0.8rem 1rem;
  background: white;
  color: ${colors.neutralAbyss.value};
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  text-decoration: none;
  &:hover {
    color: ${colors.vibrantViolet.value};
  }
`;

/**
 * Swap any /:params/ out of a path string with matching values from an object
 * @param {object} params
 * @param {string} path
 * @returns {string}
 */
function populatePathParams(params, path) {
  return Object.keys(params).reduce(
    (acc, paramName) => acc.replace(`:${paramName}`, params[paramName]),
    path
  );
}

/**
 * Render a level of navigation
 * This gets called recursively to traverse the routing tree
 * @param {object} routes - current level of the routing object / tree
 * @param base - base URL for current level
 * @param rootTitle - root menu title. Passed once when called initially from <SubNav/>
 * @returns {*}
 * @constructor
 */
function SubNavLevel({ routes, base, rootTitle }) {
  // Hook to get current :params on the route
  const params = useParams();
  const history = useHistory();

  if (!routes) return false;

  // If the route has no title it's a dummy level so should only render routing logic
  // This is generally for dynamic routes (i.e. /whatever/:param/) where the links
  // to the next level down the hierarchy would be rendered in a view (eg. a table of customers)
  if (!routes[0].title) {
    const route = routes[0];
    const fullPath = populatePathParams(params, `${base}${route.path}`);
    return (
      <Route path={fullPath}>
        <SubNavLevel routes={route.children} base={fullPath} />
      </Route>
    );
  }

  // Normal level
  // Render all links and call this function again for any children (to recurse over the hierarchy)
  return (
    <Level>
      <div>
        <Box m={1}>
          {rootTitle ? (
            <Typography variant="h3">{rootTitle}</Typography>
          ) : (
            <Button
              startIcon={<ChevronLeft />}
              onClick={() =>
                history.push(base.substring(0, base.lastIndexOf("/")))
              }
            >
              Back
            </Button>
          )}
        </Box>
        <NavLink to={populatePathParams(params, base)}>Dashboard</NavLink>
      </div>

      {routes.map(route => {
        // Construct the full path including the base
        // and populate any parameters already matched in the current route
        const fullPath = populatePathParams(params, `${base}${route.path}`);
        return (
          <div key={route.path}>
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
      })}
    </Level>
  );
}

/**
 * Main nav component called from the app root
 * @param routes - entire routing hierarchy for the app
 * @param base - namespace for the app. eg. /billing
 * @param rootTitle - menu title for root level. eg. "Billing"
 * @returns {*}
 * @constructor
 */
export const SubNav = ({ routes, base, rootTitle }) => {
  const { pathname } = useLocation();
  // Level to slide the display to
  let level = 1;

  // Recursively search for the current route
  let currentRoute;
  const matchRoute = (routes, base) => {
    const match = routes.find(r => {
      return matchPath(pathname, {
        path: `${base}${r.path}`,
        exact: false,
        strict: false
      });
    });
    if (match) {
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
    // If there are no further levels down the hierarchy, don't scroll the menu over.
    if (!currentRoute.children || !currentRoute.children[0].title) level--;
  }

  return (
    <Outer>
      <Slider level={level}>
        <SubNavLevel routes={routes} base={base} rootTitle={rootTitle} />
      </Slider>
    </Outer>
  );
};

export default SubNav;
