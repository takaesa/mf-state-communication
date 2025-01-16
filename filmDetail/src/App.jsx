import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "remixicon/fonts/remixicon.css"

import "./index.scss";
import Header from "home/Header";
import Footer from "home/Footer";
import DetailContent from "./DetailContent";

const App = () => {

  return (
    <Router>
      <div className="mt-10 text-3xl mx-auto" style={{ padding: '1rem 3rem' }}>
        <div className="my-10">
          <Switch>  
            <Route path="/films/:id" Component={DetailContent}/>
          </Switch>
          {/* <FavoriteContent /> */}
        </div>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)