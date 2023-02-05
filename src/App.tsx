import React from "react";
import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./components/pages/AboutPage";
import TodoPage from "./components/pages/TodoPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
        <div className="container">
      <Routes>
          <Route element={<TodoPage/>} path="/"  />
          <Route element={<AboutPage/>} path="/about" />
      </Routes>
        </div>
    </BrowserRouter>
  );
};

export default App;
