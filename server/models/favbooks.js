
module.exports = (sequelize, DataTypes) => {
  const favbooks = sequelize.define('favbooks', {
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
        },
    },
    
  });
  favbooks.associate = (models) => {
    favbooks.belongsTo(models.users, {
       through: 'bookusers',
      foreignKey: 'id',
      onDelete: 'CASCADE',
    });
  };
  
  return favbooks
};