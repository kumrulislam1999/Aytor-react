import React from "react";
import { Link } from "react-router-dom";

const PageBannar = ({ title, img, link }) => {
  return (
    <>
      <div id="pageBannar">
        <div className="bg_image_box" style={{ backgroundImage: `url(${img})` }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div id="text_content">
                  <h2>{title}</h2>
                  <nav>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item active">
                        <Link to={"/"}>Home</Link>
                      </li>
                      <li className="breadcrumb-item active"><Link to={"#"}>{link}</Link></li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBannar;
