import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const totalItems = useSelector((state) => state.cart.totalQuantity);
  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>React E-commerce</h1>
      <div style={styles.cartContainer} onClick={goToCart}>
        <span style={styles.cartIcon}>🛒</span>
        <span style={styles.cartCount}>{totalItems}</span>
      </div>
    </header>
  );
};

const styles = {
  header: {
    width: "320%", // Make the header span the full width
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#282c34",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Optional: Add a shadow for better visibility
  },
  title: {
    margin: 0,
    fontSize: "1.8rem",
  },
  cartContainer: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    position: "relative",
  },
  cartIcon: {
    fontSize: "1.5rem",
  },
  cartCount: {
    backgroundColor: "red",
    color: "white",
    fontSize: "0.8rem",
    borderRadius: "50%",
    padding: "0.3rem",
    position: "absolute",
    top: -5,
    right: -10,
  },
};

export default Header;
