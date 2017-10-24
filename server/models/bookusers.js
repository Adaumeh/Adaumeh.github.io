
module.exports = (sequelize, DataTypes) => {
  const bookusers = sequelize.define('bookusers', {
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false
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
  
  return bookusers;
};