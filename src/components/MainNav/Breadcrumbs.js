import React from "react";
import { withRouter } from "react-router-dom";
import { billingRoutesFlat } from "./billingRoutes";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ location: { pathname } }) => {
  // Get most specific route that exists for the pathname
  let matchedRoute,
    subject = pathname;
  while (!matchedRoute && subject) {
    matchedRoute = billingRoutesFlat.find(route => route.path === subject);
    subject = subject.substring(0, subject.lastIndexOf("/"));
  }

  if (!matchedRoute) return false; // i.e. Probably a 404

  console.log({ billingRoutesFlat, matchedRoute });
  return (
    <div>
      <h4>Breadcrumbs</h4>
      <pre>pathname = {pathname}</pre>
      <BreadcrumbItem route={matchedRoute} />
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
      <Link to={route.path}>{route.title}</Link> ->
    </>
  );
};

export default withRouter(Breadcrumbs);
