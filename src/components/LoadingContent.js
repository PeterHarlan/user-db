import React from "react";
import Error from "./Error";
import Loading from "./Loading";

export default function LoadingContent({ children, isLoading, error }) {
  if (error) return <Error error={error} />;
  if (!isLoading) return <>{children}</>;
  return <Loading />;
}
