import React from 'react';
import '../Components/SignUp.css'; // Custom styles
import logo from '../Images/logo.svg'; // Update path to your logo
import Link from 'react-dom';
import google from '../Images/google.svg';
import facebook from '../Images/facebook.svg';
import LeftSection from '../Components/LeftSection';
import user from '../Images/user.svg';
import image6 from '../Images/image6.svg';
import arrow from '../Images/arrow.svg';
import email from '../Images/email.svg';
import phone from '../Images/phone.svg';
import pass from '../Images/pass.svg';
import { Route } from 'react-router-dom';
import left from '../Images/left.svg';
import SignIn from './SignIn';
const SignUp = () => {
    return (
        <div className="container-fluid maxx">
            <div className="row ">
                <div className="col-md-6">
                    <img src={left} alt="Paris" className="img-fluid bg-orange-500 fixed-left vh-100 align-self-stretch" />
                    <img src={image6} alt="Paris" className=" align-self-centre position-absolute top-15px filter- drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15))" />
                    <img src={logo} alt="Logo" className="position-fixed top-0 end-0" />
                </div>
                <div className=" col d-flex justify-content-end align-items-center min-vh-100">
                    <img src={image6} alt="Paris" className="image" />
                    <div className="card p-4 signup-form border-0 bg-transparent">
                        <img src={logo} alt="Logo" className="d-flex align-self-end" />
                        <div className="text-left font-size-3rem">

                            <h2>Sign Up</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                        </div>
                        <form>
                            <div className="row">
                                <div className="col-md-6 mb-3 ">
                                    <div class="input-group mb-3 ">
                                        <span class="input-group-text " id="basic-addon1">
                                            <img src={user} alt="Paris" />
                                        </span>
                                        <input type="text" className="form-control   border-0" placeholder="First Name" />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div class="input-group mb-3 ">
                                        <span class="input-group-text" id="basic-addon1">
                                            <img src={user} alt="Paris" />
                                        </span>
                                        <input type="text" className="form-control border-0" placeholder="Last Name" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3 position-relative">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <img src={email} alt="Paris" />
                                        </span>
                                        <input type="email" className="form-control border-0" placeholder="Email ID" />
                                        <button className="btn bttn rounded-0" type="button"><img src={arrow} alt="Paris" /></button>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 position-relative">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <img src={phone} alt="Paris" />
                                        </span>
                                        <input type="text" className="form-control border-0" placeholder="Phone Number" />
                                        <button className="btn bttn rounded-0" type="button"><img src={arrow} alt="Paris" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <img src={pass} alt="Paris" />
                                        </span>
                                        <input type="password" className="form-control border-0" placeholder="Password" />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <img src={pass} alt="Paris" />
                                        </span>
                                        <input type="password" className="form-control border-0" placeholder="Confirm Password" />
                                    </div>
                                </div>
                            </div>
                            <div className='text-centre'>
                                <button type="submit" className="btn bttn btn-block w-48 rounded-0">Sign Up</button>
                            </div>
                            <div className="text-center my-3">Or signin with
                                <div className="d-flex justify-content-evenly">
                                    <button className="btn gbttn w-45 rounded-0"><img src={google} alt="Google" /> Google</button>
                                    <button className="btn btn-light w-45 rounded-0 "><img src={facebook} alt="Facebook" /> Facebook</button>
                                </div>
                            </div>
                            <div className="text-center">
                                <p>Already have an account?
                                    <Route path="/SignIn" element={<SignIn />} className="text-orange" />
                                    Sign In</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
