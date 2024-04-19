import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

function Layout(props) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>

        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={props.author} />
      </Helmet>
      <Header />
      <main style={{ minHeight: "80vh" }}>{props.children}</main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Ecommerce App",
  description: "It is a shopping website",
  keywords: "shopping, ecommerce",
  author: "Jenil Pipada",
};

export default Layout;
