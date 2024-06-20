import React from "react";
import Layout from "../../components/Layout/Layout";
import PageBannar from "./../../components/PageBannar/PageBannar";
/* ==== Import Images ==== */
import breadcrumbImg from "../../images/BlogPage/breadcumb_bg_1.jpg";

const Cart = () => {
  return (
    <Layout title={"Cart - Aytor"}>
      <div id="cart">
        <PageBannar title={"Cart"} link={"Cart"} img={breadcrumbImg} />
        <h1>Cart Page</h1>
      </div>
    </Layout>
  );
};

export default Cart;
