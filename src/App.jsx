import { Global } from "./Global";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { AuthProvider } from "./context/AuthProvider";
import Protected from "./components/protected";

import Login from "./components/Login";

function App() {
  return (
    <AuthProvider>
      <Global />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Protected><Login/></Protected>} />

          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
