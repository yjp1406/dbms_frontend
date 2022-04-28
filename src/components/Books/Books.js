import React from "react";
import "./Books.css";
import { useEffect } from "react";
import { useState } from "react";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/books/all")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  return (
    <div id='books'>
    <span id="heading">AVAILABLE BOOKS</span>
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
          <th scope="col">copies</th>
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
            <td>{el.copies}</td>
          </tr>
        );
      })}
    </table>
    </div>
  );
}

// state = {
// header: <thead id="header">
//             <tr>
//                 <th scope="col">book_id</th>
//                 <th scope="col">isbn</th>
//                 <th scope="col">title</th>
//                 <th scope="col">price</th>
//                 <th scope="col">genre</th>
//                 <th scope="col">edition</th>
//                 <th scope="col">authors</th>
//                 <th scope="col">language</th>
//                 <th scope="col">publisher_id</th>
//                 <th scope="col">copies</th>
//             </tr>
//         </thead>};

// const [books,setBooks] = useState([]);

//       async componentDidMount() {
//         await fetch('http://localhost:8000/books/all')
//         .then(response => {
//             if (!response.ok) {
//               throw new Error(response.statusText)
//             }
//             console.log(response.json());
//           }).catch(err=>{
//           console.log(err);
//           })
// }

// async componentDidMount() {
//     await fetch('http://localhost:8000/books/all')
//         .then(res => res.json())
//         .then(books => { console.log(books);
//             books.map(
//                 (el,key) => {
//                     if(el.count > 0) {
//                         setBook(
//                              [...books,
//                                 <tr key={key}>
//                                     <td>{el.book_id}</td>
//                                     <td>{el.isbn}</td>
//                                     <td>{el.title}</td>
//                                     <td>{el.price}</td>
//                                     <td>{el.genre}</td>
//                                     <td>{el.edition}</td>
//                                     <td>{el.authors}</td>
//                                     <td>{el.language}</td>
//                                     <td>{el.publisher_id}</td>
//                                     <td>{el.copies}</td>
//                                 </tr>]
// //                         )
//                     }
//                     // console.log(el);
//                     console.log(el.book_id);
//                     return el;

//                 })
//         });

//     }

//     render() {
//         return (
//             <div id='books'>
//                 <span id="heading">AVAILABLE BOOKS</span>
//                 <table id="results" className="table text-center table-hover">
//                     {this.state.header}
//                     <tbody>
//                         {this.state.books}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }

// }

export default Books;
