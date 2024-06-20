import React from "react";
import Layout from "../../../components/Layout/Layout";
import PageBannar from "./../../../components/PageBannar/PageBannar";
/* ==== Import Images ==== */
import breadcrumbImg from "../../../images/AboutPage/breadcumb_bg_about.jpg";

const UpdateProfile = () => {
  return (
    <Layout title={"Update Profile - Aytor"}>
      <div id="update-profile">
        <PageBannar
          title={"Update Profile"}
          link={"Update Profile"}
          img={breadcrumbImg}
        />
        <h1>UpdateProfile Page</h1>
      </div>
    </Layout>
  );
};

export default UpdateProfile;
