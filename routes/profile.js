const { Router } = require('express');
const ProfileController = require('../controllers/profile');

const router = Router();

router.get('/:platform/:gamertag', ProfileController.index);

module.exports = router;
