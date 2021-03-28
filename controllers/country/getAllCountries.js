const Country = require('../../models/Country');
const {  errorHandler } = require('../../utils');

async function getAllCountries(req, res) {
    try {
        const countries = await Country.find().sort({'createdAt': -1});
        res.status(200).json({
            ...countries
        });

    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    getAllCountries(req, res);
};
