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
      <span id="heading">DETAILS</span>
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

// function Books() {
//     const [books, setBooks] = useState([]);
  
//     useEffect(() => {
//       fetch("http://localhost:8000/dates/logs")
//         .then((res) => res.json())
//         .then((data) => {
//           setBooks(data);
//         });
//     }, []);
  
//     return (
//       <div id='books'>
//       <span id="heading">BOOKS ISSUE DETAILS</span>
//       <table id="results" className="table text-center table-hover">
//         <thead id="header">
//           <tr>
//             <th scope="col">name</th>
//             <th scope="col">title</th>
//             <th scope="col">issue_date</th>
//             <th scope="col">return_date</th>
//             <th scope="col">due_date</th>
//           </tr>
//         </thead>
//         {books.map((el,key) => {
//           return (
//             <tr key={key}>
//               <td>{el.name}</td>
//               <td>{el.title}</td>
//               <td>{el.issue_date}</td>
//               <td>{el.return_date}</td>
//               <td>{el.due_date}</td>
//               {/* <td>{el.periodicals_isbn}</td>
//               <td>{el.reports_id}</td>
//               <td>{el.return_date}</td>
//               <td>{el.user_id}</td> */}
//             </tr>
            
//           );
//         })}
//         {console.log(books)}
//       </table>
//       </div>
//     );
    
//   }

// class Books extends React.Component {
    
//     state = {
//         header: <thead></thead>,
//         books: [],
//         name: ''
//     };

//     fetchData = () => {
//         var id = document.getElementById('id').value;
//         this.setState({header: <thead id="header">
//                         <tr>
//                             <th scope="col">book_id</th>
//                             <th scope="col">title</th>
//                             <th scope="col">language</th>
//                         </tr>
//                     </thead>,
//             books: []});

//         fetch(`/search/:title`)
//             .then(res => res.json())
//             .then(student => {
//                 if(student.length > 0) {
//                     this.setState({...this.state, name: `Following Students Issued This Book`});
//                     student.forEach(
//                         (el,key) => this.setState({
//                             books: [...this.state.books, 
//                                     <tr key={key}>
//                                         <td>{el.id}</td>
//                                         <td>{el.name}</td>
//                                         <td>{el.language}</td>
//                                     </tr>]
//                         }))
                        
//                 }
//                 else{
//                     this.setState({header: []});
//                     this.setState({...this.state, name: "No One Have Issued This Book"});
//                 }
//                 });
//     }
 
//     returnIt = el => {
//         fetch('/search/:title', {
//                 method: 'post',
//                 headers: {'Content-Type':'application/json'},
//                 body: JSON.stringify({
//                     ...el,
//                     sid: parseInt(document.getElementById('book_id').value)
//                 })
//            });

//     }

// render() {
//     return (
//         <div id='search' className="text-center">
//             <div>
//                 <input className="form-control sel" type="number" placeholder="Enter Book ID" id="id" min="1"></input>
//                 <button className="btn btn-success" onClick={this.fetchData}>Submit</button>
//             </div><br/>
//             {this.state.name}
//             <table id="sResults" className="table table-hover">
//                 {this.state.header}
//                 <tbody>
//                     {this.state.books}
//                 </tbody>
//             </table>
//         </div>
//     );
// }


export default Books;