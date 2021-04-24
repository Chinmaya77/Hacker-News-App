import React from "react";
import "./style.css";
import Header from "../organisms/header/Header";
import Footer from "../organisms/footer/Footer";

function Page(props: any) {
  return (
    <div>
      <div className="Header">
        <Header></Header>
        <div className="children">{props.children}</div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Page;
