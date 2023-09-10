import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProductList from './Components/ProductList';
import AddProduct from "./Components/AddProduct";
import OrderProduct from "./Components/OrderProduct";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />}></Route>
          <Route path="AddProduct" element={<AddProduct />} />
          <Route path="OrderProduct" element={ <OrderProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
