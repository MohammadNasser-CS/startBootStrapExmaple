import React, { Component } from "react";
import style from "./HomePage.module.css"
export default class HomePage extends Component {
    render() {
        return (
            <>
                <header class="masthead text-white text-center justify-content-center d-flex flex-column content-box" id={style.headpart}>
                    <div class="container d-flex align-items-center  flex-column" id={style.wrap}>
                        <img
                            class="masthead-avatar mb-3 mt-3"
                            src={require("./img/image1.png")}
                            alt=""
                            id={style.avatar}
                        />
                        <h1 class="masthead-heading text-uppercase mb-1 " id={style.htag}>
                            Start Bootstrap
                        </h1>
                        <div id={style.divider} class=" divider-light">
                            <div id={style.firstdivider} class="divider-custom-line"></div>
                            <div class="divider-custom-icon">
                                <i class="fas fa-star fs-4"></i>
                            </div>
                            <div id={style.seconddivider} class="divider-custom-line"></div>
                        </div>

                        <p class="masthead-subheading font-weight-light mb-0 fs-3">Graphic Artist - Web Designer - Illustrator</p>
                    </div>
                    
                </header>
            </>
        );
    }
}
