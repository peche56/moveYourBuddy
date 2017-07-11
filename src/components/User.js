import React, { Component } from 'react';
import logo from '../avatar-github.jpg';
import '../App.css';

class User extends Component {

  render() {

    const userPix = require('../avatar-github.jpg');
    const userFirstName = 'clem';
    const userLastName = 'peche';
    return (
      <div className="profilconteneur">
          <p className="userprofil">{userFirstName}</p>
          <p className="userprofil">{userLastName}</p>
          <img src={userPix} className="User-pix userprofil" alt="userPix" />
        </div>

    );
  }
}

export default User;
