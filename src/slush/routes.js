const { Router } = require('express');
const usersController = require('./users/users.controller');
const todosController = require('./todos/todos.controller');
const interestsController = require('./interests/interests.controller');
const {
  validationMiddleware,
} = require('./middlewares/validation-middleware')
const { registerValidation, loginValidation } = require('./validators/auth')
const { userAuth } = require('./middlewares/auth-middleware')


const router = Router();

// auth routes
router.post('/register', registerValidation, validationMiddleware, usersController.signUser)
router.post('/login', loginValidation, validationMiddleware, usersController.loginUser)
router.get('/logout', usersController.logoutUser)

// user routes
router.get('/users/', usersController.getSlushUsers);
router.get('/users/:id', usersController.getSlushUserById);
router.post('/users/', usersController.addSlushUser);
router.delete('/users/:id', usersController.removeSlushUser);
router.put('/users/:id', usersController.updateSlushUser);

//todos routes
router.get('/todos/', todosController.getTodos);
router.get('/todos/:id', todosController.getTodoById);
router.post('/todos/', todosController.addTodo);
router.delete('/todos/:id', todosController.removeTodo);
router.put('/todos/:id', todosController.updateTodo);

//interests routes
router.get('/interests/', interestsController.getInterests);
router.get('/interests/:id', interestsController.getInterestByUserId);
router.post('/interests/', interestsController.addInterest);
router.delete('/interests/:id', interestsController.removeInterest);
router.put('/interests/:id', interestsController.updateInterest);

module.exports = router;
