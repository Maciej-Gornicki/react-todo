import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './button';
import Search from './search';

class Header extends Component {
  render() {
    return(
      <div>
        <h1>App header</h1>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/todo">To Do</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/form">Form</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/tasks">Tasks</Link></li>
        </ul>
        <Button label="OK!" />
        <div>
          {/*<Search/>*/}
        </div>
      </div>

    );
  }
}

export default Header;