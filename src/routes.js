const userControllers = require('./controllers/UserControllers')

module.exports = [
  {
    endpoint: '/users',
    method : 'GET',
    handler: userControllers.listUsers,
  }
]