import React from "react";
import Home from "./components/Home";
import {Routes, Route} from 'react-router-dom';
import Layout from "./components/Layout";
import Predict from "./components/Predict";
import Dashboard from "./components/Dashboard";
import Analyze from "./components/Analyze";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dash" element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="predict" element={<Predict/>}/>
          <Route path="analyze" element={<Analyze/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
