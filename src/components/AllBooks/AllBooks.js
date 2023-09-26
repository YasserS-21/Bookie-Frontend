import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getAllBooks } from "../API/API";

function AllBooks() {
    const [books, setBooks] = useState([]);
  
    const navigate = useNavigate();
  
    useEffect(() => {
      fetchData();
    }, []);
  
    async function fetchData() {
      try {
        let result = await getAllBooks();
        const sortedBooks = result.data.sort((a, b) => a.title.localeCompare(b.title));
        setBooks(sortedBooks);
      } catch (error) {
        console.log(error);
      }
    }

    return (  
    <div className="all-books">
    <ul>
      {books.map((book) => {
        return (
          <li key={book.id}>
            <img
              src={book.art}
              onClick={() => navigate(`/books/${book.id}`)}
            />
            <br />
            <h2 onClick={() => navigate(`/books/${book.id}`)}>{book.title}</h2>
          </li>
        );
      })}
    </ul>
  </div>
);
}

export default AllBooks