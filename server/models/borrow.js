module.exports = (sequelize, DataTypes) => {
  const borrow = sequelize.define('borrow', {
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
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
  borrow.associate = (models) => {
    borrow.hasMany(models.users,{
       onDelete: 'CASCADE'
    });
  };

  return borrow;
};