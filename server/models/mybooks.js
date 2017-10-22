
module.exports = (sequelize, DataTypes) => {
  const mybooks = sequelize.define('mybooks', {
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
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,

    },
     status: {
      type: DataTypes.ENUM,
      values: ['approved', 'rejected', 'in review','borrowed','returned']

    },
     bookId:{
     foreignKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },

registeredby: {
      type: DataTypes.STRING,
      allowNull: false,

    },
     quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    include: [{all: true}]
  });
  mybooks.associate = (models) => {
    mybooks.belongsTo(models.users, {
      foreignKey: 'bookId',
      onDelete: 'CASCADE'
    });
  };

  return mybooks;
};