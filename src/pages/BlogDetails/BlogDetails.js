import React from "react";
import Layout from "../../components/Layout/Layout";
import PageBannar from "./../../components/PageBannar/PageBannar";
/* ==== Import Images ==== */
import breadcrumbImg from "../../images/BlogPage/breadcumb_bg_1.jpg";

const BlogDetails = () => {
  return (
    <Layout title={"Blog Details - Aytor"}>
      <div id="blog_details">
        <PageBannar
          title={"Blog Details"}
          link={"Blog Details "}
          img={breadcrumbImg}
        />
        <h1>Blog Details</h1>
      </div>
    </Layout>
  );
};

export default BlogDetails;
