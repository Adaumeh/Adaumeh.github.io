
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
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
  });
 // favbooks.associate = (models) => {
   // users.hasmany(models.users, {
      // through: 'bookusers',
      //foreignKey: 'id',
      //as:favId,
      //onDelete: 'CASCADE',
   // });
  //};
  
  return favbooks;
};