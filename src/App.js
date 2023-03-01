import Header from "./components/Header";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import React, {useState} from "react";

function App() { 
  const [cartCount, setCartCount] = useState(0);

  const incrementCartCount = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="App">
      <BrowserRouter>
      <Header cartCount={cartCount}/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/shop" element={<Shop incrementCartCount={incrementCartCount}/>}/>
              <Route path="/cart" element={<Cart/>}/>
          </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
