import React, { Component } from 'react'
import style from "./Footer.module.css"
export default class Footer extends Component {
    render() {
        return (
            <>
                <footer className="footer text-center text-white content-box overflow-hidden" id={style.foot}>
                    <div className="container">
                        <div className="row p-5">
                            <div className="col-lg-4 mb-5 mb-lg-0">
                                <h4 className="text-uppercase mb-4">Location</h4>
                                <p className="lead mb-0 fw-bold">
                                    2215 John Daniel Drive
                                    <br />
                                    Clark, MO 65243
                                </p>
                            </div>
                            <div className="col-lg-4 mb-5 mb-lg-0">
                                <h4 className="text-uppercase mb-4 fw-bold">Around the Web</h4>
                                <a className="btn btn-outline-light btn-social mx-1 p-3 rounded-circle" href="#!"><i className="fab fa-fw fa-facebook-f fw-bold" /></a>
                                <a className="btn btn-outline-light btn-social mx-1 p-3 rounded-circle" href="#!"><i className="fab fa-fw fa-twitter fw-bold" /></a>
                                <a className="btn btn-outline-light btn-social mx-1 p-3 rounded-circle" href="#!"><i className="fab fa-fw fa-linkedin-in fw-bold" /></a>
                                <a className="btn btn-outline-light btn-social mx-1 p-3 rounded-circle" href="#!"><i className="fab fa-fw fa-dribbble fw-bold" /></a>
                            </div>
                            <div className="col-lg-4">
                                <h4 className="text-uppercase mb-4">About Freelancer</h4>
                                <p className="lead mb-0 fw-bold">
                                    Freelance is a free to use, MIT licensed Bootstrap theme created by
                                    <a href="http://startbootstrap.com" className="text-success ms-3">Start Bootstrap</a>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>

            </>
        )
    }
}
