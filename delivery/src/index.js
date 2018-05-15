import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { injectGlobal } from 'styled-components';

import Main from './components/Main';
import Catalog from './components/Catalog';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Main} />
            <Route exact path="/catalog" component={Catalog} />
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);

injectGlobal`
    body {
      margin: 0;
      font-family: "Open Sans", sans-serif;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
    }
`;
