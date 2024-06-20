import React from "react";
import Layout from "../../components/Layout/Layout";
import PageBannar from "./../../components/PageBannar/PageBannar";
/* ==== Import Images ==== */
import breadcrumbImg from "../../images/BlogPage/breadcumb_bg_1.jpg";

const Wishlist = () => {
  return (
    <Layout title={"Wishlist - Aytor"}>
      <div id="wishlist">
        <PageBannar title={"Wishlist"} link={"Wishlist"} img={breadcrumbImg} />
        <h1>Wishlist Page</h1>
      </div>
    </Layout>
  );
};

export default Wishlist;
