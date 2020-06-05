import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'

import { Button } from 'semantic-ui-react'

ReactDOM.render(
  <div>
  <Button primary>Primary</Button>
  <Button secondary>Secondary</Button>
</div>,
 // <React.StrictMode>
   // <App />
  //</React.StrictMode>
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
