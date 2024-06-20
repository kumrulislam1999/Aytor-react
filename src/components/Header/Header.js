import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Badge } from "antd";

/* ===== Import Logo ===== */
import Logo from "../../images/logo.svg";

/* ===== Import React Icon ===== */
import {
  BiCartAdd,
  BiSearch,
  BiHeart,
  BiLogInCircle,
  BiLogOutCircle,
  BiRegistered,
  BiSolidDashboard,
} from "react-icons/bi";
import { VscThreeBars } from "react-icons/vsc";

/* ===== Primary Menu ===== */
const primary_menu = [
  { display: "Home", path: "/" },
  { display: "About", path: "/about" },
  { display: "Blog", path: "/blog" },
  { display: "Product", path: "/product" },
  { display: "Contact", path: "/contact" },
];

const Header = () => {
  /* ===== Custom Hooks ===== */
  const location = useLocation();

  /* ===== useState Hooks ===== */
  const [count, setCount] = useState(3);
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState("");

  /* ===== search Submit Handler ===== */
  const searchSubmitHandler = async (e) => {
    e.preventDefault();
    setSearch("");
  };
  return (
    <>
      <div id="header">
        <div id="header_top">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-6 col-lg-4 logo_box">
                <Link id="logo" to={"/"}>
                  <img src={Logo} alt="header logo" />
                </Link>
              </div>
              <div className="col-12 col-sm-7 col-md-6 col-lg-4">
                <div id="search_box">
                  <form className="form_box" onSubmit={searchSubmitHandler}>
                    <input
                      type="text"
                      placeholder="search here ..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit">
                        <BiSearch />
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-sm-5 col-lg-3 user_box">
                <div id="user_name">Kumrul Islam</div>
              </div>
            </div>
          </div>
        </div>
        <div id="header_bottom">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-6 logo_box">
                <Link id="logo" to={"/"}>
                  <img src={Logo} alt="header logo" />
                </Link>
              </div>
              <div className="col-8 menu_box">
                <ul id="primary_menu">
                  {primary_menu.map((menu, i) => {
                    const isActive = location.pathname === menu.path;
                    return (
                      <li className="nav_item" key={i}>
                        <NavLink
                          className={`${isActive && "active"}`}
                          to={menu.path}
                        >
                          {menu.display}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-4 icon_box">
                <div className="d-flex justify-content-end">
                  <ul id="right_menu">
                    <li className="icon_item">
                      <Badge className="badge" count={count}></Badge>
                      <Link to={"/cart"}>
                        <BiCartAdd />
                      </Link>
                    </li>
                    <li className="icon_item">
                      <Badge className="badge" count={count}></Badge>
                      <Link to={"/wishlist"}>
                        <BiHeart />
                      </Link>
                    </li>
                    <li className="icon_item">
                      <Link to={"/login"}>
                        <BiLogInCircle />
                      </Link>
                    </li>
                    <li className="icon_item">
                      <Link to={"/logout"}>
                        <BiLogOutCircle />
                      </Link>
                    </li>
                    <li className="icon_item">
                      <Link to={"/search"}>
                        <BiRegistered />
                      </Link>
                    </li>
                    <li className="icon_item">
                      <Link to={"/dashboard"}>
                        <BiSolidDashboard />
                      </Link>
                    </li>
                  </ul>
                  <div id="menu_toggler">
                    <button
                      className={`${toggle && "show"}`}
                      onClick={() => {
                        setToggle(!toggle);
                      }}
                      type="button"
                    >
                      <VscThreeBars />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="header_side" className={`${toggle && "show"}`}>
          <div id="side_box" className={`${toggle && "show"}`}>
            <div id="logo">
              <button
                id="menu_toggler"
                className={`${toggle && "show"}`}
                onClick={() => {
                  setToggle(!toggle);
                }}
                type="button"
              >
                <VscThreeBars />
              </button>
              <Link to={"/"}>
                <img src={Logo} alt="header logo" />
              </Link>
            </div>
            <div id="header_side_bottom">
              <div className="scroll_box">
                <div id="search_box">
                  <form className="form_box" onSubmit={searchSubmitHandler}>
                    <input
                      type="text"
                      placeholder="search here ..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit">
                      <span>
                        <BiSearch />
                      </span>
                    </button>
                  </form>
                </div>

                <ul id="primary_menu">
                  {primary_menu.map((menu, i) => {
                    const isActive = location.pathname === menu.path;
                    return (
                      <li className="nav_item" key={i}>
                        <NavLink
                          className={`${isActive && "active"}`}
                          to={menu.path}
                        >
                          {menu.display}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>

                <ul id="right_menu">
                  <li className="icon_item">
                    <Link to={"/cart"}>
                      <span>
                        <span className="icon">
                          <BiCartAdd />
                        </span>
                        <span className="text">Cart</span>
                      </span>
                      <Badge className="badge" count={count}></Badge>
                    </Link>
                  </li>
                  <li className="icon_item">
                    <Link to={"/wishlist"}>
                      <span>
                        <span className="icon">
                          <BiHeart />
                        </span>
                        <span className="text">Wishlist</span>
                      </span>
                      <Badge className="badge" count={count}></Badge>
                    </Link>
                  </li>
                  <li className="icon_item">
                    <Link to={"/login"}>
                      <span>
                        <span className="icon">
                          <BiLogInCircle />
                        </span>
                        <span className="text">Login</span>
                      </span>
                    </Link>
                  </li>
                  <li className="icon_item">
                    <Link to={"/logout"}>
                      <span>
                        <span className="icon">
                          <BiLogOutCircle />
                        </span>
                        <span className="text">Logout</span>
                      </span>
                    </Link>
                  </li>
                  <li className="icon_item">
                    <Link to={"/search"}>
                      <span>
                        <span className="icon">
                          <BiRegistered />
                        </span>
                        <span className="text">Register</span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
