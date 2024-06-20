import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Layout from "../../../components/Layout/Layout";
import PageBannar from "./../../../components/PageBannar/PageBannar";
/* ==== Import Images ==== */
import breadcrumbImg from "../../../images/AboutPage/breadcumb_bg_about.jpg";
/* ==== Import React Icon ==== */
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail, MdSportsBasketball } from "react-icons/md";

const ForgotPassword = () => {
  /* ==== useState Hooks ==== */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [answer, setAnswer] = useState("");

  /* ==== Custom Hooks ==== */
  const navigate = useNavigate();

  /* ==== Register Submit Handler ==== */
  const resetPasswordSubmitHandler = (e) => {
    e.preventDefault();
    console.log(email, password, answer);
  };

  return (
    <Layout title={"Forgot Password - Aytor"}>
      <div id="forgot_password">
        <PageBannar
          title={"Forgot Password"}
          link={"Forgot Password"}
          img={breadcrumbImg}
        />
        <div className="forgotPassword_box">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-sm-10 col-md-8 col-lg-7">
                <div id="authForm">
                  <div className="form_box">
                    <h4>Forgot Password Form</h4>
                    <form onSubmit={resetPasswordSubmitHandler}>
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
                        Reset
                      </button>
                    </form>
                    <p>
                      <Link to={"/login"}>login</Link> by Password
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

export default ForgotPassword;
