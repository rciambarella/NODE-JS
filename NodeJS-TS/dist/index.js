"use strict";
// algotitmo typescript
// npm init criar o projeto inicia arq package-json package-lock.json dir node_modules
// npm i typescript (manualmente criar a pasta dist \projetonodejs\nodejs-ts\dist
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// >npx tsc --init message TS6071: Successfully created a tsconfig.json file configuracao typescript
// modificar descomentar duas linhas 
//"outDir": ".", Redirect output structure to the directory. */ para "outDir": "./dist/""
//  "rootDir": "./", Specify the root directory of input files. Use to control the output directory structure with --outDir. */.
// ativar a comnpilação automática do typescript dar o comando npx tsc --watch (gera na pasta \dist\index.js)
// esta incluindo pacote (biblioteca) 
var query_String_1 = require("query-String");
var url = __importStar(require("url"));
var fs_1 = require("fs");
var http_1 = require("http");
// instalar bibliotexa do typescript npm install @types/node TEM TUDO INTERCACE , etc.....
// instalar biblioteca query-string comando npm i query-string 
// serviço definir e criar porta e servidor
var port = 5000;
var server = http_1.createServer(function (request, response) {
    //implementar o código
    var urlparse = url.parse(request.url ? request.url : '', true);
    var resposta;
    // IF ternario (request.url ? request.url : '', true)
    // receber dados do User via pergunta na url
    var params = query_String_1.parse(urlparse.search ? urlparse.search : '');
    // Criar e Atualizar User
    if (urlparse.pathname == '/criar-atualizar-user') {
        //Salvar dados 
        fs_1.writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err) {
            if (err)
                throw err;
            console.log('Saved!');
            resposta = "Usuario criado e/ou atualizado com sucesso !";
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end(resposta);
        });
    }
});
// execução
server.listen(port, function () {
    console.log("Server running on port: " + port);
});
// para executar o prg escrito em typescript compilado para Java Script comando node dist/index.js
// http://127.0.0.1:5000
// localhost:5000/criar-atualizar-user?nome=èter Coxinhas&idade=33&id=125
// localhost:5000/selecionar-user?nome=Marcos Antonio&idade=24&id=2
// localhost:5000/remover-user?nome=Marcos Antonio&idade=24&id=2
