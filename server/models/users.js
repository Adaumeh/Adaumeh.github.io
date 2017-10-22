
module.exports = (sequelize, DataTypes) => {  
  const users = sequelize.define('users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      isUnique:true,
    },
    role: {
      type: DataTypes.ENUM,
      values: ['user', 'admin', 'disabled']

    },
     email: {
        type: DataTypes.CHAR,
        allowNull: false,
        isUnique: true,
        isEmail: true
      },
      password: {
        type: DataTypes.CHAR,
        allowNull: false,
      },
      userId: {
      type: DataTypes.INTEGER,
      allowNull:false,
      foreignKey:true,
      isUnique:true,
    },
   include: [{all: true}]
  });
  users.associate = (models) => {
    users.hasOne(models.mybooks, {
      foreignKey: 'userId',
       onDelete: 'CASCADE'

    });
  };
  return users;
};