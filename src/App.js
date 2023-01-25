import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./GlobalStyle"
import AuthProvider from "./AppContext/auth.js";

function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>

          
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
