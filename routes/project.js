const express = require('express');
const controller = require('../controllers/Country');
const router = express.Router();
const passport = require('passport');
const {upload} = require('../middleware');

router.post('/', passport.authenticate('jwt',{session:false}),upload.single('image'), controller.createCountry);
router.patch('/:progectId', passport.authenticate('jwt',{session:false}),upload.single('image'), controller.updateCountry);
router.get('/', controller.getAllCountries);
router.get('/:progectId',passport.authenticate('jwt',{session:false}), controller.getCountryById);
router.delete('/:progectId',passport.authenticate('jwt',{session:false}),controller.removeCountry);

module.exports = router;
