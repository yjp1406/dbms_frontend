import React from 'react';
import './Issue.css';
import { useEffect } from "react";
import { useState } from "react";

function Books() {
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:8000/readers/all")
        .then((res) => res.json())
        .then((data) => {
          setBooks(data);
        });
    }, []);
  
    return (
      <div id='books'>
      <div className="headings__aling"><h3>User Details</h3></div>
      <table id="results" className="table text-center table-hover">
        <thead id="header">
          <tr>
            <th scope="col">user_id</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">address</th>
            <th scope="col">contact_no</th>
            <th scope="col">gender</th>
            {/* <th scope="col">authors</th>
            <th scope="col">language</th>
            <th scope="col">publisher_id</th>
            <th scope="col">copies</th> */}
          </tr>
        </thead>
        {books.map((el,key) => {
          return (
            <tr key={key}>
              <td>{el.user_id}</td>
              <td>{el.name}</td>
              <td>{el.email}</td>
              <td>{el.address}</td>
              <td>{el.contact_no}</td>
              <td>{el.gender}</td>
              {/* <td>{el.authors}</td>
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