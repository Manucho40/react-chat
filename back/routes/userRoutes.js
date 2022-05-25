const express = require('express'); //Affectation de la librairie express dans la constante express.
const router = express.Router() // Affectation de la méthode Router() dans la constante router.

// Utilisation du destructuring pour affecter les fonctions exporté du controllers userController dans des constantes
const {getUser, postUser, loginUser, deleteUser} = require('../controllers/UserController')
router.get('/', getUser)
router.post('/', postUser)
router.post('/login', loginUser)
router.delete('/:id', deleteUser)
module.exports = router;