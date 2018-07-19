const models = require('./models');
const Op = models.Sequelize.Op;

models.User.findAll({
  where: {
    age: {
      [Op.gte]: 20
    }
  }
}).then(users => {
  users.forEach(user => console.log(user.dataValues));
  process.exit();
});
