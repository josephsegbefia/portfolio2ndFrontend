import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ProjectDetails from "./components/ProjectDetails";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import IsAnon from "./components/IsAnon";
import IsPrivate from "./components/IsPrivate";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="bg-white text-rose-600 dark:bg-gray-900  dark:text-teal-500">
        <hr className="h-px my-0.5 bg-gray-200 border-0 dark:bg-gray-700" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <IsAnon>
                <Login />
              </IsAnon>
            }
          />
          <Route
            path="/signup"
            element={
              <IsAnon>
                <Signup />
              </IsAnon>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route
            path="/dashboard"
            element={
              <IsPrivate>
                <Dashboard />
              </IsPrivate>
            }
          />
          <Route path={`projects/:projectId`} element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
