import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import SafeComponent from "./SafeComponent";
import Header from "home/Header";
import Footer from "home/Footer";

const App = () => {
  const [showHeader, setShowHeader] = useState(false);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <SafeComponent>
        <Header/>
      </SafeComponent>
      <button className="text-2xl p-5" onClick={() => { setShowHeader(!showHeader) }}> Show header</button>
      <div className="my-10">
        Favorite Content
      </div>
      <Footer></Footer>
    </div>
  );
}

const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)