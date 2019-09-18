import React from "react";
import { Route, Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { getMatchedRoute } from "../../helpers/routeHelpers";
import { billingRoutesFlat } from "./billingRoutes";
import ArrowForward from "@material-ui/icons/ArrowForward";

const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 60px;
  width: 230px;
  height: 100vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background: white;
  //opacity: 0.5;
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

const NavLink = styled(Link)`
  display: block;
  padding: 1rem;
  background: greenyellow;
  border: 1px solid #000;
`;

const SubNavLevel = ({ routes, base, rootTitle }) => {
  const parentPath = base.substring(0, base.lastIndexOf("/"));
  return (
    <Level>
      {rootTitle ? (
        <h4>{rootTitle}</h4>
      ) : (
        <div>
          <h5>base = {base}</h5>
          <Link to={parentPath}>Back</Link>
        </div>
      )}
      {routes.map(route => (
        <div key={route.path}>
          <NavLink to={`${base}${route.path}`}>
            {route.title}
            {route.routes && <ArrowForward />}
          </NavLink>
          {route.routes && (
            <Route
              path={`${base}${route.path}`}
              component={() => (
                <SubNavLevel
                  routes={route.routes}
                  base={`${base}${route.path}`}
                />
              )}
            />
          )}
        </div>
      ))}
    </Level>
  );
};

export const SubNav = ({ routes, base, location: { pathname }, rootTitle }) => {
  const matchedRoute = getMatchedRoute(billingRoutesFlat, pathname);
  let level = 1;
  if (matchedRoute) {
    const currentLevel = matchedRoute.path.split("/").length - 1;
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
