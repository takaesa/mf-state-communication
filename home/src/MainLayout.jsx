import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.scss";
import Header from "home/Header";
import "remixicon/fonts/remixicon.css"

import DetailContent from "filmDetail/DetailContent";
import HomeContent from "home/HomeContent";
import FavoriteContent from "favorite/FavoriteContent";

export default function MainLayout() {
  return (
    <Router>
      <div className="text-3xl" style={{ padding: '5rem' }}>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<HomeContent />} />
          <Route path="/films/:filmId" element={<DetailContent />} />
          <Route path="/favorite" element={<FavoriteContent />} />
        </Routes>
        {/* <DetailContent />  */}
      </div>
    </Router>
  );
};
