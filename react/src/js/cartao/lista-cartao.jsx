import React from 'react';

import Cartao from './cartao';
import Busca from '../busca/busca';

class ListaCartao extends React.Component {
  constructor(props){
    super(props);
    this.state = {cliques: 0, busca: '', dados: [], servidor: []};
    this.addClique = this.addClique.bind(this);
    this.atualizaBusca = this.atualizaBusca.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  addClique(){
    //this.setState({cliques: this.state.cliques + 1});
    this.setState((prevState)=>({
      cliques: prevState.cliques + 1
    }));
  }

  atualizaBusca(evento){
    this.setState({busca: evento.target.value});
    if(evento.target.value == ""){
      this.setState({dados: this.state.servidor});
    }
  }
  onSubmit(evento){
    let busca = this.state.busca;
    let dados = this.state.servidor;
    let novaLista = dados.filter(function(item){
      if(item.titulo.toUpperCase().indexOf(busca.toUpperCase()) > -1
      || item.descricao.toUpperCase().indexOf(busca.toUpperCase()) > -1
      || item.detalhe.toUpperCase().indexOf(busca.toUpperCase()) > -1){
        return item;
      }
    });
    this.setState({dados: novaLista});

    evento.preventDefault();
  }

  componentDidMount(){
    this.setState({
      dados: [
        {titulo: 'Título 1', descricao: 'Descrição 1', detalhe: 'Detalhe', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste'},
        {titulo: 'Título 2', descricao: 'Descrição 2', detalhe: 'Detalhe', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste'},
        {titulo: 'Título 3', descricao: 'Descrição 3', detalhe: 'Detalhe', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste'},
        {titulo: 'Título 4', descricao: 'Descrição 4', detalhe: 'Detalhe', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste'},
        {titulo: 'Título 5', descricao: 'Descrição 5', detalhe: 'Detalhe', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste'},
        {titulo: 'Título 6', descricao: 'Descrição 6', detalhe: 'Detalhe', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste'},
        {titulo: 'Título 7', descricao: 'Descrição 7', detalhe: 'Detalhe', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste'}
      ],
      servidor: [
        {titulo: 'Título 1', descricao: 'Descrição 1', detalhe: 'Detalhe', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste'},
        {titulo: 'Título 2', descricao: 'Descrição 2', detalhe: 'Detalhe', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste'},
        {titulo: 'Título 3', descricao: 'Descrição 3', detalhe: 'Detalhe', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste'},
        {titulo: 'Título 4', descricao: 'Descrição 4', detalhe: 'Detalhe', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste'},
        {titulo: 'Título 5', descricao: 'Descrição 5', detalhe: 'Detalhe', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste'},
        {titulo: 'Título 6', descricao: 'Descrição 6', detalhe: 'Detalhe', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste'},
        {titulo: 'Título 7', descricao: 'Descrição 7', detalhe: 'Detalhe', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste'}
      ]

    });
  }

  render(){
    let noticias = this.state.dados;
    let aux =[];
    let novaLista = [];
    for(let k=0; k<noticias.length;k++){
      aux.push(noticias[k]);
      if(aux.length == this.props.qtdLinha){
        novaLista.push(aux);
        aux = [];
      }else if(k == noticias.length - 1){
        novaLista.push(aux);
      }
    }

    let tamanhoCol = "col m" + this.props.tamanhoCol;

    let listaCartoes = function(grupo,self){
      return grupo.map(function(item,index){
        return (
          <div key={index} className={tamanhoCol}>
            <Cartao dados={item} addClique={self.addClique} />
          </div>
        );
      });
    };
    let self = this;
    let linha = novaLista.map(function(grupo,index){

      return (
        <div key={index} className="row">
          {listaCartoes(grupo,self)}
        </div>
      );
    });


    return (
      <div>
        <div className="row">
          <Busca atualizaBusca={this.atualizaBusca} onSubmit={this.onSubmit} busca={this.state.busca} />
        </div>
        <p>Quantidade de cliques: {this.state.cliques}</p>
        {linha}
      </div>
    );
  }
}

export default ListaCartao;
