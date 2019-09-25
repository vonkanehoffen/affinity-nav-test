import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { getMatchedRoute } from "../helpers/routeHelpers";

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
    <div>
      <h4>Breadcrumbs</h4>
      <Link to={basePath}>{baseTitle}</Link>
      {matchedRoute && (
        <BreadcrumbItem route={matchedRoute} flatRoutes={flatRoutes} />
      )}
    </div>
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
      -> <Link to={route.path}>{route.title}</Link>
    </>
  );
};

export default Breadcrumbs;
