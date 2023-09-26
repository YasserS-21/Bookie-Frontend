import Axios from "./Axios";

async function getAllBooks() {
    try {
      let result = await Axios.get("/books");
      return result;
    } catch (e) {
      return e;
    }
  };

async function createBook(data) {
    try {
      let result = await Axios.post(`/books`, data);
      return result;
    } catch (error) {
      alert(error.response.data.error);
      return error;
    }
  };

  async function updateBook(id, data) {
    try {
      let result = await Axios.put(`/books/${id}`, data);
      return result;
    } catch (error) {
      alert(error.response.data.error);
      return error;
    }
  };

  async function handleDelete(id) {
    try {
      let result = await Axios.delete(`/books/${id}`);
      alert("Successfully deleted!");
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  export { getAllBooks, handleDelete, updateBook, createBook };