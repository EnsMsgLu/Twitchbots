const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const DwibotSchema = new mongoose.Schema ({
		name: {
			type: String,
			unique: true,
		},
    refresh_token: {
      type: String,
      required: true,

    }
});

const DwibotModel = model('bots', DwibotSchema);

module.exports = new DwibotModel;