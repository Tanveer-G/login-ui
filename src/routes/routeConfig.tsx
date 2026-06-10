import type { RouteObject } from "react-router-dom";

import Home from "../components/Home";
import Login from "../components/Login";
import CreateAccount from "../components/CreateAccount";
import AccountSettingsPage from "../components/AccountSettingsPage";
import NotFound from "../components/NotFound";
import { PATHS } from "./paths";


export const routes: RouteObject[] = [
  {
    path: PATHS.ROOT,
    element: <Home />,
  },
  {
    path: PATHS.AUTH.LOGIN,
    element: <Login />,
  },
  {
    path: PATHS.AUTH.REGISTER,
    element: <CreateAccount />,
  },
  {
    path: PATHS.PROFILE.SETTINGS,
    element: (
      <AccountSettingsPage
      />
    ),
  },
  {
    path: PATHS.NOT_FOUND,
    element: <NotFound />,
  }
];