import React from "react";
import Layout from "../../../components/Layout/Layout";
import PageBannar from "./../../../components/PageBannar/PageBannar";
/* ==== Import Images ==== */
import breadcrumbImg from "../../../images/AboutPage/breadcumb_bg_about.jpg";

const Profile = () => {
  return (
    <Layout title={"Profile - Aytor"}>
      <div id="profile">
        <PageBannar title={"Profile"} link={"Profile"} img={breadcrumbImg} />
        <h1>Profile Page</h1>
      </div>
    </Layout>
  );
};

export default Profile;
