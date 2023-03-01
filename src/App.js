import Header from "./components/Header";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import React, {useState} from "react";

function App() { 
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const incrementCartCount = () => {
    setCartCount(cartCount + 1);
  };

  const addItemToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {...cartItem, quantity: cartItem.quantity + 1};
        } else {
          return cartItem;
        }
      });
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, {...item, quantity: 1}]);
    }
  }

  const handleQuantity = (e) => {
    console.log(e.target.name);
    const itemId = parseInt(e.target.dataset.id);
    const updatedItems = cartItems.map((cartItem) => {
      if (cartItem.id === itemId) {
        if (e.target.name === "decrement") {
          return {...cartItem, quantity: cartItem.quantity - 1};
        } else if (e.target.name === "increment") {
          return {...cartItem, quantity: cartItem.quantity + 1};
        }
      } else {
        return cartItem;
      }
    });
    setCartItems(updatedItems);
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Header cartCount={cartCount}/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/shop" element={<Shop addItemToCart={addItemToCart} incrementCartCount={incrementCartCount}/>}/>
              <Route path="/cart" element={<Cart handleQuantity={handleQuantity} cartItems={cartItems}/>}/>
          </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
