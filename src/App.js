import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./Constants/GlobalStyle"
import AuthProvider from "./AppContext/auth.js";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
        <Route path="/" element={<MainPage/>} />
          
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
