
module.exports = (sequelize, DataTypes) => {
  const returns = sequelize.define('return', {
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    returneddate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    duedate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    recievedby: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
  });
  
  return returns;
};