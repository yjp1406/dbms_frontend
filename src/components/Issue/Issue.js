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
      <span id="heading">Users Details</span>
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

// class Books extends React.Component {
    
//     state = {
//         header: <thead></thead>,
//         books: []
//     };

//     fetchData = () => {
//         var sem = document.getElementById('select').value;
//         this.setState({header: <thead id="header">
//                         <tr>
//                             <th scope="col">Book Name</th>
//                             <th scope="col">Author</th>
//                             <th scope="col">Semester No</th>
//                             <th scope="col"></th>
//                         </tr>
//                     </thead>,
//             books: []});

//         fetch(`/api/getBooks/${sem}`)
//             .then(res => res.json())
//             .then(books =>
//                 books.forEach(
//                     el => this.setState({
//                         books: [...this.state.books, 
//                                 <tr key={el.id}>
//                                     <td>{el.name.toUpperCase()}</td>
//                                     <td>{el.author}</td>
//                                     <td>{el.semester}</td>
//                                     <td><button className="btn btn-primary" onClick={() => this.issueIt(el)}>Issue</button></td>
//                                 </tr>]
//                     })));
//     }
    
//     componentDidMount() {
//         if(document.getElementById('id').value === '')
//             document.getElementById('select').disabled = true;
//         else
//             document.getElementById('select').disabled = false;
//     }

//     issueIt = el => {
//         fetch('/api/borrow', {
//                 method: 'post',
//                 headers: {'Content-Type':'application/json'},
//                 body: JSON.stringify({
//                     ...el,
//                     sid: parseInt(document.getElementById('id').value)
//                 })
//            });
//            /*.then(res => {
//                 fetch('/api/borrowed')
//                 .then(res => res.json())
//                 .then(e => console.log(e));
//            });*/

//     }

//     render() {
//         return (
//             <div id='issue' className="text-center">
//                 <div>
//                     <input className="form-control sel" type="number" placeholder="Enter Student ID" id="id" min="1" onChange={this.componentDidMount}></input>
//                     <select className="form-control sel" id="select">
//                         <option disabled>Select Semester</option>
//                         <option value="1">1st Sem</option>
//                         <option value="2">2nd Sem</option>
//                         <option value="3">3rd Sem</option>
//                         <option value="4">4th Sem</option>
//                         <option value="5">5th Sem</option>
//                         <option value="6">6th Sem</option>
//                         <option value="7">7th Sem</option>
//                         <option value="8">8th Sem</option>
//                     </select>
//                     <button className="btn btn-success" onClick={this.fetchData}>Submit</button>
//                 </div>
//                 <table id="results" className="table table-hover">
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