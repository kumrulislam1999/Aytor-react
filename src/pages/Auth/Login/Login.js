import React from "react";
import Layout from "../../../components/Layout/Layout";
import PageBannar from "./../../../components/PageBannar/PageBannar";
/* ==== Import Images ==== */
import breadcrumbImg from "../../../images/AboutPage/breadcumb_bg_about.jpg";

const Login = () => {
  return (
    <Layout title={"Login - Aytor"}>
      <div id="login">
        <PageBannar title={"Login"} link={"Login"} img={breadcrumbImg} />
        <h1>Login Page</h1>
      </div>
    </Layout>
  );
};

export default Login;
