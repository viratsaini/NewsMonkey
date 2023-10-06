import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Main>
          <Navbar />
          <Routes>
            <Route  exact 
              path="/"
              element={<News pagesize={12} key="General" country="in" category="General" />}
            />
            <Route  exact 
              path="/Business"
              element={<News pagesize={12} key="Business"country="in" category="Business" />}
            />
            <Route exact 
              path="/Entertainment"
              element={
                <News pagesize={12} key="Entertainment"country="in" category="Entertainment" />
              }
            />
            <Route exact 
              path="/Health"
              element={<News pagesize={12} key="Health"country="in" category="Health" />}
            />
            <Route exact 
              path="/Science"
              element={<News pagesize={12} key="Science" country="in" category="Science" />}
            />
            <Route
              path="/Sports"
              element={<News pagesize={12} key="Sports"country="in" category="Sports" />}
            />
            <Route exact 
              path="/technology"
              element={
                <News pagesize={12} key="technology"country="in" category="technology" />
              }
            />
            
            
          </Routes>
        </Main>
      </>
    );
  }
}
