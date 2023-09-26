import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { newBook } from "../API/API";

function NewBook() {
    const [book, setBook] = useState({
      title: "",
      author: "",
      publisher: "",
      published_year: "",
      pages: "",
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
            pages: "",
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
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Publisher:</label>
          <input
            type="text"
            name="publisher"
            value={book.publisher}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Published Year:</label>
          <input
            type="text"
            name="published_year"
            value={book.published_year}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Pages:</label>
          <input
            type="text"
            name="pages"
            value={book.pages}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Genre:</label>
          <input
            type="text"
            name="genre"
            value={book.genre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Art:</label>
          <input
            type="text"
            name="art"
            value={book.art}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
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
