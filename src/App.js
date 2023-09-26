import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllBooks from './components/AllBooks/AllBooks';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/"/>
        <Route path="/books" element={<AllBooks/>}/>
        <Route path="/book/new-book" />
        <Route path="/books/:id"/>
        <Route path="/books/:id/edit" />
        <Route path="/404" element={<h1>404 Not Found!</h1>} />
        <Route path="*" element={<h1>404 Not Found!</h1>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
