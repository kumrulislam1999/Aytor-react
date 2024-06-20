import React from "react";
import Layout from "../../../components/Layout/Layout";
import PageBannar from "./../../../components/PageBannar/PageBannar";
/* ==== Import Images ==== */
import breadcrumbImg from "../../../images/AboutPage/breadcumb_bg_about.jpg";

const UserDashboard = () => {
  return (
    <Layout title={"Dashboard - Aytor"}>
      <div id="userDashboard">
        <PageBannar
          title={"Dashboard"}
          link={"Dashboard"}
          img={breadcrumbImg}
        />
        <h1>User Dashboard Page</h1>
      </div>
    </Layout>
  );
};

export default UserDashboard;
