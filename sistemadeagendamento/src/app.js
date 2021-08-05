// const express = require('express'); 
//faz parte da 1a fase de estruturar o server.json, depois de adicionar as bibliotecas sucrase e nodemon
//const routes = require('./router');
import express from 'express';
import routes from './router';
import './database';

class App{
    constructor () {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() { // cadeia de responsabilidades
        this.server.use(express.json()); //para o formato ser json
    } // método receberá do constructor

    routes() {
        this.server.use(routes);
    } // método  receberá do constructor
}

export default new App().server;
// exports.default = new App().server;
//module.exports = new App().server // instanciando a class App
// 1a fase do projeto criado App, Router
//module.exports = new App().server;