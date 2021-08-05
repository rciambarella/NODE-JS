import Sequelize, { Model } from 'sequelize';
// depois de criar a 1a conexão na tabela user no banco de dados, iniciar tratamento Model, persite dados no banco de dados
class User extends Model{
    static init(sequelize){
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password_hash: Sequelize.STRING,
            provider: Sequelize.BOOLEAN
        },{
            sequelize,
            // passando mais 1 objeto sequelize que faz referência ao static init(sequelize)
        })
    }
};

export default User;
//exports.default = User;