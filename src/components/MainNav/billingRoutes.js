import CustomersDashboard from "../../DummyViews/CustomersDashboard";
import ManageCustomers from "../../DummyViews/ManageCustomers";
import ProductDashboard from "../../DummyViews/ProductDashboard";
import ViewProducts from "../../DummyViews/ViewProducts";
import LoremIpsum from "../../DummyViews/LoremIpsum";
import DolorSitAmet from "../../DummyViews/DolorSitAmet";
import EvenDeeper from "../../DummyViews/EvenDeeper";
import MoreThings from "../../DummyViews/MoreThings";
import OtherStuff from "../../DummyViews/OtherStuff";
import ManageProducts from "../../DummyViews/ManageProducts";

/**
 * /billing routes
 * Note routes are split at this level as other namespaces will be different micro front ends
 * So this boils down to:
 *
 - Billing                      /billing
 - Customers                /billing/customers
 - Dashboard              /billing/customers
 - Manage Customers       /billing/customers/manage
 - Products                 /billing/products
 - Dashboard              /billing/products
 - View Products          /billing/products/view
 - detail views?        /billing/products/view/123
 - Lorem Ipsum            /billing/products/lorem
 - Dolor Sit amet       /billing/products/lorem/dolor-sit
 - Even deeper        /billing/products/lorem/dolor-sit/even-deeper
 - More things        /billing/products/lorem/dolor-sit/more-things
 - Other Stuff          /billing/products/lorem/stuff
 - Manage Products        /billing/products/manage

 so root for this is
 path: "/billing",
 title: "Dashboard",
 component: BillingDashboard,

 */
const billingRoutes = [
  {
    path: "/customers",
    title: "Customers",
    component: CustomersDashboard,
    routes: [
      {
        path: "/manage",
        title: "Manage Customers",
        component: ManageCustomers
      }
    ]
  },
  {
    path: "/products",
    title: "Products",
    component: ProductDashboard,
    routes: [
      {
        path: "/view",
        title: "View Products",
        component: ViewProducts
        // Note: routes off this inside component that should retain the menu context
      },
      {
        path: "/lorem",
        title: "Lorem Ipusm",
        component: LoremIpsum,
        routes: [
          {
            path: "/dolor-sit",
            title: "Dolor Sit amet",
            component: DolorSitAmet,
            routes: [
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

export default billingRoutes;
