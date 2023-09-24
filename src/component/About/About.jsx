import React, { Component } from 'react'
import style from "./About.module.css";
export default class About extends Component {
    render() {
        return (
            <>
                <section className={`content-box page-section text-white mb-0  text-center justify-content-center d-flex flex-column ${style.customabout}`} >
                    <div className={`container d-flex align-items-center flex-column ${style.customwrap}`}>
                        {/* About Section Heading*/}
                        <h2 className="page-section-heading text-center text-uppercase fs-1 text-white">About</h2>
                        {/* Icon Divider*/}
                        <div className={`${style.customdivider} divider-custom divider-light`}>
                            <div className={`${style.firstdivider} divider-custom-line`} />
                            <div className="divider-custom-icon"><i className="fas fa-star fs-3" /></div>
                            <div className={`${style.seconddivider} divider-custom-line`} />
                        </div>
                        {/* About Section Content*/}
                        <div className={`${style.customdivpara} row m-auto`}>
                            <div className="col-lg-5 text-start  m-auto "><p className={`${style.custompara} lead fw-bolder `}>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
                            <div className="col-lg-5 text-start "><p className={`${style.custompara} lead fw-bolder `}>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
                        </div>
                        {/* About Section Button*/}
                        <div className="text-center mt-4 ">
                            <a className="btn btn-xl btn-outline-light p-4 fw-bold" href="https://startbootstrap.com/theme/freelancer/">
                                <i className="fas fa-download me-2 " />
                                Free Download!
                            </a>
                        </div>
                    </div>
                </section>

            </>
        )
    }
}
