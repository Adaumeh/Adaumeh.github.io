module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        isUnique:true,
        allowNull:false,
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
        values: ['user', 'admin', 'disabled']
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
       allowNull:false,
       isUnique:true,
       foreignKey: true
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
    
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('users'),
};