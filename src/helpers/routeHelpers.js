import { matchPath } from "react-router-dom";

/**
 * Iterate recursively over a routes object to give us all the paths
 * necessary for the view route components.
 *
 * Also sorts routes by specificity as <Switch> renders the first match.
 * Without this /billing/products/ would supersede /billing/products/view, for instance.
 *
 * @param sourceRoutes
 * @param sourceRoutesBase
 */
export function flattenRoutes(sourceRoutes, sourceRoutesBase) {
  const flatRoutes = [];

  const flatten = (routes, base) => {
    routes.forEach(route => {
      flatRoutes.push({
        path: `${base}${route.path}`,
        title: route.title,
        component: route.component,
        hasChildren: !!route.children
      });
      if (route.children) flatten(route.children, `${base}${route.path}`);
    });
  };

  flatten(sourceRoutes, sourceRoutesBase);

  flatRoutes.sort((a, b) => {
    // Find specificity of paths, by how many "/" they have
    const sA = a.path.split("/").length;
    const sB = b.path.split("/").length;
    if (sA > sB) return -1;
    if (sA < sB) return 1;
    return 0;
  });

  return flatRoutes;
}

/**
 * Get most specific route that exists for the pathname
 * @param routes
 * @param pathname
 */
export function getMatchedRoute(routes, pathname) {
  return routes.find(route =>
    matchPath(pathname, {
      path: route.path,
      exact: false,
      strict: false
    })
  );
}
