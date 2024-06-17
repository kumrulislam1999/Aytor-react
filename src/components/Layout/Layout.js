import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Helmet from "react-helmet";

const Layout = ({ children, description, title, keywords, author }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "Ecommerce App",
  author: "Kumrul Islam",
  description: "Ecommerce Mern Stack Website",
  keywords: "Node,React,MongoDB,Express,HTML,CSS,Bootstrap,Javascript",
};

export default Layout;
