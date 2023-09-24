import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import style from "./Navbar.module.css";
export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg content-box" id={style.mainNav}>
                    <div className="container">
                        <Link className="navbar-brand fs-2 text-white" to="/home">START BOOTSTRAP</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2">
                                <li className="nav-item ">
                                    <Link className="nav-link active text-white fs-4 text px-lg-3 " aria-current="page" to="/portfolio">PORTFOLIO</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white fs-4 text px-lg-3" to="/about">ABOUT</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white fs-4 text px-lg-3" to="/contact">CONTACT</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>



            </>

            // <nav id="mainNav" class="navbar navbar-expand-lg  text-uppercase fixed-top">
            //     <div className="container">
            //     <Link class="navbar-Link" to="/">Start Bootstrap</Link>

            //     <div class="collapse navbar-collapse" id="navbarResponsive">
            //         <ul class="navbar-nav ms-auto">
            //             <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Portfolio</a></li>
            //             <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
            //             <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
            //         </ul>
            //     </div>
            //     </div>
            // </nav>
        )
    }
}
