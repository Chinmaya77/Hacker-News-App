import React from "react";
import "./style.css";

import { Link } from "react-router-dom";
import Image from "../../atoms/image/Image";
import Text from "../../atoms/text/Text";

function Header() {
  return (
    <div className="main">
      <div className="header-container">
        <Link to="top" className="Link-img">
          <Image
            source="/images/y18.gif"
            classType="image-logo"
            width="12"
            height="12"
          ></Image>
        </Link>
        <Link to="top" className="Link-hackernews">
          <Text type="hackernews" content="Hacker news"></Text>
        </Link>
        <Link to="/new" className="Link-all">
          <Text type="allLink" content="New"></Text>
        </Link>{" "}
        <span className="Link-separator">|</span>
        <Link to="ask" className="Link-all">
          <Text type="allLink" content="ask"></Text>
        </Link>
        <span className="Link-separator">|</span>
        <Link to="show" className="Link-all">
          {" "}
          <Text type="allLink" content="show"></Text>
        </Link>{" "}
        <span className="Link-separator">|</span>
        <Link to="jobs" className="Link-all">
          <Text type="allLink" content="jobs"></Text>
        </Link>
        <span className="Link-separator">|</span>
        <Link to="Comment" className="Link-all">
          <Text type="allLink" content="comment"></Text>
        </Link>
        <span className="Link-separator">|</span>
        <Link to="submit" className="Link-all">
          <Text type="allLink" content="submit"></Text>
        </Link>
      </div>
      <div className="loginText">
        <Text type="login" content="login"></Text>
      </div>
    </div>
  );
}

export default Header;
