'use strict';
/**
 * após digitar npx sequelize migration:create --name=create-users  
 * alterar arquivo de configuração da migration dentro de src/database
*/

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // up gravar
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      provider: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE, 
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE, 
        allowNull: false,
      },
    });
  },

  down: async queryInterface => {
    // down deletar
    return queryInterface.dropTable('users')
  },
};
