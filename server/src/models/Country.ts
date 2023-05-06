import mongoose from 'mongoose'

let countrySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		validate: /^[A-Za-z ]*$/,
	},
	link: {
		type: String,
		required: true,
		validate: /^[A-Za-z ]*$/,
	},
	flag: {
		type: String,
		required: true,
	},
	flagAlt: {
		type: String,
		required: true,
	},
	area: {
		type: String,
		required: true,
	},
	gdp: {
		type: String,
		required: true,
	},
	region: {
		type: String,
		required: true,
	},
	population: {
		type: Number,
		required: true,
	},
})
const Country = mongoose.model('Country', countrySchema)
module.exports = Country
export default Country