'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
    'User',
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true
        }
      },
      age: {
        type: DataTypes.INTEGER,
        validate: {
          min: 0,
          max: 100
        }
      }
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
