const { Router } = require('express');
const controller = require('./controller');


const router = Router();

router.get('/', controller.getSlushUsers);
router.get('/:id', controller.getSlushUserById);
router.post('/', controller.addSlushUser);
router.delete('/:id', controller.removeSlushUser);
router.put('/:id', controller.updateSlushUser);



module.exports = router;
