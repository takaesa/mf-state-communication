import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import SafeComponent from "./SafeComponent";
import Header from "home/Header";
import Footer from "home/Footer";
import FavoriteContent from "./FavoriteContent";
import TestContent from "./TestContent";
const App = () => {

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <SafeComponent>
        <Header/>
      </SafeComponent>
      <div className="my-10">
        <TestContent/>
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