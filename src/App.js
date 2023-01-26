import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Constants/GlobalStyle";
import AuthProvider from "./AppContext/auth.js";
import MainPage from "./Pages/MainPage";
import ProductPage from "./Pages/ProductPage";
import CategoryPage from "./Pages/CategoyPage";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/category" element={<CategoryPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
