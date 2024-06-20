import React from "react";
import Layout from "../../components/Layout/Layout";
import PageBannar from "./../../components/PageBannar/PageBannar";
/* ==== Import Images ==== */
import breadcrumbImg from "../../images/BlogPage/breadcumb_bg_1.jpg";
const Checkout = () => {
  return (
    <Layout title={"Checkout - Aytor"}>
      <div id="checkout">
        <PageBannar title={"Checkout"} link={"Checkout"} img={breadcrumbImg} />
        <h1>Checkout Page</h1>
      </div>
    </Layout>
  );
};

export default Checkout;
