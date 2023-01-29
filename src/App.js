import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Constants/GlobalStyle";
import AuthProvider from "./AppContext/auth.js";
import MainPage from "./Pages/MainPage";
import ProductPage from "./Pages/ProductPage";
import CategoryPage from "./Pages/CategoryPage";
import AdminPage from "./Pages/AdminPage";
import SignUpPage from "./Pages/SignUpPage";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/product/:id?" element={<ProductPage />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin-product" element={<AdminPage />} />
            <Route path="/admin-category" element={<AdminPage />} />
            <Route path="/admin-user" element={<AdminPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
