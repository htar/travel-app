const Country = require('../../models/Country');

const {  errorHandler } = require('../../utils');

async function getCountryById(req, res) {
    const countryId = req.params.progectId;
    try {
        const country = await Country.findById(countryId);
        res.status(200).json({
            country
        });
    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    getCountryById(req, res);
};
