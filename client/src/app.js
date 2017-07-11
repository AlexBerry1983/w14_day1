import React from 'react';
import ReactDOM from 'react-dom';
import MoviesBox from './components/MoviesBox'

window.addEventListener('load', function () {
  ReactDOM.render(
    <MoviesBox />,
    document.getElementById('app')
  );
});
