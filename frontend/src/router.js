import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";

// const PrivateRoute = ({ children }) => {
//   const { userLoggedIn } = useAuth();
//   return userLoggedIn ? children : <Navigate to="/login" />;
// };

const RouterList = () => {
  return (
    <Routes>
      <Route path="" element={<App />}></Route>
    </Routes>
  );
};

export default RouterList;
