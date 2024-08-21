import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./Components/Pages/Home/Home";
import Courses from "./Components/Pages/Courses/Courses";
import FAQS from "./Components/Pages/FAQs/FAQS";

// const PrivateRoute = ({ children }) => {
//   const { userLoggedIn } = useAuth();
//   return userLoggedIn ? children : <Navigate to="/login" />;
// };

const RouterList = () => {
  return (
    <Routes>
      <Route path="" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/faqs" element={<FAQS />} />
      </Route>
    </Routes>
  );
};

export default RouterList;
