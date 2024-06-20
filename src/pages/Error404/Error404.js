import React from "react";
import Layout from "../../components/Layout/Layout";

/* ===== Import react Icon ===== */
import { FaHome } from "react-icons/fa";

/* ===== Import Image ===== */
import errorImg from "../../images/error.png";

const Error404 = () => {
  return (
    <Layout title={"Page Not Found - Aytor"}>
      <div id="error">
        <div className="container">
          <div className="row aling-items-center justify-content-center">
            <div className="col-10 col-lg-8 col-xl-6">
            <div id="content_box">
            <img src={errorImg} alt="error " />
            <div id="text_content">
              <h3>PAGE NOT FOUND!</h3>
              <p>
                Sorry, we couldn’t find the page you where looking for.<br/> We
                suggest that you return to hom
              </p>
              <button>
                <span className="icon">
                  <FaHome />
                </span>
                <span>
                Back To Home
                </span>
              </button>
            </div>
          </div>
            </div>
          </div>
        
        </div>
      </div>
    </Layout>
  );
};

export default Error404;
