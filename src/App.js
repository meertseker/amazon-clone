import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/checkout/:someRandomId/page" element={<h1>checkout page</h1>} />

          <Route path="/login" element={<h1>login page</h1>} />

          <Route path="/" element={
            <>

              <Header />
              <h1>welcome</h1>

            </>
          } />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
