import React from "react";
import { withRouter } from "react-router-dom";
import { billingRoutesFlat } from "./billingRoutes";
import { Link } from "react-router-dom";
import { getMatchedRoute } from "../../helpers/routeHelpers";

const Breadcrumbs = ({ location: { pathname }, basePath, baseTitle }) => {
  // Get most specific route that exists for the pathname
  const matchedRoute = getMatchedRoute(billingRoutesFlat, pathname);
  console.log({ billingRoutesFlat, matchedRoute });

  return (
    <div>
      <h4>Breadcrumbs</h4>
      <Link to={basePath}>{baseTitle}</Link>
      {matchedRoute && <BreadcrumbItem route={matchedRoute} />}
    </div>
  );
};

const BreadcrumbItem = ({ route }) => {
  const parentRoute = billingRoutesFlat.find(
    r => r.path === route.path.substring(0, route.path.lastIndexOf("/"))
  );
  return (
    <>
      {parentRoute && <BreadcrumbItem route={parentRoute} />}
      -> <Link to={route.path}>{route.title}</Link>
    </>
  );
};

export default withRouter(Breadcrumbs);
