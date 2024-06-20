import React from "react";
import Layout from "../../../components/Layout/Layout";
import PageBannar from "./../../../components/PageBannar/PageBannar";
/* ==== Import Images ==== */
import breadcrumbImg from "../../../images/AboutPage/breadcumb_bg_about.jpg";

const ForgotPassword = () => {
  return (
    <Layout title={"Forgot Password - Aytor"}>
      <div id="forgot_password">
        <PageBannar
          title={"Forgot Password"}
          link={"Forgot Password"}
          img={breadcrumbImg}
        />
        <h1>Forgot Password Page</h1>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
