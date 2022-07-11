import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import About from "../pages/About";
import Details from "../pages/Details";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<PrivateRouter />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
