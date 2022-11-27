import { PrivateRoute } from "helpers/PrivateRoute";
import AppLayout from "pages/menuBar/AppLayout";
import { Route } from "react-router-dom";
import Login from "./Login";

const AuthConfig = () => {
  console.log("Afnan1");
  return (
    <Route path="/" element={<AppLayout />}>
      <Route
        path="login"
        element={
          <PrivateRoute>
            <Login />
          </PrivateRoute>
        }
      />
    </Route>
  );
};

export default AuthConfig;
