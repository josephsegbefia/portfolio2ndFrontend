import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import About from "./components/About";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="bg-white text-rose-600 dark:bg-gray-900  dark:text-teal-500">
        <hr className="h-px my-0.5 bg-gray-200 border-0 dark:bg-gray-700" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
