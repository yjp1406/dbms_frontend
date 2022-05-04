import React from 'react';
import './Return.css';


class Search extends React.Component {
  constructor(){
    super()
    this.state = {
      searchData:null
    }
  }
    search(key)
    {
      console.warn(key)
      fetch('http://localhost:8000/books/search/'+key).then((data)=>{
        data.json().then((resp)=>{
          console.warn("resp",resp)
          this.setState({searchData:resp});
        
      })
    })
  }
  
  

    render(){

      return (
        <div className='search__form'>
          <div className='search__heading'><h3>Books Search</h3></div>
          <input className='input' type='text' onChange={(event)=>{this.search(event.target.value)}}/>
          <div>{
            this.state.searchData?
            <div>
                {
                  this.state.searchData.map((book)=>
                    <div>{book.title}</div>
                  )
                }
            </div>
            :""
          }
          </div>
        </div>
      );
    }  
}
export default Search;




