var timer = null;
function inicia(){

	var url = window.location.search;
	
	var nivel = url.replace("?", "");

	var tempo = 0;

	if(nivel == 1){
		tempo = 120;
	}
	if(nivel ==2){
		tempo = 90;
	}
	if(nivel ==3){
		tempo = 60;
	}

	var quantidade = 10;
	document.getElementById('cronometro').innerHTML = tempo;
	contagem_tempo(tempo+1);
	cria_baloes(quantidade);
	




}




	function contagem_tempo(tempo){
		tempo = tempo - 1;
		if(tempo == -1){
			clearTimeout(timer); 
			game_over();
			var timer = null;	
		}
		
		document.getElementById('cronometro').innerHTML = tempo;
			

		timer = setTimeout("contagem_tempo("+tempo+")", 1000); /* preciso colocar +segundos+ pra imprimir oq quero mostrar
	*/

	}


	function game_over(){
	alert('Fim de jogo, você não conseguiu estourar todos os balões a tempo');
}

function cria_baloes(qtde_baloes){

	for(var i = 1; i <= qtde_baloes; i++){

		var balao = document.createElement("img");
		balao.src = 'imagens/balao_azul_pequeno.png';
		balao.style.margin = '10px';
		balao.id = 'b'+i;
		balao.onclick = function(){ estourar(this); };

		document.getElementById('cenario').appendChild(balao);
	}
}

function estourar(e){

	var id_balao = e.id;

	document.getElementById(id_balao).src = 'imagens/balao_azul_pequeno_estourado.png';

	pontuacao(-1);

}

function pontuacao(acao){
	var baloes_inteiros = document.getElementById('baloes_inteiros').innerHTML;
	var baloes_estourados = document.getElementById('baloes_estourados')innerHTML;

	baloes_inteiros = parseInt(baloes_inteiros);
	baloes_estourados = parseInt(baloes_estourados);

	baloes_inteiros = baloes_inteiros + acao;
	baloes_estourados = baloes_estourados - acao;
	document.getElementById('baloes_inteiros').innerHTML = baloes_inteiros;
	document.getElementById('baloes_estourados').innerHTML = baloes_estourados;

}




