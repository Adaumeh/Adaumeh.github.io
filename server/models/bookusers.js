
const users      = require('./users');
const books     = require('./books');
const favbooks =require('./favbooks');

module.exports = (sequelize, DataTypes) => {
  const bookusers = sequelize.define('bookusers', {
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
       references: {
          model: 'users',
          key: 'id',
          as: 'bookId'
        }
      },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
       references: {
          model: 'users',
          key: 'id',
          as: 'userId'
        }
    },
    favourite: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
  });
  books.associate = (models) => {
    books.hasMany(models.users, {
      through: 'bookusers',
      foreignKey: 'bookId',
      onDelete: 'CASCADE'
    });
  };
  users.associate = (models) => {
    users.hasMany(models.books, {
      through: 'bookusers',
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };
  favbooks.associate = (models) => {
    favbooks.belongsTo(models.bookusers, {
      foreignKey: 'id',
      onDelete: 'CASCADE'
    });
  };
  
  return bookusers;
};