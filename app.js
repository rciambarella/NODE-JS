// esta incluindo um pacote (biblioteca) traz a funcionalidade 
const http = require('http');
const url = require('url');
const queryString = require('query-string');
const fs = require('fs');

// definição do local aonde a aplicação será executada
const hostname = '127.0.0.1';
const port = 3000;

// Implementação da regra de negócio
const server = http.createServer((req, res) => { // cria server diponibiliza para executar o algoritimo
  var resposta; // declaração variavel
  const urlparse = url.parse(req.url, true)
  // receber dados do User via pergunta na url
  const params = queryString.parse(urlparse.search);

  // Criar e Atualizar User
  if (urlparse.pathname == '/criar-atualizar-user') {
    //Salvar dados 
    fs.writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err, data) {
      if (err) throw err;
      console.log('Saved!');
      resposta = "Usuario Criado !";
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(resposta);
    });
    resposta = 'Usuario criado / atualizado com sucesso!';
  }
  // Selecionar
  else if (urlparse.pathname == '/selecionar-user') {
    fs.readFile('users/' + params.id + '.txt', function(err, data) {
      resposta = data;

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(resposta);
    });
  }
// Remover
else if (urlparse.pathname == '/remover-user') {
  fs.unlink('users/' + params.id + '.txt', function (err) {
    console.log('File deleted!');

    resposta = err ? "usuario nao encontrado!":  "Usuario REMOVIDO!!!";
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(resposta);
  });
}
  
});

// bloco de sustentação, informa para o node executar algoritimo
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// http://127.0.0.1:3000/?nome=Rubens&idade=55&id=1
// localhost:3000/?nome=Marcos Antonio&idade=24&id=2

// localhost:3000/criar-atualizar-user?nome=Antonio Miguel&idade=33&id=3
// localhost:3000/selecionar-user?nome=Marcos Antonio&idade=24&id=2
// localhost:3000/remover-user?nome=Marcos Antonio&idade=24&id=2
