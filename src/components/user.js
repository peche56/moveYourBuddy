import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class User extends Component {
  render() {
    return (
      <div>
          <img src={userPix} className="User-pix" alt="userPix" />
          <p>First name : {userFirstName}</p>
          <p>Last name : {userLastName}</p>
        </div>
      
    );
  }
}

export default User;
