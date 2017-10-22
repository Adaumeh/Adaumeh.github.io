module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
         allowNull: false,
         isUnique:true

      },
      author: {
        type: Sequelize.STRING,
         allowNull: false

      },
      category: {
        type: Sequelize.STRING,
        allowNull: false
      },
      year: {
        type: Sequelize.DATE,
       allowNull: false

      },
      status: {
        type: Sequelize.ENUM,
          values: ['approved', 'rejected', 'in review','borrowed','returned'],
          allowNull: false
      },
      registeredby: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bookId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
       allowNull:false,
       isUnique:true
       //foreignKey: true
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
    queryInterface.dropTable('books'),
};
