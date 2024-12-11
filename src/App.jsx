import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./components/ Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </Provider>
  );
};

const styles = {
  main: {
    width: "300%", // Make the header span the full width
    // maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },
};

export default App;
