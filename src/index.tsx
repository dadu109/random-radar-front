import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root';
import Store from './context'
import GlobalStyles from './globalStyles'

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <GlobalStyles />
      <Root />
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);