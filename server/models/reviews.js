
module.exports = (sequelize, DataTypes) => {
  const reviews = sequelize.define('reviews', {
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
  reviews.associate = (models) => {
    reviews.belongsTo(models.books, {
      foreignKey: 'id',
      onDelete: 'CASCADE',
    });
  };
  
  return reviews
};