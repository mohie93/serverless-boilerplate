# About:

- In this folder you will define your routes to use it to call actions from your app, ex: `user.routes.js`,

ex:

```
  const router = require('express').Router();
  const usersController = require('../controllers/users.controller');
  router.get('api/v1/users', usersController.listUsers);
  module.exports = router;

```
