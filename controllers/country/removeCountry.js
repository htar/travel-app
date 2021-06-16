const Country = require('../../models/Country');

const { errorHandler } = require('../../utils');

async function removeCountry(req, res) {
    const countryId = req.params.countryId;

    const country = await Country.findById(countryId);
    if (country) {
        try {
            country.remove().then(() => {
                res.status(200).json({
                    message: 'country removed'
                });
            });
        } catch (error) {
            errorHandler(res, error);
        }
    } else {
        res.status(404).json({
            message: 'country dont found'
        });
    }

}

module.exports = function (req, res) {
    removeCountry(req, res);
};
