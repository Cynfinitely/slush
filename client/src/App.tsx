import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Match from "./pages/Match";
import ToDo from "./pages/ToDo";
import Register from "./pages/Register";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <div className="flex flex-col h-screen justify-between">
          <Navbar />
          <div className="flex flex-col justify-content">
            <Routes>
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/register"
                element={<Register />}
              />
              <Route
                path="/main"
                element={<Main />}
              />
              <Route
                path="/todo"
                element={<ToDo />}
              />
              <Route
                path="/match"
                element={<Match />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
