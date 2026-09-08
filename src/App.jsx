import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Catalog from "./pages/catalog";
import Product from "./pages/Product";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}
