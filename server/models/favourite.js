module.exports = (sequelize, DataTypes) => {
  const favourite = sequelize.define('favourite', {
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    
  });
  favourite.associate = (models) => {
    favourite.belongsToMany(models.users, {through: 'mybooks',
      foreignKey: 'id',
       onDelete: 'CASCADE'
    });
  };

  return favourite;
};