const express = require('express');
const router = express.Router();

const personajeController = require('../controllers/personajeController');

router.get('/', personajeController.getPersonajes);
router.get('/:id',personajeController.getPersonajeById);
router.post('/',personajeController.postPersonaje);
router.put('/:id',personajeController.putPersonaje);
router.delete('/:id',personajeController.deletePersonaje);


const userController = require('../controllers/userController');
router.get('/', userController.getUsers);
router.get('/:id',userController.getUserById);
router.post('/',userController.postUser);
router.put('/:id',userController.putUser);
router.delete('/:id',userController.deleteUser);

module.exports = router;