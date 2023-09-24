import React, { Component } from 'react'
import style from "./Contact.module.css"
export default class Contact extends Component {
    render() {
        return (
            <>
                <section className={`${style.sec} page-section bg-white content-box`}>
                    <div className="container">
                        {/* Contact Section Heading*/}
                        <h2 className={`${style.customcontact} page-section-heading text-center text-uppercase mt-5 mb-0 fs-1 fw-bolder`}>Contact Me</h2>
                        {/* Icon Divider*/}
                        <div className={`${style.customdivider} divider-custom`}>
                            <div className={`${style.firstdivider} divider-custom-line`} />
                            <div className="divider-custom-icon"><i className="fas fa-star fs-3 fw-bolder" /></div>
                            <div className={`divider-custom-line ${style.seconddivider}`}/>
                        </div>
                        {/* Contact Section Form*/}
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-xl-8">
                                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                    {/* Name input*/}
                                    <div className="form-floating mb-3">
                                        <input className={`${style.custompadding} form-control  border border-top-0 border border-end-0 border border-start-0`} id="name" type="text" placeholder='Enter Your Name' data-sb-validations="required" />
                                        <label htmlFor="name">Full name</label>
                                        <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                    </div>
                                    {/* Email address input*/}
                                    <div className="form-floating mb-3">
                                        <input className={`${style.custompadding} form-control  border border-top-0 border border-end-0 border border-start-0`} id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                        <label htmlFor="email">Email address</label>
                                        <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                    </div>
                                    {/* Phone number input*/}
                                    <div className="form-floating mb-3">
                                        <input className={`${style.custompadding} form-control  border border-top-0 border border-end-0 border border-start-0`} id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                        <label htmlFor="phone">Phone number</label>
                                        <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                    </div>
                                    {/* Message input*/}
                                    <div className="form-floating mb-3">
                                        <textarea className={`${style.custompadding} ${style.customheight} form-control border border-top-0 border border-end-0 border border-start-0`} id="message" type="text" placeholder="Enter your message here..." data-sb-validations="required" defaultValue={""} />
                                        <label htmlFor="message">Message</label>
                                        <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                    </div>
                                    <div className="d-none" id="submitSuccessMessage">
                                        <div className="text-center mb-3">
                                            <div className="fw-bolder">Form submission successful!</div>
                                            To activate this form, sign up at
                                            <br />
                                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                        </div>
                                    </div>
                                    {/* Submit error message*/}
                                    {/**/}
                                    {/* This is what your users will see when there is*/}
                                    {/* an error submitting the form*/}
                                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                                    {/* Submit Button*/}
                                    <button className="btn btn-success btn-xl disabled pe-5 p-3 fs-4 " id="submitButton" type="submit">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        )
    }
}
