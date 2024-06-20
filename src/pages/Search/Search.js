import React from "react";
import Layout from "../../components/Layout/Layout";
import PageBannar from "./../../components/PageBannar/PageBannar";
/* ==== Import Images ==== */
import breadcrumbImg from "../../images/BlogPage/breadcumb_bg_1.jpg";

const Search = () => {
  return (
    <Layout title={"Search - Aytor"}>
      <div id="search">
        <PageBannar title={"Search"} link={"Search"} img={breadcrumbImg} />
        <h1>Search Page</h1>
      </div>
    </Layout>
  );
};

export default Search;
