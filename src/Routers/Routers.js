import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import Contact from "../Pages/Contact/Contact";
import Cart from "../Pages/Cart/Cart";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/About/About";
import Products from "../Pages/Products/Products";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingnUp/SignUp";
import Checkout from "../Pages/Checkout/Checkout";
import Payments from "../Pages/Payments/Payments";

const Routers = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout"  element={<Checkout />} />
        <Route path="/payments"  element={<Payments />} />
          <Route path="*" element={<ErrorPage />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
};

export default Routers;
