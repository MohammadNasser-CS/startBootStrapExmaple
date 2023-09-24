import React, { Component } from "react";
import HomePage from "./component/HomePage/HomePage";
import Navbar from "./component/NavBar/Navbar";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./component/Portfolio/Portfolio";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact.jsx"
import Footer from "./component/Footer/Footer";
export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
        <Route path="/" element={<HomePage />}></Route>
          <Route path="home" element={<HomePage />}></Route>
          <Route path="portfolio" element={<Portfolio/>}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="contact" element={<Contact/>}></Route>
        </Routes>
        <Footer/>
      </>
    );
  }
}
