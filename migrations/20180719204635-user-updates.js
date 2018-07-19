'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn('Users', 'email', {
        type: Sequelize.STRING,
        validate: {
          isEmail: true
        }
      })
      .then(() => {
        return queryInterface.addColumn('Users', 'age', {
          type: Sequelize.INTEGER,
          validate: {
            min: 0,
            max: 100
          }
        });
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'email').then(() => {
      return queryInterface.removeColumn('Users', 'age');
    });
  }
};
