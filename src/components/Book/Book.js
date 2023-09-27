import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAllBooks, handleDelete } from "../API/API";

function Book() {
    const [book, setBook] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
        try {
          let result = await getAllBooks();
          let findBook = result.data.findIndex((item) => {
            return item.id === Number(id);
          });
          setBook(result.data[findBook]);
        } catch (error) {
          console.log(error);
        }
      };
        fetchData();
      }, [id]);

      async function handleDeleteSubmit() {
        try {
          let result = await handleDelete(id);
          if (result.status === 200) {
            navigate("/books");
          }
        } catch (error) {
          console.log(error);
        }
      }

      return (
        <div className="book">
          <section className="bookDetails">
            <img
              className="showBookImage"
              src={book?.art}
              alt="box art"
              onClick={() => navigate(`/books/${book.id}`)}
            />
            <div className="bookInfo">
              <p className="bookDetailsName">
                <strong>
                  {`'${book?.title}'`} {`by`} {`${book?.author}`}
                </strong>
              </p>
    
              <p className="bookPublisher"> Publisher: {book?.publisher}</p>
              <p className="bookPublishedYear">Published Year: {book?.published_year}</p>
              <p className="bookGenre">Genre: {book?.genre}</p>
              <p className="bookPages">
                Pages: {book?.pages}
              </p>
              <p className="description">{book?.description}</p>
    
              <br />
              <button
                className="bookEdit"
                onClick={() => {
                  navigate(`/books/${id}/edit`);
                }}
              >
                Edit
              </button>
              <br />
              <button className="delete" onClick={() => handleDeleteSubmit(id)}>
                Delete
              </button>
            </div>
          </section>
    
          <button
            className="bookBack"
            onClick={() => {
              navigate("/books");
            }}
          >
            Go Back
          </button>
    
        </div>
      );
    }
    
    export default Book;
    



