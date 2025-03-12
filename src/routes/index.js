import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/protected/Dashboard"));
const Welcome = lazy(() => import("../pages/protected/Welcome"));
const Charts = lazy(() => import("../pages/protected/Charts"));
const Rent = lazy(() => import("../pages/protected/Rent"));
const Users = lazy(() => import("../pages/protected/Leads"));
const Videos = lazy(() => import("../pages/protected/Integration"));
const Team = lazy(() => import("../pages/protected/Team"));
const Transactions = lazy(() => import("../pages/protected/Transactions"));
const ProfileSettings = lazy(() => import("../pages/protected/ProfileSettings"));
const AboutUs = lazy(() => import("../pages/about-us"));
const ContactUs = lazy(() => import("../pages/contact-us"));
const Feedback = lazy(() => import("../pages/feedback"));

const routes = [
  {
    path: "/dashboard", 
    component: Dashboard, 
  },
  {
    path: "/welcome", 
    component: Welcome, 
  },
  {
    path: "/Users",
    component: Users,
  },
  {
    path: "/Rent",
    component: Rent,
  },
  {
    path: "/settings-team",
    component: Team,
  },
  {
    path: "/transactions",
    component: Transactions,
  },
  {
    path: "/settings-profile",
    component: ProfileSettings,
  },
  {
    path: "/Videos",
    component: Videos,
  },
  {
    path: "/charts",
    component: Charts,
  },
  {
    path: "/contact-us",
    component: ContactUs,
  },
  {
    path: "/feedback",
    component: Feedback,
  },
  {
    path: "/about-us",
    component: AboutUs,
  }
];

export default routes;
