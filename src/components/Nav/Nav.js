import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.png';

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
                <div className='nav__title'>
                    <img src={logo} alt='not visible'></img>
                    <h6>Online Library</h6>
                    <ul>
                    
                    <li style={window.location.pathname === '/' ? {display: 'none'} : {display: 'inline-block'}}><Link to='/' onClick={this.update}>Home</Link></li>
                    <li style={window.location.pathname === '/issue' ? {display: 'none'} : {display: 'inline-block'}}><Link to='/issue' onClick={this.update}>Users Details</Link></li>
                    <li style={window.location.pathname === '/return' ? {display: 'none'} : {display: 'inline-block'}}><Link to='/return' onClick={this.update}>Book Search</Link></li>
                    <li style={window.location.pathname === '/search' ? {display: 'none'} : {display: 'inline-block'}}><Link to='/search' onClick={this.update}>Recently Issued</Link></li>
                    <li style={window.location.pathname === '/newbooks' ? {display: 'none'} : {display: 'inline-block'}}><Link to='/newbooks' onClick={this.update}>New Arrivals</Link></li>
                </ul>
                </div>
                
                
            </div>
        );
    }
}

export default Nav;