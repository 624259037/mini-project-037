import React, { useState } from "react";
import axios from "axios";
import Book from "../components/Book";

function Search() {
  const [word, setWord] = useState([]);
  const [result, setResult] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .get("https://se-book-store.herokuapp.com/api/v1/books")
      .then((response) => {
        setResult(response.data);
      });
  };

  return (
    <>
    <center>
      <div className="container">
      <p> <h1 className="text-center text-header-h1">Search Book</h1></p>
        <form onSubmit={handleFormSubmit}>
          <div className="fix-input-text input-group text-center">
            <input
              onChange={(e) => setWord(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Please enter a message to search."
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-warning px-5">
                search
              </button>
            </div>
          </div>
        </form>
        <p className="text-center text-light">
                Create by Abhisit Saikraikra
              </p>
      </div>
      <Book id={result} search={word} />
      </center>
    </>
  );
}


export default Search;
