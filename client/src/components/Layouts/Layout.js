import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <h1>{props.children}</h1>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
