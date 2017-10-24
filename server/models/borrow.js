module.exports = (sequelize, DataTypes) => {
  const borrow = sequelize.define('borrow', {
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
       references: {
          model: 'users',
          key: 'id',
          as: 'userId'
        },
    },
    borrowdate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    duedate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    borrowedby: {
      type: DataTypes.STRING,
      allowNull: false
    },
         
  });
  

  return borrow;
};