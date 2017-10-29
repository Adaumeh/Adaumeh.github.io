
module.exports = (sequelize, DataTypes) => {
  const returns = sequelize.define('returns', {
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
      allowNull: true
    },
    duedate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    recievedby: {
      type: DataTypes.STRING,
      allowNull: true
    },
    
  });
  
  return returns;
};