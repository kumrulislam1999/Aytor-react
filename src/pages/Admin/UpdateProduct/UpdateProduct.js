import React from "react";
import Layout from "../../../components/Layout/Layout";
import PageBannar from "./../../../components/PageBannar/PageBannar";
/* ==== Import Images ==== */

import breadcrumbImg from "../../../images/AboutPage/breadcumb_bg_about.jpg";

const UpdateProduct = () => {
  return (
    <Layout title={"Update Product - Aytor"}>
      <div id="update_product">
        <PageBannar title={"Update Product"} link={"Update Product"} img={breadcrumbImg} />

        <h1>Update Product Page</h1>
      </div>
    </Layout>
  );
};

export default UpdateProduct;
