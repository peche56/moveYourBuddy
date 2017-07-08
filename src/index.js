import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import User from './components/User';
import Event from './components/Event';
import './index.css';

import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_USER = 'https://preprod.moveyourbuddy.io/players/me';


const responseBody = res => res.body;
const requests = {
  get: url =>
    superagent.get(`${API_USER}${url}`).then(responseBody)
  .set('X-Token', 'abcdefgh')
};

const Articles = {
  all: page =>
    requests.get(`/articles?limit=10`)
};

export default {
  Articles
};
console.log(Articles);

ReactDOM.render(
  <div>
    <App />
    <User />
    <Event />
</div>,
  document.getElementById('root')

);
