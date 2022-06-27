import React from "react";
import { Routes, Route } from "react-router-dom";

import Faq from "./pages/Faq";
import SignUp from "./pages/SignUp";

export default () => {
  return (
    <Routes>
      <Route path="/faq" exact element={<Faq />} />
      <Route path="/signup" exact element={<SignUp />} />
    </Routes>
  );
};
