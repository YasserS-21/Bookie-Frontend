import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { updateBook, getAllBooks } from "../API/API";

function EditBook() {
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
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {

    const fetchData = async () => {
      try {

        let result = await getAllBooks();

        let findBook = result.data.findIndex((item) => {
          return item.id === Number(id);
        });

       const foundBook = result.data[findBook];

       setBook(foundBook);
      } catch (error) {
        console.log('Error fetching book data:', error);;
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  async function handleSubmit(e){
    e.preventDefault();
    try {
      let response = await updateBook(id, {
        ...book,
      });
      if (response.status === 200) {
      alert("Updated Successfully");
      navigate(`/books/${id}`);
    }
    } catch (error) {
      return error;
    }
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
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
            type="number"
            name="published_year"
            value={book.published_year}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="pages">Pages:</label>
          <input
            id="pages"
            type="number"
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
            type="text"
            name="description"
            value={book.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
}

export default EditBook;
