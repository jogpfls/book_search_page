import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Layout from "./component/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/search" element={<Search/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
