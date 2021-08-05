// algotitmo typescript
// npm init criar o projeto inicia arq package-json package-lock.json dir node_modules
// npm i typescript (manualmente criar a pasta dist \projetonodejs\nodejs-ts\dist

// >npx tsc --init message TS6071: Successfully created a tsconfig.json file configuracao typescript
// modificar descomentar duas linhas 
//"outDir": ".", Redirect output structure to the directory. */ para "outDir": "./dist/""
//  "rootDir": "./", Specify the root directory of input files. Use to control the output directory structure with --outDir. */.
// ativar a comnpilação automática do typescript dar o comando npx tsc --watch (gera na pasta \dist\index.js)

// esta incluindo pacote (biblioteca) 
import { parse } from 'query-String';
import * as url from 'url';
import { writeFile } from 'fs';
import { createServer, IncomingMessage, ServerResponse } from 'http';

// instalar bibliotexa do typescript npm install @types/node TEM TUDO INTERCACE , etc.....
// instalar biblioteca query-string comando npm i query-string 

// serviço definir e criar porta e servidor
const port = 5000

const server = createServer((request: IncomingMessage, response: ServerResponse) => { // função anonima 
    //implementar o código

    const urlparse = url.parse(request.url ? request.url : '', true);
    var resposta;

    // IF ternario (request.url ? request.url : '', true)
    // receber dados do User via pergunta na url
    const params = parse(urlparse.search ?  urlparse.search : '');

    // Criar e Atualizar User
    if (urlparse.pathname == '/criar-atualizar-user') {
        //Salvar dados 
        writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err: any) {
            if (err) throw err;
            console.log('Saved!');
            resposta = "Usuario criado e/ou atualizado com sucesso !";
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end(resposta);
        });       
    }    
});




// execução
server.listen(port, () => { // função anonima 
    console.log(`Server running on port: ${port}`);

});


// para executar o prg escrito em typescript compilado para Java Script comando node dist/index.js
// http://127.0.0.1:5000

// localhost:5000/criar-atualizar-user?nome=èter Coxinhas&idade=33&id=125
// localhost:5000/selecionar-user?nome=Marcos Antonio&idade=24&id=2
// localhost:5000/remover-user?nome=Marcos Antonio&idade=24&id=2


