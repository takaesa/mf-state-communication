import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.scss";
import Header from "home/Header";
import Footer from "home/Footer";
import DetailContent from "./DetailContent";

const App = () => {

  return (
    <Router>
      <div className="text-3xl" style={{ padding: '5rem' }}>
        <Routes>
          <Route path="/films/:filmId" element={<DetailContent />} />
        </Routes>
        <DetailContent />
      </div>
    </Router>

  );
}

// ReactDOM.createRoot(document.getElementById("app")).render(<App />);

const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)
