import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Layout from "../../../components/Layout/Layout";
import PageBannar from "./../../../components/PageBannar/PageBannar";
/* ==== Import Images ==== */
import breadcrumbImg from "../../../images/AboutPage/breadcumb_bg_about.jpg";

/* ==== Import React Icon ==== */
import { RiLockPasswordFill } from "react-icons/ri";

import { MdEmail } from "react-icons/md";

const Login = () => {
  /* ==== useState Hooks ==== */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* ==== Custom Hooks ==== */
  const navigate = useNavigate();

  /* ==== Register Submit Handler ==== */
  const loginSubmitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <Layout title={"Login - Aytor"}>
      <div id="login">
        <PageBannar title={"Login"} link={"Login"} img={breadcrumbImg} />
        <div className="login_box">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-sm-10 col-md-8 col-lg-7">
                <div id="authForm">
                  <div className="form_box">
                    <h4>Login Form</h4>
                    <form onSubmit={loginSubmitHandler}>
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
                      <div className="d-flex align-items-center justify-content-between">
                        <button
                          type="button"
                          className="forgot_btn"
                          onClick={() => navigate("/forgot-password")}
                        >
                          Forgot Password
                        </button>
                        <button type="submit" className="submit_btn">
                          Login
                        </button>
                      </div>
                    </form>
                    <p>
                      Not a user? Please <Link to={"/register"}>Register</Link>
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

export default Login;
