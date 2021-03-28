const mongoose = require('mongoose')
const Schema = mongoose.Schema

/** country Schema */
const capitalSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	timeZoneName: {
		type: String,
		required: true,
	},
	coordinates: [String],
})


module.exports = mongoose.model('capital', capitalSchema)
