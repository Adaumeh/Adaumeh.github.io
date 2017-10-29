'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('favbooks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
       bookId: {
        type: Sequelize.INTEGER,
         references: {
          model: 'bookusers',
          key: 'id',
          as: 'bookId'
        }
      },
      userId: {
        type: Sequelize.INTEGER,
         references: {
          model: 'users',
          key: 'id',
          as: 'userId'
        }
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
    return queryInterface.dropTable('favbooks');
  }
};