// Inicia a conectar com o banco a tabela user para persistir dados no banco
import Sequelize from 'sequelize';
import User from '../app/models/users';
import databaseConfig from '../config/database';

const models = [User];

class Database{
    constructor(){
        this.init(); // método
    }

    init() { // conexao como banco de dados
        this.connection = new Sequelize(databaseConfig);
        models.map( model => model.init(this.connection))
    }

    } 

    //exports. default = new Database();
    export default new Database();
