import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright LikhOG ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
