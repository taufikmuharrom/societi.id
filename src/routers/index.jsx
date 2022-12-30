import React from "react";

const HomePage = React.lazy(() => import("../pages/Home/Home"));
const AboutPage = React.lazy(() => import("../pages/About/About"));

export const appRoutes = [
  // {
  //   path: '*',
  //   exact: true,
  //   name: 'NotFound',
  //   component: NotFound
  // },
  {
    path: "/",
    exact: true,
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about",
    exact: true,
    name: "About",
    component: AboutPage,
  },
];
