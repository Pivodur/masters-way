import {AuthPage} from "src/pages/authPage/AuthPage";
import {MainPage} from "src/pages/mainPage/MainPage";
import {Page404} from "src/pages/page404/Page404";
import {UsersPage} from "src/pages/usersPage/UsersPage";

/**
 * Pages meta data
 */
export const pages = {
  auth: {
    path: "/",
    element: <AuthPage />,
  },
  main: {
    path: "main",
    element: <MainPage />,
  },
  users: {
    path: "users",
    element: <UsersPage />,
  },
  page404: {
    path: "*",
    element: <Page404 />,
  },
};
