import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItemFromCart,
} from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to remove this item?")) {
      dispatch(removeItemFromCart(id));
    }
  };

  return (
    <div style={styles.cart}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} style={styles.item}>
              <img src={item.image} alt={item.name} style={styles.image} />
              <div style={styles.details}>
                <h4>{item.name}</h4>
                <p>${item.price.toFixed(2)}</p>
                <div style={styles.controls}>
                  <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                    -
                  </button>
                  <span style={styles.quantity}>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQuantity(item.id))}>
                    +
                  </button>
                </div>
                <button
                  style={styles.removeButton}
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  cart: {
    padding: "20px",
    maxWidth: "320%",
    margin: "0 auto",
  },
  item: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "15px",
    flexWrap: "wrap",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
  },
  details: {
    flex: 1,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  quantity: {
    margin: "0 10px",
    fontWeight: "bold",
  },
};

export default Cart;
