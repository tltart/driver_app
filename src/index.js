import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import c from './index.module.css'



ReactDOM.render(
  <React.StrictMode>
    <div className={c.main}>
      <App />
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);

