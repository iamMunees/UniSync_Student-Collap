import React from "react";
import { Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Resources</h1>
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
