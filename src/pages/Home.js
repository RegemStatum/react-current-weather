import React from "react";
import { useGlobalContext } from "../context/app_context";

const Home = () => {
  const msg = useGlobalContext();

  return (
    <div>
      <h1>Home Page</h1>
      <h2>{msg}</h2>
    </div>
  );
};

export default Home;
