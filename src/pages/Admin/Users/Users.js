import React from "react";
import Layout from "../../../components/Layout/Layout";
import PageBannar from "./../../../components/PageBannar/PageBannar";
/* ==== Import Images ==== */
import breadcrumbImg from "../../../images/AboutPage/breadcumb_bg_about.jpg";

const Users = () => {
  return (
    <Layout title={"All Users - Aytor"}>
      <div id="all_users">
        <PageBannar
          title={"All Users"}
          link={"All Users"}
          img={breadcrumbImg}
        />

        <h1>All Users</h1>
      </div>
    </Layout>
  );
};

export default Users;
