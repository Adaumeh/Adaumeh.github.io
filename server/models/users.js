module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      isUnique:true
    },
    password: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    email: {
      type: DataTypes.CHAR,
      allowNull: true,
      isUnique:true,
      isEmail:true
    },
    role: {
      type: DataTypes.ENUM,
      values:['admin','user','disabled']
    },

      });

  return users;
};