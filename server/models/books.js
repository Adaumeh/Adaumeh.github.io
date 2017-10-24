
module.exports = (sequelize, DataTypes) => {
  const books = sequelize.define('books', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      isUnique:true
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.DATE,
      allowNull: true
    },
    isbn: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false

    },
     status: {
      type: DataTypes.ENUM,
      values: ['approved', 'rejected', 'in review','borrowed','returned']

    },
     
    quantity:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
registeredby: {
      type: DataTypes.STRING,
      allowNull: false

    },
    bookId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey:true
    },
  
  });
  books.associate = (models) => {
    books.belongsTo(models.users, {
      through: 'bookusers',
      foreignKey: 'bookId',
      onDelete: 'CASCADE'
    });
  };
  return books;
};