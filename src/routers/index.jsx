import React from "react";

const HomePage = React.lazy(() => import("../pages/Home/Home"));
const AboutPage = React.lazy(() => import("../pages/About/About"));
const BlogPage = React.lazy(() => import("../pages/Blog/Blog"));
const NotFound = React.lazy(() => import("../pages/NotFound/NotFound"));

export const appRoutes = [
  {
    path: '*',
    exact: true,
    name: 'NotFound',
    component: NotFound
  },
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
  {
    path: "/blog",
    exact: true,
    name: "Blog",
    component: BlogPage,
  },
];
