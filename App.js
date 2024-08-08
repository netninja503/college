import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import { useState } from "react";

function App() {
  const [product, setProduct] = useState([
    {
      url: "https://picsum.photos/id/21/3008/2008",
      name: "TRQ White Shoes",
      category: "Shoes",
      seller: "AMZ Seller Ghz",
      price: 1999,
    },
    {
      url: "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg",
      name: "LOREM Watch Black",
      category: "Watches",
      seller: "Watch Ltd Siyana",
      price: 2599,
    },
    {
      url: "https://picsum.photos/id/180/2400/1600",
      name: "AMZ Laptop 8GB RAM",
      category: "Laptops",
      seller: "Delhi Laptops",
      price: 50000,
    },
    {
      url: "https://picsum.photos/id/111/4400/2656",
      name: "Old Car",
      category: "Car",
      seller: "Camron LTD",
      price: 40000,
    },
    {
      url: "https://picsum.photos/id/152/367/267",
      name: "Colourful Flowers",
      category: "Flowers",
      seller: "ABS Ltd",
      price: 100,
    }
  ]);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handleShow = (value) => {
    setShowCart(value);
  };

  const addProduct = () => {
    const newProduct = {
      url: "https://picsum.photos/id/102/4320/3240",
      name: "New Product",
      category: "New Category",
      seller: "New Seller",
      price: 999,
    };
    setProduct([...product, newProduct]);
  };

  return (
    <div>
      <Header count={cart.length} handleShow={handleShow} />
      <button onClick={addProduct}>Add Product</button>
      {showCart ? (
        <CartList cart={cart} />
      ) : (
        <ProductList product={product} addToCart={addToCart} />
      )}
    </div>
  );
}

export default App;
