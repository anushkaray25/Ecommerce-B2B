import React from 'react';
import '../Components/SignUp.css'; // Custom styles
import logo from '../Images/logo.svg'; // Update path to your logo
import google from '../Images/google.svg';
import facebook from '../Images/facebook.svg';
import LeftSection from '../Components/LeftSection';
import image6 from '../Images/image6.svg';
import email from '../Images/email.svg';
import pass from '../Images/pass.svg';
import left from '../Images/left.svg';
const SignIn = () => {
    return (
        <div className="container-fluid maxx">
            <div className="row pb-0">
                <div className="col-md-6">
                    <img src={left} alt="Paris" className="img-fluid bg-orange-500 fixed-left vh-100 align-self-stretch" />
                    <img src={image6} alt="Paris" className=" align-self-centre position-absolute top-15px filter- drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15))" />
                    <img src={logo} alt="Logo" className="position-fixed top-0 end-0" />
                </div>
                <div className=" col d-flex justify-content-end align-items-center min-vh-100">

                    <div className="card p-4 signup-form border-0 bg-transparent ">
                        <div className="text-left font-size-3rem">
                            <h2>Sign In</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                        </div>
                        <form>


                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <img src={email} alt="Paris" />
                                        </span>
                                        <input type="email||" className="form-control border-0" placeholder="Email ID" />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 position-relative">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <img src={pass} alt="Paris" />
                                        </span>
                                        <input type="password" className="form-control border-0" placeholder="Password" />
                                    </div>
                                </div>
                            </div>
                            <div className='text-centre'>
                                <button type="submit" className="btn bttn btn-block w-48 rounded-0">Sign In</button>
                            </div>
                            <div className="text-center my-3">Or signin with
                                <div className="d-flex justify-content-evenly">
                                    <button className="btn gbttn w-45 rounded-0"><img src={google} alt="Google" /> Google</button>
                                    <button className="btn btn-light w-45 rounded-0 "><img src={facebook} alt="Facebook" /> Facebook</button>
                                </div>
                            </div>
                            <div className="text-center">
                                <p>Don't have an account? <a href="/SignUp" className="text-orange">Sign Up</a></p>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
