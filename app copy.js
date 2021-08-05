// esta incluindo um pacote (biblioteca) traz a funcionalidade 
const http = require('http');
const url  = require('url'); 
const queryString = require('query-string');


// definição do local aonde a aplicação será executada
const hostname = '127.0.0.1';
const port = 3000;

// Implementação da regra de negócio
const server = http.createServer((req, res) => { // cria server diponibiliza para executar o algoritimo

// pegar a pergunta na url
const params = queryString.parse(url.parse(req.url, true).search);

// verificar a pergunta e escolher uma resposta
let resposta;

if(params.pergunta == 'melhor-filme'){
  resposta=' O melhor filme = Star Wars! ';
} 
else if(params.pergunta == 'melhor-tecnologia'){
  resposta=' A melhor tecnologiae = Node JS ! ';
} 
else {
  resposta=' Não sei responder esta pergunta! :( ' ;
}
  
// retornar a respposta escolhida

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta);
});


// bloco de sustentação, informa para o node executar algoritimo
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});