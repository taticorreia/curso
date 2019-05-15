import ReactDOM from 'react-dom';
import React from 'react';
import cartaoComida from './cartao/cartao-img';

import Nav from './nav/navbar';

let App = (
  <div>
    <Nav cor="red"/>
    <cartaoComida />
  </div>
);

ReactDOM.render(App, document.getElementById('app'));
