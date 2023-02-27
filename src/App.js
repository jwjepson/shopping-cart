import Header from "./components/Header";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/shop" element={<Shop/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
