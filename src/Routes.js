import React from "react";
import { Routes, Route } from "react-router-dom";

import Faq from "./pages/Faq";
import Register from "./pages/Register";

export default () => {
  return (
    <Routes>
      <Route path="/faq" exact element={<Faq />} />
      <Route path="/register" exact element={<Register />} />
    </Routes>
  );
};
