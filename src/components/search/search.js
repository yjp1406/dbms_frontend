import React from 'react';
import './search.css';
import { useEffect } from "react";
import { useState } from "react";

function Books() {
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:8000/dates/logs")
        .then((res) => res.json())
        .then((data) => {
          setBooks(data);
        });
    }, []);
  
    return (
      <div id='books'>
      <div className="headings__aling"><h3>Details</h3></div>
      <table id="results" className="table text-center table-hover">
        <thead id="header">
          <tr>
            <th scope="col">name</th>
            {/* <th scope="col">isbn</th> */}
            <th scope="col">title</th>
            <th scope="col">issue_date</th>
            <th scope="col">return_date</th>
            <th scope="col">due_date</th>
            {/* <th scope="col">authors</th>
            <th scope="col">language</th>
            <th scope="col">publisher_id</th>
            <th scope="col">copies</th> */}
          </tr>
        </thead>
        {books.map((el,key) => {
          return (
            <tr key={key}>
              <td>{el.name}</td>
              <td>{el.title}</td>
              <td>{el.issue_date}</td>
              <td>{el.return_date}</td>
              <td>{el.due_date}</td>
              {/* <td>{el.edition}</td>
              <td>{el.authors}</td>
              <td>{el.language}</td>
              <td>{el.publisher_id}</td>
              <td>{el.copies}</td> */}
            </tr>
           
          );
        })}
        {console.log(books)}
      </table>
      </div>
    );
  }


export default Books;