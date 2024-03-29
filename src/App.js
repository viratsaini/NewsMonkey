import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  
  const apikey = "e46cc1bd9d43462591ad056f5a57190d";
  


  const [progress, setprogress] = useState(0);

  return (
    <>
      <Main>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setprogress}
                pagesize={12}
                apikey={apikey}
                key="General"
                country="in"
                category="General"
              />
            }
          />
          <Route
            exact
            path="/Business"
            element={
              <News
                setProgress={setprogress}
                pagesize={12}
                apikey={apikey}
                key="Business"
                country="in"
                category="Business"
              />
            }
          />
          <Route
            exact
            path="/Entertainment"
            element={
              <News
                setProgress={setprogress}
                pagesize={12}
                apikey={apikey}
                key="Entertainment"
                country="in"
                category="Entertainment"
              />
            }
          />
          <Route
            exact
            path="/Health"
            element={
              <News
                setProgress={setprogress}
                apikey={apikey}
                key="Health"
                country="in"
                category="Health"
              />
            }
          />
          <Route
            exact
            path="/Science"
            element={
              <News
                setProgress={setprogress}
                pagesize={12}
                apikey={apikey}
                key="Science"
                country="in"
                category="Science"
              />
            }
          />
          <Route
            path="/Sports"
            element={
              <News
                setProgress={setprogress}
                pagesize={12}
                apikey={apikey}
                key="Sports"
                country="in"
                category="Sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setprogress}
                pagesize={12}
                apikey={apikey}
                key="technology"
                country="in"
                category="Technology"
              />
            }
          />
        </Routes>
      </Main>
    </>
  );
};
export default App;
