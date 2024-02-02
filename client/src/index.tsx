import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, useNavigate, useParams } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import ViewerSignUp from "./pages/ViewerSignUp";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<ViewerSignUp />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
