import Generic from "../Billing/DummyViews/Generic";
import { flattenRoutes } from "../../helpers/routeHelpers";

export const routes = [
  {
    path: "/whatever",
    title: "Whatever",
    component: Generic
  },
  {
    path: "/sales-stuff",
    title: "Sales Stuff",
    component: Generic,
    children: [
      {
        path: "/lorem",
        title: "Lorem",
        component: Generic
      },
      {
        path: "/ipsum",
        title: "Ipsum",
        component: Generic
      }
    ]
  }
];

export const routesFlat = flattenRoutes(routes, "/billing");
