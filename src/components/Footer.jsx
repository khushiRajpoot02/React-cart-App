import React from "react";

const Footer = () => (
  <footer style={styles.footer}>
    <p>© 2024 React E-commerce. All rights reserved.</p>
  </footer>
);

const styles = {
  footer: {
    textAlign: "center",
    padding: "10px 0",
    backgroundColor: "#f8f9fa",
    marginTop: "20px",
    width: "320%", // Make the header span the full width
  },
};

export default Footer;
