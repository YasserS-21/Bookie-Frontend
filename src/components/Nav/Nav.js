import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
      <div className="nav">
        <ul>
          <li className="nav-home">
            <Link to="/">Home</Link>
          </li>

          <li className="nav-books">
            <Link to="/books">Books</Link>
          </li>
          <li className="nav-new-books">
            <Link to="/books/new-book">New book</Link>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Nav;
  