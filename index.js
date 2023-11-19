 var Eduardo = {
    nome: 'Eduardo',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos:0
 };

 var Rafael = {
    nome: 'Rafael',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos:0
 };

 var Yuri = {
   nome: 'Yuri',
   vitoria: 0,
   empate: 0,
   derrota: 0,
   pontos:0
};

var Miguel = {
   nome: 'Miguel',
   vitoria: 0,
   empate: 0,
   derrota: 0,
   pontos:0
};

var elementoTabela = document.getElementById('tabelaJogadores')
exibirNaTela()
function exibirNaTela(){
elementoTabela.innerHTML =`
<tr>
          <td>${Eduardo.nome}</td>
          <td>${Eduardo.vitoria}</td>
          <td>${Eduardo.empate}</td>
          <td>${Eduardo.derrota}</td>
          <td>${Eduardo.pontos}</td>
          <td><button onClick="adicionarVitoria(Eduardo)">Vitória</button></td>
          <td><button onClick="adicionarEmpate(Eduardo)">Empate</button></td>
          <td><button onClick="adicionarDerrota(Eduardo)">Derrota</button></td>
        </tr>


<tr>
          <td>${Rafael.nome}</td>
          <td>${Rafael.vitoria}</td>
          <td>${Rafael.empate}</td>
          <td>${Rafael.derrota}</td>
          <td>${Rafael.pontos}</td>
          <td><button onClick="adicionarVitoria(Rafael)">Vitória</button></td>
          <td><button onClick="adicionarEmpate(Rafael)">Empate</button></td>
          <td><button onClick="adicionarDerrota(Rafael)">Derrota</button></td>
        </tr>


        <tr>
          <td>${Yuri.nome}</td>
          <td>${Yuri.vitoria}</td>
          <td>${Yuri.empate}</td>
          <td>${Yuri.derrota}</td>
          <td>${Yuri.pontos}</td>
          <td><button onClick="adicionarVitoria(Yuri)">Vitória</button></td>
          <td><button onClick="adicionarEmpate(Yuri)">Empate</button></td>
          <td><button onClick="adicionarDerrota(Yuri)">Derrota</button></td>
        </tr>



        <tr>
          <td>${Miguel.nome}</td>
          <td>${Miguel.vitoria}</td>
          <td>${Miguel.empate}</td>
          <td>${Miguel.derrota}</td>
          <td>${Miguel.pontos}</td>
          <td><button onClick="adicionarVitoria(Miguel)">Vitória</button></td>
          <td><button onClick="adicionarEmpate(Miguel)">Empate</button></td>
          <td><button onClick="adicionarDerrota(Miguel)">Derrota</button></td>
        </tr>
`

}



function adicionarVitoria(jogador)  {
   
  
jogador.vitoria++
jogador.pontos = jogador.pontos + 3
exibirNaTela()

}


function adicionarEmpate(jogador){
   jogador.empate++
   jogador.pontos++
   exibirNaTela();
}
function adicionarDerrota(jogador){
   jogador.derrota++
   exibirNaTela();
}