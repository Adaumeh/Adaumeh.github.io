module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('bookusers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
         references: {
          model: 'users',
          key: 'id',
          as: 'userId',
        },
      },
      bookId: {
        type: Sequelize.INTEGER
      },
      favourite: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      }),
  down: (queryInterface /* , Sequelize */) =>
    queryInterface.dropTable('bookusers'),
};

   