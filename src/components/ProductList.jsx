import React from "react";
import { useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { addItemToCart } from "../redux/cartSlice";
import lp1 from "../assets/lp1.png";
import lp2 from "../assets/lp2.jpeg";
import lp3 from "../assets/lp3.jpeg";
import lp4 from "../assets/lp4.png";

const sampleProducts = [
  {
    id: 1,
    name: "Product 1",
    description: "This is Product 1",
    price: 29.99,
    image: lp1,
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is Product 2",
    price: 39.99,
    image: lp2,
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is Product 3",
    price: 39.99,
    image: lp3,
  },
  {
    id: 4,
    name: "Product 4",
    description: "This is Product 4",
    price: 49.99,
    image: lp4,
  },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    <div style={styles.container}>
      <div style={styles.grid}>
        {sampleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => addToCartHandler(product)}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "1200px", // Restrict the width on large screens
    margin: "0 auto", // Center the container
    padding: "20px", // Add spacing around the content
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Adjust columns based on screen size
    gap: "20px",
    justifyContent: "center",
  },
};

export default ProductList;
