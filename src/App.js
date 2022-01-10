import React from "react";
// React router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Header & Footer
import Header from "./components/Header";
import Footer from "./components/Footer";
// Pages
import { HomePage, ErrorPage } from "./pages";
// Scss
import "./assets/scss/index.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
