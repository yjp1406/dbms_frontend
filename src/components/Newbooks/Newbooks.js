import React from "react";
import "./Newbooks.css";
import { useEffect } from "react";
import { useState } from "react";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/books/new")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  return (
    <div id='books'>
    <div className="headings__aling"><h3>New Arrivals</h3></div>
    <table id="results" className="table text-center table-hover">
      <thead id="header">
        <tr>
          <th scope="col">book_id</th>
          <th scope="col">isbn</th>
          <th scope="col">title</th>
          <th scope="col">price</th>
          <th scope="col">genre</th>
          <th scope="col">edition</th>
          <th scope="col">authors</th>
          <th scope="col">language</th>
          <th scope="col">publisher_id</th>
          
        </tr>
      </thead>
      {books.map((el,key) => {
        return (
          <tr key={key}>
            <td>{el.book_id}</td>
            <td>{el.isbn}</td>
            <td>{el.title}</td>
            <td>{el.price}</td>
            <td>{el.genre}</td>
            <td>{el.edition}</td>
            <td>{el.authors}</td>
            <td>{el.language}</td>
            <td>{el.publisher_id}</td>
            {/* <td>{el.copies}</td> */}
          </tr>
        );
      })}
    </table>
    </div>
  );
}



export default Books;
