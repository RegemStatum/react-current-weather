import React from "react";
import Search from "../components/Search";
import WeatherCards from "../components/WeatherCards";
import { useGlobalContext } from "../context/app_context";

const Home = () => {
  return (
    <main className="container home-page">
      <Search />
      <WeatherCards />
    </main>
  );
};

export default Home;
