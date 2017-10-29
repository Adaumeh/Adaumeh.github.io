
module.exports = (sequelize, DataTypes) => {
  const favs = sequelize.define('favs', {
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
          as: 'userId',
          unique:true
        },
    },
    
  });
  favs.associate = (models) => {
    favs.belongsTo(models.users, {
       through: 'bookusers',
      foreignKey: 'id',
      onDelete: 'CASCADE',
    });
  };
  
  return favs
};