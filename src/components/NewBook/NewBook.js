import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { newBook } from "../API/API";

function NewBook() {
    const [book, setBook] = useState({
      title: "",
      author: "",
      publisher: "",
      published_year: 0,
      pages: 0,
      genre: "",
      art: "",
      description: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });

      };

    async function handleOnSubmit(event) {
        event.preventDefault();
        try {
          let response = await newBook({ ...book });
          if (response.status === 200) {
          alert("Book Created");
          setBook({
            title: "",
            author: "",
            publisher: "",
            published_year: "",
            pages: 0,
            genre: "",
            art: "",
            description: "",
          });
          navigate(`/books/${response.data.data.id}`);
        }
        } catch (error) {
          return error;
        }
      }

  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleOnSubmit}>
      <div>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            id="author"
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="publisher">Publisher:</label>
          <input
            id="publisher"
            type="text"
            name="publisher"
            value={book.publisher}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="published_year">Published Year:</label>
          <input
            id="published_year"
            type="text"
            name="published_year"
            value={book.published_year}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="pages">Pages:</label>
          <input
            id="pages"
            type="text"
            name="pages"
            value={book.pages}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="genre">Genre:</label>
          <input
            id="genre"
            type="text"
            name="genre"
            value={book.genre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="art">Art:</label>
          <input
            id="art"
            type="text"
            name="art"
            value={book.art}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={book.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default NewBook;
