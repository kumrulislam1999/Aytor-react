import React from "react";
import Layout from "../../components/Layout/Layout";
import PageBannar from "./../../components/PageBannar/PageBannar";
/* ==== Import Images ==== */
import breadcrumbImg from "../../images/BlogPage/breadcumb_bg_1.jpg";

const Compare = () => {
  return (
    <Layout title={"Compare - Aytor"}>
      <div id="compare">
        <PageBannar title={"Compare"} link={"Compare"} img={breadcrumbImg} />
        <h1>Compare Page</h1>
      </div>
    </Layout>
  );
};

export default Compare;
