import React from "react";
import Layout from "../../components/Layout/Layout";
import PageBannar from "./../../components/PageBannar/PageBannar";
/* ==== Import Images ==== */
import breadcrumbImg from "../../images/BlogPage/breadcumb_bg_1.jpg";

const Blog = () => {
  return (
    <Layout title={"Blog - Aytor"}>
      <div id="blog">
        <PageBannar title={"Blog"} link={"Blog"} img={breadcrumbImg} />
        <h1>Blog Page</h1>
      </div>
    </Layout>
  );
};

export default Blog;
