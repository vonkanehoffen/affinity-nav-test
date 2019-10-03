import React from "react";
import styled from "styled-components";
import { useLocation, useHistory } from "react-router-dom";
import { getMatchedRoute } from "../helpers/routeHelpers";
import Button from "@material-ui/core/Button";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Star from "@material-ui/icons/Star";

const Outer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const ParamDummy = styled.div`
  padding: 4px;
  height: 32px;
`;

function Crumb({ to, children }) {
  const history = useHistory();
  return (
    <Button
      size="small"
      onClick={() => history.push(to)}
      style={{ background: "white" }}
    >
      {children}
    </Button>
  );
}

/**
 * Render breadcrumbs for the current pathname
 * using flattened routes object
 * TODO: Can we recurse over the standard tree here instead like we do for <SubNav/>?
 *
 * @param basePath
 * @param baseTitle
 * @param {array} flatRoutes
 * @returns {*}
 * @constructor
 */
const Breadcrumbs = ({ basePath, baseTitle, flatRoutes }) => {
  const { pathname } = useLocation();
  // Get most specific route that exists for the pathname
  const matchedRoute = getMatchedRoute(flatRoutes, pathname);
  return (
    <Outer>
      <Crumb to={basePath}>{baseTitle}</Crumb>
      {matchedRoute && (
        <BreadcrumbItem route={matchedRoute} flatRoutes={flatRoutes} />
      )}
    </Outer>
  );
};

/**
 * Breadcrumb element
 * Recursive - renders then calls itself on any parent path
 * @param {object} route - most specific route for the current location
 * @param {array} flatRoutes
 * @returns {*}
 * @constructor
 */
const BreadcrumbItem = ({ route, flatRoutes }) => {
  const parentRoute = flatRoutes.find(
    r => r.path === route.path.substring(0, route.path.lastIndexOf("/"))
  );
  return (
    <>
      {parentRoute && (
        <BreadcrumbItem route={parentRoute} flatRoutes={flatRoutes} />
      )}
      <ChevronRight />
      {route.title ? (
        <Crumb to={route.path}>{route.title}</Crumb>
      ) : (
        <ParamDummy>
          <Star color="disabled" />
        </ParamDummy>
      )}
    </>
  );
};

export default Breadcrumbs;
