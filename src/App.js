import Header from "./components/Header";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/shop" element={<Shop/>}/>
              <Route path="/cart" element={<Cart/>}/>
          </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
