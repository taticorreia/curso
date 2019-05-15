import React from 'react';
import ReactDOM from 'react-dom';
import Navmenu from './nav-menu';


class Nav extends React.Component {
 render(){
   let menu = [
     {titulo: 'Produtos', link: '#produtos'},
     {titulo: 'Carrinho', link: '#carrinho'},
     {titulo: 'Contato', link: '#contato'}
   ];

   let corNav = "nav-wrapper "+ this.props.cor;
   return (
     <nav>
       <div className={corNav}>
         <a href="#" className="brand-logo right">Logo</a>
         <Navmenu />
       </div>
     </nav>
);
 }
}

export default Nav;
