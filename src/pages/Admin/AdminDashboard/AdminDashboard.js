import React from "react";
import Layout from "../../../components/Layout/Layout";
import PageBannar from "./../../../components/PageBannar/PageBannar";
import breadcrumbImg from "../../../images/AboutPage/breadcumb_bg_about.jpg";

const AdminDashboard = () => {
  return (
    <Layout title={"Dashboard - Aytor"}>
      <div id="admin_dashboard">
        <PageBannar
          title={"Dashboard"}
          link={"Dashboard"}
          img={breadcrumbImg}
        />
        <h1>Admin Dashboard Page</h1>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
