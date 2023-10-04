import { Outlet, Route, Routes } from "react-router-dom";
import LoginPage from "../features/login/login";
import InvalidRoute from "../components/not-found/InvalidRoute";
import Dashboard from "../features/dashboard/dashboard";
import RequireInternet from "../features/authenticaiton/RequireInternet";

const AppRoute = () => {
  return (
    <>
      <RequireInternet>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<LoginPage />} />
            {/* <Route path="register" element={<RegisterPage />} /> */}

            <Route path="dashboard" element={<Dashboard />}>
              {/* <Route index element={<DashboardPage />} /> */}
              {/* <Route path="view-user" element={<UserPage />} /> */}
              {/* <Route path="create-user" element={<CreateUserPage />} /> */}

            </Route>
          </Route>

          <Route path="*" element={<InvalidRoute />} />
        </Routes>
      </RequireInternet>
    </>
  );
};

export default AppRoute;
