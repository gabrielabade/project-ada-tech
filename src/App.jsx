import React from 'react';
import logo from './assets/images/logo.svg';

class App extends React.Component {
  render() {
    return (
      <header>
        <nav id='navbar'>
          <div className="nav-brand">
              <img src={logo} alt="" />
              <h1>Space Flight News</h1>
          </div>
          <ul className="navlist">
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Trending</a></li>
            <li><a href='/'>Categories</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default App;
