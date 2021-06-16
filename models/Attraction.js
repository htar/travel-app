const mongoose = require('mongoose')
const Schema = mongoose.Schema

/** country Schema */
const attractionSchema = new Schema({
	description: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},

})


module.exports = mongoose.model('capital', attractionSchema)
