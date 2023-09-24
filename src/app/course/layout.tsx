import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <section className="w-full">{children}</section>;
};

export default layout;
