import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import Layout from "../../../components/Layout/Layout";
import PageBannar from "./../../../components/PageBannar/PageBannar";
/* ==== Import Images ==== */
import breadcrumbImg from "../../../images/AboutPage/breadcumb_bg_about.jpg";

/* ==== Import React Icon ==== */
import { RiLockPasswordFill } from "react-icons/ri";
import { ImAddressBook } from "react-icons/im";
import {
  MdDriveFileRenameOutline,
  MdEmail,
  MdSportsBasketball,
  MdLocalPhone,
} from "react-icons/md";

const Register = () => {
  /* ==== useState Hooks ==== */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");

  /* ==== Custom Hooks ==== */
  const navigate = useNavigate();

  /* ==== Register Submit Handler ==== */
  const registerSubmitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, password, phone, address, answer);
  };

  return (
    <Layout title={"Register - Aytor"}>
      <div id="register">
        <PageBannar title={"Register"} link={"Register"} img={breadcrumbImg} />
        <div className="register_box">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-sm-10 col-md-8 col-lg-7">
                <div id="authForm">
                  <div className="form_box">
                    <h4>Register Form</h4>
                    <form onSubmit={registerSubmitHandler}>
                      <div className="input_group">
                        <label htmlFor="fullname">Full Name:</label>
                        <div className="input_box">
                          <span>
                            <MdDriveFileRenameOutline />
                          </span>
                          <input
                            type="text"
                            id="fullname"
                            placeholder="Enter Your Name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="input_group">
                        <label htmlFor="email">Email:</label>
                        <div className="input_box">
                          <span>
                            <MdEmail />
                          </span>
                          <input
                            type="email"
                            id="email"
                            placeholder="Enter Your Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="input_group">
                        <label htmlFor="password">Password:</label>
                        <div className="input_box">
                          <span>
                            <RiLockPasswordFill />
                          </span>
                          <input
                            type="password"
                            id="password"
                            placeholder="Enter Your Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="input_group">
                        <label htmlFor="phone">Phone:</label>
                        <div className="input_box">
                          <span>
                            <MdLocalPhone />
                          </span>
                          <input
                            type="number"
                            id="phone"
                            placeholder="Enter Your Phone"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="input_group">
                        <label htmlFor="address">Address:</label>
                        <div className="input_box">
                          <span>
                            <ImAddressBook />
                          </span>
                          <input
                            type="text"
                            id="address"
                            placeholder="Enter Your Address"
                            required
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="input_group">
                        <label htmlFor="answer">Answer:</label>
                        <div className="input_box">
                          <span>
                            <MdSportsBasketball />
                          </span>
                          <input
                            type="text"
                            id="answer"
                            placeholder="Enter Favorite Sports"
                            required
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                          />
                        </div>
                      </div>
                      <button type="submit" className="submit_btn">
                        Register
                      </button>
                    </form>
                    <p>
                      Already a user? Please <Link to={"/login"}>login</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
