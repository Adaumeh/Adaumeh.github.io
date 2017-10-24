
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('borrows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      bookId: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      borrowdate: {
        type: Sequelize.DATE,
        allowNull:false
      },
      duedate: {
        type: Sequelize.DATE,
        allowNull:false
      },
      borrowedby: {
        type: Sequelize.STRING,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
   down: (queryInterface /* , Sequelize */) =>
    queryInterface.dropTable('borrows'),
};