import React from "react";
import Layout from "../../components/Layout/Layout";
import PageBannar from "./../../components/PageBannar/PageBannar";
/* ==== Import Images ==== */
import breadcrumbImg from "../../images/BlogPage/breadcumb_bg_1.jpg";

const ProductDetails = () => {
  return (
    <Layout title={"Product Details - Aytor"}>
      <PageBannar
        title={"Product Details"}
        link={"Product Details"}
        img={breadcrumbImg}
      />
      <h1>Product Details</h1>
    </Layout>
  );
};

export default ProductDetails;
