import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppNav } from "./components/AppNav";
import { GraphScene } from "../graph";

export const LayoutScene = () => {
  return (
    <div className="layout">
      <div style={{border: '4px solid red'}} className="container-fluid mb-3">
        <AppNav />
      </div>
      <Routes>
        <Route path="/" element={<GraphScene />} />
      </Routes>
    </div>
  );
};