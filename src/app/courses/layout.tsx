"use client";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="px-6">{children}</div>;
};

export default Layout;
