import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  apikey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
  setProgress= (progress) =>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <>
        <Main>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
          <Routes>
            <Route  exact 
              path="/"
              element={<News setProgress={this.setProgress} pagesize={12} apikey={this.apikey} key="General" country="in" category="General" />}
            />
            <Route  exact 
              path="/Business"
              element={<News setProgress={this.setProgress} pagesize={12} apikey={this.apikey} key="Business"country="in" category="Business" />}
            />
            <Route exact 
              path="/Entertainment"
              element={
                <News setProgress={this.setProgress} pagesize={12} apikey={this.apikey} key="Entertainment"country="in" category="Entertainment" />
              }
            />
            <Route exact 
              path="/Health"
              element={<News setProgress={this.setProgress} apikey={this.apikey} key="Health"country="in" category="Health" />}
            />
            <Route exact 
              path="/Science"
              element={<News setProgress={this.setProgress} pagesize={12} apikey={this.apikey} key="Science" country="in" category="Science" />}
            />
            <Route
              path="/Sports"
              element={<News setProgress={this.setProgress} pagesize={12} apikey={this.apikey} key="Sports"country="in" category="Sports" />}
            />
            <Route exact 
              path="/technology"
              element={
                <News setProgress={this.setProgress} pagesize={12} apikey={this.apikey} key="technology"country="in" category="technology" />
              }
            />
            
            
          </Routes>
        </Main>
      </>
    );
  }
}
