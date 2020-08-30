/*
We are able to use default imports from modules with no default export because
in `tsconfig.json` file we have set { "allowSyntheticDefaultImports": true }.
If false, then we have to use for example `import * as React from 'react';`.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
