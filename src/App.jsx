import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotfound from "./PageNotfound";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="homepage" element={<Homepage />} />
          <Route path="app" element={<AppLayout />} />
          <Route path="*" element={<PageNotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
