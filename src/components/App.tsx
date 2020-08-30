/*
We are able to use default imports from modules with no default export because
in `tsconfig.json` file we have set { "allowSyntheticDefaultImports": true }.
If false, then we have to use for example `import * as React from 'react';`.
*/

import React from 'react';
import './App.css';
import logo512 from '../images/logo512.png';

function App(): JSX.Element {
  return (
    <div>
      <h1>Webpack with React and TypeScript works!</h1>
      <h2>Start coding</h2>
      <img src={logo512}></img>
    </div>
  );
}

export default App;
