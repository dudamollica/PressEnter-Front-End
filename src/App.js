import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Constants/GlobalStyle";
import AuthProvider from "./AppContext/auth.js";
import MainPage from "./Pages/MainPage";
import ProductPage from "./Pages/ProductPage";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/product" element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
