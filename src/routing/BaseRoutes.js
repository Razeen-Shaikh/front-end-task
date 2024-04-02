import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../screens/HomePage";
import Organization from "../screens/Organization";
import NotFound from "../screens/NotFound";

const BaseRouter = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/organization" element={<Organization />} />
    <Route component={NotFound} />
  </Routes>
);
export default BaseRouter;
