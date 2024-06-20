import React from "react";
import Layout from "../../../components/Layout/Layout";
import PageBannar from "./../../../components/PageBannar/PageBannar";
/* ==== Import Images ==== */
import breadcrumbImg from "../../../images/AboutPage/breadcumb_bg_about.jpg";

const Register = () => {
  return (
    <Layout title={"Register - Aytor"}>
      <div id="register">
        <PageBannar title={"Register"} link={"Register"} img={breadcrumbImg} />
        <h1>Register Page</h1>
      </div>
    </Layout>
  );
};

export default Register;
