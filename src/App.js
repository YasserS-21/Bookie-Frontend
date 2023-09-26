import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import AllBooks from './components/AllBooks/AllBooks';
import Book from './components/Book/Book';
import NewBook from './components/NewBook/NewBook';


function App() {
  return (
    <div className="App">
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<AllBooks/>}/>
        <Route path="/books/new-book" element={<NewBook/>}/>
        <Route path="/books/:id" element ={<Book/>}/>
        <Route path="/books/:id/edit" />
        <Route path="/404" element={<h1>404 Not Found!</h1>} />
        <Route path="*" element={<h1>404 Not Found!</h1>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
