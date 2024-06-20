import React, { useState } from "react";
import { Link } from "react-router-dom";

/* ===== Import React Icon ===== */
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaLocationDot,
  FaPhoneFlip,
  FaRegEnvelopeOpen,
} from "react-icons/fa6";

/* ===== Import Image ===== */
import Logo from "../../images/logo.svg";
import payment from "../../images/payment.png"

/* ==== footer Menu1 ==== */
const footer_menu1 = [
  { display: "My Account", path: "/dashboard" },
  { display: "View Cart", path: "/cart" },
  { display: "Wishlist", path: "/wishlist" },
  { display: "Compare", path: "/compare" },
  { display: "New Products", path: "/new-products" },
];
const footer_menu2 = [
  { display: "Help", path: "/contact" },
  { display: "Contact Us", path: "/contact" },
  { display: "Feedback", path: "/contact" },
  { display: "Customer Service", path: "/contact" },
  { display: "Store Location", path: "/contact" },
];
const footer_menu3 = [
  { display: "Men's Collection", path: "/men's-Collection" },
  { display: "Women's Collection", path: "/women's-Collection" },
  { display: "Kid's Collection", path: "/kid's-Collection" },
  { display: "Boy's Collection", path: "/boy's-Collection" },
  { display: "Girl's Collection", path: "/girl's-Collection" },
];

const Footer = () => {
  /* === useState Hooks === */
  const [subscribe, setSubscribe] = useState("");

  /* === SearchSubmitHandler === */
  const subscribeSubmitHandler = (e) => {
    e.preventDefault();
    console.log(subscribe);
    setSubscribe("");
  };
  return (
    <>
      <footer id="footer">
        <div id="footer_top">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-12 col-lg-7 top_left">
                <div id="content_text">
                  <h3>Subscribe to Our Newsletter!</h3>
                  <p>
                    Authoritatively morph 24/7 potentialities with error-free
                    partnerships. Objectively engineer multimedia.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-5 top_right">
                <form id="subscription_box" onSubmit={subscribeSubmitHandler}>
                  <input
                    type="text"
                    placeholder="search here ..."
                    value={subscribe}
                    onChange={(e) => setSubscribe(e.target.value)}
                  />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div id="footer_middle">
          <div className="container">
            <div className="row justify-content-sm-center">
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 weiget1">
                <div id="content_box">
                  <Link className="logo">
                    <img src={Logo} alt="footer logo" />
                  </Link>
                  <p>
                    Progressively optimize effective ideas before turnkey
                    process improvements. Proactively disseminate.Distinctively
                    revolutionize functional.
                  </p>

                  <div id="social_media">
                    <Link to={"#"}>
                      <FaFacebookF />
                    </Link>
                    <Link to={"#"}>
                      <FaXTwitter />
                    </Link>
                    <Link to={"#"}>
                      <FaLinkedinIn />
                    </Link>
                    <Link to={"#"}>
                      <FaInstagram />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-2 weiget2">
                <div id="content_box">
                  <h4>My Account</h4>
                  <ul id="footer_menu1">
                    {footer_menu1.map((menu, i) => {
                      return (
                        <li key={i}>
                          <Link to={menu.path}>{menu.display}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-2 weiget3">
                <div id="content_box">
                  <h4>Contact Us</h4>
                  <ul id="footer_menu2">
                    {footer_menu2.map((menu, i) => {
                      return (
                        <li key={i}>
                          <Link to={menu.path}>{menu.display}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-2 weiget4">
                <div id="content_box">
                  <h4>Category</h4>
                  <ul id="footer_menu3">
                    {footer_menu3.map((menu, i) => {
                      return (
                        <li key={i}>
                          <Link to={menu.path}>{menu.display}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 weiget5">
                <div id="content_box">
                  <h4>Contact Us</h4>
                  <div id="address_menu">
                    <Link to={"#"}>
                      <span className="icon">
                        <FaLocationDot />
                      </span>
                      <span>
                        2751 S Parker Rd, Aurora, CO 80014, United States
                      </span>
                    </Link>
                    <Link to={"#"}>
                      <span className="icon">
                        <FaPhoneFlip />
                      </span>
                      <span>+18008660286</span>
                    </Link>
                    <Link to={"#"}>
                      <span className="icon">
                        <FaRegEnvelopeOpen />
                      </span>
                      <span>aytor.info@gmail.com info@aytor.com</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer_bottom">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="text_content">
             <p>© 2022 All Rights Reserved By Angfuzsoft</p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="payment">
                <img src={payment} alt="payment method"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
