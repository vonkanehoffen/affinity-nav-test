import CustomersDashboard from "./DummyViews/CustomersDashboard";
import ManageCustomers from "./DummyViews/ManageCustomers";
import ProductDashboard from "./DummyViews/ProductDashboard";
import ViewProducts from "./DummyViews/ViewProducts";
import LoremIpsum from "./DummyViews/LoremIpsum";
import DolorSitAmet from "./DummyViews/DolorSitAmet";
import EvenDeeper from "./DummyViews/EvenDeeper";
import MoreThings from "./DummyViews/MoreThings";
import OtherStuff from "./DummyViews/OtherStuff";
import ManageProducts from "./DummyViews/ManageProducts";
import { flattenRoutes } from "../../helpers/routeHelpers";
import CustomerDetail from "./DummyViews/CustomerDetail";
import CustomerDashboard from "./DummyViews/CustomerDashboard";
import Generic from "./DummyViews/Generic";

/**
 * /billing routes
 * Note routes are split at this level as other namespaces will be different micro front ends
 * So this boils down to:
 *
 * - Billing                      /billing
 *     - Customers                /billing/customers
 *       - Dashboard              /billing/customers
 *       - Manage Customers       /billing/customers/manage
 *     - Products                 /billing/products
 *       - Dashboard              /billing/products
 *       - View Products          /billing/products/view
 *         - detail views?        /billing/products/view/123
 *       - Lorem Ipsum            /billing/products/lorem
 *         - Dolor Sit amet       /billing/products/lorem/dolor-sit
 *           - Even deeper        /billing/products/lorem/dolor-sit/even-deeper
 *           - More things        /billing/products/lorem/dolor-sit/more-things
 *         - Other Stuff          /billing/products/lorem/stuff
 *       - Manage Products        /billing/products/manage
 *
 * so root for this is
 *   path: "/billing",
 *   title: "Dashboard",
 *   component: BillingDashboard,
 */
export const routes = [
  {
    path: "/customers",
    title: "Customers",
    component: CustomersDashboard,
    children: [
      {
        path: "/manage",
        title: "Manage Customers",
        component: ManageCustomers,
        children: [
          {
            path: "/:customerId",
            // Without a title the level is only rendered as routing logic
            // This is for when dynamic routes are rendered in-view (eg. a table of customers)
            title: false,
            component: CustomerDashboard,
            children: [
              {
                path: "/details",
                title: "Customer details",
                component: CustomerDetail
              },
              {
                path: "/products",
                title: "Customer Products",
                component: Generic
              },
              {
                path: "/identifiers",
                title: "Identifiers",
                component: Generic
              }
            ]
          }
        ]
      },
      {
        path: "/another",
        title: "Another opt other than manage",
        component: Generic
      }
    ]
  },
  {
    path: "/products",
    title: "Products",
    component: ProductDashboard,
    children: [
      {
        path: "/view",
        title: "View Products",
        component: ViewProducts
      },
      {
        path: "/lorem",
        title: "Lorem Ipusm",
        component: LoremIpsum,
        children: [
          {
            path: "/dolor-sit",
            title: "Dolor Sit amet",
            component: DolorSitAmet,
            children: [
              {
                path: "/even-deeper",
                title: "Even Deeper",
                component: EvenDeeper
              },
              {
                path: "/more-things",
                title: "More things",
                component: MoreThings
              }
            ]
          },
          {
            path: "/stuff",
            title: "Other stuff",
            component: OtherStuff
          },
          {
            path: "/stuff2",
            title: "Other Stuff 2",
            component: Generic
          }
        ]
      },
      {
        path: "/manage",
        title: "Manage Products",
        component: ManageProducts
      }
    ]
  }
];

// This is a bit awkward. See Breadcrumbs.js
export const routesFlat = flattenRoutes(routes, "/billing");
