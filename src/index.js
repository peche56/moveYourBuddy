import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import User from './components/User';
import Event from './components/Event';
import './index.css';

ReactDOM.render(
  <div>
    <App />
    <User />
    <Event />
</div>,
  document.getElementById('root')

);
