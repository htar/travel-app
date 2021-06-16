const mongoose = require('mongoose')
const Schema = mongoose.Schema

const countrySchema = new Schema({
	createdAt: {
		type: Date,
		default: Date.now,
	},
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	promoImage: {
		type: String,
		required: true,
	},
	videoUrl: {
		type: String,
		required: true,
	},
	currency: {
		type: String,
		required: true,
	},
	imageSrc: {
		type: String,
		default: '',
	},

	capital: {
		ref: 'capital',
		type: Schema.Types.ObjectId,
	},
	attractions: {
		ref: 'attractions',
		type: Schema.Types.ObjectId,
	},
})

module.exports = mongoose.model('countries', countrySchema)
