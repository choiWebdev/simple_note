import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <Link className="btn_style" to="/write">
        글쓰기
      </Link>
    </div>
  );
}

export default Footer;
