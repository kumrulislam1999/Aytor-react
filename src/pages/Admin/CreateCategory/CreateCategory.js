import React from "react";
import Layout from "../../../components/Layout/Layout";
import PageBannar from "./../../../components/PageBannar/PageBannar";

/* ==== Import Images ==== */

import breadcrumbImg from "../../../images/AboutPage/breadcumb_bg_about.jpg";

const CreateCategory = () => {
  return (
    <Layout title={"Create Category - Aytor"}>
      <div id="create_category">
        <PageBannar
          title={"Create Category"}
          link={"Create Category"}
          img={breadcrumbImg}
        />
      </div>
      <h1>Create Category Page</h1>
    </Layout>
  );
};

export default CreateCategory;
