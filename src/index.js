/*SIN esto
const element = document.createElement('h1');
element.innerText = 'Hello';

const container = document.getElementById('app');

container.appendChild(element);
*/

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css'
import App from './components/App';
//const element = <h1>Hello!!</h1>

/*
const element = React.createElement(
    'a',
    {href:'https://youtube.com'},
    'Hola mundo'
);
*/

/*
const name = 'Diego'
const jsx = <h1>Hola soy,{name}</h1>
//const element = React.createElement('h1',{},'hola soy '+ name);
*/

const container = document.getElementById('app');

ReactDOM.render(
<App />, container);
