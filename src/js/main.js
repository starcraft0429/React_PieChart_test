import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

const rootElement = document.getElementById('app');

let ComponentEl= (
    <div>
      <Router history={browserHistory} routes={routes} />
    </div>
  );
ReactDOM.render(
  <div>
    {ComponentEl}
  </div>,
  rootElement
);

