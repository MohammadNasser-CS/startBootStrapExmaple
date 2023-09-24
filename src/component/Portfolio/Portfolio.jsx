import React, { Component } from 'react'
import style from "./Portfoilio.module.css"
export default class Portfolio extends Component {
    render() {
        return (
            <>
                <section className={`page-section portfolio bg-white text-center justify-content-center d-flex flex-column content-box ${style.sec}`}>
                    <div className="container d-flex align-items-center  flex-column">
                        <h2 className={`page-section-heading text-center  text-uppercase fs-1 mb-0 ${style.portfolio}`} >Portfolio</h2>
                        <div className={`divider-custom ${style.divider}`}>
                            <div className={`divider-custom-line ${style.firstdivider}`}/>
                            <div className="divider-custom-icon"><i className="fas fa-star fs-4" /></div>
                            <div className={`divider-custom-line ${style.seconddivider}`} />
                        </div>
                        <div className={`${style.customrow} row justify-content-center align-items-center`} >
                            <div className={`${style.imgdiv} col-md-6 col-lg-4 mb-5`}>
                                <div className={`${style.imagehidden} portfolio-item mx-auto`} data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                                    {/* <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                                    </div> */}
                                    <img className={`${style.image} img-fluid `} src={require("./img/cabin.png")} alt="..." />
                                </div>
                            </div>
                            <div className={`${style.imgdiv} col-md-6 col-lg-4 mb-5`}>
                                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                                    {/* <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                                    </div> */}
                                    <img className={`${style.image} img-fluid `} src={require("./img/cake.png")} alt="..." />
                                </div>
                            </div>
                            <div className={`${style.imgdiv} col-md-6 col-lg-4 mb-5`}>
                                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                                    {/* <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                                    </div> */}
                                    <img className={`${style.image} img-fluid `} src={require("./img/circus.png")} alt="..." />
                                </div>
                            </div>
                            <div className={`${style.imgdiv} col-md-6 col-lg-4 mb-5`}>
                                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                                    {/* <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                                    </div> */}
                                    <img className={`${style.image} img-fluid `} src={require("./img/game.png")} alt="..." />
                                </div>
                            </div>
                            <div className={`${style.imgdiv} col-md-6 col-lg-4 mb-5`}>
                                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                                    {/* <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                                    </div> */}
                                    <img className={`${style.image} img-fluid`} src={require("./img/safe.png")} alt="..." />
                                </div>
                            </div>
                            <div className={`${style.imgdiv} col-md-6 col-lg-4 mb-5`}>
                                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                                    {/* <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                                    </div> */}
                                    <img className={`${style.image} `} src={require("./img/submarine.png")} alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        )
    }
}
