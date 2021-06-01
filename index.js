const express = require('express');
const router = express.Router();
const siteController = require('./controller/siteController');

router.get('/', siteController.resume);
router.get('/blog', siteController.blog);
router.get('/about', siteController.about)



module.exports = router;