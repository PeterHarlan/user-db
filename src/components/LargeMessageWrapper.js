import React from "react";

export default function LargeMessageWrapper({ children }) {
  return (
    <div className="h-100 w-100 d-flex">
      <h1 className="display-1 text-center my-auto mx-auto">{children}</h1>
    </div>
  );
}
