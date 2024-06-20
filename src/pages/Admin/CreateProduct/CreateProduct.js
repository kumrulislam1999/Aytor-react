import React from "react";
import Layout from "../../../components/Layout/Layout";
import PageBannar from "./../../../components/PageBannar/PageBannar";

/* ==== Import Images ==== */
import breadcrumbImg from "../../../images/AboutPage/breadcumb_bg_about.jpg";

const CreateProduct = () => {
  return (
    <Layout title={"Create Product - Aytor"}>
      <div id="createProduct">
        <PageBannar
          title={"Create Product"}
          link={"Create Product"}
          img={breadcrumbImg}
        />
        <h1>Create Product Page</h1>
      </div>
    </Layout>
  );
};

export default CreateProduct;
