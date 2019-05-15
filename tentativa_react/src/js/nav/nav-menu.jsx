import React from 'react';
import ReactDOM from 'react-dom';


class Navmenu extends React.Component{

  render(){
    return(

      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><a href="#">Pedido</a></li>
        <li><a href="#">Carrinho</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    );
  }

}

export default Navmenu;
