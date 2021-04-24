import React from "react";
import Search from "../../atoms/search/Search";
import "./style.css";

function Footer() {
  return (
    <div>
      <div className="footer-line"></div>

      <a href="/static/newsguidelines.html" className="footer-link">
        Guidelines
      </a>
      <span className="footer-link-container">| </span>
      <a href="/static/newsfaq.html" className="footer-link">
        FAQ
      </a>
      <span className="footer-link-container">| </span>
      <a href="lists" className="footer-link">
        Lists
      </a>
      <span className="footer-link-container">| </span>
      <a href="https://github.com/HackerNews/API" className="footer-link">
        API
      </a>
      <span className="footer-link-container">| </span>
      <a href="/static/security.html" className="footer-link">
        {" "}
        Security
      </a>
      <span className="footer-link-container">| </span>
      <a href="http://www.ycombinator.com/legal/" className="footer-link">
        Legal
      </a>
      <span className="footer-link-container">| </span>
      <a href="http://www.ycombinator.com/apply/" className="footer-link">
        Apply to YC
      </a>
      <span className="footer-link-container">| </span>
      <a href="mailto:hn@ycombinator.com" className="footer-link">
        {" "}
        Contact
      </a>
      <div className="footer-search">
        <Search></Search>
      </div>
    </div>
  );
}

export default Footer;
