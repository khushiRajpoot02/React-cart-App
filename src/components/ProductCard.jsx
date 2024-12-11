import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p style={styles.price}>${product.price.toFixed(2)}</p>
      <button style={styles.button} onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
    maxWidth: "100%", // Ensure it adapts to the grid
  },
  image: {
    maxWidth: "100%",
    height: "150px",
    objectFit: "cover",
  },
  price: {
    fontWeight: "bold",
    margin: "10px 0",
    fontSize: "1.2rem",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ProductCard;
