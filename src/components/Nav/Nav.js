import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
    }

    state = {};

    update() {
        this.setState(this.state);
    }

    render(){
        return (
            <div id='nav'>
                <span>LIBRARY MANAGEMENT SYSTEM</span>
                <ul>
                    <li style={window.location.pathname === '/' ? {display: 'none'} : {display: 'inline-block'}}><Link to='/' onClick={this.update}>Home</Link></li>
                    <li style={window.location.pathname === '/issue' ? {display: 'none'} : {display: 'inline-block'}}><Link to='/issue' onClick={this.update}>Users Details</Link></li>
                    <li style={window.location.pathname === '/return' ? {display: 'none'} : {display: 'inline-block'}}><Link to='/return' onClick={this.update}>Return Book</Link></li>
                    <li style={window.location.pathname === '/search' ? {display: 'none'} : {display: 'inline-block'}}><Link to='/search' onClick={this.update}>Recently Issued</Link></li>
                    <li style={window.location.pathname === '/newbooks' ? {display: 'none'} : {display: 'inline-block'}}><Link to='/newbooks' onClick={this.update}>Newbooks</Link></li>
                </ul>
            </div>
        );
    }
}

export default Nav;