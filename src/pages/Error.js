import React from "react";
import { useGlobalContext } from "../context/app_context";

const Error = () => {
  const msg = useGlobalContext();

  return (
    <section className="container error-page">
      <h1>Error Page</h1>
      <h2>{msg}</h2>
    </section>
  );
};

export default Error;
