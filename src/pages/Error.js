import React from "react";
import { useGlobalContext } from "../context/app_context";

const Error = () => {
  const msg = useGlobalContext();

  return (
    <div>
      <h1>Error Page</h1>
      <h2>{msg}</h2>
    </div>
  );
};

export default Error;
