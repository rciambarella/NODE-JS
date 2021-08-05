// const { Router } = require('express'); // importação desestruturada, comando usado na 1a fase server.json
import { Router } from 'express';
import User from './app/models/users'; // Estamos forçar a gravação de dados no banco

const routes = new Router(); // tratar rotas endereços api rest

routes.get('/', async (req, res) => { // arriow function , inserido o async depois de forçar a gravação de dados
    const user = await User.create({
        // dados para forçar a gravação no banco
        name: 'Douglas Moraes Teacher',
        email: 'dmourao@gmail.com',
        password_hash: '654321',
        provider: false
        });
        // return res.json({message: 'Okay! Server BackEnd Iniciado com Sucesso'}) // a linha foi inserida no inicio, comentada após forçar dados no banco
        return res.json(user);
});

export default routes;
//exportar router para consumir router consumir no arquivo app.js
//module.exports = routes; // comando usado na 1a fase server.json
// exports. default = routes;