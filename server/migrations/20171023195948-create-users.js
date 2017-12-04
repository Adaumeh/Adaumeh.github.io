'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        isUnique:true
      },
      password: {
        type: Sequelize.CHAR
      },
      email: {
        type: Sequelize.CHAR,
        isUnique:true,
        isEmail:true
      },
      role: {
        type: Sequelize.ENUM,
        values:['admin','user','disabled']
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};