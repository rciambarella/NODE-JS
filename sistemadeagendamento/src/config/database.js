// configuracao do banco de dados
// sequelize obriga a usar module.exports

module.exports = { 
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'sistema',
    define: {
        timestamps: true,
        underscored: true, // permite usar caracter underline no banco
        underscoredAll: true,
    }
} 