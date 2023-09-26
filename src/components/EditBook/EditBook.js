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
    console.log(book)
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
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
}

export default EditBook;
