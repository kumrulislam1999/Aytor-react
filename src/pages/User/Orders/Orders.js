import React from "react";
import Layout from "../../../components/Layout/Layout";
import PageBannar from "./../../../components/PageBannar/PageBannar";
/* ==== Import Images ==== */
import breadcrumbImg from "../../../images/AboutPage/breadcumb_bg_about.jpg";

const Orders = () => {
  return (
    <Layout title={"Orders - Aytor"}>
      <div id="orders">
        <PageBannar title={"Orders"} link={"Orders"} img={breadcrumbImg} />
        <h1>Orders Pages</h1>
      </div>
    </Layout>
  );
};

export default Orders;
