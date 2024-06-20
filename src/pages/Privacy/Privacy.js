import React from "react";
import Layout from "../../components/Layout/Layout";
import PageBannar from "./../../components/PageBannar/PageBannar";
/* ==== Import Images ==== */
import breadcrumbImg from "../../images/BlogPage/breadcumb_bg_1.jpg";

const Privacy = () => {
  return (
    <Layout title={"Privacy Policy - Aytor"}>
      <div id="privacy_policy">
        <PageBannar
          title={"Privacy Policy"}
          link={"Privacy Policy"}
          img={breadcrumbImg}
        />
        <h1>Privacy Pages</h1>
      </div>
    </Layout>
  );
};

export default Privacy;
