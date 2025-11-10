import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoutes.jsx";
import Login from "./pages/login.jsx";
import Logout from "./pages/logout.jsx";
import Home from "./pages/Home.jsx";
import Liked from "./pages/Liked.jsx";
import PlayList from "./pages/PlayList.jsx";
import Search from "./pages/Search.jsx";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public route */}
          <Route path="/login" element={<Login />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/liked" element={<Liked />} />
            <Route path="/playlist" element={<PlayList />} />
            <Route path="/search" element={<Search />} />
            <Route path="/logout" element={<Logout />} />
          </Route>

          {/* Default redirect */}
          <Route path="*" element={<Login />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
