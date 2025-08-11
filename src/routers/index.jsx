import { About } from "../views/frontend/About";
import { Index } from "../views/frontend/Index";
import { Contact } from "../views/frontend/Contact";
import { Policy } from "../views/frontend/Policy";
import { ServicePlan } from "../views/frontend/ServicePlan";
import { UserInfo } from "../views/backend/UserInfo";
import { Record } from "../views/backend/Record";
import { CareerPlan } from "../views/backend/CareerPlan";
import { Layout } from "../views/Layout";
import { BackendLayout } from "../views/backend/BackendLayout";

const routes = [
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "",
        Component: Index,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "policy",
        Component: Policy,
      },
      {
        path: "service-plan",
        Component: ServicePlan,
      },
      // 因為還是需要 layout 做底層
      {
        path: "/admin",
        Component: BackendLayout,
        children: [
          {
            path: "info",
            Component: UserInfo,
          },
          {
            path: "record",
            Component: Record,
          },
          {
            path: "career-plan",
            Component: CareerPlan,
          },
        ],
      },
    ],
  },
];

export default routes;
