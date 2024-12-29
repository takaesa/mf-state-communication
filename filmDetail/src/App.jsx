import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import Header from "home/Header";
import Footer from "home/Footer";
import DetailContent from "./DetailContent";

const App = () => {

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <Header/>
      <div className="my-10">
        Film Detail
        <DetailContent/>
        {/* <FavoriteContent /> */}
      </div>
      <Footer></Footer>
    </div>
  );
}

const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)