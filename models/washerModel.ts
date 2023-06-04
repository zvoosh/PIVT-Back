import {Schema, model} from 'mongoose';

const washerSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  adress: {
    type: String,
    required: true,
  },
  coordinate: {
    type: String,
    required: false,
  },
  service: {
    type: String,
    required: true,
  }, 
  userRef: {
    type: String,
    required: true, 
  },
  session: {
    type: String
  }
});

const Washer = model("washer", washerSchema);

module.exports = Washer;