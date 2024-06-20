import React from "react";
import Layout from "../../components/Layout/Layout";
import PageBannar from "./../../components/PageBannar/PageBannar";
/* ==== Import Images ==== */
import breadcrumbImg from "../../images/BlogPage/breadcumb_bg_1.jpg";

const Contact = () => {
  return (
    <Layout title={"Contact Us - Aytor"}>
      <div id="contact">
        <PageBannar title={"Contact"} link={"Contact"} img={breadcrumbImg} />
        <h1>Contact Pages</h1>
      </div>
    </Layout>
  );
};

export default Contact;
