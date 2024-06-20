import React from "react";
import Layout from "../../components/Layout/Layout";
import PageBannar from "./../../components/PageBannar/PageBannar";
/* ==== Import Images ==== */
import breadcrumbImg from "../../images/BlogPage/breadcumb_bg_1.jpg";

const Product = () => {
  return (
    <Layout title={"Product - Aytor"}>
      <div id="product">
        <PageBannar title={"Product"} link={"Product"} img={breadcrumbImg} />
        <h1>Product Pages</h1>
      </div>
    </Layout>
  );
};

export default Product;
