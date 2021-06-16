const Country = require('../../models/Country');
const User = require('../../models/User');

const {  errorHandler } = require('../../utils');

async function createCountry(req, res) {
    const user = await User.findById(req.user.id);
    if (user){
        try {
            const country = await new Country({
                name:req.body.name,
                user: req.user.id,
                imageSrc: req.file ? req.file.path : ''

            }).save();

            res.status(201)
                .json(country);
        } catch (error) {
            errorHandler(res, error);
        }
    } else {
        errorHandler({ message:'Cant create country.'});
    }
}

module.exports = function (req, res) {
    createCountry(req, res);
};
