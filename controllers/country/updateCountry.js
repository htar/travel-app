const Country = require('../../models/Country');
const {  errorHandler } = require('../../utils');

async function updateCountry(req, res) {
    const updated = req.body
    if (req.file) updated.imageSrc = req.file.path;

    try {
        const country = await Country.findOneAndUpdate(
            { _id: req.params.progectId },
            { $set: updated },
            { new: true }
        );
        res.status(200).json(country);
    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    updateCountry(req, res);
};
